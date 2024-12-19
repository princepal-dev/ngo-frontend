import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInvolved from "@/app/get-involved/get-involved";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join our mission as a volunteer! Fill out the form to contribute your time and skills to our cause.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <GetInvolved />
      <Footer />
    </>
  );
}
