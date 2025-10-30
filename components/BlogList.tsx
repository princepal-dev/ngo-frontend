import React from "react";
import BlogCard, { BlogCardType } from "@/components/BlogCard";

interface BlogsResponse {
  status: string;
  blogs: BlogCardType[];
}

export default async function BlogList() {
  const res = await fetch(
    "https://api.hungertohope.org/api/v1/blogs/get-all-blogs",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const allBlogs: BlogsResponse = await res.json();

  return (
    <>
      {allBlogs?.blogs?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {allBlogs.blogs.map((blog: BlogCardType) => (
            <BlogCard
              image_url={blog.image_url}
              title={blog.title}
              date={blog.date}
              content={blog.content}
              id={blog.id}
              key={blog.id}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[0,1,2].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="h-40 w-full rounded-lg bg-gray-200 animate-pulse" />
                <div className="mt-4 space-y-2">
                  <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center my-8">
            <p className="text-lg text-gray-600">No blogs yet. We’re preparing content.</p>
            <a href="#news" className="inline-block mt-3 text-green-600 font-medium hover:underline">See latest news →</a>
          </div>
        </>
      )}
    </>
  );
}
