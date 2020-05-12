const withPWA = require('next-pwa')
const Dotenv = require("dotenv-webpack");

module.exports = withPWA({
  pwa: {
    dest: 'public',
    importScripts: [
      '/worker.js'
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
  },
})