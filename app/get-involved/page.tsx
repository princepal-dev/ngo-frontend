import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join our mission as a volunteer! Fill out the form to contribute your time and skills to our cause.",
};

export default function Page() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
          Get Involved
        </h2>

        <form className="xl:w-1/2 flex flex-col mx-auto bg-white py-4 px-8 rounded mt-8">
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
                placeholder="Your full name"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Your phone number"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
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
                  placeholder="Your state"
                  className="px-4 py-2 rounded border w-full border-gray-300 focus:border-indigo-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
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
                placeholder="Your zip code"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                placeholder="Tell us why you're intrested in volunteering"
                className="px-4 py-2 rounded border border-gray-300 focus:border-indigo-300"
              />
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <button className="bg-green-600 hover:bg-green-700 transition-all ease-in text-white text-lg py-2 rounded-md ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
