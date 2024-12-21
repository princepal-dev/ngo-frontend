import React from "react";
import Link from "next/link";

export default function MobileNavItems() {
  return (
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
      <Link className="hover:text-emerald-400" href="/get-involved">
        Get Involved
      </Link>
      <Link className="hover:text-emerald-400" href="/contact-us">
        Contact Us
      </Link>
    </div>
  );
}
