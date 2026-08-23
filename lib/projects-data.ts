export type ProjectKnowledge = {
  title: string;
  description: string;
  tech: string[];
  result: string;
  liveHref?: string;
  caseStudyHref?: string;
  status?: "live" | "in-development" | "enterprise";
};

export const PROJECTS_KNOWLEDGE: ProjectKnowledge[] = [
  {
    title: "Restaurant ERP Platform",
    description:
      "Enterprise restaurant ERP on AWS for multi-location operations, inventory, procurement, executive dashboards, and cloud-native deployment with ECS, RDS, and ElastiCache.",
    tech: [
      "React",
      "FastAPI",
      "Amazon ECS",
      "Amazon RDS",
      "AWS CDK",
    ],
    result: "Enterprise AWS cloud architecture",
    liveHref:
      "https://restaurant-resource-planning-system.vercel.app/",
    caseStudyHref: "/projects/restaurant-erp",
    status: "enterprise",
  },

  {
    title: "MDM Data Governance Platform",
    description:
      "Full-stack data platform with ingestion, validation rules engine, ETL simulation, stewardship queue, and analytics dashboards.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Snowflake"],
    result: "End-to-end data quality governance",
    liveHref:
      "https://mdm-data-governance-platform-fronte.vercel.app/login",
    status: "live",
  },

  {
    title: "Shop Sphere",
    description:
      "Full-stack e-commerce platform with JWT authentication, product catalog, cart, REST APIs, and Razorpay payment integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
    result: "Checkout and payments integrated",
    liveHref: "https://shopsphere-frontend-self.vercel.app/",
    status: "live",
  },

  {
    title: "Nexora CRM",
    description:
      "Production-grade multi-tenant SaaS CRM with lead management, pipelines, role-based access, and analytics dashboards.",
    tech: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "TypeScript",
      "JWT",
      "Python",
    ],
    result: "Multi-tenant SaaS CRM platform",
    liveHref: "https://nexora-crm-iota.vercel.app",
    status: "live",
  },

  {
    title: "MediLink",
    description:
      "Secure appointment booking application with JWT authentication, protected REST APIs, and PostgreSQL persistence.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    result: "End-to-end appointment workflow",
    liveHref: "https://medilink-frontendapp.pages.dev/login",
    status: "live",
  },

  {
    title: "Job Board Platform",
    description:
      "Full-stack job portal with JWT authentication, RESTful APIs, responsive listings, and role-based access control.",
    tech: ["MERN", "JWT", "REST API", "RBAC"],
    result: "Secure role-based authentication shipped",
    liveHref: "https://jobboardapplication.pages.dev/",
    status: "live",
  },

  {
    title: "Student Dashboard",
    description:
      "Interactive dashboard to search, sort, add, edit, and analyze student marks with Snowflake backend.",
    tech: ["Next.js", "Node.js", "Snowflake"],
    result: "Centralized data analytics",
    liveHref:
      "https://student-dashboard-snowflake-fronten.vercel.app/",
    status: "live",
  },

  {
    title: "School of Sustainability",
    description:
      "Responsive, SEO-optimized website with reusable UI components deployed on Cloudflare Pages.",
    tech: ["Next.js", "Cloudflare", "SEO"],
    result: "Delivered in 5 days",
    liveHref: "https://sos-website-ruby.vercel.app/",
    status: "live",
  },

  {
    title: "KISEM",
    description:
      "Corporate website for Kotak–IIT Madras Save Energy Mission showcasing energy audits, MSME programs, pan-India centers, and sustainability initiatives.",
    tech: ["Astro", "Cloudflare Pages", "Responsive", "SEO"],
    result: "Pan-India energy mission platform live",
    liveHref: "https://kisem-astro-home.pages.dev/",
    status: "live",
  },

  {
    title: "Energy Lab",
    description:
      "Modern component-based frontend with mobile-first responsive design and optimized performance for improved user engagement.",
    tech: ["Astro", "Cloudflare Pages", "Responsive", "Performance"],
    result: "Improved mobile UX consistency",
    liveHref: "https://energ-astro-home.pages.dev/",
    status: "live",
  },

  {
    title: "Galaxy Power",
    description:
      "Structured, responsive corporate website with optimized layout design and intuitive navigation for enhanced user experience.",
    tech: ["Astro", "Cloudflare Pages", "Responsive", "Corporate"],
    result: "Structured corporate site launched",
    liveHref: "https://galaxypower-home.pages.dev/",
    status: "live",
  },
];