import React from "react";
import Contact from "@/app/contact-us/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Explore inspiring stories, insights, and updates through our curated blogs and articles.",
};

export default function Page() {
  return <Contact />;
}
