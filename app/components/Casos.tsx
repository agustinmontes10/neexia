"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cases } from "@/app/lib/landing-data";
import AnimatedMetric from "./AnimatedMetric";
import CaseVisual from "./CaseVisual";
import Reveal from "./Reveal";

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
      <Reveal className="max-w-[640px] mx-auto mb-16 text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Casos de éxito
        </p>
        <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.1]">
          Resultados que se ven
        </h2>
        <p className="text-lg text-[#555555] leading-relaxed">
          Algunos de los negocios que ya transformamos con IA.
        </p>
      </Reveal>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-6"
      >
        {cases.map((c, i) => {
          const hero = i === 0;
          return (
            <div
              key={c.name + c.metric}
              style={visible ? { animationDelay: `${i * 120}ms` } : undefined}
              className={`group relative flex flex-col justify-between min-h-[320px] rounded-[28px] border border-[#ECECEC] bg-[#FAFAFA] p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_28px_64px_-24px_rgba(255,131,54,0.28)] ${
                hero ? "sm:col-span-2 lg:col-span-1" : ""
              } ${visible ? "animate-fade-up" : "opacity-0"}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-brand-dark scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className={`font-extrabold tracking-[-0.02em] text-[#111111] leading-none tabular-nums ${
                      hero ? "text-[56px] sm:text-[64px]" : "text-[42px]"
                    }`}
                  >
                    <AnimatedMetric value={c.metric} active={visible} />
                  </div>
                  <div className="text-[13px] text-[#777777] mt-2">
                    {c.metricLabel}
                  </div>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-brand bg-brand/10 px-2.5 py-1 rounded-full shrink-0">
                  {c.role}
                </span>
              </div>

              <div className="my-6 flex justify-center">
                <CaseVisual type={c.visual} image={c.image} active={visible} />
              </div>

              <div>
                <p className="text-[14px] text-[#444444] leading-relaxed line-clamp-3 mb-4">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <Link
                  href={`/casos/${c.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-dark transition-colors w-fit mb-4"
                >
                  Ver caso completo
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M6.5 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="pt-4 border-t border-[#ECECEC]">
                  <div className="text-sm font-semibold text-[#111111] truncate">
                    {c.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
