import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  eslint: { ignoreDuringBuilds: true },
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
