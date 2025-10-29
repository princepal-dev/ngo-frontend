import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/HungerToHope.png";

export default async function BigNav() {
  return (
    <nav className="hidden md:flex justify-center px-4 shadow-xl py-6">
      <div className="max-w-screen-2xl w-full">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logo} height={100} width={100} alt="logo" />
          </Link>

          <div className=" md:flex-row hidden md:flex h-96 md:h-16 flex-col items-center gap-10">
            <ul className="md:flex-row flex flex-col gap-10 md:mt-0 mt-6 text-md md:text-sm md:gap-12 text-zinc-800  font-medium items-center transition-all duration-500 ">
              <li>
                <Link className="hover:text-emerald-400 " href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/about-us">
                  About us
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/our-works">
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-400 "
                  href="/blog-and-stories"
                >
                  News & Stories
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/get-involved">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
