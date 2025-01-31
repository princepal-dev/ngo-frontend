"use client";

import React, { useState } from "react";

export default function Involve() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    state: "",
    country: "",
    zip_code: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.hungertohope.org/api/v1/volunteer/create-volunteer-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert("Thank you for volunteering! We will get in touch soon.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          address: "",
          state: "",
          country: "",
          zip_code: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again later.");
    }
  };

  return (
    <main className="bg-gray-50">
      <div className="container mx-auto py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
          Get Involved
        </h2>

        <form
          className="xl:w-1/2 flex flex-col mx-auto bg-white py-4 px-8 rounded mt-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-green-500 my-8">
              Volunteer with Us
            </h3>
            <p>
              Join our team of dedicated volunteers and make a real difference
              in the lives of children and our environment. Fill out the form
              below to get started!
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone_number">Phone</label>
              <input
                type="text"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Your phone number"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your street address"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="grid grid-cols-2 py-2 gap-4 justify-between">
              <div className="flex flex-col">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Your state"
                  className="px-4 py-2 rounded border w-full border-gray-300 focus:border-indigo-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Your country"
                  className="px-4 py-2 rounded border w-full border-gray-300 focus:border-indigo-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="zip_code">Zip Code</label>
              <input
                type="text"
                id="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                placeholder="Your zip code"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us why you're interested in volunteering"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-all ease-in text-white text-lg py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
