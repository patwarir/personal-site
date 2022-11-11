/** @type { import("next").NextConfig } */
const nextConfig = {
  pageExtensions: [ "page.js", "page.ts", "page.jsx", "page.tsx" ],
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
