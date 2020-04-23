const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        importScripts: [
          '/worker.js',
          '/libs/macy/macy.js',
          '/custom/js/custom.js'
      ]
    }
})