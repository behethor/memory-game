/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.modyo.cloud'
      }
    ]
  }
}

export default nextConfig
