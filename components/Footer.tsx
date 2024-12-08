import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">HungerToHope</h3>
            <p className="text-sm md:text-base">
              Making the world a better place for children, one project at a
              time.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm md:text-base">Email: info@ecoaction.org</p>
            <p className="text-sm md:text-base">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-emerald-300 text-sm md:text-base"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-300 text-sm md:text-base"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-300 text-sm md:text-base"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HungerToHope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
