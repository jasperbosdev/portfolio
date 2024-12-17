import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  // Add other Next.js options here
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default nextConfig;