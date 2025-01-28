import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import img from "@/public/arth-img.jpeg";

export const metadata: Metadata = {
  title: "Arth Bhardwaj",
};

export default function Page() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <main className="flex justify-center items-center py-8 gap-8">
        <Image
          src={img}
          width={200}
          height={200}
          alt="arth-bhardwaj-img"
          className="rounded-full"
        />
        <div className="w-1/3">
          <h2 className="text-2xl font-bold">
            Arth Bhardwaj <span className="font-semibold">(Founder)</span>
          </h2>
          <p>
            Hi, I&#39;m Arth Bhardwaj, a high school student in Saint Francis
            High School California, with a big dream and an even bigger heart.
            As the co-founder of Hunger to Hope, I am driven by a deep passion
            to make a difference in the lives of those who need it most. Our
            mission is to combat hunger and bring hope to communities facing
            food insecurity.
          </p>
          <p>
            From a young age, I have been inspired by the power of community and
            the impact we can make when we come together. Hunger to Hope was
            born out of this inspiration, and with the support of my incredible
            team, we are dedicated to creating sustainable solutions to end
            hunger.
          </p>
        </div>
      </main>
    </div>
  );
}
