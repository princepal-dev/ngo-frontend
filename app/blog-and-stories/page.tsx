import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import BlogList from "@/components/BlogList";
import StoryList from "@/components/StoryList";

export const metadata: Metadata = {
  title: "Blogs & Stories",
  description:
    "Explore inspiring stories, insights, and updates through our curated blogs and articles.",
};

export default function Page() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto py-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
            News
          </h2>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.outlookindia.com/hub4business/from-hunger-to-hope-how-teen-humanitarian-arth-is-nourishing-delhis-underprivileged"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
                <Image
                  src="/empowerment-1.jpg"
                  alt="From Hunger To Hope article cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">
                  From Hunger To Hope: How Teen Humanitarian Arth Is Nourishing Delhi’s Underprivileged
                </h3>
                <p className="text-sm text-gray-500">Outlook India</p>
                <p className="text-sm text-gray-600">
                  Feature on Hunger to Hope’s impact with daily meals, ration drives, and nutrition workshops in Delhi.
                </p>
                <span className="inline-block mt-2 text-green-600 font-medium hover:underline">Read Article →</span>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
            Blogs
          </h2>

          <BlogList />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-green-500">
            Stories
          </h2>

          <StoryList />
        </div>
      </div>
    </main>
  );
}
