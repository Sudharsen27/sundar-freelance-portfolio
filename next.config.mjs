/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/#home", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/why-me", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
    ];
  },
};

export default nextConfig;
