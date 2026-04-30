const points = [
  {
    title: "I solve business problems, not just code",
    body: "Every feature is mapped to outcomes like faster operations, better conversions, or clearer insights.",
  },
  {
    title: "Clean and scalable code",
    body: "Your project is structured for long-term growth, easier maintenance, and smooth handoffs.",
  },
  {
    title: "Strong frontend + backend skills",
    body: "From polished UI to robust APIs and data flows, you get complete product execution in one place.",
  },
  {
    title: "Fast delivery with good communication",
    body: "Clear milestones, regular updates, and dependable timelines so your project keeps moving.",
  },
];

export default function ValueProps() {
  return (
    <section id="why-me" className="scroll-mt-28" aria-labelledby="why-me-heading">
      <div className="section-balance">
        <div className="mb-10 text-center">
          <h2 id="why-me-heading" className="section-heading">
            Why Hire Me
          </h2>
          <p className="section-subheading">
            High-converting products come from clear execution, strong engineering, and
            focused collaboration.
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
