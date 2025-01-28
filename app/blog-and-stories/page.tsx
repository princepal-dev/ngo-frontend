import React from "react";
import type { Metadata } from "next";
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
