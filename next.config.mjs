// next.config.mjs
const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig = {
  output: "export",              // static export
  images: { unoptimized: true }, // disable image optimization
  basePath: prefix,              // use prefix here
  assetPrefix: prefix,           // and here
};

export default nextConfig;