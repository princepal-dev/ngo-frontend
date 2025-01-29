import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import img from "@/public/avni-img.jpeg";

export const metadata: Metadata = {
  title: "Mehar Bajaj",
};

export default function Page() {
  return (
    <div className="my-20 grid grid-rows-[auto_1fr_auto]">
      <main className="flex flex-col lg:flex-row justify-center items-center py-8 px-4 gap-8">
        <Image
          src={img}
          width={200}
          height={200}
          alt="arth-bhardwaj-img"
          className="rounded-full w-48 h-48 lg:w-64 lg:h-64"
        />
        <div className="w-full lg:w-1/2 xl:w-1/3 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left">
            Mehar Bajaj <span className="font-semibold">(Volunteer)</span>
          </h2>
          <p className="text-sm md:text-base text-center lg:text-left">Soon added...</p>
        </div>
      </main>
    </div>
  );
}


