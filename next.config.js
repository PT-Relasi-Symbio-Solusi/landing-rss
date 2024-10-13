/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Include all the possible extensions
  webpack(config) {
    return config;
  },
  experimental: {
    // Enable this if you use any Next.js experimental features
  },
}

module.exports = nextConfig
