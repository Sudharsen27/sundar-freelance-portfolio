"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Check,
  Code2,
  Globe,
  LayoutGrid,
  Rocket,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/services-data";
import { sectionPath } from "@/lib/routes";
import { sectionNavClick } from "@/lib/scroll";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-dev": Globe,
  "web-app": Code2,
  business: Briefcase,
  responsive: Smartphone,
  landing: Rocket,
  portfolio: LayoutGrid,
};

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
            subtitle="Premium websites and full-stack web applications for brands, startups, and businesses — built to perform, scale, and convert."
            headingId="services-heading"
          />
        </SectionReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const headingId = `service-${service.id}-title`;
            const Icon = SERVICE_ICONS[service.id];

            return (
              <StaggerItem key={service.id}>
                <motion.article
                  aria-labelledby={headingId}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/60 p-6 shadow-card backdrop-blur-xl transition-all duration-500 sm:p-7 ${
                    service.featured
                      ? "border-accent-purple/30 bg-gradient-to-br from-accent-purple/[0.08] via-card/70 to-accent-cyan/[0.06] hover:border-accent-purple/40 hover:shadow-cardHover"
                      : "border-white/[0.08] hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-cardHover"
                  }`}
                  whileHover={{ y: service.featured ? -4 : -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {service.featured ? (
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/60 to-transparent"
                      aria-hidden
                    />
                  ) : null}

                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                          service.featured
                            ? "border-accent-purple/30 bg-accent-purple/10 text-accent-purple group-hover:border-accent-cyan/35 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan"
                            : "border-white/10 bg-white/[0.04] text-accent-cyan group-hover:border-accent-purple/30 group-hover:bg-accent-purple/10 group-hover:text-accent-purple"
                        }`}
                      >
                        {Icon ? <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden /> : null}
                      </div>
                    </div>

                    <h3
                      id={headingId}
                      className="font-display text-lg font-semibold leading-snug text-text-primary sm:text-xl"
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-secondary">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-white/[0.06] pt-5">
                      <p className="mb-2.5 text-xs font-medium tracking-wide text-text-secondary/80">
                        Tech stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul
                      className="mt-4 space-y-2"
                      aria-label={`${service.title} features`}
                    >
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-[13px] text-text-secondary"
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent-cyan/25 bg-accent-cyan/10">
                            <Check className="h-2.5 w-2.5 text-accent-cyan" strokeWidth={2.5} aria-hidden />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={sectionPath("contact")}
                      onClick={sectionNavClick("contact")}
                      className={`group/cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 ${
                        service.featured
                          ? "btn-primary focus:ring-accent-purple/50"
                          : "border border-white/10 bg-white/[0.04] text-text-primary hover:border-accent-cyan/30 hover:bg-white/[0.07] focus:ring-accent-cyan/30"
                      }`}
                      aria-label={`${service.ctaLabel} — ${service.title}`}
                    >
                      {service.ctaLabel}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </a>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
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
              href={sectionPath("contact")}
              onClick={sectionNavClick("contact")}
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
