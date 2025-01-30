import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import fund from "@/public/donation-img.png";
import img1 from "@/public/gallery/g1.jpg";
import img2 from "@/public/gallery/g2.jpg";
import img3 from "@/public/gallery/g3.jpg";
import img4 from "@/public/gallery/g4.jpg";
import img5 from "@/public/gallery/g5.jpg";
import img6 from "@/public/gallery/g6.jpg";
import img7 from "@/public/gallery/g7.jpg";
import img8 from "@/public/gallery/g8.jpg";
import img9 from "@/public/gallery/g9.jpg";
import img10 from "@/public/gallery/g10.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our impactful projects and initiatives that aim to create meaningful change in the community.",
};

export default async function OurWorkPage() {
  return (
    <main className="container mx-auto py-10">
      <section>
        <div className="flex flex-col mx-auto">
          <h2 className="text-center text-3xl font-bold text-green-600">
            Fundraiser
          </h2>
          <p className="text-center mt-4 text-lg md:w-1/2 mx-auto">
            At <span className="font-bold">Hunger to Hope</span>, we
            successfully raised $5,715 USD to provide nutritious Midday Meals
            for underserved children. These meals not only combat hunger but
            also empower young minds to focus on education and create brighter
            futures. Together, we’re turning hunger into hope!
          </p>
        </div>
        <div className="flex items-center justify-center my-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold">
            <a href="">Donate</a>
          </Button>
        </div>
        <div className="flex items-center justify-center py-4">
          <Image src={fund} alt="fundraiser-img" />
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-center text-3xl mb-8 font-bold text-green-600">
          Mid-Day Meals for Anganwadi
        </h2>
        <Carousel className="px-3 my-4">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img1} quality={80} alt="img-1" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img2} quality={80} alt="img-2" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img3} quality={80} alt="img-3" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img4} quality={80} alt="img-4" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img5} quality={80} alt="img-5" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img6} quality={80} alt="img-6" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img7} quality={80} alt="img-7" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img8} quality={80} alt="img-8" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img9} quality={80} alt="img-9" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img10} quality={80} alt="img-10" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
      </section>
      <section className="my-10">
        <h2 className="text-center text-3xl mb-8 font-bold text-green-600">
          Mid-Day Meals for Anganwadi
        </h2>
        <Carousel className="px-3 my-4">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img1} quality={80} alt="img-1" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img2} quality={80} alt="img-2" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img3} quality={80} alt="img-3" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img4} quality={80} alt="img-4" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img5} quality={80} alt="img-5" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img6} quality={80} alt="img-6" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img7} quality={80} alt="img-7" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img8} quality={80} alt="img-8" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img9} quality={80} alt="img-9" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img10} quality={80} alt="img-10" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
      </section>{" "}
      <section className="my-10">
        <h2 className="text-center text-3xl mb-8 font-bold text-green-600">
          Mid-Day Meals for Anganwadi
        </h2>
        <Carousel className="px-3 my-4">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img1} quality={80} alt="img-1" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img2} quality={80} alt="img-2" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img3} quality={80} alt="img-3" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img4} quality={80} alt="img-4" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img5} quality={80} alt="img-5" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img6} quality={80} alt="img-6" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img7} quality={80} alt="img-7" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img8} quality={80} alt="img-8" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img9} quality={80} alt="img-9" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={img10} quality={80} alt="img-10" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
      </section>
    </main>
  );
}
