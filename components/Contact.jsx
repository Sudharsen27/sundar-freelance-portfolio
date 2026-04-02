"use client";

const FIVERR_GIG_URL = "https://www.fiverr.com/";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="section-balance mx-auto max-w-lg">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s build your next project
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            Tell me what you need—scope, timeline, and budget. I usually reply within{" "}
            <span className="font-medium text-slate-300">24 hours</span>.
          </p>
        </div>
        <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={FIVERR_GIG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400/50 hover:bg-emerald-500/15 sm:w-auto"
          >
            View my gig on Fiverr
          </a>
          <span className="hidden text-slate-600 sm:inline" aria-hidden>
            ·
          </span>
          <a
            href="mailto:sundarlingam272000@gmail.com"
            className="text-sm font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-slate-300"
          >
            sundarlingam272000@gmail.com
          </a>
        </div>
        <form
          className="rounded-2xl border border-white/[0.08] bg-slate-950/50 p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500"
                placeholder="How should I address you?"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="glow-focus w-full resize-y rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500"
                placeholder="What do you need built? (e.g. landing page, admin dashboard, API). Any deadline or budget range helps me quote faster."
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              >
                Send message
              </button>
            </div>
            <p className="text-center text-xs text-slate-500">
              No spam—your message goes only to me. For urgent work, mention it in the
              text.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
