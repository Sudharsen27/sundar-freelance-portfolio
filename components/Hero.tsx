"use client";

import Image from "next/image";

export default function Hero() {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <section id="home" className="scroll-mt-28">
      <div className="section-balance grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Open for freelance &amp; Fiverr projects
            </span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            React · Next.js · Node.js · APIs &amp; dashboards
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sundar Lingam
          </h1>
          <p className="max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
            I build and ship production-ready websites and web apps—so you get a clear
            scope, fast delivery, and code you can grow on.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Landing pages, dashboards, REST APIs, and full-stack products. Ideal if you
            need a reliable developer on Fiverr or for contract work—with updates you can
            actually follow.
          </p>
          <div className="grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3 sm:gap-3">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="text-emerald-300" aria-hidden>
                ✓
              </span>
              <span>8+ Projects Completed</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="text-emerald-300" aria-hidden>
                ✓
              </span>
              <span>Fast Delivery</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="text-emerald-300" aria-hidden>
                ✓
              </span>
              <span>Clean &amp; Scalable Code</span>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            8+ live projects shipped · From MVPs to production systems
          </p>
          <div className="grid grid-cols-1 gap-3 pt-2 sm:flex sm:flex-wrap">
            <a
              href="/"
              onClick={(e) => handleScroll(e, "contact")}
              className="cta-primary inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold sm:w-auto sm:px-7"
            >
              Start Your Project
            </a>
            <a
              href="/"
              onClick={(e) => handleScroll(e, "projects")}
              className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(56,189,248,0.55)] ring-1 ring-cyan-300/15 transition duration-200 hover:scale-[1.03] hover:border-cyan-200/60 hover:bg-white/10 hover:shadow-[0_18px_38px_-18px_rgba(56,189,248,0.8)] sm:w-auto sm:px-7"
            >
              See work &amp; results
            </a>
          </div>
          <p className="text-sm text-slate-400">
            Prefer email?{" "}
            <a
              href="mailto:sundarlingam272000@gmail.com"
              className="font-medium text-slate-200 underline decoration-cyan-400/50 underline-offset-4 transition hover:text-white"
            >
              sundarlingam272000@gmail.com
            </a>
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="section-shell overflow-hidden rounded-xl p-2 transition hover:scale-[1.02] hover:shadow-glass">
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-slate-900/60 sm:aspect-[4/3]">
              <Image
                src="/hero-developer.svg"
                alt="Illustration representing full-stack web development"
                fill
                className="object-contain object-center p-4 sm:p-6"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
