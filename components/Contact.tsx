"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CustomSelect from "@/components/ui/CustomSelect";
import { whatsappUrl } from "@/lib/whatsapp";

const FIVERR_GIG_URL =
  process.env.NEXT_PUBLIC_FIVERR_URL || "https://www.fiverr.com/";

type FormState = {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

function buildWhatsAppLink(form: FormState) {
  const text =
    `Hi Sundar, I'm ${form.name}.\n\n` +
    `Email: ${form.email}\n` +
    `Service needed: ${form.service}\n` +
    `Budget range: ${form.budget}\n` +
    `Timeline: ${form.timeline}\n\n` +
    `Project details:\n${form.message}`;
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
    value: "Under ₹20,000 (approx. USD 250)",
    label: "Under ₹20,000 (approx. USD 250)",
  },
  {
    value: "₹20,000 – ₹42,000 (approx. USD 250–500)",
    label: "₹20,000 – ₹42,000 (approx. USD 250–500)",
  },
  {
    value: "₹42,000 – ₹84,000 (approx. USD 500–1,000)",
    label: "₹42,000 – ₹84,000 (approx. USD 500–1,000)",
  },
  {
    value: "₹84,000+ (approx. USD 1,000+)",
    label: "₹84,000+ (approx. USD 1,000+)",
  },
  { value: "Let's discuss", label: "Let's discuss" },
];

const TIMELINE_OPTIONS = [
  { value: "ASAP (within 3 days)", label: "ASAP (within 3 days)" },
  { value: "Within 1 week", label: "Within 1 week" },
  { value: "Within 2-4 weeks", label: "Within 2-4 weeks" },
  { value: "Flexible", label: "Flexible" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const whatsappHref = useMemo(() => buildWhatsAppLink(form), [form]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!form.service || !form.budget || !form.timeline) {
      setStatus("error");
      setError("Please select a service, budget, and timeline.");
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
      setForm({ name: "", email: "", service: "", budget: "", timeline: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  const inputClass =
    "glow-focus w-full rounded-xl border border-white/[0.08] bg-bg/80 px-4 py-3 text-text-primary placeholder:text-text-secondary/60 backdrop-blur-sm";

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <div className="section-container">
        <SectionReveal>
          <SectionHeader
            badge="Contact"
            title="Let's Build Something Great"
            subtitle="Available for freelance projects and long-term collaborations. Share your vision and I'll respond with a clear plan within 24 hours."
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <motion.div
              className="mb-8 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 px-5 py-4 text-center text-sm text-accent-cyan backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Most inquiries receive a response within 24 hours
            </motion.div>

            <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={FIVERR_GIG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto"
              >
                View Fiverr Gig
              </a>
              <a
                href="mailto:sundarlingam272000@gmail.com"
                className="text-sm text-text-secondary underline decoration-accent-purple/40 underline-offset-4 transition hover:text-text-primary"
              >
                sundarlingam272000@gmail.com
              </a>
            </div>

            <form className="premium-card p-6 sm:p-8" onSubmit={onSubmit}>
              <div className="space-y-5">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
                      Your name
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
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
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
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${inputClass} resize-y`}
                    placeholder="What do you need built? Share your goals, deadline, and any inspiration."
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <CustomSelect
                    id="service"
                    label="Service needed"
                    value={form.service}
                    placeholder="Select a service"
                    options={SERVICE_OPTIONS}
                    onChange={(service) => setForm((p) => ({ ...p, service }))}
                    required
                  />
                  <CustomSelect
                    id="budget"
                    label="Budget range (INR / USD)"
                    value={form.budget}
                    placeholder="Select budget"
                    options={BUDGET_OPTIONS}
                    onChange={(budget) => setForm((p) => ({ ...p, budget }))}
                    required
                  />
                </div>

                <CustomSelect
                  id="timeline"
                  label="Project timeline"
                  value={form.timeline}
                  placeholder="Select timeline"
                  options={TIMELINE_OPTIONS}
                  onChange={(timeline) => setForm((p) => ({ ...p, timeline }))}
                  required
                />

                <div className="space-y-3 pt-2">
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === "sending" ? "Sending..." : "Hire Me Now"}
                  </motion.button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex w-full items-center justify-center"
                  >
                    Send on WhatsApp
                  </a>
                </div>

                {status === "sent" ? (
                  <p className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-200">
                    Message sent successfully. I&apos;ll reply soon.
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-center text-sm text-red-200">
                    {error || "Something went wrong. Please try again."}
                  </p>
                ) : null}

                <p className="text-center text-xs text-text-secondary">
                  No spam — your message goes directly to me.
                </p>
              </div>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
