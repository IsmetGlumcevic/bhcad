import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce standalone server output for Docker
  output: "standalone",
  // Keep Next Image optimization behavior efficient on self-hosting
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Ensure React strict mode in dev; no effect in prod
  reactStrictMode: true,
};

export default nextConfig;
