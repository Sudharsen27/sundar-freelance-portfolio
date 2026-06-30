export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Professional websites that are fast, SEO-friendly, responsive, and built to grow your business.",
    tags: ["React", "Next.js", "Astro", "Tailwind CSS"],
    features: ["SEO optimized", "Fast loading", "Mobile responsive", "Secure"],
    ctaLabel: "Get Free Quote",
  },
  {
    id: "web-app",
    title: "Web Application Development",
    description:
      "Custom web applications — admin dashboards, booking systems, SaaS products, CRMs, portals, and business management software.",
    tags: ["React", "Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
    features: ["Authentication", "Dashboard", "API integration", "Database design"],
    ctaLabel: "Start Your Project",
    featured: true,
  },
  {
    id: "business",
    title: "Business Website Development",
    description:
      "Professional business websites designed to build credibility, showcase services, and generate leads.",
    tags: ["Next.js", "Astro", "Tailwind CSS"],
    features: ["Lead generation", "SEO ready", "Contact forms", "Analytics"],
    ctaLabel: "Build My Website",
  },
  {
    id: "responsive",
    title: "Responsive Website Development",
    description:
      "Mobile-first websites that work flawlessly across desktops, tablets, and smartphones.",
    tags: ["HTML", "CSS", "Tailwind", "React", "Astro"],
    features: ["Mobile first", "Cross-browser", "Accessibility", "Performance"],
    ctaLabel: "Let's Build",
  },
  {
    id: "landing",
    title: "Landing Page Development",
    description:
      "High-converting landing pages optimized for marketing campaigns and product launches.",
    tags: ["React", "Next.js", "Astro"],
    features: ["Fast loading", "Conversion focused", "Responsive", "SEO friendly"],
    ctaLabel: "Launch My Landing Page",
  },
  {
    id: "portfolio",
    title: "Portfolio Website Development",
    description:
      "Modern portfolio websites for developers, designers, freelancers, and businesses to showcase work professionally.",
    tags: ["Next.js", "React", "Astro", "Tailwind"],
    features: [
      "Personal branding",
      "Project showcase",
      "Contact form",
      "Modern animations",
    ],
    ctaLabel: "Create My Portfolio",
  },
];
