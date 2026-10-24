/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: Cloudflare Pages serves the /out folder as plain files (free, no server needed)
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
