"use client";

import { useEffect, useRef } from "react";

const SPOTLIGHT_RADIUS = 425;

export default function CursorGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const reveal = revealRef.current;
    const section = container?.parentElement;
    if (!container || !reveal || !section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      reveal.style.setProperty("--grid-x", `${e.clientX - rect.left - SPOTLIGHT_RADIUS}px`);
      reveal.style.setProperty("--grid-y", `${e.clientY - rect.top - SPOTLIGHT_RADIUS}px`);
      reveal.style.opacity = "1";
    };

    const handleLeave = () => {
      reveal.style.opacity = "0";
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden sm:block"
    >
      <div ref={revealRef} className="hero-grid absolute inset-0" />
    </div>
  );
}
