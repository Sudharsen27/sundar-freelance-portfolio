const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-me", label: "Why me" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mx-4 px-4 pt-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <nav
        className="section-shell flex items-center justify-between gap-3 px-4 py-3 transition hover:shadow-glass sm:px-5"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="shrink-0 text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300"
        >
          Sundar
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-0.5 text-sm sm:gap-2 sm:text-base">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-2 py-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-1 sm:ml-2">
            <a
              href="#contact"
              className="inline-flex rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:scale-[1.02] sm:px-4"
            >
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
