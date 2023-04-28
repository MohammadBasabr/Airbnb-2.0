/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"]
  },
  logLevel: "trace",
  env: {
    HOST_URL: "https://airbnb-2-0-3shpgc07g-mbasabr75-gmailcom.vercel.app"
  }
}

module.exports = nextConfig
