/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname:
          '/dskl0qde4/image/upload/v1679985230/frugalize_logo-blue_luxoa0.png',
      },
    ],
  },
};

module.exports = nextConfig;
