"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import { PERSON_NAME, JOB_TITLE } from "@/lib/brand";
import { sectionPath } from "@/lib/routes";
import { sectionNavClick } from "@/lib/scroll";

const trustPoints = [
  "8+ projects delivered",
  "Fast turnaround",
  "Premium quality",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] scroll-mt-28 overflow-hidden pt-8 sm:pt-12 lg:pt-16" aria-labelledby="home-heading">
      <FloatingOrbs />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #8B5CF6 1px, transparent 1px), linear-gradient(to bottom, #06B6D4 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="order-1 space-y-7 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
              Available for new projects
            </span>

            <h1 id="home-heading" className="font-display text-[1.75rem] font-bold leading-[1.22] tracking-tight text-pretty text-text-primary sm:text-4xl sm:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.1]">
              <span className="block sm:inline">Helping Brands Build</span>{" "}
              <span className="block sm:inline">
                Their{" "}
                <span className="gradient-text whitespace-nowrap">Digital Presence</span>
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
              I craft modern websites, premium digital experiences, and
              conversion-focused interfaces that help businesses, startups, and
              creators grow online with confidence.
            </p>

            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-text-secondary backdrop-blur-sm"
                >
                  <span className="mr-1.5 text-accent-cyan" aria-hidden>
                    ✓
                  </span>
                  {point}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <a
                href={sectionPath("projects")}
                onClick={sectionNavClick("projects")}
                className="btn-primary w-full sm:w-auto"
              >
                View Portfolio
              </a>
              <a
                href={sectionPath("contact")}
                onClick={sectionNavClick("contact")}
                className="btn-outline w-full sm:w-auto"
              >
                Hire Me
              </a>
              <a
                href={sectionPath("contact")}
                onClick={sectionNavClick("contact")}
                className="btn-secondary w-full sm:w-auto"
              >
                Let&apos;s Talk
              </a>
            </div>

            <p className="text-sm text-text-secondary">
              Response within 24 hours ·{" "}
              <a
                href="mailto:hello.sundardigital@gmail.com"
                className="text-text-primary underline decoration-accent-purple/50 underline-offset-4 transition hover:decoration-accent-cyan"
              >
                hello.sundardigital@gmail.com
              </a>
            </p>
          </motion.div>

          <motion.div
            className="relative order-2 mx-auto w-full max-w-[17rem] px-2 sm:max-w-sm sm:px-4 lg:order-2 lg:max-w-md lg:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/40 via-accent-cyan/30 to-accent-purple/20 blur-3xl animate-pulse-glow" />

            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -left-6 top-8 hidden h-20 w-20 rounded-2xl border border-accent-purple/30 bg-accent-purple/10 backdrop-blur-md sm:block"
                animate={{ rotate: [0, 5, 0], y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -right-4 bottom-12 hidden h-16 w-16 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 backdrop-blur-md sm:block"
                animate={{ rotate: [0, -8, 0], y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-card/60 p-1.5 shadow-card backdrop-blur-xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 via-transparent to-accent-cyan/20"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative aspect-[832/1024] overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/sundar-hero.png"
                    alt={`${PERSON_NAME} - ${JOB_TITLE}`}
                    width={832}
                    height={1024}
                    className="h-full w-full object-contain object-center"
                    priority
                    sizes="(max-width: 1024px) 80vw, 400px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
