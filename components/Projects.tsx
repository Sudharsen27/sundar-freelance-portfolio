"use client";

import { motion } from "framer-motion";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";

type Project = {
  title: string;
  description: string;
  tech: string[];
  result: string;
  liveHref: string;
  gradient: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "MDM Data Governance Platform",
    description:
      "Full-stack data platform with ingestion, validation rules engine, ETL simulation, stewardship queue, and analytics dashboards.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Snowflake"],
    result: "End-to-end data quality governance",
    liveHref: "https://mdm-data-governance-platform-fronte.vercel.app/login",
    gradient: "from-violet-900/80 via-card to-bg",
    featured: true,
  },
  {
    title: "Shop Sphere",
    description:
      "Full-stack e-commerce with JWT auth, product catalog, cart, REST APIs, and Razorpay payment integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
    result: "Checkout & payments integrated",
    liveHref: "https://shopsphere-frontend-self.vercel.app/",
    gradient: "from-rose-900/80 via-card to-bg",
    featured: true,
  },
  {
    title: "Student Dashboard",
    description:
      "Interactive dashboard to search, sort, add, edit, and analyze student marks with Snowflake backend.",
    tech: ["Next.js", "Node.js", "Snowflake"],
    result: "Centralized data analytics",
    liveHref: "https://student-dashboard-snowflake-fronten.vercel.app/",
    gradient: "from-indigo-900/80 via-card to-bg",
    featured: true,
  },
  {
    title: "MediLink",
    description:
      "Secure appointment booking app with JWT authentication, protected REST APIs, and PostgreSQL persistence.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    result: "End-to-end appointment workflow",
    liveHref: "https://medilink-frontendapp.pages.dev/login",
    gradient: "from-teal-900/80 via-card to-bg",
  },
  {
    title: "Job Board Platform",
    description:
      "Full-stack job portal with JWT auth, RESTful APIs, responsive listings, and role-based access control.",
    tech: ["MERN", "JWT", "REST API", "RBAC"],
    result: "Secure role-based auth shipped",
    liveHref: "https://jobboardapplication.pages.dev/",
    gradient: "from-blue-900/80 via-card to-bg",
  },
  {
    title: "School of Sustainability",
    description:
      "Responsive, SEO-optimized website with reusable UI components deployed on Cloudflare Pages.",
    tech: ["Next.js", "Cloudflare", "SEO"],
    result: "Delivered in 5 days",
    liveHref: "https://sos-website-ruby.vercel.app/",
    gradient: "from-emerald-900/80 via-card to-bg",
  },
  {
    title: "KISEM",
    description:
      "Corporate website for Kotak–IIT Madras Save Energy Mission — showcasing energy audits, MSME programs, pan-India centers, and sustainability initiatives.",
    tech: ["Astro", "Cloudflare Pages", "Responsive", "SEO"],
    result: "Pan-India energy mission platform live",
    liveHref: "https://kisem-astro-home.pages.dev/",
    gradient: "from-amber-900/80 via-card to-bg",
  },
  {
    title: "Energy Lab",
    description:
      "Modern, component-based frontend with mobile-first responsive design and optimized performance for improved user engagement.",
    tech: ["Astro", "Cloudflare Pages", "Responsive", "Performance"],
    result: "Improved mobile UX consistency",
    liveHref: "https://energ-astro-home.pages.dev/",
    gradient: "from-orange-900/80 via-card to-bg",
  },
  {
    title: "Galaxy Power",
    description:
      "Structured, responsive corporate website with optimized layout design and intuitive navigation for enhanced user experience.",
    tech: ["Astro", "Cloudflare Pages", "Responsive", "Corporate"],
    result: "Structured corporate site launched",
    liveHref: "https://galaxypower-home.pages.dev/",
    gradient: "from-violet-900/80 via-card to-bg",
  },
];

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-28" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionReveal>
          <SectionHeader
            badge="Featured Work"
            title="Projects That Speak Results"
            subtitle="Live products built for real clients — premium design, solid engineering, and measurable business impact."
            headingId="projects-heading"
          />
        </SectionReveal>

        <StaggerContainer className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 shadow-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent-purple/30 hover:shadow-cardHover"
                whileHover={{ scale: 1.01 }}
              >
                <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.2),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_60%)]" />
                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.1) 100%)",
                    }}
                  />
                  {project.featured ? (
                    <span className="absolute left-4 top-4 rounded-full border border-accent-purple/40 bg-accent-purple/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-purple backdrop-blur-sm">
                      Featured
                    </span>
                  ) : null}
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-6"
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-center font-display text-xl font-bold text-text-primary drop-shadow-lg">
                      {project.title}
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <span className="inline-flex w-fit rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                    {project.result}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex w-full items-center justify-center gap-2 py-2.5 text-sm"
                      aria-label={`Live demo: ${project.title}`}
                    >
                      Live Demo
                      <ExternalIcon />
                    </a>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
