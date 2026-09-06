import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // v1 routes kept alive after the information architecture changed.
      { source: "/how-it-works", destination: "/in-practice", permanent: true },
      { source: "/focus10", destination: "/philosophy/focus10", permanent: true },
    ];
  },
};

export default nextConfig;
