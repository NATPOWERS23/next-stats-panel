/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i0.wp.com', 'cdn.tlpnetwork.com', 'sci.esa.int', 'www.nasa.gov'],
  },
};

export default nextConfig;
