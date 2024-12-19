/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3-alpha-sig.figma.com', 'imgs.search.brave.com'],// Add the hostname here
  },
};

export default nextConfig;
