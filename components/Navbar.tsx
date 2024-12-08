import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <nav className="flex justify-center shadow-xl py-6">
      <div className="max-w-screen-2xl w-full">
        <div className="flex justify-between">
          <div >
            <Image className="" src="/HungerToHope.png" height={30} width={30} alt="logo" />
          </div>
          <ul className="flex gap-12 text-zinc-800 font-medium transition-all duration-500 ">
            <li>
              <Link className="hover:text-emerald-400 " href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-400 " href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-400 " href="/works">
                Our Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-400 " href="/get-involved">
                Get Involved
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-400 " href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="bg-emerald-400 px-10 py-2 rounded-full hover:bg-emerald-500 text-white transition-all font-semibold">Donate</button>
        </div>
      </div>
    </nav>
  );
}
