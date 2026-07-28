"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Boxes,
  CheckCircle2,
  Cloud,
  Cpu,
  Layers,
  Lock,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import AwsArchitectureDiagram from "@/components/case-studies/AwsArchitectureDiagram";
import { RESTAURANT_ERP } from "@/lib/case-studies/restaurant-erp";
import { BRAND_NAME } from "@/lib/brand";
import { sectionPath } from "@/lib/routes";

const featureIcons = [Boxes, Workflow, Layers, Cloud, Shield, Cpu, Lock, Sparkles];

export default function RestaurantErpCaseStudy() {
  const data = RESTAURANT_ERP;

  return (
    <div className="relative">
      {/* Ambient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(255,153,0,0.10), transparent), radial-gradient(ellipse 50% 35% at 100% 60%, rgba(6,182,212,0.07), transparent), radial-gradient(ellipse 40% 30% at 0% 80%, rgba(139,92,246,0.06), transparent), #050816",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, #FF9900 1px, transparent 1px), linear-gradient(to bottom, #06B6D4 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mb-6 text-sm text-text-secondary" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-text-primary">
                    {BRAND_NAME}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={sectionPath("projects")} className="transition hover:text-text-primary">
                    Case Studies
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-text-primary">Restaurant ERP</li>
              </ol>
            </nav>

            <div className="mb-5 flex flex-wrap gap-2">
              {data.badges.slice(0, 5).map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#FF9900]/30 bg-[#FF9900]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFB84D]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="max-w-4xl font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {data.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={data.liveDemoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Live demo: Restaurant ERP Platform"
              >
                Live Demo
              </a>
              <a href="#architecture" className="btn-secondary">
                View AWS Architecture
              </a>
              <Link href={sectionPath("contact")} className="btn-secondary">
                Discuss a Similar Build
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AWS Architecture — hero visual */}
      <section id="architecture" className="scroll-mt-28 pb-16 sm:pb-20" aria-labelledby="architecture-heading">
        <div className="section-container">
          <SectionReveal>
            <div className="mb-8 max-w-3xl">
              <span className="badge mb-4 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9900] animate-pulse" />
                Cloud Architecture
              </span>
              <h2 id="architecture-heading" className="section-heading text-left">
                AWS Cloud Architecture
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                A cloud-native topology engineered for secure, scalable enterprise
                restaurant operations — spanning load balancing, container compute,
                managed data services, networking, and identity.
              </p>
            </div>
          </SectionReveal>
          <AwsArchitectureDiagram />
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 sm:pb-20" aria-labelledby="overview-heading">
        <div className="section-container">
          <SectionReveal>
            <div className="glass-strong p-6 sm:p-8 lg:p-10">
              <h2 id="overview-heading" className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                Project Overview
              </h2>
              <div className="mt-6 space-y-4">
                {data.overview.map((para) => (
                  <p key={para.slice(0, 40)} className="text-base leading-relaxed text-text-secondary sm:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="pb-16 sm:pb-20" aria-labelledby="stack-heading">
        <div className="section-container">
          <SectionReveal>
            <div className="mb-8">
              <h2 id="stack-heading" className="section-heading text-left">
                Technology Stack
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Modern application stack paired with production AWS services for
                compute, data, networking, and security.
              </p>
            </div>
          </SectionReveal>
          <StaggerContainer className="flex flex-wrap gap-2 sm:gap-2.5">
            {data.techStack.map((tech) => (
              <StaggerItem key={tech}>
                <span className="inline-flex rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-2 text-sm text-text-primary transition hover:border-[#FF9900]/35 hover:bg-[#FF9900]/10">
                  {tech}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Deployment */}
      <section className="pb-16 sm:pb-20" aria-labelledby="deployment-heading">
        <div className="section-container">
          <SectionReveal>
            <div className="mb-8">
              <h2 id="deployment-heading" className="section-heading text-left">
                Deployment
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Enterprise deployment on AWS with containerized services and
                Infrastructure as Code.
              </p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {data.deployment.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex h-full gap-3 rounded-xl border border-white/[0.08] bg-card/50 p-5 backdrop-blur-xl transition hover:border-[#FF9900]/30">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF9900]/15 text-xs font-bold text-[#FFB84D]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16 sm:pb-20" aria-labelledby="features-heading">
        <div className="section-container">
          <SectionReveal>
            <div className="mb-8">
              <h2 id="features-heading" className="section-heading text-left">
                Key Features
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Operational modules and platform capabilities engineered for
                multi-location restaurant enterprises.
              </p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <StaggerItem key={feature}>
                  <div className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-accent-cyan/30 hover:bg-white/[0.05]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-card text-accent-cyan transition group-hover:border-accent-cyan/30">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-text-primary">{feature}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Challenges + Delivered */}
      <section className="pb-16 sm:pb-20" aria-labelledby="outcomes-heading">
        <div className="section-container">
          <h2 id="outcomes-heading" className="sr-only">
            Challenges and deliverables
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <SectionReveal>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl sm:p-8">
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  Technical Challenges
                </h3>
                <ul className="mt-5 space-y-3">
                  {data.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF9900]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-[#FF9900]/25 bg-gradient-to-br from-[#FF9900]/10 via-card/70 to-card/60 p-6 backdrop-blur-xl sm:p-8">
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  What We Delivered
                </h3>
                <ul className="mt-5 space-y-3">
                  {data.delivered.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB84D]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* All badges */}
      <section className="pb-16 sm:pb-20" aria-labelledby="badges-heading">
        <div className="section-container">
          <SectionReveal>
            <h2 id="badges-heading" className="mb-6 font-display text-xl font-semibold text-text-primary">
              Platform Capabilities
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 sm:pb-28">
        <div className="section-container">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-2xl border border-[#FF9900]/25 bg-gradient-to-r from-[#FF9900]/12 via-card to-accent-cyan/10 p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF9900]/20 blur-3xl"
                aria-hidden
              />
              <div className="relative z-10 max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB84D]">
                  {BRAND_NAME} · Cloud Engineering
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-text-primary sm:text-3xl">
                  Build your next enterprise platform on AWS
                </h2>
                <p className="mt-3 text-text-secondary">
                  From architecture design to Infrastructure as Code and production
                  deployment — we deliver cloud-native systems built for scale and security.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={data.liveDemoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    aria-label="Live demo: Restaurant ERP Platform"
                  >
                    Live Demo
                  </a>
                  <Link href={sectionPath("contact")} className="btn-secondary">
                    Start a Conversation
                  </Link>
                  <Link href={sectionPath("projects")} className="btn-secondary">
                    More Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
