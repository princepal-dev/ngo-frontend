import React from "react";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
                <Navbar />
                <AuthProvider>{children}</AuthProvider>
                <Footer />
            </body>
        </html>
    );
}
