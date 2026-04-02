import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28">
      <div className="section-balance grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Open for freelance &amp; contract work
            </span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            Full-stack developer · React · Next.js · Node.js
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sundar Lingam
          </h1>
          <p className="text-lg font-medium text-slate-200 sm:text-xl">
            I ship fast, scalable web apps that look sharp and convert—so you can grow
            your business with confidence.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Landing pages, dashboards, APIs, and full products—delivered with clean code,
            clear updates, and a production mindset. Perfect if you&apos;re hiring on
            Fiverr or need a reliable dev for your next build.
          </p>
          <p className="text-sm text-slate-500">
            8+ live projects shipped · From MVPs to production systems
          </p>
          <div className="grid grid-cols-1 gap-3 pt-1 sm:flex sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/35 sm:w-auto sm:px-7"
            >
              Discuss your project
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-7"
            >
              See work &amp; results
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="section-shell overflow-hidden rounded-xl p-2 transition hover:scale-[1.02] hover:shadow-glass">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-900/60">
              <Image
                src="/hero-developer.svg"
                alt="Developer illustration"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
