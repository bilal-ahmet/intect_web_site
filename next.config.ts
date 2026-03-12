import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vaventeknoloji.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
