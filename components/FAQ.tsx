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
          <h2 id="faq-heading" className="section-heading">
            Frequently asked questions
          </h2>
          <p className="section-subheading">
            Quick answers before we start your project.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="premium-card group p-5"
            >
              <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-white sm:text-base">
                {item.q}
              </summary>
              <p className="card-body mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
