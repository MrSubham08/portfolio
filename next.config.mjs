// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",                 // static export for GitHub Pages
  images: { unoptimized: true },    // disable Next.js image optimization
  basePath: isProd ? "/portfolio" : "",   // subpath for GitHub Pages
  assetPrefix: isProd ? "/portfolio/" : "",
};

export default nextConfig;
