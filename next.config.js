/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const Dotenv = require("dotenv-webpack");
const runtimeCaching = require("next-pwa/cache");
const util = require("util");

const cacheTime = 365 * 24 * 60 * 60; // 365 days

runtimeCaching.map((item) => {
  item.options.expiration.maxAgeSeconds = cacheTime;
  if (item.options.cacheName === "others") {
    item.options.expiration.maxEntries = 200;
  }
  if (item.options.cacheName === "static-image-assets") {
    item.options.expiration.maxEntries = 100;
  }
});

// console.log('😜 RUNTIME CACHE =>', JSON.stringify(runtimeCaching, null, 4))
// console.log('😜 RUNTIME CACHE =>', runtimeCaching)

module.exports = withPWA({
  pwa: {
    dest: "public",
    importScripts: ["/worker.js"],
    runtimeCaching,
  },
  webpack: (config) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
  },
  images: {
    unoptimized: true,
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ["apod.nasa.gov"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
