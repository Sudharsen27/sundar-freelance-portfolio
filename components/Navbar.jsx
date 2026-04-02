 "use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home", path: "/home" },
  { id: "about", label: "About", path: "/about" },
  { id: "why-me", label: "Why me", path: "/why-me" },
  { id: "services", label: "Services", path: "/services" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function closeHireModal() {
    setShowHireModal(false);
  }

  function scrollToSection(sectionId, path) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (path && window.location.pathname !== path) {
      window.history.replaceState(null, "", path);
    } else if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = links.find((item) => item.path === currentPath);
    if (!currentLink) return;
    const timer = setTimeout(() => {
      const target = document.getElementById(currentLink.id);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        closeHireModal();
      }
    }
    if (showHireModal) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showHireModal]);

  return (
    <header className="sticky top-0 z-50 -mx-4 px-4 pt-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <nav
        className="section-shell flex flex-col px-3 py-2.5 transition hover:shadow-glass sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-3"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between">
          <a
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              scrollToSection("home", "/home");
            }}
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
            {links.map(({ id, label, path }) => (
              <li key={id}>
                <a
                  href={path}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    scrollToSection(id, path);
                  }}
                  className="block rounded-lg px-3 py-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-1 sm:pt-0">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setShowHireModal(true);
                }}
                className="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:scale-[1.02] sm:w-auto sm:py-1.5"
              >
                Hire me
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {showHireModal ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Hire Me Options"
          onClick={closeHireModal}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl shadow-black/50 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-bold text-white">Let&apos;s work together</p>
                <p className="mt-1 text-sm text-slate-400">
                  Choose your preferred way to start.
                </p>
              </div>
              <button
                type="button"
                onClick={closeHireModal}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/916382519651?text=Hi%20Sundar%2C%20I%20want%20to%20hire%20you%20for%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeHireModal}
                className="flex w-full items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400/45 hover:bg-emerald-500/15"
              >
                Chat on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  closeHireModal();
                  scrollToSection("contact", "/contact");
                }}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Open Contact Form
              </button>
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeHireModal}
                className="flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                View Fiverr Gig
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
