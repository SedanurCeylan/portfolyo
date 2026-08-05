/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.VERCEL ? ".next" : ".next-build",
};

export default nextConfig;
