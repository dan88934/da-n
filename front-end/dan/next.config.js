/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  trailingSlash: true, // Ensures each page ends with a slash
}

module.exports = nextConfig
