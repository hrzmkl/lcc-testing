import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/projets',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/acheter-du-cafe-a-la-maison',
        destination: 'https://www.chacunsoncafe.fr/content/232-cafe-a-la-maison',
        permanent: true,
      },
      {
        source: '/cafe-au-bureau',
        destination: 'https://www.chacunsoncafe.fr/content/231-entreprise',
        permanent: true,
      },
      {
        source: '/agir',
        destination: 'https://www.notion.so/Rejoignez-la-coop-rative-de-l-action-des-Carbon-Killers-1ca5dfff9e23801f9050e4285f48168e?showMoveTo=true&saveParent=true',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      },
      {
        protocol: 'https',
        hostname: 'www.chacunsoncafe.fr',
      },
      {
        protocol: 'https',
        hostname: 'preprod-erp.chacunsoncafe.fr',
      },
      {
        protocol: 'https',
        hostname: 'erp.chacunsoncafe.fr',
      },
      {
        protocol: 'https',
        hostname: 'testing-erp.chacunsoncafe.fr',
      },
      {
        protocol: 'https',
        hostname: 'preprod2-erp.chacunsoncafe.fr',
      },
      {
        protocol: 'https',
        hostname: 'testing.chacunsoncafe.fr',
      },
      {
        protocol: 'https',
        hostname: 'testing.letscatchcarbon.org',
      },
      {
        protocol: 'https',
        hostname: 'testing.letscatchcarbon.com',
      },      
      {
        protocol: 'https',
        hostname: 'www.letscatchcarbon.com',
      },       
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ],
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })


// module.exports = withBundleAnalyzer(nextConfig)