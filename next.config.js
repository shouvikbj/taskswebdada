/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // API: "http://localhost:5000",
    API: "https://taskswebdada.pythonanywhere.com"
  }
}

module.exports = nextConfig
