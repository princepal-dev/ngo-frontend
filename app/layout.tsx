import React from "react";
import { Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";

import "@/app/globals.css";
import AuthProvider from "@/components/auth-provider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Hunger to Hope",
    default: "Welcome / Hunger to Hope",
  },
  description: "",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} grid grid-rows-[auto_1fr_auto] antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
