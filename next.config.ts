import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

export async function redirects() {
  return [
    {
      source: "/blog-and-stories",
      destination: "/news-and-stories",
      permanent: true,
    },
    {
      source: "/blog-and-stories/blog/:id",
      destination: "/news-and-stories/blog/:id",
      permanent: true,
    },
  ];
}
