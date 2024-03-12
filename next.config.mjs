/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: config => {
    // add svgr loader
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    });

    return config;
  },
};

export default nextConfig;
