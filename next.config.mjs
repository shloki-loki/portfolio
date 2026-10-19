/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return ["/about", "/experience", "/projects", "/resume"].map((source) => ({ source, destination: "/", permanent: true }));
  },
};
export default nextConfig;
