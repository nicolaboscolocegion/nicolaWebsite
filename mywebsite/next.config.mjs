/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.nikbc.tech",
      },
    ],

  },

};

export default nextConfig;
