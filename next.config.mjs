/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default nextConfig;

