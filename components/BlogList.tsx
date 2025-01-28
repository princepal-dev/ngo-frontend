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
        <div className="grid grid-cols-3">
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
        <div className="text-center my-8">
          <p className="text-3xl font-bold">We will add more blogs soon!</p>
        </div>
      )}
    </>
  );
}
