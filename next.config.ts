import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  // !! WARN !!
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
  async headers() {
    return [
      {
        // matching all API routes
        source: "/app/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://themba.dev",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
