"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { FAQ_ITEMS } from "@/lib/faq";

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionReveal delay={0.12}>
      <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-cyan">
            FAQ
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Common questions
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
            Quick answers before you reach out.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
                  isOpen
                    ? "border-accent-purple/30 bg-card/60 shadow-[0_0_0_1px_rgba(139,92,246,0.1)]"
                    : "border-white/[0.08] bg-card/40 hover:border-white/[0.12] hover:bg-card/50"
                }`}
              >
                <h4>
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-semibold text-text-primary sm:text-[15px]">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]"
                      aria-hidden
                    >
                      <ChevronDown className="h-4 w-4 text-accent-cyan" strokeWidth={2.25} />
                    </motion.span>
                  </button>
                </h4>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/[0.06] px-5 pb-5 pt-3 text-sm leading-relaxed text-text-secondary sm:px-6 sm:pb-6">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
