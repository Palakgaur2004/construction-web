
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      loaders: {
        css: {
          lightningcss: false,
        },
      },
    },
  },
};

module.exports = nextConfig;
