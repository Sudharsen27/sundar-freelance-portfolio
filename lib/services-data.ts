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
      "Modern, fast, SEO-friendly websites for businesses, startups, and creators, designed to build credibility and support long-term growth.",
    tags: ["React", "Next.js", "Astro", "Tailwind CSS"],
    features: [
      "SEO optimized",
      "Fast loading",
      "Mobile responsive",
      "Secure",
    ],
    ctaLabel: "Get Free Quote",
  },

  {
    id: "web-app",
    title: "Web Application Development",
    description:
      "Custom web applications including admin dashboards, booking systems, CRMs, portals, SaaS platforms, and business management software.",
    tags: [
      "React",
      "Node.js",
      "Python",
      "Express",
      "PostgreSQL",
      "MongoDB",
    ],
    features: [
      "Authentication",
      "Dashboard",
      "API integration",
      "Database design",
    ],
    ctaLabel: "Start Your Project",
    featured: true,
  },

  {
    id: "business",
    title: "Business Website Development",
    description:
      "Professional business websites that showcase your services, establish credibility, generate leads, and provide a strong online presence.",
    tags: ["Next.js", "Astro", "Tailwind CSS"],
    features: [
      "Lead generation",
      "SEO ready",
      "Contact forms",
      "Analytics",
    ],
    ctaLabel: "Build My Website",
  },

  {
    id: "responsive",
    title: "Responsive Website Development",
    description:
      "Mobile-first websites designed to provide a reliable experience across desktops, tablets, and smartphones.",
    tags: ["HTML", "CSS", "Tailwind", "React", "Astro"],
    features: [
      "Mobile first",
      "Cross-browser",
      "Accessibility",
      "Performance",
    ],
    ctaLabel: "Let's Build",
  },

  {
    id: "landing",
    title: "Landing Page Development",
    description:
      "High-performing landing pages for marketing campaigns, products, services, and launches, with a focus on speed, usability, and conversions.",
    tags: ["React", "Next.js", "Astro"],
    features: [
      "Fast loading",
      "Conversion focused",
      "Responsive",
      "SEO friendly",
    ],
    ctaLabel: "Launch My Landing Page",
  },

  {
    id: "portfolio",
    title: "Portfolio Website Development",
    description:
      "Modern portfolio websites for developers, designers, freelancers, and businesses to showcase their work, skills, and professional experience.",
    tags: ["Next.js", "React", "Astro", "Tailwind"],
    features: [
      "Personal branding",
      "Project showcase",
      "Contact form",
      "Modern animations",
    ],
    ctaLabel: "Create My Portfolio",
  },

  {
    id: "saas",
    title: "SaaS Products",
    description:
      "Scalable SaaS platforms with authentication, role-based access, dashboards, APIs, and multi-tenant architecture for growing products.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    features: [
      "Multi-tenant architecture",
      "Auth & roles",
      "Admin dashboards",
      "API-first design",
    ],
    ctaLabel: "Build My SaaS",
  },

  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    description:
      "Custom AI agents and workflow automation for customer support, repetitive tasks, API integrations, and business operations.",
    tags: ["AI", "Automation", "APIs", "Python"],
    features: [
      "Custom agents",
      "Workflow automation",
      "API integrations",
      "Business process savings",
    ],
    ctaLabel: "Automate With AI",
  },
];