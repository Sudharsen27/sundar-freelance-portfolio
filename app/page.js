import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Navbar />

      <main className="pb-20 pt-8 sm:pb-24">
        <Hero />

        <div className="mt-16 space-y-0 sm:mt-20">
          <div className="border-t border-white/[0.06] pt-16 sm:pt-20">
            <About />
          </div>
          <div className="border-t border-white/[0.06] pt-16 sm:pt-20">
            <ValueProps />
          </div>
          <div className="border-t border-white/[0.06] pt-16 sm:pt-20">
            <Services />
          </div>
          <div className="border-t border-white/[0.06] pt-16 sm:pt-20">
            <Projects />
          </div>
          <div className="border-t border-white/[0.06] pt-16 sm:pt-20">
            <Contact />
          </div>
        </div>
      </main>

      <footer className="mb-10 rounded-2xl border border-white/[0.07] bg-slate-950/50 px-6 py-10 text-center backdrop-blur-sm">
        <p className="mb-6 text-sm text-slate-400">
          <a
            href="mailto:sundarlingam272000@gmail.com"
            className="font-medium text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-white"
          >
            sundarlingam272000@gmail.com
          </a>
          <span className="mx-2 text-slate-600" aria-hidden>
            {"\u00b7"}
          </span>
          <a href="tel:+916382519651" className="hover:text-slate-300">
            +91 63825 19651
          </a>
        </p>
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Sudharsen27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-400 transition hover:scale-105 hover:border-white/20 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.58 2 12.253c0 4.536 2.943 8.392 7.023 9.748.514.095.703-.223.703-.496 0-.246-.009-.892-.014-1.75-2.856.628-3.46-1.404-3.46-1.404-.468-1.201-1.142-1.52-1.142-1.52-.933-.644.071-.631.071-.631 1.032.073 1.575 1.074 1.575 1.074.918 1.586 2.407 1.127 2.993.861.093-.672.358-1.127.652-1.386-2.28-.262-4.678-1.16-4.678-5.166 0-1.141.403-2.073 1.063-2.804-.107-.262-.462-1.317.1-2.743 0 0 .867-.28 2.84 1.07a9.65 9.65 0 0 1 2.52-.345c.854.004 1.714.117 2.52.345 1.972-1.35 2.837-1.07 2.837-1.07.564 1.426.21 2.481.103 2.743.662.731 1.06 1.663 1.06 2.804 0 4.018-2.403 4.9-4.694 5.155.37.322.698.956.698 1.926 0 1.39-.013 2.512-.013 2.854 0 .277.186.597.708.496C19.059 20.645 22 16.788 22 12.253 22 6.58 17.523 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sundar-lingam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-400 transition hover:scale-105 hover:border-white/20 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V23h-4V8Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook (placeholder)"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-400 transition hover:scale-105 hover:border-white/20 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter (placeholder)"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-400 transition hover:scale-105 hover:border-white/20 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram (placeholder)"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-400 transition hover:scale-105 hover:border-white/20 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="YouTube (placeholder)"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-400 transition hover:scale-105 hover:border-white/20 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-slate-400">
          {"Sundar \u00a9 2026 | All Rights Reserved"}
        </p>
      </footer>
    </div>
  );
}
