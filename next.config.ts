import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // パフォーマンス最適化設定
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@headlessui/react', 'react-icons'],
  },
  
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  
  // 圧縮設定
  compress: true,
  
  // Turbopack設定（Next.js 16対応）
  turbopack: {
    // Turbopack用の設定
  },
};

export default nextConfig;
