/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/app-ads.txt",
        destination: "https://gametamin.com/app-ads.txt",
        permanent: true, 
      },
    ];
  },
};
