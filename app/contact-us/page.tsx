import React from "react";
import type { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or need assistance? Get in touch with us through our contact page.",
};

export default function Page() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 mt-8">
          <form className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold text-green-500">Get in Touch</h3>

            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Message subject"
                  className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="message"
                  placeholder="Your message"
                  className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
                />
              </div>
            </div>

            <div className="flex flex-col ">
              <button className="bg-green-600 hover:bg-green-700 transition-all ease-in text-white text-lg py-2 rounded-md ">
                Send Message
              </button>
            </div>
          </form>

          <div className="">
            <h3 className="text-2xl font-bold text-green-500">
              Our Information
            </h3>

            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <CiMail className="text-2xl text-green-500" />
                <a
                  href="mailto:contact@hungertohope.org"
                  className="hover:underline"
                >
                  contact@hungertohope.org
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <BsFillTelephoneFill className="text-xl text-green-500" />
                <a href="tel:123-456-7890" className="hover:underline">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLocationDot className="text-xl text-green-500" />
                <a href="">123 Eco Street, Green City, EC 12345</a>
              </div>

              <div className="h-60 w-full bg-zinc-400 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
