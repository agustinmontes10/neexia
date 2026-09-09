import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives in a git worktree, so there are lockfiles both here and
  // in the parent checkout. Pin the workspace root so Turbopack stops guessing.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
