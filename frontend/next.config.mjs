/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3-alpha-sig.figma.com', 'imgs.search.brave.com','upload.wikimedia.org'],// Add the hostname here
    unoptimized: true,
  },
  assetPrefix: '',
};

export default nextConfig;
