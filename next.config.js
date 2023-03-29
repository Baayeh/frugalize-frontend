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
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname:
          'dskl0qde4/image/upload/v1678001270/undraw_my_app_re_gxtj_nlutpw.svg',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname:
          '/dskl0qde4/image/upload/v1678001270/undraw_my_app_re_gxtj_nlutpw.svg',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname:
          '/dskl0qde4/image/upload/v1680080189/motivation_ynaoyx.png',
      },
    ],
  },
};

module.exports = nextConfig;
