const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();

module.exports = {
  // swcMinify: true,
  reactStrictMode: true,
   images: {
    domains: ['media.graphcms.com'],
  },
}
