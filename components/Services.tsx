"use client";

import { motion } from "framer-motion";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/services-data";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-purple/10 blur-[120px]"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative">
        <SectionReveal>
          <SectionHeader
            badge="Services"
            title="What I Can Build For You"
            subtitle="Premium digital services tailored for brands, startups, and creators who want a professional online presence that converts."
            headingId="services-heading"
          />
        </SectionReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <motion.article
                className="premium-card group flex h-full flex-col p-7"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-purple/30 bg-accent-purple/10 text-2xl transition group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10" aria-hidden>
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <motion.div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.2}>
          <div className="mt-16 rounded-2xl border border-accent-purple/20 bg-gradient-to-r from-accent-purple/10 via-card/80 to-accent-cyan/10 p-8 text-center backdrop-blur-xl sm:p-10">
            <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
              Ready to elevate your digital presence?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              Tell me about your project and I&apos;ll share a clear plan, timeline,
              and quote within 24 hours.
            </p>
            <a
              href="/#contact"
              className="btn-primary mt-6 inline-flex"
            >
              Get a Free Quote
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
