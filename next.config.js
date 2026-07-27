/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'media.graphassets.com' },
    ],
  },
  env: {
    API_ENVIRONMENT_GRAPHQL: process.env.NEXT_PUBLIC_API_ENVIRONMENT_GRAPHQL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
  }
}

module.exports = nextConfig
