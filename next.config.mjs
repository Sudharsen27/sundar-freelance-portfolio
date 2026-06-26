/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/home", destination: "/" },
      { source: "/about", destination: "/" },
      { source: "/why-me", destination: "/" },
      { source: "/services", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/testimonials", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

export default nextConfig;
