const withPWA = require('next-pwa')
const Dotenv = require('dotenv-webpack')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    importScripts: ['/worker.js']
  },
  webpack: config => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }))

    return config
  },
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY
  },
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ['apod.nasa.gov']
  }
})
