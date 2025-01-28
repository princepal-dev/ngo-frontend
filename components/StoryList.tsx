import React from "react";
import StoryCard, { StoryCardTypes } from "@/components/StoryCard";

interface StoryResponse {
  status: string;
  stories: StoryCardTypes[];
}

export default async function StoryList() {
  const res = await fetch(
    "http://localhost:5000/api/v1/story/get-all-stories",
    { cache: "no-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const allStories: StoryResponse = await res.json();

  return (
    <>
      {allStories?.stories?.length > 0 ? (
        <div>
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
        <div className="text-center my-8">
          <p className="text-3xl font-bold">We will add more stories soon!</p>
        </div>
      )}
    </>
  );
}
