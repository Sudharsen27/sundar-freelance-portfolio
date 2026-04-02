 "use client";

import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-me", label: "Why me" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 -mx-4 px-4 pt-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <nav
        className="section-shell flex flex-col px-3 py-2.5 transition hover:shadow-glass sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-3"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300"
          >
            Sundar
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 sm:hidden"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        <div className={`${isOpen ? "mt-3 block" : "hidden"} sm:mt-0 sm:block`}>
          <ul className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-2 text-sm sm:flex-row sm:items-center sm:justify-end sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0 sm:text-base">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-1 sm:pt-0">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:scale-[1.02] sm:w-auto sm:py-1.5"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
