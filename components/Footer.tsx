import React from "react";
import Link from "next/link";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "@/public/HungerToHope.png";

import Image from "next/image";
import { MdEmail } from "react-icons/md";




export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto px-4 my-8">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                width={70}
                height={70}
                src={logo} 
                alt="logo"
                className="my-4"
              />
            </Link>
            <div className="my-1 text-center md:text-left">
              <p className="font-semibold">We&apos;d love to hear from you!</p>
              <p className="font-semibold">Contact us anytime.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-bold text-center md:text-left">ABOUT US</h2>
              <div className="flex flex-col mt-4 space-y-1 text-sm items-center md:items-start">
                <Link href="/about-us" className="hover:text-emerald-300">
                  About Us
                </Link>
                <Link href="/" className="hover:text-emerald-300">
                  Our Vision & Mission
                </Link>
                <Link href="/" className="hover:text-emerald-300">
                  Terms & Conditions
                </Link>
                <Link href="/" className="hover:text-emerald-300">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="font-bold text-center md:text-left">OUR WORK</h2>
                <div className="flex flex-col mt-4 space-y-1 text-sm items-center md:items-start">
                  <Link href="/our-works" className="hover:text-emerald-300">
                    Our Work
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="font-bold text-center md:text-left">DONATE</h2>
                <div className="flex flex-col mt-4 space-y-1 text-sm items-center md:items-start">
                  <a href="https://gofund.me/c4ef3801" className="hover:text-emerald-300">
                    Online Donations
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="font-bold text-center md:text-left">GET IN TOUCH</h2>
                <div className="flex justify-center md:justify-start space-x-4 text-sm mt-4">
                  <a
                    href="mailto:contact@hungertohope.org"
                    className="flex items-center justify-center hover:text-emerald-300"
                  >
                    <MdEmail className="text-2xl" />
                  </a>
                  <a href="tel:" className="flex items-center justify-center hover:text-emerald-300">
                    <FaPhoneAlt className="text-lg" />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-bold text-center md:text-left">GET INVOLVED</h2>
                <div className="flex flex-col mt-4 space-y-1 text-sm items-center md:items-start">
                  <Link href="/get-involved" className="hover:text-emerald-300">
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} HungerToHope Foundation.</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Link href="#" className="hover:text-emerald-300 text-sm md:text-base">
              <FaFacebookF className="text-xl" />
            </Link>
            <Link href="#" className="hover:text-emerald-300 text-sm md:text-base">
              <FaXTwitter className="text-xl" />
            </Link>
            <Link href="#" className="hover:text-emerald-300 text-sm md:text-base">
              <FaInstagram className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}




