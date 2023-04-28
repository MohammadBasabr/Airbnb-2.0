/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"]
  },
  logLevel: "trace",
  env: {
    HOST_URL: "http://localhost:4000"
  }
}

module.exports = nextConfig
