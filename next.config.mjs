import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root (a stray lockfile in the home dir confuses inference).
  outputFileTracingRoot: __dirname,
  images: {
    // Prefer modern formats for the estate photography.
    formats: ["image/avif", "image/webp"],
  },
  // three.js / R3F ship untranspiled ESM in places; keep the graphics stack happy.
  transpilePackages: ["three"],
};

export default nextConfig;
