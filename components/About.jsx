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
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/60 shadow-[0_0_80px_-30px_rgba(59,130,246,0.35)] backdrop-blur-md">
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
                If you&apos;re hiring on{" "}
                <span className="font-medium text-slate-300">Fiverr</span> or as a
                contractor, you get someone who communicates clearly, respects deadlines,
                and cares about code quality—not just &quot;making it work.&quot;
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
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 shadow-inner ring-1 ring-blue-500/10">
                <Image
                  src="/about-workspace.svg"
                  alt="Developer working at a laptop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
