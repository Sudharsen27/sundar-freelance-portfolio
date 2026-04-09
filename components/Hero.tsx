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
              Open for freelance &amp; contract work
            </span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            Full-stack developer · React · Next.js · Node.js
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sundar Lingam
          </h1>
          <p className="inline-flex w-fit max-w-full flex-wrap items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200 sm:text-sm">
            Available for Freelance | React / Next.js Developer | 2-3 Day Delivery
          </p>
          <p className="text-lg font-medium text-slate-200 sm:text-xl">
            I ship fast, scalable web apps that look sharp and convert—so you can grow
            your business with confidence.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Landing pages, dashboards, APIs, and full products—delivered with clean code,
            clear updates, and a production mindset. Perfect if you&apos;re hiring on
            Fiverr or need a reliable dev for your next build.
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
                src="/b52a518b-1db6-482f-9dc4-135d10be264c.png"
                alt="Hero showcase image"
                fill
                className="object-cover object-center scale-[1.04] sm:scale-[1.08] lg:scale-[1.12]"
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
