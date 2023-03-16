const withBudleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBudleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["media.graphassets.com"],
  },
});
