/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3-alpha-sig.figma.com', 'imgs.search.brave.com','upload.wikimedia.org'],// Add the hostname here
  },
  assetPrefix: '',
};

export default nextConfig;
