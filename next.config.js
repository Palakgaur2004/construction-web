// ✅ next.config.mjs (correct)
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

export default nextConfig;
