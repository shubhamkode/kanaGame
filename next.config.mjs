/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENv === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

export default withPWA(nextConfig);
