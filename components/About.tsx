"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { scrollToSection } from "@/lib/scroll";

const highlights = [
  "Modern, conversion-focused website design",
  "Full-stack development with clean architecture",
  "Responsive experiences across all devices",
  "Clear communication and reliable delivery",
];

const stats = [
  { label: "Response time", value: "24 hrs", desc: "Quick replies & clear next steps" },
  { label: "Projects shipped", value: "8+", desc: "Live products for real clients" },
  { label: "Client focus", value: "100%", desc: "Business outcomes over just code" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-container">
        <SectionReveal>
          <SectionHeader
            badge="About Me"
            title="Your Partner in Digital Growth"
            subtitle="I'm a digital creator and full-stack developer who helps brands, startups, and creators launch premium web experiences that build trust and drive results."
            align="left"
          />
        </SectionReveal>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionReveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 blur-2xl" />
              <div className="premium-card relative overflow-hidden p-2">
                <Image
                  src="/about-workspace.png"
                  alt="Developer workspace with monitor, laptop, and purple ambient lighting"
                  width={1024}
                  height={682}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-text-secondary">
                I combine design sensibility with technical execution to deliver
                websites that look premium and perform flawlessly. From landing
                pages to full business websites, every project is built with your
                audience and growth goals in mind.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                When you work with me, you get a freelancer who treats your brand
                like their own — transparent updates, on-time delivery, and code
                you can scale with confidence.
              </p>

              <StaggerContainer className="space-y-3 pt-2">
                {highlights.map((line) => (
                  <StaggerItem key={line}>
                    <div className="flex items-start gap-3 text-text-secondary">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-purple/20 text-xs text-accent-purple">
                        ✓
                      </span>
                      {line}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <motion.a
                href="/"
                onClick={(e) => scrollToSection(e, "contact")}
                className="btn-primary mt-4 inline-flex"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.a>
            </div>
          </SectionReveal>
        </div>

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="premium-card p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-secondary">{stat.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
