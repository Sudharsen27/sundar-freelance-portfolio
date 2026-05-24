import { whatsappUrl } from "@/lib/whatsapp";

const linkedInUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://www.linkedin.com/in/sundar-lingam";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sudharsen27",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.58 2 12.253c0 4.536 2.943 8.392 7.023 9.748.514.095.703-.223.703-.496 0-.246-.009-.892-.014-1.75-2.856.628-3.46-1.404-3.46-1.404-.468-1.201-1.142-1.52-1.142-1.52-.933-.644.071-.631.071-.631 1.032.073 1.575 1.074 1.575 1.074.918 1.586 2.407 1.127 2.993.861.093-.672.358-1.127.652-1.386-2.28-.262-4.678-1.16-4.678-5.166 0-1.141.403-2.073 1.063-2.804-.107-.262-.462-1.317.1-2.743 0 0 .867-.28 2.84 1.07a9.65 9.65 0 0 1 2.52-.345c.854.004 1.714.117 2.52.345 1.972-1.35 2.837-1.07 2.837-1.07.564 1.426.21 2.481.103 2.743.662.731 1.06 1.663 1.06 2.804 0 4.018-2.403 4.9-4.694 5.155.37.322.698.956.698 1.926 0 1.39-.013 2.512-.013 2.854 0 .277.186.597.708.496C19.059 20.645 22 16.788 22 12.253 22 6.58 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: linkedInUrl,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V23h-4V8Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: whatsappUrl("Hi Sundar, I'd like to discuss a project."),
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.99 11.99 0 0 0 3.64 20.36L2 22l3.13-1.03A11.99 11.99 0 0 0 20.52 3.48ZM12 21a9 9 0 0 1-4.36-1.12l-.25-.13-1.91.63.63-1.85-.14-.26A9 9 0 1 1 12 21Zm5.62-6.76c-.31-.16-1.85-.91-2.14-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.3-.48-2.47-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.5.11-.18.06-.34-.03-.5-.09-.16-.71-1.69-.97-2.32-.26-.63-.52-.53-.71-.53h-.6c-.18 0-.48.07-.73.33-.25.26-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 3 4.68 4.2.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/[0.06] py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" aria-hidden />

      <div className="section-container">
        <div className="glass-strong p-8 sm:p-10">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-display text-xl font-bold text-text-primary">
                Sundar Lingam
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Digital Creator & Freelance Developer
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-text-secondary transition hover:scale-105 hover:border-accent-cyan/30 hover:text-text-primary hover:shadow-glowCyan"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/[0.06] pt-8 text-center text-sm text-text-secondary sm:flex-row sm:justify-between">
            <p>
              <a
                href="mailto:sundarlingam272000@gmail.com"
                className="text-text-primary underline decoration-accent-purple/40 underline-offset-4 transition hover:decoration-accent-cyan"
              >
                sundarlingam272000@gmail.com
              </a>
              <span className="mx-2 hidden sm:inline" aria-hidden>
                ·
              </span>
              <a href="tel:+916382519651" className="block sm:inline hover:text-text-primary">
                +91 6382519651
              </a>
            </p>
            <p>Sundar © 2026 · All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
