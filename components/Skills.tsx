"use client";

import { motion } from "framer-motion";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Astro", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "JWT Auth", level: 88 },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Figma", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel / AWS", level: 82 },
    ],
  },
];

const tools = [
  "React", "Next.js", "Astro", "Node.js", "TypeScript", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "Framer Motion", "Figma", "Vercel",
  "AWS", "Git", "REST APIs", "JWT", "Snowflake",
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-28" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionReveal>
          <SectionHeader
            badge="Skills"
            title="Tools & Expertise"
            subtitle="A modern tech stack combined with design thinking — built to deliver premium digital products that perform."
            headingId="skills-heading"
          />
        </SectionReveal>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="premium-card h-full p-7">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
                <div className="mt-6 space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-text-secondary">{skill.name}</span>
                        <span className="font-medium text-accent-cyan">{skill.level}%</span>
                      </div>
                      <div
                        className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          aria-hidden
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.2}>
          <div className="premium-card mt-10 p-8">
            <p className="mb-5 text-center text-sm font-semibold uppercase tracking-wider text-accent-purple">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <motion.span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-text-secondary transition hover:border-accent-cyan/30 hover:text-text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
