import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

export type BlogCardType = {
  image_url: string;
  title: string;
  date: string;
  content: string;
  id: string;
};

export default function BlogCard({
  image_url,
  title,
  date,
  content,
  id,
}: BlogCardType) {
  return (
    <div className="w-96 bg-white overflow-hidden rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-full h-48 relative">
        <Image
          src={image_url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
          alt={title.toLowerCase().split(" ").join("-")}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col px-4 py-2">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          <h4 className="font-medium text-sm">{date}</h4>
          <p className="text-gray-500 font-light leading-tight">
            {content.slice(0, 100)}...
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <Link
            className="py-1 flex items-center space-x-2 rounded-md hover:underline transition-all ease-linear duration-200"
            href={`/news-and-stories/blog/${id}`}
          >
            <span>Read Full Blog</span> <IoOpenOutline />
          </Link>
        </div>
      </div>
    </div>
  );
}
