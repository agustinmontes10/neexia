"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cases } from "@/app/lib/landing-data";

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-brand shrink-0 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110"
    >
      <path d="M9.94 15.5a2 2 0 0 0-1.44-1.44l-6.13-1.58a.5.5 0 0 1 0-.96l6.13-1.58a2 2 0 0 0 1.44-1.44l1.58-6.13a.5.5 0 0 1 .96 0l1.58 6.13a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z" />
    </svg>
  );
}

function parseMetric(raw: string) {
  const match = raw.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, decimals: 0, suffix: raw };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), decimals, suffix };
}

function AnimatedMetric({ value, active }: { value: string; active: boolean }) {
  const { prefix, target, decimals, suffix } = parseMetric(value);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 1100;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function Casos() {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="casos"
      className="max-w-[1280px] mx-auto px-6 sm:px-12 py-16 sm:py-24"
    >
      <div className="max-w-[640px] mx-auto mb-16 text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Casos de éxito
        </p>
        <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.1]">
          Resultados que se ven
        </h2>
        <p className="text-lg text-[#555555] leading-relaxed">
          Algunos de los negocios que ya transformamos con IA.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cases.map((c, i) => (
          <div
            key={c.name + c.metric}
            style={visible ? { animationDelay: `${i * 120}ms` } : undefined}
            className={`group relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#ECECEC] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_-16px_rgba(255,131,54,0.35)] ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-brand to-brand-dark scale-x-0 origin-left transition-transform duration-[300ms] group-hover:scale-x-100" />

            <Image
              src={c.image}
              alt={`Captura del proyecto de ${c.role}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/90" />

            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white/90 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {c.role}
              </span>
              <span className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-center">
                <SparkleIcon />
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6">
              <div className="text-[42px] font-extrabold tracking-[-0.02em] text-white leading-none tabular-nums">
                <AnimatedMetric value={c.metric} active={visible} />
              </div>
              <div className="text-[13px] text-white/70 -mt-2">
                {c.metricLabel}
              </div>

              <p className="text-[14px] text-white/85 leading-relaxed line-clamp-3">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2.5 pt-3 mt-1 border-t border-white/15">
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/25 shrink-0 bg-white/10">
                  <Image src={c.avatar} alt={c.name} fill className="object-cover" />
                </div>
                <div className="text-sm font-semibold text-white truncate">
                  {c.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
