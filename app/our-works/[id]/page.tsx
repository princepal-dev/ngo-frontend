import React from "react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const prisma = new PrismaClient();

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
  });

  return {
    title: blog?.title ? blog.title : "No Blog Found",
    description: blog?.content,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
    include: {
      images: true,
    },
  });

  if (!post) {
    return (
      <div className="h-screen grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <div className="container flex flex-col items-center justify-center mx-auto py-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Post Not Found</h2>
          <p className="mb-4">
            Sorry, the blog post you&#39;re looking for doesn&#39;t exist.
          </p>
          <Link href="/our-works" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-8">
        <Card>
          <CardHeader className="flex justify-center items-center">
            <Carousel className="w-full flex items-center justify-center max-w-2xl">
              <CarouselContent>
                {post.images &&
                  Array.isArray(post.images) &&
                  post.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          src={image.url}
                          alt={`Image ${index + 1} from post`}
                          width={1000}
                          height={1000}
                          className="rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardHeader>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">{post?.title}</CardTitle>
            <div className="text-sm text-muted-foreground mt-2">
              <span>{post.createdAt.toDateString()}</span>
              <span className="mx-2">•</span>
              <span>Admin</span>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
