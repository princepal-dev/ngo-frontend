import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/app/contact-us/contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or need assistance? Get in touch with us through our contact page.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
