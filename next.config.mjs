import CopyPlugin from "copy-webpack-plugin";
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: "drizzle/migrations",
              to: ".next/migrations",
            },
          ],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
