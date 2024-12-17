import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">HungerToHope</h3>
            <p className="text-xs md:text-sm pr-6">
            We would love to hear from you. Whether you have questions, want to get involved, or simply want to learn more about our work, feel free to reach out.

            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm md:text-base">Email: contact@hungertohope.org</p>
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
          <p className="text-gray-100 mb-4">Together, we can create a brighter, healthier future for these children. Thank you for being a part of our mission.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HungerToHope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
