"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sectionPath } from "@/lib/routes";
import { PATH_TO_SECTION, scrollToSection } from "@/lib/scroll";

function syncSectionScroll() {
  const hashId = window.location.hash.replace(/^#/, "");
  if (hashId && document.getElementById(hashId)) {
    scrollToSection(hashId);
    return;
  }

  const pathSection = PATH_TO_SECTION[window.location.pathname];
  if (pathSection) {
    const target = sectionPath(pathSection);
    window.history.replaceState(null, "", target);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    scrollToSection(pathSection);
  }
}

/** Scrolls to the correct section on load, hash change, and legacy path URLs. */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => {
      requestAnimationFrame(() => syncSectionScroll());
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, [pathname]);

  return null;
}
