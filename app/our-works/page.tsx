import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import fund from "@/public/donation-img.png";
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
        <h2 className="text-center text-3xl font-bold text-green-600">
          Mid-Day Meals for Anganwadi
        </h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">1</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">2</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">3</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">4</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">5</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">6</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">7</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">8</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">9</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
