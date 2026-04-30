// "use client";

// import Image from "next/image";

// export default function Hero() {
//   const handleScroll = (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     sectionId: string
//   ) => {
//     event.preventDefault();
//     const el = document.getElementById(sectionId);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//     if (window.location.hash) {
//       window.history.replaceState(
//         null,
//         "",
//         window.location.pathname + window.location.search
//       );
//     }
//   };

//   return (
//     <section id="home" className="scroll-mt-28">
//       <div className="section-balance grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//         <div className="space-y-6">
//           <div className="flex flex-wrap items-center gap-2">
//             <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
//               Open for freelance &amp; Fiverr projects
//             </span>
//           </div>
//           <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
//             React · Next.js · Node.js · APIs &amp; dashboards
//           </p>
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Sundar Lingam
//           </h1>
//           <p className="max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
//             I build and ship production-ready websites and web apps—so you get a clear
//             scope, fast delivery, and code you can grow on.
//           </p>
//           <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
//             Landing pages, dashboards, REST APIs, and full-stack products. Ideal if you
//             need a reliable developer on Fiverr or for contract work—with updates you can
//             actually follow.
//           </p>
//           <div className="grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3 sm:gap-3">
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
//               <span className="text-emerald-300" aria-hidden>
//                 ✓
//               </span>
//               <span>8+ Projects Completed</span>
//             </div>
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
//               <span className="text-emerald-300" aria-hidden>
//                 ✓
//               </span>
//               <span>Fast Delivery</span>
//             </div>
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
//               <span className="text-emerald-300" aria-hidden>
//                 ✓
//               </span>
//               <span>Clean &amp; Scalable Code</span>
//             </div>
//           </div>
//           <p className="text-sm text-slate-500">
//             8+ live projects shipped · From MVPs to production systems
//           </p>
//           <div className="grid grid-cols-1 gap-3 pt-2 sm:flex sm:flex-wrap">
//             <a
//               href="/"
//               onClick={(e) => handleScroll(e, "contact")}
//               className="cta-primary inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold sm:w-auto sm:px-7"
//             >
//               Start Your Project
//             </a>
//             <a
//               href="/"
//               onClick={(e) => handleScroll(e, "projects")}
//               className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(56,189,248,0.55)] ring-1 ring-cyan-300/15 transition duration-200 hover:scale-[1.03] hover:border-cyan-200/60 hover:bg-white/10 hover:shadow-[0_18px_38px_-18px_rgba(56,189,248,0.8)] sm:w-auto sm:px-7"
//             >
//               See work &amp; results
//             </a>
//           </div>
//           <p className="text-sm text-slate-400">
//             Prefer email?{" "}
//             <a
//               href="mailto:sundarlingam272000@gmail.com"
//               className="font-medium text-slate-200 underline decoration-cyan-400/50 underline-offset-4 transition hover:text-white"
//             >
//               sundarlingam272000@gmail.com
//             </a>
//           </p>
//         </div>
//         <div className="relative mx-auto w-full max-w-md lg:max-w-none">
//           <div className="section-shell overflow-hidden rounded-xl p-2 transition hover:scale-[1.02] hover:shadow-glass">
//             <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-slate-900/60 sm:aspect-[4/3]">
//               <Image
//                 src="/hero-developer.svg"
//                 alt="Illustration representing full-stack web development"
//                 fill
//                 className="object-contain object-center p-4 sm:p-6"
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// export default function Hero() {
//   const handleScroll = (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     sectionId: string
//   ) => {
//     event.preventDefault();
//     const el = document.getElementById(sectionId);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//     if (window.location.hash) {
//       window.history.replaceState(
//         null,
//         "",
//         window.location.pathname + window.location.search
//       );
//     }
//   };

//   return (
//     <section id="home" className="scroll-mt-28">
//       <div className="section-balance grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

//         {/* LEFT SIDE (UNCHANGED BUT SLIGHTLY IMPROVED) */}
//         <div className="space-y-6">
//           <div className="flex flex-wrap items-center gap-2">
//             <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
//               Open for freelance & Fiverr projects
//             </span>
//           </div>

//           <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
//             React · Next.js · Node.js · APIs & dashboards
//           </p>

//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Sundar Lingam
//           </h1>

//           <p className="max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
//             I build modern web apps that help businesses scale and convert users.
//           </p>

//           <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
//             Landing pages, dashboards, APIs, and full-stack systems — built fast,
//             clean, and ready for production.
//           </p>

//           {/* Trust */}
//           <div className="grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3 sm:gap-3">
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
//               ✓ 8+ Projects
//             </div>
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
//               ✓ Fast Delivery
//             </div>
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
//               ✓ Scalable Code
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="grid grid-cols-1 gap-3 pt-2 sm:flex sm:flex-wrap">
//             <a
//               href="/"
//               onClick={(e) => handleScroll(e, "contact")}
//               className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition"
//             >
//               Start Your Project 🚀
//             </a>

//             <a
//               href="/"
//               onClick={(e) => handleScroll(e, "projects")}
//               className="border border-cyan-400/40 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition"
//             >
//               See Work
//             </a>
//           </div>

//           <p className="text-sm text-slate-400">
//             Prefer email?{" "}
//             <a
//               href="mailto:sundarlingam272000@gmail.com"
//               className="underline text-white"
//             >
//               sundarlingam272000@gmail.com
//             </a>
//           </p>
//         </div>

//         {/* RIGHT SIDE (MODERN REPLACEMENT) */}
//         <div className="relative mx-auto w-full max-w-md lg:max-w-none">

//           {/* Glow */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 blur-2xl"></div>

//           {/* Card */}
//           <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-5 shadow-xl">

//             {/* Header dots */}
//             <div className="flex gap-2">
//               <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//             </div>

//             {/* Title */}
//             <h3 className="text-white font-semibold text-lg">
//               Live Project Preview
//             </h3>

//             {/* Progress bars */}
//             <div className="space-y-3">
//               <div className="h-2 bg-white/10 rounded-full">
//                 <div className="w-[80%] h-full bg-cyan-400 rounded-full"></div>
//               </div>
//               <div className="h-2 bg-white/10 rounded-full">
//                 <div className="w-[60%] h-full bg-blue-400 rounded-full"></div>
//               </div>
//               <div className="h-2 bg-white/10 rounded-full">
//                 <div className="w-[90%] h-full bg-emerald-400 rounded-full"></div>
//               </div>
//             </div>

//             {/* Tech stack */}
//             <div className="flex flex-wrap gap-2">
//               {["React", "Next.js", "API", "Tailwind"].map((tech, i) => (
//                 <span
//                   key={i}
//                   className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Code */}
//             <div className="rounded-lg bg-black/80 p-3 text-xs text-green-400 font-mono">
// {`const app = {
//   performance: "fast",
//   scalable: true,
//   ui: "modern"
// };`}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// export default function Hero() {
//   const handleScroll = (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     sectionId: string
//   ) => {
//     event.preventDefault();
//     const el = document.getElementById(sectionId);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <section id="home" className="relative overflow-hidden scroll-mt-28">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl"></div>

//       <div className="section-balance grid items-center gap-10 lg:grid-cols-2 lg:gap-16 relative">

//         {/* LEFT SIDE */}
//         <div className="space-y-7">

//           <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
//             Available for Freelance & Fiverr
//           </span>

//           <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
//             I help businesses turn ideas into
//             <span className="text-cyan-400"> fast, scalable web apps 🚀</span>
//           </h1>

//           <p className="text-cyan-300 font-medium">
//             Trusted for fast delivery & production-ready code
//           </p>

//           <p className="max-w-xl text-base sm:text-lg text-slate-400">
//             Full-stack developer specializing in React, Next.js, APIs & dashboards.
//             Clean architecture. Smooth UI. Built for real-world usage.
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
//             {["8+ Projects", "Fast Delivery", "Scalable Code"].map((item, i) => (
//               <div
//                 key={i}
//                 className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur"
//               >
//                 ✓ {item}
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 pt-2">
//             <a
//               href="/"
//               onClick={(e) => handleScroll(e, "contact")}
//               className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-7 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 hover:scale-[1.05]"
//             >
//               Get Your Project Started 🚀
//             </a>

//             <a
//               href="/"
//               onClick={(e) => handleScroll(e, "projects")}
//               className="border border-cyan-400/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition hover:scale-[1.05]"
//             >
//               See Work
//             </a>
//           </div>

//           <p className="text-xs text-slate-500">
//             Available now · Quick response · Clear communication
//           </p>

//           <p className="text-sm text-slate-400">
//             Prefer email?{" "}
//             <a href="mailto:sundarlingam272000@gmail.com" className="underline text-white">
//               sundarlingam272000@gmail.com
//             </a>
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative mx-auto w-full max-w-md lg:max-w-none">

//           {/* Glow */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-500/10 blur-2xl"></div>

//           {/* CARD */}
//           <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-6 shadow-2xl transition duration-300 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-cyan-500/20 animate-[float_6s_ease-in-out_infinite]">

//             {/* Dots */}
//             <div className="flex gap-2">
//               <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//             </div>

//             {/* Title */}
//             <h3 className="text-white font-semibold text-lg">
//               Live Product Metrics
//             </h3>

//             {/* REAL DATA BARS */}
//             <div className="space-y-4 text-xs text-slate-400">

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>Performance</span>
//                   <span>85%</span>
//                 </div>
//                 <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                   <div className="h-full w-[85%] bg-cyan-400"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>Scalability</span>
//                   <span>65%</span>
//                 </div>
//                 <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                   <div className="h-full w-[65%] bg-blue-400"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>UI Quality</span>
//                   <span>95%</span>
//                 </div>
//                 <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                   <div className="h-full w-[95%] bg-emerald-400"></div>
//                 </div>
//               </div>

//             </div>

//             {/* TECH */}
//             <div className="flex flex-wrap gap-2">
//               {["React", "Next.js", "API", "Tailwind"].map((tech, i) => (
//                 <span
//                   key={i}
//                   className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* CODE */}
//             <div className="relative rounded-lg bg-black/80 p-3 text-xs text-green-400 font-mono">
//               <div className="absolute inset-0 bg-cyan-500/10 blur-xl"></div>
// {`const app = {
//   performance: "fast",
//   scalable: true,
//   ui: "premium"
// };`}
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* FLOAT ANIMATION */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>

//     </section>
//   );
// }

"use client";

export default function Hero() {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-28">
      {/* Edge curve accent - cleaner fit for hero layout */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-28 opacity-80 lg:block">
        <svg viewBox="0 0 120 900" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
          <path
            d="M118 0 C18 180 18 360 118 450 C18 540 18 720 118 900"
            fill="none"
            className="stroke-cyan-300/45"
            strokeWidth="2"
          />
          <path
            d="M118 60 C34 210 34 340 118 450 C34 560 34 690 118 840"
            fill="none"
            className="stroke-cyan-500/20"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-[#020617]"></div>

        {/* Blue Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] animate-[glowMove_12s_ease-in-out_infinite]"></div>

        {/* Purple Glow */}
        <div className="absolute bottom-[-120px] left-[-120px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] animate-[glowMove_14s_ease-in-out_infinite]"></div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-[160px]"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      </div>

      {/* CONTENT */}
      <div className="section-balance relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-7">

          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
            Available for Freelance & Fiverr
          </span>

          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            I help businesses turn ideas into
            <span className="text-cyan-400"> fast, scalable web apps 🚀</span>
          </h1>

          <p className="text-cyan-300 font-medium">
            Trusted for fast delivery & production-ready code
          </p>

          <p className="max-w-xl text-base sm:text-lg text-slate-400">
            Full-stack developer specializing in React, Next.js, APIs & dashboards.
            Clean architecture. Smooth UI. Built for real-world usage.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {["8+ Projects", "Fast Delivery", "Scalable Code"].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="/"
              onClick={(e) => handleScroll(e, "contact")}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-7 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 hover:scale-[1.05]"
            >
              Get Your Project Started 🚀
            </a>

            <a
              href="/"
              onClick={(e) => handleScroll(e, "projects")}
              className="border border-cyan-400/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition hover:scale-[1.05]"
            >
              See Work
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Available now · Quick response · Clear communication
          </p>

          <p className="text-sm text-slate-400">
            Prefer email?{" "}
            <a href="mailto:sundarlingam272000@gmail.com" className="underline text-white">
              sundarlingam272000@gmail.com
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-500/10 blur-2xl"></div>

          {/* CARD */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-6 shadow-2xl transition duration-300 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-cyan-500/20 animate-[float_6s_ease-in-out_infinite]">

            {/* Dots */}
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <h3 className="text-white font-semibold text-lg">
              Live Product Metrics
            </h3>

            {/* REAL METRICS */}
            <div className="space-y-4 text-xs text-slate-400">

              <div>
                <div className="flex justify-between mb-1">
                  <span>Performance</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-cyan-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Scalability</span>
                  <span>65%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-blue-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>UI Quality</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-emerald-400"></div>
                </div>
              </div>

            </div>

            {/* TECH */}
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "API", "Tailwind"].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CODE */}
            <div className="relative rounded-lg bg-black/80 p-3 text-xs text-green-400 font-mono">
              <div className="absolute inset-0 bg-cyan-500/10 blur-xl"></div>
{`const app = {
  performance: "fast",
  scalable: true,
  ui: "premium"
};`}
            </div>

          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glowMove {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
        }
      `}</style>

    </section>
  );
}


// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";

// /* ─────────────────────────────────────────────────────────────────────────────
//    PARTICLE NETWORK CANVAS
// ───────────────────────────────────────────────────────────────────────────── */
// function ParticleNet() {
//   const ref = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = ref.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     let animId: number;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const pts = Array.from({ length: 60 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.45,
//       vy: (Math.random() - 0.5) * 0.45,
//     }));

//     const tick = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < pts.length; i++) {
//         for (let j = i + 1; j < pts.length; j++) {
//           const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
//           if (d < 130) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(0,255,204,${0.13 * (1 - d / 130)})`;
//             ctx.lineWidth = 0.6;
//             ctx.moveTo(pts[i].x, pts[i].y);
//             ctx.lineTo(pts[j].x, pts[j].y);
//             ctx.stroke();
//           }
//         }
//         ctx.beginPath();
//         ctx.arc(pts[i].x, pts[i].y, 1.8, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(0,255,204,0.45)";
//         ctx.fill();

//         pts[i].x += pts[i].vx;
//         pts[i].y += pts[i].vy;
//         if (pts[i].x < 0 || pts[i].x > canvas.width) pts[i].vx *= -1;
//         if (pts[i].y < 0 || pts[i].y > canvas.height) pts[i].vy *= -1;
//       }
//       animId = requestAnimationFrame(tick);
//     };
//     tick();
//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={ref}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//     />
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    TYPEWRITER
// ───────────────────────────────────────────────────────────────────────────── */
// const WORDS = [
//   "React & Next.js",
//   "APIs & Dashboards",
//   "Clean Architecture",
//   "Scalable Systems",
// ];

// function Typewriter() {
//   const [idx, setIdx] = useState(0);
//   const [text, setText] = useState("");
//   const [del, setDel] = useState(false);

//   useEffect(() => {
//     const word = WORDS[idx];
//     const timeout = setTimeout(
//       () => {
//         if (!del && text.length < word.length) {
//           setText(word.slice(0, text.length + 1));
//         } else if (!del && text.length === word.length) {
//           setDel(true);
//         } else if (del && text.length > 0) {
//           setText(text.slice(0, -1));
//         } else {
//           setDel(false);
//           setIdx((i) => (i + 1) % WORDS.length);
//         }
//       },
//       del ? 38 : text.length === WORDS[idx].length ? 1900 : 78
//     );
//     return () => clearTimeout(timeout);
//   }, [text, del, idx]);

//   return (
//     <span className="text-[#00FFCC]">
//       {text}
//       <span className="typewriter-cursor" />
//     </span>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    ANIMATED COUNTER
// ───────────────────────────────────────────────────────────────────────────── */
// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [val, setVal] = useState(0);

//   useEffect(() => {
//     let current = 0;
//     const step = Math.max(1, Math.ceil(to / 45));
//     const t = setInterval(() => {
//       current = Math.min(current + step, to);
//       setVal(current);
//       if (current >= to) clearInterval(t);
//     }, 28);
//     return () => clearInterval(t);
//   }, [to]);

//   return (
//     <>
//       {val}
//       {suffix}
//     </>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    3D TILT CARD WRAPPER
// ───────────────────────────────────────────────────────────────────────────── */
// function TiltCard({ children }: { children: React.ReactNode }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   const onMove = useCallback((e: React.MouseEvent) => {
//     const el = ref.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const cx = rect.left + rect.width / 2;
//     const cy = rect.top + rect.height / 2;
//     setTilt({
//       x: ((e.clientX - cx) / (rect.width / 2)) * 13,
//       y: -((e.clientY - cy) / (rect.height / 2)) * 13,
//     });
//   }, []);

//   return (
//     <div
//       ref={ref}
//       onMouseMove={onMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => {
//         setHovered(false);
//         setTilt({ x: 0, y: 0 });
//       }}
//       style={{
//         transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${hovered ? 1.025 : 1})`,
//         transition: hovered ? "transform 0.08s ease" : "transform 0.5s ease",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────────────────
//    HERO
// ───────────────────────────────────────────────────────────────────────────── */
// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const [glow, setGlow] = useState({ x: 60, y: 40 });

//   useEffect(() => {
//     setMounted(true);
//     const onMouse = (e: MouseEvent) =>
//       setGlow({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     window.addEventListener("mousemove", onMouse);
//     return () => window.removeEventListener("mousemove", onMouse);
//   }, []);

//   const metrics = [
//     { label: "Performance",  val: 85, color: "#00FFCC" },
//     { label: "Scalability",  val: 75, color: "#7B61FF" },
//     { label: "UI Quality",   val: 95, color: "#FF2D78" },
//     { label: "Reliability",  val: 90, color: "#F59E0B" },
//   ];

//   const stats = [
//     { n: 8,   s: "+",  label: "Projects" },
//     { n: 100, s: "%",  label: "On-Time"  },
//     { n: 5,   s: "★",  label: "Rated"    },
//   ];

//   return (
//     <>
//       {/* ── GLOBAL FONT IMPORT ─────────────────────────────────────────── */}
//       {/* Add this to your app/layout.tsx <head> instead if preferred:
//           <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=JetBrains+Mono:wght@400;600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" /> */}

//       <section
//         id="home"
//         className="relative overflow-hidden scroll-mt-28 min-h-screen flex items-center"
//       >
//         {/* ── BACKGROUND ──────────────────────────────────────────────── */}
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           {/* Deep base */}
//           <div className="absolute inset-0 bg-[#050A14]" />

//           {/* Mouse-tracking radial glow */}
//           <div
//             className="absolute inset-0 transition-all duration-300"
//             style={{
//               background: `radial-gradient(700px circle at ${glow.x}% ${glow.y}%, rgba(0,255,204,0.055), transparent 65%)`,
//             }}
//           />

//           {/* Ambient blobs */}
//           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[rgba(0,255,204,0.11)] rounded-full blur-[170px] animate-[blobFloat_16s_ease-in-out_infinite]" />
//           <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-[rgba(123,97,255,0.09)] rounded-full blur-[190px] animate-[blobFloat_20s_ease-in-out_infinite_reverse]" />
//           <div className="absolute top-[40%] left-[25%] w-[450px] h-[450px] bg-[rgba(255,45,120,0.055)] rounded-full blur-[130px] animate-[blobFloat_12s_ease-in-out_3s_infinite]" />

//           {/* Grid overlay */}
//           <div
//             className="absolute inset-0 opacity-[0.065]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right,#00FFCC 1px,transparent 1px),linear-gradient(to bottom,#00FFCC 1px,transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           {/* Particle network */}
//           {mounted && <ParticleNet />}

//           {/* Scanline sweep */}
//           <div className="scanline-sweep absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(0,255,204,0.18)] to-transparent blur-[1px] pointer-events-none" />
//         </div>

//         {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
//         <div className="section-balance grid items-center gap-12 lg:grid-cols-2 lg:gap-16 relative py-20 lg:py-28">

//           {/* ── LEFT ────────────────────────────────────────────────── */}
//           <div className="space-y-7">

//             {/* Status badge */}
//             <div className="hero-in hero-in-1">
//               <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(0,255,204,0.25)] bg-[rgba(0,255,204,0.07)] px-4 py-1.5 font-[JetBrains_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.07em] text-[#00FFCC]">
//                 <span className="live-dot" />
//                 Available for Freelance &amp; Fiverr
//               </span>
//             </div>

//             {/* Headline */}
//             <h1
//               className="hero-in hero-in-2 glitch-heading font-[Rajdhani,sans-serif] text-4xl font-bold leading-[1.13] text-slate-100 sm:text-5xl lg:text-[3.4rem] tracking-tight"
//               data-text="I turn ideas into fast, scalable web apps 🚀"
//             >
//               I turn ideas into{" "}
//               <span className="bg-gradient-to-r from-[#00FFCC] to-[#7B61FF] bg-clip-text text-transparent">
//                 fast, scalable
//               </span>{" "}
//               web apps 🚀
//             </h1>

//             {/* Typewriter tagline */}
//             <div className="hero-in hero-in-3 flex items-center gap-2 font-[JetBrains_Mono,monospace] text-sm">
//               <span className="text-[#7B61FF]">$</span>
//               <span className="text-slate-500">specializing in </span>
//               <Typewriter />
//             </div>

//             {/* Description */}
//             <p className="hero-in hero-in-4 max-w-[480px] text-base leading-relaxed text-slate-500 font-[DM_Sans,sans-serif] font-light sm:text-[17px]">
//               Full-stack developer crafting clean architecture, smooth UI, and
//               production-ready code. Built for real-world usage.
//             </p>

//             {/* Stat chips */}
//             <div className="hero-in hero-in-5 flex flex-wrap gap-3">
//               {[
//                 { icon: "⚡", label: "8+ Projects Shipped" },
//                 { icon: "🚀", label: "Fast Delivery"       },
//                 { icon: "🔒", label: "Scalable Code"       },
//               ].map((s, i) => (
//                 <div
//                   key={i}
//                   className="stat-chip flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2 text-[13px] text-slate-400 backdrop-blur transition-all duration-200 hover:border-[rgba(0,255,204,0.2)] hover:bg-[rgba(0,255,204,0.05)] font-[DM_Sans,sans-serif]"
//                 >
//                   <span className="text-[15px]">{s.icon}</span>
//                   {s.label}
//                 </div>
//               ))}
//             </div>

//             {/* CTAs */}
//             <div className="hero-in hero-in-6 flex flex-col gap-3.5 pt-1 sm:flex-row">
//               <a
//                 href="/"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00FFCC] to-[#00C9A7] px-7 py-3 font-[Rajdhani,sans-serif] text-[15px] font-bold tracking-wide text-black transition-all duration-200 hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,255,204,0.35)]"
//               >
//                 Get Your Project Started 🚀
//               </a>
//               <a
//                 href="/"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(0,255,204,0.25)] px-7 py-3 font-[Rajdhani,sans-serif] text-[15px] font-semibold tracking-wide text-white backdrop-blur transition-all duration-200 hover:border-[rgba(0,255,204,0.6)] hover:bg-[rgba(0,255,204,0.07)] hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,255,204,0.15)]"
//               >
//                 See My Work →
//               </a>
//             </div>

//             {/* Footnotes */}
//             <div className="hero-in hero-in-7 space-y-1.5">
//               <p className="text-[11px] text-slate-600">
//                 Available now · Quick response · Clear communication
//               </p>
//               <p className="text-sm text-slate-500 font-[DM_Sans,sans-serif]">
//                 Prefer email?{" "}
//                 <a
//                   href="mailto:sundarlingam272000@gmail.com"
//                   className="border-b border-[rgba(0,255,204,0.3)] text-[#00FFCC] no-underline transition-colors hover:border-[#00FFCC]"
//                 >
//                   sundarlingam272000@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>

//           {/* ── RIGHT: TILT CARD ────────────────────────────────────── */}
//           <div className="hero-in hero-in-card mx-auto w-full max-w-md lg:max-w-none">
//             <TiltCard>
//               <div className="relative rounded-2xl border border-white/[0.09] bg-white/[0.025] p-7 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(0,255,204,0.06),0_40px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(0,255,204,0.04)] space-y-5">

//                 {/* Holographic shimmer overlay */}
//                 <div
//                   className="hologram-overlay pointer-events-none absolute inset-0 rounded-2xl"
//                   style={{
//                     background:
//                       "linear-gradient(135deg,rgba(0,255,204,0.025) 0%,rgba(123,97,255,0.04) 40%,rgba(255,45,120,0.025) 80%,transparent 100%)",
//                   }}
//                 />

//                 {/* Corner accent */}
//                 <div
//                   className="pointer-events-none absolute right-0 top-0 rounded-[0_16px_0_80px]"
//                   style={{
//                     width: 90,
//                     height: 90,
//                     background:
//                       "linear-gradient(225deg,rgba(0,255,204,0.10),transparent)",
//                   }}
//                 />

//                 {/* Window dots */}
//                 <div className="flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
//                   <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
//                   <div className="h-3 w-3 rounded-full bg-[#28C840]" />
//                   <span className="ml-auto font-[JetBrains_Mono,monospace] text-[11px] text-[rgba(0,255,204,0.45)] tracking-[0.05em]">
//                     metrics.live ●
//                   </span>
//                 </div>

//                 {/* Card title */}
//                 <div className="flex items-center gap-3">
//                   <div
//                     className="h-5 w-[3px] rounded-sm"
//                     style={{
//                       background:
//                         "linear-gradient(to bottom,#00FFCC,#7B61FF)",
//                     }}
//                   />
//                   <h3 className="font-[Rajdhani,sans-serif] text-lg font-bold tracking-wide text-slate-100">
//                     Live Product Metrics
//                   </h3>
//                 </div>

//                 {/* Progress bars */}
//                 <div className="space-y-3.5">
//                   {metrics.map((m, i) => (
//                     <div key={i}>
//                       <div className="mb-1.5 flex justify-between items-center">
//                         <span className="font-[JetBrains_Mono,monospace] text-[11px] text-slate-500">
//                           {m.label}
//                         </span>
//                         <span
//                           className="font-[JetBrains_Mono,monospace] text-[11px] font-semibold"
//                           style={{ color: m.color }}
//                         >
//                           {m.val}%
//                         </span>
//                       </div>
//                       <div className="metric-track h-[5px] rounded-full bg-white/[0.07] overflow-hidden">
//                         <div
//                           className="metric-fill h-full rounded-full"
//                           style={
//                             {
//                               "--bar-w": `${m.val}%`,
//                               "--bar-color": m.color,
//                               background: `linear-gradient(to right,${m.color}70,${m.color})`,
//                               boxShadow: `0 0 8px ${m.color}55`,
//                               animationDelay: `${0.4 + i * 0.15}s`,
//                             } as React.CSSProperties
//                           }
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Tech tags */}
//                 <div className="flex flex-wrap gap-2 pt-1">
//                   {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"].map(
//                     (t, i) => (
//                       <span
//                         key={i}
//                         className="tech-tag rounded-full border border-[rgba(0,255,204,0.18)] bg-white/[0.04] px-3 py-1 font-[JetBrains_Mono,monospace] text-[11px] font-semibold text-[#00FFCC] tracking-[0.03em] transition-all duration-200 hover:border-[rgba(0,255,204,0.55)] hover:bg-[rgba(0,255,204,0.08)] hover:shadow-[0_0_12px_rgba(0,255,204,0.2)] cursor-default"
//                       >
//                         {t}
//                       </span>
//                     )
//                   )}
//                 </div>

//                 {/* Terminal code block */}
//                 <div className="relative overflow-hidden rounded-xl border border-[rgba(0,255,204,0.08)] bg-black/75 p-4">
//                   <div
//                     className="pointer-events-none absolute inset-0"
//                     style={{
//                       background:
//                         "radial-gradient(ellipse at top left,rgba(0,255,204,0.045),transparent 60%)",
//                     }}
//                   />
//                   <pre className="relative font-[JetBrains_Mono,monospace] text-[12px] leading-[1.8] text-emerald-400 m-0 whitespace-pre">
//                     <span style={{ color: "#7B61FF" }}>const</span>
//                     {" "}
//                     <span style={{ color: "#00FFCC" }}>build</span>
//                     {" "}
//                     <span style={{ color: "#94A3B8" }}>=</span>
//                     {" {"}
//                     {"\n  "}
//                     <span style={{ color: "#F59E0B" }}>performance</span>
//                     <span style={{ color: "#94A3B8" }}>:</span>
//                     {" "}
//                     <span style={{ color: "#4ADE80" }}>"blazing"</span>
//                     {","}
//                     {"\n  "}
//                     <span style={{ color: "#F59E0B" }}>scalable</span>
//                     <span style={{ color: "#94A3B8" }}>:</span>
//                     {" "}
//                     <span style={{ color: "#7B61FF" }}>true</span>
//                     {","}
//                     {"\n  "}
//                     <span style={{ color: "#F59E0B" }}>ui</span>
//                     <span style={{ color: "#94A3B8" }}>:</span>
//                     {" "}
//                     <span style={{ color: "#4ADE80" }}>"premium ✨"</span>
//                     {"\n};"}
//                   </pre>
//                 </div>

//                 {/* Bottom stat counters */}
//                 <div className="grid grid-cols-3 gap-3 pt-1">
//                   {stats.map((s, i) => (
//                     <div
//                       key={i}
//                       className="rounded-xl border border-white/[0.06] bg-white/[0.03] py-3 text-center"
//                     >
//                       <div className="font-[Rajdhani,sans-serif] text-2xl font-bold text-[#00FFCC]">
//                         {mounted ? <Counter to={s.n} suffix={s.s} /> : `0${s.s}`}
//                       </div>
//                       <div className="mt-1 font-[DM_Sans,sans-serif] text-[10px] text-slate-600">
//                         {s.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </TiltCard>
//           </div>
//         </div>
//       </section>

//       {/* ── KEYFRAMES & CUSTOM STYLES ───────────────────────────────────── */}
//       <style jsx>{`
//         /* Google Fonts */
//         @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=JetBrains+Mono:wght@400;600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');

//         /* ── Entrance animations ── */
//         @keyframes slideUpFade {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0);    }
//         }

//         .hero-in { opacity: 0; animation: slideUpFade 0.65s ease forwards; }
//         .hero-in-1 { animation-delay: 0.10s; }
//         .hero-in-2 { animation-delay: 0.22s; }
//         .hero-in-3 { animation-delay: 0.34s; }
//         .hero-in-4 { animation-delay: 0.44s; }
//         .hero-in-5 { animation-delay: 0.54s; }
//         .hero-in-6 { animation-delay: 0.63s; }
//         .hero-in-7 { animation-delay: 0.72s; }
//         .hero-in-card { animation-delay: 0.30s; }

//         /* ── Ambient blob float ── */
//         @keyframes blobFloat {
//           0%, 100% { transform: translate(0px,  0px);    }
//           33%       { transform: translate(30px, -25px);  }
//           66%       { transform: translate(-20px, 18px); }
//         }

//         /* ── Live dot pulse ── */
//         .live-dot {
//           display: inline-block;
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: #00FFCC;
//           flex-shrink: 0;
//           animation: dotPulse 2.2s ease-in-out infinite;
//         }
//         @keyframes dotPulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,204,0.55); }
//           50%       { box-shadow: 0 0 0 5px rgba(0,255,204,0);  }
//         }

//         /* ── Typewriter cursor ── */
//         .typewriter-cursor {
//           display: inline-block;
//           width: 2px;
//           height: 1.1em;
//           background: #00FFCC;
//           margin-left: 2px;
//           vertical-align: text-bottom;
//           animation: cursorBlink 1s step-end infinite;
//         }
//         @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

//         /* ── Glitch heading ── */
//         .glitch-heading { position: relative; }
//         .glitch-heading::before {
//           content: attr(data-text);
//           position: absolute;
//           left: 0;
//           top: 0;
//           color: #00FFCC;
//           animation: glitchClip 9s ease-in-out infinite;
//           pointer-events: none;
//         }
//         @keyframes glitchClip {
//           0%,88%,100% { clip-path: none; transform: none; opacity: 0; }
//           89%  { clip-path: polygon(0 14%,100% 14%,100% 26%,0 26%); transform: translate(-3px,0);  opacity: 1; }
//           91%  { clip-path: polygon(0 58%,100% 58%,100% 70%,0 70%); transform: translate(3px,0);   opacity: 1; }
//           93%  { clip-path: polygon(0 40%,100% 40%,100% 48%,0 48%); transform: translate(-2px,0);  opacity: 1; }
//           95%  { clip-path: none; transform: none; opacity: 0; }
//         }

//         /* ── Scanline sweep ── */
//         .scanline-sweep {
//           animation: scanSweep 9s linear infinite;
//         }
//         @keyframes scanSweep {
//           0%   { top: -2%;   opacity: 0; }
//           5%   { opacity: 1; }
//           95%  { opacity: 1; }
//           100% { top: 102%;  opacity: 0; }
//         }

//         /* ── Hologram flicker ── */
//         .hologram-overlay {
//           animation: hologramFlicker 7s ease-in-out infinite;
//         }
//         @keyframes hologramFlicker {
//           0%,19%,21%,50%,52%,100% { opacity: 1;   }
//           20%,51%                  { opacity: 0.7; }
//         }

//         /* ── Metric bar fill ── */
//         .metric-fill {
//           width: 0%;
//           animation: barFill 1.1s cubic-bezier(0.4,0,0.2,1) forwards;
//         }
//         @keyframes barFill {
//           from { width: 0%; }
//           to   { width: var(--bar-w); }
//         }

//         /* ── Primary button shimmer ── */
//         .btn-primary { position: relative; overflow: hidden; }
//         .btn-primary::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             105deg,
//             transparent 35%,
//             rgba(255,255,255,0.28) 50%,
//             transparent 65%
//           );
//           transform: translateX(-100%);
//           transition: transform 0.45s ease;
//         }
//         .btn-primary:hover::after { transform: translateX(100%); }
//       `}</style>
//     </>
//   );
// }