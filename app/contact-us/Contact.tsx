"use client";

import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://api.hungertohope.org/api/v1/contact/create-contact-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        setResponseMessage("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 mt-8 px-4">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold text-green-500">Get in Touch</h3>

            <div className="flex flex-col space-y-2">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.subject}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-all ease-in text-white text-lg py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && (
              <p className="text-center mt-2 text-gray-700">
                {responseMessage}
              </p>
            )}
          </form>

          <div>
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
                <a href="tel:+14085643752" className="hover:underline">
                  +1 4085643752
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLocationDot className="text-xl text-green-500" />
                <a href="">20396 Clifden way Cupertino California 95014</a>
              </div>

              <div className="h-60 w-full rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.6197298982543!2d-122.030406!3d37.312236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5068e44ff51%3A0x40f1d40c65c33b2!2s20396%20Clifden%20Way%2C%20Cupertino%2C%20CA%2095014%2C%20USA!5e1!3m2!1sen!2sin!4v1738248068760!5m2!1sen!2sin"
                  width="350"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
