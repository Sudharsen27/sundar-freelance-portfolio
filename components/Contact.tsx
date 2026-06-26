"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Clock, Code2, Handshake, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CustomSelect from "@/components/ui/CustomSelect";
import ContactFaq from "@/components/ContactFaq";
import { whatsappUrl } from "@/lib/whatsapp";

const FIVERR_GIG_URL =
  process.env.NEXT_PUBLIC_FIVERR_URL || "https://www.fiverr.com/";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  referral: string;
  description: string;
};

function buildWhatsAppLink(form: FormState) {
  const companyLine = form.company ? `Company: ${form.company}\n` : "";
  const text =
    `Hi Sundar, I'm ${form.name}.\n\n` +
    `Email: ${form.email}\n` +
    companyLine +
    `Service needed: ${form.service}\n` +
    `Project budget: ${form.budget}\n` +
    `Timeline: ${form.timeline}\n` +
    `How they found me: ${form.referral}\n\n` +
    `Project description:\n${form.description}`;
  return whatsappUrl(text);
}

const SERVICE_OPTIONS = [
  { value: "Website Development", label: "Website Development" },
  { value: "Responsive Websites", label: "Responsive Websites" },
  { value: "Portfolio Websites", label: "Portfolio Websites" },
  { value: "Landing Pages", label: "Landing Pages" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Business Websites", label: "Business Websites" },
  { value: "Other", label: "Other" },
];

const BUDGET_OPTIONS = [
  {
    value: "Under ₹20,000 (Landing Pages)",
    label: "Under ₹20,000 (Landing Pages)",
  },
  {
    value: "₹20,000 – ₹50,000 (Business Websites)",
    label: "₹20,000 – ₹50,000 (Business Websites)",
  },
  {
    value: "₹50,000 – ₹1,00,000 (Custom Web Apps)",
    label: "₹50,000 – ₹1,00,000 (Custom Web Apps)",
  },
  {
    value: "₹1,00,000+ (Enterprise / SaaS)",
    label: "₹1,00,000+ (Enterprise / SaaS)",
  },
  { value: "Let's discuss", label: "Let's discuss" },
];

const TIMELINE_OPTIONS = [
  { value: "ASAP (within 3 days)", label: "ASAP (within 3 days)" },
  { value: "Within 1 week", label: "Within 1 week" },
  { value: "Within 2-4 weeks", label: "Within 2-4 weeks" },
  { value: "Flexible", label: "Flexible" },
];

const REFERRAL_OPTIONS = [
  { value: "Google Search", label: "Google Search" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Fiverr", label: "Fiverr" },
  { value: "Referral / Word of mouth", label: "Referral / Word of mouth" },
  { value: "Social Media", label: "Social Media" },
  { value: "Portfolio / Website", label: "Portfolio / Website" },
  { value: "Other", label: "Other" },
];

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  referral: "",
  description: "",
};

const PROJECT_PROMPT_POINTS = [
  "What are you building?",
  "Who is your target audience?",
  "Do you have a reference website?",
  "What features do you need?",
  "When do you want it completed?",
];

const SUBMIT_TRUST_BADGES: { icon: LucideIcon; label: string }[] = [
  { icon: Handshake, label: "Free consultation" },
  { icon: Clock, label: "Response within 24 hours" },
  { icon: ShieldCheck, label: "NDA available" },
  { icon: Code2, label: "100% Custom Development" },
  { icon: UserCheck, label: "Direct communication with developer" },
];

const TRUST_POINTS = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 6v6l4 2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "24-hour response",
    desc: "Every inquiry gets a thoughtful reply within one business day.",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Direct to Sundar",
    desc: "No middlemen — your message lands straight in my inbox.",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No spam, ever",
    desc: "Your details stay private and are never shared or sold.",
  },
];

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const whatsappHref = useMemo(() => buildWhatsAppLink(form), [form]);

  useEffect(() => {
    if (status !== "sent") return;
    const timer = window.setTimeout(() => setStatus("idle"), 15_000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!form.service || !form.budget || !form.timeline || !form.referral) {
      setStatus("error");
      setError("Please complete all required fields, including the dropdown selections.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: "" }),
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  const inputClass =
    "glow-focus w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-[15px] leading-relaxed text-text-primary placeholder:text-text-secondary/50 backdrop-blur-md transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] focus:border-accent-purple/40 focus:bg-white/[0.06]";

  const labelClass =
    "mb-2.5 block text-[13px] font-semibold uppercase tracking-[0.08em] text-text-secondary";

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-purple/10 blur-[130px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[110px]"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8B5CF6 1px, transparent 1px), linear-gradient(to bottom, #06B6D4 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <SectionReveal>
          <SectionHeader
            badge="Contact"
            title="Let's Build Something Great"
            subtitle="Available for freelance projects and long-term collaborations. Share your vision and I'll respond with a clear plan within 24 hours."
          />
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Trust sidebar */}
            <aside className="lg:col-span-4">
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-card/40 p-6 backdrop-blur-2xl sm:p-8"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-purple/20 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-accent-cyan/15 blur-3xl"
                  aria-hidden
                />

                <div className="relative space-y-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Accepting new projects
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-[1.65rem]">
                      Ready to start?
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                      Tell me about your project and I&apos;ll send a tailored proposal —
                      timeline, scope, and next steps included.
                    </p>
                  </div>

                  <ul className="space-y-4" role="list">
                    {TRUST_POINTS.map((point) => (
                      <li
                        key={point.title}
                        className="group flex gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan transition-colors duration-300 group-hover:border-accent-purple/30 group-hover:bg-accent-purple/10 group-hover:text-accent-purple">
                          {point.icon}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">{point.title}</p>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-text-secondary">
                            {point.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 border-t border-white/[0.08] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary/80">
                      Prefer another channel?
                    </p>
                    <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                      <motion.a
                        href={FIVERR_GIG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline w-full text-center sm:w-auto lg:w-full xl:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Fiverr Gig
                      </motion.a>
                      <a
                        href="mailto:hello.sundardigital@gmail.com"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/[0.06] hover:text-text-primary sm:w-auto lg:w-full xl:w-auto"
                      >
                        <svg
                          className="h-4 w-4 text-accent-cyan transition-transform duration-300 group-hover:scale-110"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          aria-hidden
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        hello.sundardigital@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </aside>

            {/* Form panel */}
            <div className="lg:col-span-8">
              <motion.form
                className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-card/70 via-card/50 to-card/30 p-6 shadow-card backdrop-blur-2xl sm:p-8 lg:p-10"
                onSubmit={onSubmit}
                aria-busy={status === "sending"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"
                  aria-hidden
                />

                <div className="mb-8 sm:mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-cyan">
                    Project inquiry
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                    Share your vision
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-text-secondary">
                    Fill in the details below — the more context you share, the better I can
                    help.
                  </p>
                </div>

                <div className="space-y-7 sm:space-y-8">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  {/* Identity */}
                  <fieldset className="space-y-5">
                    <legend className="sr-only">Your contact information</legend>
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <label htmlFor="name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          className={inputClass}
                          placeholder="How should I address you?"
                          value={form.name}
                          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        />
                      </motion.div>
                      <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className={inputClass}
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        />
                      </motion.div>
                    </div>
                    <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <label htmlFor="company" className={labelClass}>
                        Company name{" "}
                        <span className="font-normal normal-case tracking-normal text-text-secondary/60">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputClass}
                        placeholder="Your business or brand name"
                        value={form.company}
                        onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                      />
                    </motion.div>
                  </fieldset>

                  {/* Project qualification */}
                  <fieldset className="space-y-5">
                    <legend className="sr-only">Project qualification</legend>
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <CustomSelect
                          id="service"
                          label="Service needed"
                          value={form.service}
                          placeholder="Select a service"
                          options={SERVICE_OPTIONS}
                          onChange={(service) => setForm((p) => ({ ...p, service }))}
                          required
                        />
                      </motion.div>
                      <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <CustomSelect
                          id="budget"
                          label="Budget"
                          value={form.budget}
                          placeholder="Select your investment range"
                          options={BUDGET_OPTIONS}
                          onChange={(budget) => setForm((p) => ({ ...p, budget }))}
                          required
                        />
                      </motion.div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <motion.div custom={5} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <CustomSelect
                          id="timeline"
                          label="Timeline"
                          value={form.timeline}
                          placeholder="Select timeline"
                          options={TIMELINE_OPTIONS}
                          onChange={(timeline) => setForm((p) => ({ ...p, timeline }))}
                          required
                        />
                      </motion.div>
                      <motion.div custom={6} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <CustomSelect
                          id="referral"
                          label="How did you hear about me?"
                          value={form.referral}
                          placeholder="Select an option"
                          options={REFERRAL_OPTIONS}
                          onChange={(referral) => setForm((p) => ({ ...p, referral }))}
                          required
                        />
                      </motion.div>
                    </div>
                  </fieldset>

                  {/* Project description */}
                  <motion.div custom={7} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label htmlFor="description" className={labelClass}>
                      Describe your project
                    </label>

                    <div className="mb-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 sm:px-5">
                      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary/70">
                        Example
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2" role="list">
                        {PROJECT_PROMPT_POINTS.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-[13px] leading-snug text-text-secondary/80"
                          >
                            <span
                              className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent-cyan"
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      required
                      className={`${inputClass} min-h-[140px] resize-y`}
                      placeholder="Describe your project."
                      value={form.description}
                      onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                    />
                  </motion.div>

                  {/* CTA block */}
                  <div className="space-y-4 border-t border-white/[0.08] pt-8">
                    <div className="space-y-5">
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan px-6 py-4 text-base font-semibold text-white shadow-glowPurple transition-all duration-300 hover:shadow-glowCyan focus:outline-none focus:ring-2 focus:ring-accent-purple/50 disabled:cursor-not-allowed disabled:opacity-60"
                        whileHover={status !== "sending" ? { scale: 1.015 } : undefined}
                        whileTap={status !== "sending" ? { scale: 0.985 } : undefined}
                      >
                        <span
                          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                          aria-hidden
                        />
                        <span className="relative flex items-center justify-center gap-2.5">
                          {status === "sending" ? (
                            <>
                              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending your inquiry…
                            </>
                          ) : (
                            <>
                              Get Free Project Consultation
                              <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden
                              >
                                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </>
                          )}
                        </span>
                      </motion.button>

                      <ul
                        className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3"
                        role="list"
                        aria-label="Why work with me"
                      >
                        {SUBMIT_TRUST_BADGES.map(({ icon: Icon, label }, index) => (
                          <li
                            key={label}
                            className={`flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] ${
                              index === SUBMIT_TRUST_BADGES.length - 1
                                ? "sm:col-span-2 sm:mx-auto sm:max-w-md sm:w-full"
                                : ""
                            }`}
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-accent-cyan/20 bg-accent-cyan/10">
                              <Icon
                                className="h-3.5 w-3.5 text-accent-cyan"
                                strokeWidth={2.25}
                                aria-hidden
                              />
                            </span>
                            <span className="text-[13px] font-medium leading-snug text-text-primary/90">
                              {label}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <motion.a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex w-full items-center justify-center gap-2.5 py-3.5 text-sm"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Discuss Your Project on WhatsApp
                      </motion.a>
                    </div>

                    <p className="text-center text-xs leading-relaxed text-text-secondary/80">
                      No spam — your message goes directly to me.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {status === "sent" ? (
                      <motion.div
                        key="success"
                        role="status"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-center text-sm text-emerald-200"
                      >
                        <p className="text-base font-semibold text-emerald-100">
                          🎉 Thanks for reaching out!
                        </p>
                        <p className="mt-2 leading-relaxed">
                          I&apos;ve received your project inquiry and will respond within 24
                          hours.
                        </p>
                        <p className="mt-2 leading-relaxed text-emerald-200/90">
                          If your project is urgent, feel free to{" "}
                          <a
                            href={whatsappUrl(
                              "Hi Sundar, I just submitted a project inquiry and it's urgent."
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-emerald-100 underline decoration-emerald-400/50 underline-offset-2 transition hover:text-white"
                          >
                            message me directly on WhatsApp
                          </a>
                          .
                        </p>
                      </motion.div>
                    ) : null}

                    {status === "error" ? (
                      <motion.p
                        key="error"
                        role="alert"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3.5 text-center text-sm text-red-200"
                      >
                        {error || "Something went wrong. Please try again."}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.form>
            </div>
          </div>
        </SectionReveal>

        <ContactFaq />
      </div>
    </section>
  );
}
