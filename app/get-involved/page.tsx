import type { Metadata } from "next";
import Involve from "@/app/get-involved/Involve";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join our mission as a volunteer! Fill out the form to contribute your time and skills to our cause.",
};

export default function Page() {
  return <Involve />;
}
