import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { Josefin_Sans } from "next/font/google";
import AuthProvider from "@/components/auth-provider";

import "@/app/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Hunger to Hope",
    default: "Dashboard / Hunger to Hope",
  },
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} flex h-screen bg-gray-100`}>
        <AuthProvider>
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
