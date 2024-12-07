import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NGO | One stop solution..",
  description: "Ngo website for saving needy ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
