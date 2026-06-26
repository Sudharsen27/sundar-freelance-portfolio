"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pathToSectionId } from "@/lib/routes";
import { scrollToSectionId } from "@/lib/scroll";

export default function ScrollOnNavigate() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const sectionId = pathToSectionId(pathname);
    if (!sectionId) return;

    const frame = requestAnimationFrame(() => {
      scrollToSectionId(sectionId);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
