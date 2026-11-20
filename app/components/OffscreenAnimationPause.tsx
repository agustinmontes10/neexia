"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Pauses the looping decorative animations of every <section> that is off
 * screen, by toggling `data-offscreen` on it — the CSS rule in globals.css
 * sets `animation-play-state: paused` on the infinite `animate-*` classes
 * inside. Without it all the landing's loops (atmosphere blobs, flow dots,
 * the resizing browser, …) kept running from anywhere on the page and held a
 * throttled phone CPU at ~98%. Renders nothing; mounted once in the root
 * layout and re-run on route changes so new pages' sections are observed.
 */
export default function OffscreenAnimationPause() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.toggleAttribute("data-offscreen", !entry.isIntersecting);
        }
      },
      // Resume a little before a section scrolls in, so loops are already
      // moving when it appears.
      { rootMargin: "200px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      sections.forEach((s) => s.removeAttribute("data-offscreen"));
    };
  }, [pathname]);

  return null;
}
