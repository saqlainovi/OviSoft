import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Explicitly pin the workspace root so Next doesn't infer a parent folder
    // when multiple lockfiles exist (common on Windows / OneDrive workspaces).
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
