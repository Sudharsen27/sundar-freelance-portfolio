export function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  sectionId: string
) {
  event.preventDefault();
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
}
