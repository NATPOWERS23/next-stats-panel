/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  images: {
    domains: ['i0.wp.com', 'cdn.tlpnetwork.com', 'sci.esa.int', 'www.nasa.gov'],
  },
};

export default nextConfig;
