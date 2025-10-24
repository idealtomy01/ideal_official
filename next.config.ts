import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // パフォーマンス最適化設定
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'react-icons'],
  },
  
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    unoptimized: false, // 画像最適化を有効化
    loader: 'default', // 明示的にデフォルトローダーを指定
  },
  
  // 圧縮設定
  compress: true,
  
  // Turbopack設定（Next.js 16対応）
  // turbopack: {}, // 一時的に無効化してWebpackを使用
};

export default nextConfig;
