import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "t4.ftcdn.net",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
