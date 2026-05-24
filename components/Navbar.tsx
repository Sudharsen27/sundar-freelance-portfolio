"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";
import { whatsappUrl } from "@/lib/whatsapp";

const FIVERR_GIG_URL =
  process.env.NEXT_PUBLIC_FIVERR_URL || "https://www.fiverr.com/";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setShowHireModal(false);
    }
    if (showHireModal) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showHireModal]);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) {
    setIsOpen(false);
    scrollToSection(e, sectionId);
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-white/[0.1] bg-card/80 shadow-card backdrop-blur-2xl"
            : "border-white/[0.06] bg-card/40 backdrop-blur-xl"
        }`}
        aria-label="Primary"
      >
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
          className="inline-flex items-center gap-2.5"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-accent-purple/30 bg-bg ring-1 ring-accent-cyan/20">
            <Image src="/icon.svg" alt="Sundar logo" width={32} height={32} priority />
          </span>
          <span className="font-display text-lg font-semibold text-text-primary">
            Sundar
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href="/"
                onClick={(e) => handleNavClick(e, id)}
                className="nav-link"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <button
              type="button"
              onClick={() => setShowHireModal(true)}
              className="btn-primary px-5 py-2 text-sm"
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-primary lg:hidden"
        >
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-card/95 p-4 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href="/"
                    onClick={(e) => handleNavClick(e, id)}
                    className="block rounded-xl px-4 py-3 text-text-secondary transition hover:bg-white/[0.05] hover:text-text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowHireModal(true);
                  }}
                  className="btn-primary w-full"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showHireModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/80 px-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Hire Me Options"
            onClick={() => setShowHireModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-strong w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-bold text-text-primary">
                    Let&apos;s work together
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Choose how you&apos;d like to get started.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowHireModal(false)}
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary"
                >
                  Close
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappUrl("Hi Sundar, I want to hire you for a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowHireModal(false)}
                  className="flex w-full items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-500/10 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/15"
                >
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    setShowHireModal(false);
                    scrollToSection(e, "contact");
                  }}
                  className="btn-primary w-full"
                >
                  Open Contact Form
                </button>
                <a
                  href={FIVERR_GIG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowHireModal(false)}
                  className="btn-secondary w-full"
                >
                  View Fiverr Gig
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
