import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
