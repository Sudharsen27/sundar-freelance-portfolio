const points = [
  {
    title: "Clear communication",
    body: "Regular updates, plain-English explanations, and quick replies—so you always know where your project stands.",
  },
  {
    title: "Reliable delivery",
    body: "Milestones, realistic timelines, and code you can deploy—built for real users, not just demos.",
  },
  {
    title: "Modern, maintainable stack",
    body: "React, Next.js, Node.js, and PostgreSQL—clean structure so your product is easy to extend later.",
  },
  {
    title: "Aligned with your goals",
    body: "SEO-friendly pages, responsive UI, APIs, auth, and hosting—I match the tech to your budget and timeline.",
  },
];

export default function ValueProps() {
  return (
    <section
      id="why-me"
      className="scroll-mt-28"
      aria-labelledby="why-me-heading"
    >
      <div className="section-balance">
        <div className="mb-10 text-center">
          <h2
            id="why-me-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Why hire me for your project
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
            Whether you need a landing page, a dashboard, or a full product—here is what
            you get when we work together (including orders through{" "}
            <span className="text-slate-300">Fiverr</span> or direct hire).
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {points.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-white/[0.08] bg-slate-950/50 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-blue-500/20"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-lg font-semibold text-cyan-300 ring-1 ring-cyan-500/20"
                aria-hidden
              >
                {"\u2713"}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
