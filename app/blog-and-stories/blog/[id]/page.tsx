"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useParams } from "next/navigation";
import "slick-carousel/slick/slick-theme.css";

interface BlogData {
  title: string;
  author: string;
  date: string;
  content: string;
  images: string[];
}

export default function ImageSlider() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://api.hungertohope.org/api/v1/blogs/get-blog/${id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogData({
          title: data.title || "Blog Title",
          author: data.author || "Admin",
          date: data.date || "Today",
          content: data.content || "",
          images: data.images || [],
        });
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {blogData?.images.length ? (
        <Slider {...settings}>
          {blogData.images.map((src, index) => (
            <div key={index} className="p-2">
              <Image
                src={src}
                width={1000}
                height={1000}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-lg h-auto"
                priority
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-lg my-4">No images available.</p>
      )}

      <div className="my-10">
        <p className="text-4xl font-semibold">{blogData?.title}</p>
        <div className="flex w-full justify-end px-6">
          <p>
            {blogData?.author}, {blogData?.date}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lg">{blogData?.content}</p>
        </div>
      </div>
    </div>
  );
}
