import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import StoryList from "@/components/StoryList";

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Explore inspiring stories, insights, and updates through our curated news and stories.",
};

export default function Page() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto py-10">
        <div id="news" className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-green-600">
            News
          </h2>
          <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
            Press, features, and media mentions about Hunger to Hope.
          </p>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <a
              href="https://www.instagram.com/p/DP4ECnUk8RJ/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
            >
              <div className="w-full h-48 relative rounded-t-xl overflow-hidden">
                <Image
                  src="/about-hero.jpg"
                  alt="Diwali Food Drive — Hunger to Hope"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-lg leading-snug">
                  Diwali Food Drive — Hunger to Hope
                </h3>
                <p className="text-xs uppercase tracking-wide text-gray-500">Instagram</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Arth & Avni Bhardwaj shared warm meals and festive joy this Diwali — proving small acts of kindness can light up lives.
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-green-600 font-medium group-hover:underline">
                  Watch Highlight
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5a.75.75 0 0 0 0 1.5h4.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V11a.75.75 0 0 0 1.5 0V5.25A.75.75 0 0 0 20.25 4.5H13.5Z" /><path d="M5.25 6A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V14a.75.75 0 0 0-1.5 0v4.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75H10a.75.75 0 0 0 0-1.5H5.25Z" /></svg>
                </span>
              </div>
            </a>
            <a
              href="https://www.outlookindia.com/hub4business/from-hunger-to-hope-how-teen-humanitarian-arth-is-nourishing-delhis-underprivileged"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
            >
              <div className="w-full h-48 relative rounded-t-xl overflow-hidden">
                <Image
                  src="/empowerment-1.jpg"
                  alt="From Hunger To Hope article cover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-lg leading-snug">
                  From Hunger To Hope: How Teen Humanitarian Arth Is Nourishing Delhi’s Underprivileged
                </h3>
                <p className="text-xs uppercase tracking-wide text-gray-500">Outlook India</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Feature on Hunger to Hope’s impact with daily meals, ration drives, and nutrition workshops in Delhi.
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-green-600 font-medium group-hover:underline">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5a.75.75 0 0 0 0 1.5h4.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V11a.75.75 0 0 0 1.5 0V5.25A.75.75 0 0 0 20.25 4.5H13.5Z" /><path d="M5.25 6A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V14a.75.75 0 0 0-1.5 0v4.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75H10a.75.75 0 0 0 0-1.5H5.25Z" /></svg>
                </span>
              </div>
            </a>
          </div>
          <p className="text-center text-sm text-gray-500">More updates coming soon.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-green-600">
            Stories
          </h2>
          <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
            Real experiences from the people and places we serve.
          </p>

          <StoryList />
        </div>
      </div>
    </main>
  );
}


