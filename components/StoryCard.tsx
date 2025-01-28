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
    <div className="w-96 bg-white rounded-lg overflow-hidden shadow-md">
      <div>
        <Image
          src={`http://localhost:5000/${image_url}`}
          width={384}
          height={500}
          alt={title.split(" ").join("-")}
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
