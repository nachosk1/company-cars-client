/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.imagin.studio", // El hostname de la URL remota
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
