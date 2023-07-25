/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rims-1neq.onrender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rims-i467.onrender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "b47a-87-244-131-197.ngrok-free.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
