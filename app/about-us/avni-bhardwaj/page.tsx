import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import img from "@/public/avni-img.jpeg";

export const metadata: Metadata = {
  title: "Avni Bhardwaj",
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
            Avni Bhardwaj{" "}
            <span className="font-semibold">
              (Co-Founder / Executive Director)
            </span>
          </h2>
          <p>
            Avni Bhardwaj, a middle schooled from Challenger, is an accomplished
            second-degree black belt in Taekwondo and a passionate advocate for
            child nutrition and well-being. Her deep understanding of healthy
            food&#39;s vital role in early childhood inspired her to join the
            transformative initiative, Hunger to Hope. Through this endeavor,
            Avni is making a meaningful impact by supporting underprivileged
            children in Anganwadis, embodying a spirit of compassion,
            resilience, and leadership.
          </p>
        </div>
      </main>
    </div>
  );
}
