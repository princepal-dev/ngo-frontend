import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Our Works",
  description:
    "Explore our impactful projects and initiatives that aim to create meaningful change in the community.",
};

const stats = [
  { label: "Lives Impacted", value: "100,000+" },
  { label: "Trees Planted", value: "500,000+" },
  { label: "Clean Water Provided", value: "1,000,000+ Liters" },
  { label: "Volunteers Engaged", value: "10,000+" },
];

export default async function OurWorkPage() {
  const blogs = await prisma.blog.findMany({
    include: { images: true },
  });
  console.log(blogs);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-emerald-50">
        <main className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-emerald-800 text-center">
            Our Work
          </h1>

          {blogs.length > 0 && (
            <>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                At EcoAction NGO, we&apos;re committed to creating a sustainable
                future for all. Our projects focus on environmental
                conservation, education, and community development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {blogs.map((project, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader className="p-0">
                      <Image
                        src={project.images[0].url}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="flex items-center mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription>
                        {project.content.length > 100
                          ? project.content.slice(0, 100) + "...."
                          : project.content}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href={`/our-works/${project.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          )}

          <section className="bg-emerald-600 text-white rounded-lg p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-800">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Your support can help us expand our reach and create an even
              bigger impact. Together, we can build a more sustainable and
              equitable world.
            </p>
            <div className="space-x-4">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                <a target="_blank" href="https://gofund.me/c4ef3801">
                  Donate Now
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <Link href="/get-involved">Volunteer</Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
