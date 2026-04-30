import Image from "next/image";

const highlights = [
  "Production-ready React & Next.js frontends",
  "REST APIs, auth (JWT), and PostgreSQL",
  "Responsive, accessible UI with performance in mind",
  "Clear handoffs and documentation when you need them",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="section-balance">
        <div className="premium-card relative overflow-hidden">
          <div
            className="h-[3px] w-full bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"
            aria-hidden
          />
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
            <div className="space-y-6 lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About Me
              </h2>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                I&apos;m a software engineer focused on full-stack delivery: React and
                Next.js on the frontend, Node.js and solid APIs on the backend, with
                PostgreSQL when your data matters. I&apos;ve shipped real apps for real
                users—schools, labs, shops, dashboards, and more.
              </p>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                If you&apos;re hiring for a freelance project or long-term collaboration,
                you get someone who communicates clearly, respects deadlines, and cares
                about code quality—not just &quot;making it work.&quot;
              </p>
              <ul className="space-y-2.5 border-t border-white/10 pt-6">
                {highlights.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-sm text-slate-300 sm:text-base"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-md space-y-4 lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 shadow-inner ring-1 ring-blue-500/10">
                <Image
                  src="/about.png"
                  alt="About me showcase image"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-cyan-200/90">
                    Response time
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">Within 24 hours</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Quick updates and clear next steps.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-blue-200/90">
                    Delivery focus
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">On-time shipping</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Scope clarity, milestones, and quality checks.
                  </p>
                </div>
                <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-wide text-violet-200/90">
                    Build quality
                  </p>
                  <p className="mt-1 text-xl font-bold text-white">
                    Clean code + production-ready architecture
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Scalable structure, responsive UI, and maintainable components from
                    day one.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  What clients get
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                    Weekly progress updates
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                    Source code handover
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                    Post-launch support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
