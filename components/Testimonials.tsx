const testimonials = [
  {
    name: "Priya K.",
    role: "Startup Founder",
    quote:
      "Clear communication from day one. The landing page was delivered on time and looked better than our initial brief.",
    outcome: "Delivered in 5 days",
  },
  {
    name: "Arun M.",
    role: "Operations Manager",
    quote:
      "He rebuilt our dashboard flow and performance improved significantly. Handover was clean and easy for our internal team.",
    outcome: "Faster dashboard experience",
  },
  {
    name: "Naveen R.",
    role: "Product Lead",
    quote:
      "Strong full-stack support with practical suggestions, not just implementation. We launched smoothly without last-minute issues.",
    outcome: "Production launch without blockers",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28" aria-labelledby="testimonials-heading">
      <div className="section-balance">
        <div className="mb-10 text-center">
          <h2 id="testimonials-heading" className="section-heading">
            Client feedback
          </h2>
          <p className="section-subheading">
            Built for reliability, speed, and quality. Here is what clients appreciated most.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="premium-card flex h-full flex-col p-6"
            >
              <p className="text-sm leading-relaxed text-slate-300">"{item.quote}"</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
                <p className="mt-2 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                  {item.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
