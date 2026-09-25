import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  outputFileTracingRoot: path.resolve('.'),
  turbopack: { root: path.resolve('.') },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
