/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add canonical domain handling
  async redirects() {
    return [
      // Redirect apex domain to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'amazonchapter.com',
          },
        ],
        destination: 'https://www.amazonchapter.com/:path*',
        permanent: true,
      },
      // Redirect non-www to www for any other domains
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?!www\\.).*',
          },
        ],
        destination: 'https://www.amazonchapter.com/:path*',
        permanent: true,
      },
    ]
  },
  // Force HTTPS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          },
          {
            key: 'Link',
            value: '<https://www.amazonchapter.com>; rel="canonical"'
          }
        ],
      },
    ]
  },
};

module.exports = nextConfig;
