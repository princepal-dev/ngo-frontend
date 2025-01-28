import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import img from "@/public/avni-img.jpeg";

export const metadata: Metadata = {
  title: "Mehar Bajaj",
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
            Mehar Bajaj <span className="font-semibold">(Volunteer)</span>
          </h2>
          <p>Soon added...</p>
        </div>
      </main>
    </div>
  );
}
