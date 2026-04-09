const faqs = [
  {
    q: "How quickly can you start?",
    a: "For most projects, I can start within 1-3 days after scope confirmation.",
  },
  {
    q: "What do you need from me before starting?",
    a: "A clear goal, references (if any), required pages/features, and expected timeline.",
  },
  {
    q: "Do you provide revisions?",
    a: "Yes. Revisions are included based on the selected package and agreed scope.",
  },
  {
    q: "Do you handle deployment too?",
    a: "Yes. I can deploy on Vercel, Netlify, or your preferred cloud setup and verify production readiness.",
  },
  {
    q: "Will I get source code and handover support?",
    a: "Yes. You receive full source code and a clean handover with setup guidance.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28" aria-labelledby="faq-heading">
      <div className="section-balance">
        <div className="mb-10 text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
            Quick answers before we start your project.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/[0.08] bg-slate-950/50 p-5 backdrop-blur-sm transition hover:border-blue-500/20"
            >
              <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-white sm:text-base">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
