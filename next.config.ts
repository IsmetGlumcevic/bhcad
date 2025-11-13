import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce standalone server output for Docker
  output: "standalone",
  // Keep Next Image optimization behavior similar to Vercel
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure React strict mode in dev; no effect in prod
  reactStrictMode: true,
};

export default nextConfig;
