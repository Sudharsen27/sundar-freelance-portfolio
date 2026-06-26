"use client";

import { motion } from "framer-motion";
import SectionReveal, { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Priya K.",
    role: "Startup Founder",
    quote:
      "Clear communication from day one. The landing page was delivered on time and looked far more premium than our initial brief.",
    outcome: "Delivered in 5 days",
    rating: 5,
  },
  {
    name: "Arun M.",
    role: "Operations Manager",
    quote:
      "He rebuilt our dashboard flow and performance improved significantly. Handover was clean and easy for our internal team.",
    outcome: "Faster dashboard experience",
    rating: 5,
  },
  {
    name: "Naveen R.",
    role: "Product Lead",
    quote:
      "Strong full-stack support with practical suggestions, not just implementation. We launched smoothly without last-minute issues.",
    outcome: "Production launch without blockers",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#FACC15]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.767-.823-.38-1.735.588-1.81l3.461-.266a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-28 py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />
      </div>

      <div className="section-container">
        <SectionReveal>
          <SectionHeader
            badge="Testimonials"
            title="Trusted by Clients"
            subtitle="Real feedback from founders, managers, and product leads who needed reliable digital work delivered on time."
            headingId="testimonials-heading"
          />
        </SectionReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <motion.article
                className="premium-card flex h-full flex-col p-7"
                whileHover={{ y: -4 }}
              >
                <Stars count={item.rating} />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-text-secondary sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan font-display text-sm font-bold text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.name.charAt(0)}
                    </motion.div>
                    <div>
                      <p className="font-medium text-text-primary">{item.name}</p>
                      <p className="text-xs text-text-secondary">{item.role}</p>
                    </div>
                  </div>
                  <span className="mt-3 inline-flex rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1 text-[11px] font-medium text-accent-cyan">
                    {item.outcome}
                  </span>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
