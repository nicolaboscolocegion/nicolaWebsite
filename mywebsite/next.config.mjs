/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.nikbc.com",
      },
    ],

  },

};

export default nextConfig;
