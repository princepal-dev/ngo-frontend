import React from "react";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";

export type StoryCardTypes = {
  image_url: string;
  title: string;
  page_url: string;
};

export default function StoryCard({
  image_url,
  title,
  page_url,
}: StoryCardTypes) {
  return (
    <div className="w-96 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-full h-56 relative">
        <Image
          src={image_url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
          alt={title.split(" ").join("-")}
          className="object-cover"
        />
      </div>
      <div className="mt-2 px-4 py-2 flex flex-col space-y-2">
        <h3 className="font-semibold leading-tight">{title}</h3>
        <div className="flex">
          <a
            href={page_url}
            target="_blank"
            className="bg-green-600 text-white text-sm flex items-center justify-start px-4 py-1.5 rounded-full space-x-2 hover:bg-green-700 transition-all ease-in-out duration-200"
          >
            <span>Read Story</span> <IoOpenOutline />
          </a>
        </div>
      </div>
    </div>
  );
}
