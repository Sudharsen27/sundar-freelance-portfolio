"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  CloudCog,
  Container,
  Database,
  KeyRound,
  Lock,
  Network,
  Package,
  PlaneTakeoff,
  Server,
  Shield,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import { AWS_SERVICES } from "@/lib/aws-services-data";
import { sectionPath } from "@/lib/routes";
import { sectionNavClick } from "@/lib/scroll";
import { whatsappUrl } from "@/lib/whatsapp";

const AWS_ICONS: Record<string, LucideIcon> = {
  "aws-consulting": Cloud,
  "cloud-migration": PlaneTakeoff,
  docker: Container,
  "ecs-fargate": Server,
  ecr: Package,
  rds: Database,
  elasticache: Boxes,
  vpc: Network,
  iam: Shield,
  "secrets-manager": KeyRound,
  iac: CloudCog,
  monitoring: Activity,
  "cost-optimization": Wallet,
};

/** Embedded AWS block — rendered inside the main Services section. */
export default function AwsServices() {
  return (
    <div className="relative mt-20 sm:mt-24" aria-labelledby="aws-services-heading">
      <div className="pointer-events-none absolute inset-0 -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8" aria-hidden>
        <motion.div
          className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-[#146EB4]/20 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-[#FF9900]/14 blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FF9900 1px, transparent 1px), linear-gradient(to bottom, #146EB4 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative">
        {/* AWS-branded section header */}
        <SectionReveal>
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF9900]/35 bg-[#FF9900]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFB84D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9900] shadow-[0_0_8px_rgba(255,153,0,0.8)]" />
              AWS · Cloud · DevOps
            </span>
            <h2
              id="aws-services-heading"
              className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
            >
              AWS Cloud &amp; DevOps Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Enterprise cloud architecture, AWS consulting, DevOps automation,
              Infrastructure as Code, Docker containerization, cloud migration,
              and production deployments.
            </p>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {AWS_SERVICES.map((service) => {
            const headingId = `aws-service-${service.id}-title`;
            const Icon = AWS_ICONS[service.id] ?? Cloud;
            const isFeatured = Boolean(service.featured);

            return (
              <StaggerItem key={service.id} className="h-full">
                <motion.article
                  aria-labelledby={headingId}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-card backdrop-blur-xl transition-all duration-500 sm:p-6 ${
                    isFeatured
                      ? "border-[#FF9900]/40 bg-gradient-to-b from-[rgba(255,153,0,0.12)] via-[#0B1628]/95 to-[#0B1628] hover:border-[#FF9900]/55 hover:shadow-[0_0_40px_rgba(255,153,0,0.18)]"
                      : "border-white/[0.09] bg-[#0B1628]/85 hover:border-[#146EB4]/45 hover:shadow-[0_0_36px_rgba(20,110,180,0.16)]"
                  }`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
                      isFeatured ? "via-[#FF9900]/80" : "via-[#146EB4]/50"
                    }`}
                    aria-hidden
                  />

                  <div className="relative flex min-h-0 flex-1 flex-col">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isFeatured
                            ? "border-[#FF9900]/45 bg-[#FF9900]/15 text-[#FFB84D] shadow-[0_0_18px_rgba(255,153,0,0.22)]"
                            : "border-[#146EB4]/35 bg-[#146EB4]/12 text-[#7EC4F0] group-hover:border-[#FF9900]/35 group-hover:bg-[#FF9900]/12 group-hover:text-[#FFB84D]"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </div>
                      {isFeatured ? (
                        <span className="rounded-full border border-[#FF9900]/40 bg-[#FF9900]/12 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FFB84D]">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <h3
                      id={headingId}
                      className="font-display text-[1.05rem] font-semibold leading-snug text-text-primary sm:text-lg"
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 min-h-[3.25rem] text-sm leading-relaxed text-text-secondary">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-white/[0.07] pt-4">
                      <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7EC4F0]">
                        Capabilities
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#146EB4]/30 bg-[#146EB4]/12 px-2 py-0.5 text-[11px] font-medium text-[#C5E4F7]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul
                      className="mt-4 flex-1 space-y-2.5"
                      aria-label={`${service.title} features`}
                    >
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[13px] leading-snug text-text-secondary"
                        >
                          <span className="mt-0.5 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full border border-[#FF9900]/45 bg-[#FF9900]/10 shadow-[0_0_8px_rgba(255,153,0,0.15)]">
                            <Check
                              className="h-2.5 w-2.5 text-[#FFB84D]"
                              strokeWidth={3}
                              aria-hidden
                            />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={sectionPath("contact")}
                      onClick={sectionNavClick("contact")}
                      className={`group/cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#FF9900] to-[#E88B00] text-[#0B1224] shadow-[0_0_22px_rgba(255,153,0,0.28)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,153,0,0.4)] focus:ring-[#FF9900]/50"
                          : "border border-white/[0.12] bg-white/[0.04] text-text-primary hover:border-[#FF9900]/40 hover:bg-[#FF9900]/10 focus:ring-[#FF9900]/30"
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
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-[#FF9900]/25 bg-gradient-to-r from-[#0B1F33] via-[#0B1628] to-[#1A1208] p-8 text-center shadow-card backdrop-blur-xl sm:mt-16 sm:p-10">
            <div
              className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-[#146EB4]/30 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-[#FF9900]/22 blur-3xl"
              aria-hidden
            />
            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF9900]/40 bg-[#FF9900]/12 shadow-[0_0_20px_rgba(255,153,0,0.2)]">
                <Lock className="h-5 w-5 text-[#FFB84D]" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                Ready to Build on AWS?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-text-secondary">
                Let&apos;s architect secure, scalable cloud infrastructure tailored
                to your business.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={sectionPath("contact")}
                  onClick={sectionNavClick("contact")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF9900] to-[#E88B00] px-6 py-3 text-sm font-semibold text-[#0B1224] shadow-[0_0_28px_rgba(255,153,0,0.32)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(255,153,0,0.45)] focus:outline-none focus:ring-2 focus:ring-[#FF9900]/50 sm:w-auto"
                >
                  Book Free Consultation
                </a>
                <a
                  href={whatsappUrl(
                    "Hi Sundar Digital, I'd like to talk to an AWS expert about cloud architecture."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#146EB4]/45 bg-[#146EB4]/15 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-[#FF9900]/40 hover:bg-[#FF9900]/10 focus:outline-none focus:ring-2 focus:ring-[#146EB4]/40 sm:w-auto"
                >
                  Talk to AWS Expert
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
