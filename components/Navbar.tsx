import logo from "@/public/HungerToHope.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <nav className="flex justify-center shadow-xl py-6">
      <div className="max-w-screen-2xl w-full">
        <div className="flex justify-between">
          <Link href="/">
            <Image src={logo} height={90} width={90} alt="logo" />
          </Link>
          <ul className="flex gap-12 text-zinc-800 font-medium items-center transition-all duration-500 ">
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
                Our Works
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
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://gofund.me/c4ef3801"
              target="_blank"
              className="bg-emerald-400 px-10 py-2 rounded-full hover:bg-emerald-500 text-white transition-all font-semibold"
            >
              Donate
            </a>
            <Link
              href="/join-us"
              className="bg-white border-2 border-emerald-400 px-10 py-2 rounded-full hover:bg-emerald-500 hover:text-white text-emerald-500 transition-all font-semibold"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
