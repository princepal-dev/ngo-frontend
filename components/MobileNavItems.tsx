import React from "react";
import Link from "next/link";

interface MobileNavItemsProps {
  setIsActive: (isActive: boolean) => void;
}

export default function MobileNavItems({ setIsActive }: MobileNavItemsProps) {
  return (
    <>
      <div
        className="w-full items-end justify-end flex px-5 cursor-pointer"
        onClick={() => setIsActive(false)}
      >
        X
      </div>
      <div className="flex flex-col gap-4 justify-between">
        <Link className="hover:text-emerald-400" href="/">
          Home
        </Link>
        <Link className="hover:text-emerald-400" href="/about-us">
          About us
        </Link>
        <Link className="hover:text-emerald-400" href="/our-works">
          Our Works
        </Link>
        <Link className="hover:text-emerald-400 " href="/blog-and-stories">
          Blogs & Stories
        </Link>
        <Link className="hover:text-emerald-400" href="/get-involved">
          Get Involved
        </Link>
        <Link className="hover:text-emerald-400" href="/contact-us">
          Contact Us
        </Link>
      </div>
    </>
  );
}
