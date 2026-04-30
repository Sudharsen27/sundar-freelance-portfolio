type Project = {
  title: string;
  description: string;
  tech: string[];
  result: string;
  liveHref: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "MDM Data Governance Platform",
    description:
      "Built a full-stack data platform to manage and improve data quality. Includes data ingestion, validation with a rules engine, ETL pipeline simulation, stewardship queue for manual review, and analytics dashboards powered by PostgreSQL and Snowflake.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Snowflake",
      "JWT",
      "CSV Upload",
      "Rules Engine",
      "ETL Simulation",
    ],
    result: "Improved governance workflows with end-to-end quality controls",
    liveHref: "https://mdm-data-governance-platform-fronte.vercel.app/login",
    gradient: "from-indigo-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "Shop Sphere",
    description:
      "Full-stack e-commerce application with JWT authentication, product catalog, cart functionality, REST API integration, and Razorpay payment gateway.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    result: "Checkout and payments integrated successfully",
    liveHref: "https://shopsphere-frontend-self.vercel.app/",
    gradient: "from-rose-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "Student Dashboard",
    description:
      "Built an interactive dashboard to search, sort, add, edit, and analyze student marks with a Next.js frontend, Node.js backend API, and Snowflake as the database.",
    tech: ["Next.js", "Node.js", "Snowflake", "Dashboard", "Data Visualization"],
    result: "Data operations and analytics centralized",
    liveHref: "https://student-dashboard-snowflake-fronten.vercel.app/",
    gradient: "from-indigo-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "MediLink",
    description:
      "Secure full-stack appointment booking web app with JWT authentication, protected REST APIs, responsive UI, and PostgreSQL data persistence.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    result: "Appointment workflow deployed end-to-end",
    liveHref: "https://medilink-frontendapp.pages.dev/login",
    gradient: "from-teal-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "Job Board Platform",
    description:
      "Full-stack job portal with JWT authentication, RESTful API integration, responsive job listings, and secure user registration with role-based access control.",
    tech: ["MERN", "JWT", "REST API", "RBAC"],
    result: "Secure auth and role-based flows shipped",
    liveHref: "https://jobboardapplication.pages.dev/",
    gradient: "from-blue-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "Web Applications",
    description:
      "Built a responsive multi-feature web application with reusable components, integrated email synchronization, and Web3Forms-based form processing.",
    tech: ["Next.js", "Tailwind CSS", "Web3Forms"],
    result: "Reusable components enabled faster delivery",
    liveHref: "https://webapplicationss.netlify.app/",
    gradient: "from-cyan-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "School of Sustainability",
    description:
      "Developed and deployed a responsive, SEO-optimized website with reusable UI components using Cloudflare Pages for global delivery.",
    tech: ["Next.js", "Cloudflare Pages", "SEO", "Responsive"],
    result: "Delivered in 5 days",
    liveHref: "https://schoolofsustainability-astro-home.pages.dev/",
    gradient: "from-emerald-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "Energy Lab",
    description:
      "Engineered a modern, component-based frontend with mobile-first responsive design and optimized performance for improved user engagement.",
    tech: ["React", "Responsive", "Performance"],
    result: "Improved mobile UX consistency",
    liveHref: "https://energ-astro-home.pages.dev/",
    gradient: "from-amber-950/90 via-slate-900 to-slate-950",
  },
  {
    title: "Galaxy Power",
    description:
      "Developed a structured, responsive corporate website with optimized layout design and intuitive navigation for enhanced user experience.",
    tech: ["Next.js", "Responsive", "Corporate"],
    result: "Structured corporate site launched",
    liveHref: "https://galaxypower-home.pages.dev/",
    gradient: "from-violet-950/90 via-slate-900 to-slate-950",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="section-balance space-y-10 sm:space-y-12">
        <div className="text-center">
          <h2 className="section-heading">My Projects</h2>
          <p className="section-subheading">
            Real client work and live products—click through to see quality, speed, and
            attention to detail.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="premium-card group flex h-full flex-col overflow-hidden"
            >
              <div
                className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute right-3 top-3 rounded-md bg-green-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
                  Live
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="text-center text-lg font-bold leading-snug text-white/95 drop-shadow-md sm:text-xl">
                    {project.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-body flex-1">{project.description}</p>
                <p className="inline-flex w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  {project.result}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span key={tag} className="card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary mt-2 flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold"
                  aria-label={`View live demo: ${project.title}`}
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
