/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  <-- COMMENT THIS OUT OR DELETE IT
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;