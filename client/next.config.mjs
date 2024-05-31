/** @type {import('next').NextConfig} */
const nextConfig = {
  // config load image from other src in internet
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: 'photo/**',
      },
    ],
  },
};

export default nextConfig;
