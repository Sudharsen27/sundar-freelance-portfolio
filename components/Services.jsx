function ServiceIcon({ type, gradientId }) {
  const gid = `svc-${gradientId}`;
  const grad = (
    <defs>
      <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="35%" stopColor="#a78bfa" />
        <stop offset="70%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#fb923c" />
      </linearGradient>
    </defs>
  );

  switch (type) {
    case "fullstack":
      return (
        <svg
          className="h-16 w-16 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {grad}
          <rect
            x="8"
            y="14"
            width="40"
            height="28"
            rx="3"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
          />
          <path
            d="M14 22h20M14 28h16M14 34h20"
            stroke={`url(#${gid})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="52"
            cy="22"
            r="8"
            stroke={`url(#${gid})`}
            strokeWidth="2"
          />
          <path
            d="M52 18v8M48 22h8"
            stroke={`url(#${gid})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "frontend":
      return (
        <svg
          className="h-16 w-16 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {grad}
          <rect
            x="18"
            y="8"
            width="28"
            height="48"
            rx="4"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
          />
          <path
            d="M26 16h12M26 22h12"
            stroke={`url(#${gid})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M22 36c8-6 20-2 22 10"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M38 32l6-4 2 8-8 2z"
            fill={`url(#${gid})`}
            opacity="0.9"
          />
        </svg>
      );
    case "api":
      return (
        <svg
          className="h-16 w-16 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {grad}
          <circle cx="20" cy="32" r="10" stroke={`url(#${gid})`} strokeWidth="2.5" />
          <circle cx="44" cy="22" r="8" stroke={`url(#${gid})`} strokeWidth="2.5" />
          <circle cx="44" cy="42" r="8" stroke={`url(#${gid})`} strokeWidth="2.5" />
          <path
            d="M28 28l10-4M28 36l10 4M36 22l4 6M36 42l4-6"
            stroke={`url(#${gid})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bug":
      return (
        <svg
          className="h-16 w-16 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {grad}
          <ellipse
            cx="32"
            cy="34"
            rx="14"
            ry="10"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
          />
          <path
            d="M22 28c-2-4 2-8 10-8s12 4 10 8"
            stroke={`url(#${gid})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M26 38h4M34 38h4"
            stroke={`url(#${gid})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M46 18l8-4M50 22l6-2"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg
          className="h-16 w-16 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {grad}
          <path
            d="M18 40c-4 0-8-4-8-9 0-5 4-9 9-9h2a12 12 0 0 1 22-4 8 8 0 0 1 15 6c0 4-3 7-7 7H18z"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M32 28v14M26 35l6-7 6 7"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building scalable and responsive web applications.",
    stack: "React, Next.js, Node.js, PostgreSQL",
    iconType: "fullstack",
    id: "fullstack",
  },
  {
    title: "Modern Frontend Development",
    description: "Creating sleek and user-friendly interfaces.",
    stack: "React, Tailwind CSS",
    iconType: "frontend",
    id: "frontend",
  },
  {
    title: "API Development & Integration",
    description: "Secure REST APIs and third-party integrations.",
    stack: "Node.js, REST API, JWT",
    iconType: "api",
    id: "api",
  },
  {
    title: "Bug Fixing & Optimization",
    description: "Fixing issues and boosting performance.",
    stack: "Debugging & Optimization",
    iconType: "bug",
    id: "bug",
  },
  {
    title: "Deployment & Cloud Setup",
    description: "Deploying apps on AWS, Vercel, Cloudflare.",
    stack: "AWS, Vercel, Cloudflare",
    iconType: "cloud",
    id: "cloud",
  },
];

export default function Services() {
  const [a, b, c, d, e] = services;

  return (
    <section id="services" className="relative scroll-mt-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl"
        aria-hidden
      >
        <div className="absolute -left-[10%] top-[5%] h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-purple-600/25 blur-[100px]" />
        <div className="absolute -right-[5%] top-1/3 h-[min(380px,45vw)] w-[min(380px,45vw)] rounded-full bg-blue-600/20 blur-[90px]" />
        <div className="absolute bottom-[0%] left-1/3 h-[min(300px,40vw)] w-[min(300px,40vw)] rounded-full bg-indigo-500/15 blur-[80px]" />
      </div>

      <div className="section-balance space-y-10 py-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Services
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            Packages and custom work—tell me your goal and I&apos;ll propose the right
            stack and timeline.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[a, b, c].map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-slate-950/70 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/25 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.25)]"
            >
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-white/5 transition group-hover:ring-purple-500/20">
                  <ServiceIcon type={item.iconType} gradientId={item.id} />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-center text-xs leading-relaxed text-slate-500">
                  {item.stack}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {[d, e].map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-slate-950/70 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)]"
            >
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-white/5 transition group-hover:ring-blue-500/20">
                  <ServiceIcon type={item.iconType} gradientId={item.id} />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-center text-xs leading-relaxed text-slate-500">
                  {item.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
