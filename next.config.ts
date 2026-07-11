import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Staattinen export → toimii Vercelillä, GitHub Pagesilla, missä vain.
  output: "export",
  images: {
    // Staattinen export ei voi optimoida kuvia lennossa.
    // Kun oikeat valokuvat tulevat, ne optimoidaan build-vaiheessa (ks. README).
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
