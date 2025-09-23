// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // needed for static export
  basePath: "/portfolio", // your repo name
  assetPrefix: "/portfolio/", // also adjust assets
};

module.exports = nextConfig;