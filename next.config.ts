import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logincdn.msauth.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
