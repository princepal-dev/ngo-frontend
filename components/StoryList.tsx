import React from "react";
import StoryCard, { StoryCardTypes } from "@/components/StoryCard";

interface StoryResponse {
  status: string;
  stories: StoryCardTypes[];
}

export default async function StoryList() {
  const res = await fetch(
    "https://api.hungertohope.org/api/v1/story/get-all-stories",
    { cache: "no-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const allStories: StoryResponse = await res.json();

  return (
    <>
      {allStories?.stories?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {allStories.stories.map((story: StoryCardTypes, index) => (
            <StoryCard
              image_url={story.image_url}
              title={story.title}
              page_url={story.page_url}
              key={index}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[0,1,2].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="h-52 w-full rounded-lg bg-gray-200 animate-pulse" />
                <div className="mt-4 space-y-2">
                  <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center my-8">
            <p className="text-lg text-gray-600">Stories are coming soon.</p>
          </div>
        </>
      )}
    </>
  );
}
