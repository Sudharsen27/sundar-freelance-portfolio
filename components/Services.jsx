const services = [
  {
    id: "fullstack",
    badge: "FS",
    title: "Full-Stack Web Development",
    description:
      "End-to-end product development from frontend to backend with clean architecture and production-ready delivery.",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    highlight: "Best for: MVP to scale",
    startingAt: "$250",
    delivery: "5-7 days",
    revisions: "2 revisions",
  },
  {
    id: "frontend",
    badge: "UI",
    title: "Modern Frontend Development",
    description:
      "Pixel-perfect, responsive, and high-performance interfaces focused on conversion and user experience.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    highlight: "Best for: Landing pages & dashboards",
    startingAt: "$120",
    delivery: "2-4 days",
    revisions: "2 revisions",
  },
  {
    id: "api",
    badge: "API",
    title: "API Development & Integration",
    description:
      "Secure and scalable APIs with reliable third-party integrations, auth flows, and robust data handling.",
    stack: ["Node.js", "REST API", "JWT", "Webhooks"],
    highlight: "Best for: SaaS integrations",
    startingAt: "$180",
    delivery: "3-5 days",
    revisions: "2 revisions",
  },
  {
    id: "bug",
    badge: "FIX",
    title: "Bug Fixing & Optimization",
    description:
      "Quick bug resolution, code refactoring, and measurable performance improvements for existing apps.",
    stack: ["Debugging", "Refactoring", "Core Web Vitals"],
    highlight: "Best for: Existing projects",
    startingAt: "$80",
    delivery: "1-3 days",
    revisions: "3 revisions",
  },
  {
    id: "cloud",
    badge: "OPS",
    title: "Deployment & Cloud Setup",
    description:
      "Smooth deployment pipelines and cloud setup with monitoring, SSL, and reliable production configuration.",
    stack: ["AWS", "Vercel", "Cloudflare", "CI/CD"],
    highlight: "Best for: Launch-ready delivery",
    startingAt: "$150",
    delivery: "2-4 days",
    revisions: "2 revisions",
  },
];

export default function Services() {
  const top = services.slice(0, 3);
  const bottom = services.slice(3, 5);

  return (
    <section id="services" className="relative scroll-mt-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl"
        aria-hidden
      >
        <div className="absolute -left-[10%] top-[5%] h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-purple-600/25 blur-[100px]" />
        <div className="absolute -right-[5%] top-1/3 h-[min(380px,45vw)] w-[min(380px,45vw)] rounded-full bg-blue-600/20 blur-[90px]" />
        <div className="absolute bottom-[0%] left-1/3 h-[min(300px,40vw)] w-[min(300px,40vw)] rounded-full bg-indigo-500/15 blur-[80px]" />
      </div>

      <div className="section-balance space-y-10 py-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Services
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            Professional service packages tailored for modern web products and
            freelance business outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-slate-950/70 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/25 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.25)]"
            >
              <div className="mb-4">
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-200">
                  {item.highlight}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-[11px] font-bold uppercase tracking-wide text-purple-200">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-slate-900/50 p-3 text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    {item.startingAt}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Delivery
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    {item.delivery}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Revisions
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    {item.revisions}
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {bottom.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-slate-950/70 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)]"
            >
              <div className="mb-4">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                  {item.highlight}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-[11px] font-bold uppercase tracking-wide text-blue-200">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-slate-900/50 p-3 text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    {item.startingAt}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Delivery
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    {item.delivery}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Revisions
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    {item.revisions}
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
