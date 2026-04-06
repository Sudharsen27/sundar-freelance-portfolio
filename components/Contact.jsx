"use client";

import { useMemo, useState } from "react";

const FIVERR_GIG_URL =
  process.env.NEXT_PUBLIC_FIVERR_URL || "https://www.fiverr.com/";
const WHATSAPP_NUMBER = "916382519651";

function buildWhatsAppLink({ name, email, service, budget, timeline, message }) {
  const text =
    `Hi Sundar, I'm ${name}.\n\n` +
    `Email: ${email}\n` +
    `Service needed: ${service}\n` +
    `Budget range: ${budget}\n` +
    `Timeline: ${timeline}\n\n` +
    `Project details:\n${message}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const whatsappHref = useMemo(() => buildWhatsAppLink(form), [form]);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          website: "", // honeypot
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Failed to send message.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="section-balance mx-auto max-w-lg">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s build your next project
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            Tell me what you need—scope, timeline, and budget. I usually reply within{" "}
            <span className="font-medium text-slate-300">24 hours</span>.
          </p>
        </div>
        <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={FIVERR_GIG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400/50 hover:bg-emerald-500/15 sm:w-auto"
          >
            View my gig on Fiverr
          </a>
          <span className="hidden text-slate-600 sm:inline" aria-hidden>
            ·
          </span>
          <a
            href="mailto:sundarlingam272000@gmail.com"
            className="text-sm font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-slate-300"
          >
            sundarlingam272000@gmail.com
          </a>
        </div>
        <form
          className="premium-card p-6 sm:p-8"
          onSubmit={onSubmit}
        >
          <div className="space-y-5">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500"
                placeholder="How should I address you?"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="glow-focus w-full resize-y rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500"
                placeholder="What do you need built? (e.g. landing page, admin dashboard, API). Any deadline or budget range helps me quote faster."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100"
                  value={form.service}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, service: e.target.value }))
                  }
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Full-Stack Web Development">
                    Full-Stack Web Development
                  </option>
                  <option value="Modern Frontend Development">
                    Modern Frontend Development
                  </option>
                  <option value="API Development & Integration">
                    API Development & Integration
                  </option>
                  <option value="Bug Fixing & Optimization">
                    Bug Fixing & Optimization
                  </option>
                  <option value="Deployment & Cloud Setup">
                    Deployment & Cloud Setup
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100"
                  value={form.budget}
                  onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option value="Under USD 250 (INR 20k approx.)">
                    Under USD 250 (INR 20k approx.)
                  </option>
                  <option value="USD 250–500 (INR 20k–42k approx.)">
                    USD 250-500 (INR 20k-42k approx.)
                  </option>
                  <option value="USD 500–1000 (INR 42k–84k approx.)">
                    USD 500-1000 (INR 42k-84k approx.)
                  </option>
                  <option value="USD 1000+ (INR 84k+ approx.)">
                    USD 1000+ (INR 84k+ approx.)
                  </option>
                  <option value="Let us discuss">Let us discuss</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="timeline"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Project timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="glow-focus w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100"
                value={form.timeline}
                onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))}
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="ASAP (within 3 days)">ASAP (within 3 days)</option>
                <option value="Within 1 week">Within 1 week</option>
                <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="cta-primary w-full rounded-xl py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-500/10 py-3.5 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400/45 hover:bg-emerald-500/15"
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

            <p className="text-center text-xs text-slate-500">
              No spam—your message goes only to me. For urgent work, mention it in the
              text.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
