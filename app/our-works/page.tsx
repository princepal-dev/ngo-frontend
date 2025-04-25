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
import img14 from "@/public/gallery/g14.jpg";
import img15 from "@/public/gallery/dm1.jpeg";
import img16 from "@/public/gallery/dm2.jpeg";
import img17 from "@/public/gallery/dm3.jpeg";
import img18 from "@/public/gallery/dm4.jpeg";
import img19 from "@/public/gallery/dm5.jpeg";
import img20 from "@/public/gallery/dm6.jpg";
import img21 from "@/public/gallery/dm7.jpg";
// import img22 from "@/public/gallery/dm8.JPG";
// import img23 from "@/public/gallery/dm9.jpg";
import img24 from "@/public/gallery/h1.jpeg";
import img25 from "@/public/gallery/h2.jpeg";
import img26 from "@/public/gallery/h3.jpeg";
import img27 from "@/public/gallery/h4.jpeg";
import img28 from "@/public/gallery/h5.jpeg";
import img29 from "@/public/gallery/h6.jpeg";
import img30 from "@/public/gallery/h7.jpeg";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoComponent from "@/components/Video";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our impactful projects and initiatives that aim to create meaningful change in the community.",
};

export default async function OurWorkPage() {
  return (
      <main className="container mx-auto px-4 py-10">
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Fundraiser
          </h2>
          <p className="text-lg mb-6">
            At <span className="font-bold">Hunger to Hope</span>, we successfully raised $5,715 USD to provide nutritious Midday Meals for underserved children. These meals not only combat hunger but also empower young minds to focus on education and create brighter futures.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 mb-6">
            <a href="https://gofund.me/c4ef3801" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </Button>
          <div className="w-full max-w-md mx-auto">
            <Image src={fund} alt="Fundraiser" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </section>

        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-green-600 mb-6">
            Mid-Day Meals for Anganwadi
          </h2>
          <p className="text-center text-lg mb-10">
            We provide nutritious mid-day meals to Anganwadi centers, ensuring underprivileged children get the nourishment they need to dream big and thrive.
          </p>
          <Carousel className="px-2">
            <CarouselContent>
              {[img15, img16, img17, img18, img19, img20, img21, img14, img4, img6, img7].map((img, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <Image src={img} quality={80} alt={`img-${i}`} className="w-full h-auto rounded-lg" />
                  </CarouselItem>
              ))}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <VideoComponent src="/gallery/md.mp4" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext className="hidden lg:block" />
          </Carousel>
        </section>

        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-green-600 mb-8">
            Our Workshops
          </h2>
          <Carousel className="px-2">
            <CarouselContent>
              {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <Image src={img} quality={80} alt={`Workshop-${i + 1}`} className="w-full h-auto rounded-lg" />
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext className="hidden lg:block" />
          </Carousel>
        </section>

        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-green-600 mb-8">
            Health Camp
          </h2>
          <Carousel className="px-2">
            <CarouselContent>
              {[img24, img25, img26, img27, img28, img29, img30].map((img, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <Image src={img} quality={80} alt={`Health-${i + 1}`} className="w-full h-auto rounded-lg" />
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext className="hidden lg:block" />
          </Carousel>
        </section>
      </main>

  );
}
