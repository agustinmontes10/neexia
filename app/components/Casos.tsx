"use client";

import Link from "next/link";
import { cases } from "@/app/lib/landing-data";
import { useInView } from "@/app/lib/useInView";
import AnimatedMetric from "./AnimatedMetric";
import Atmosphere from "./Atmosphere";
import CaseVisual from "./CaseVisual";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Success stories, in the same visual language as the Servicios cards: the
 * case's visual over a soft atmosphere (no box), then the counting metric,
 * label and business type below. The visuals are "live": a website scrolled
 * like a screen recording, or a WhatsApp chat answered by the agent. The quote
 * slides in over the bottom on hover (desktop only — no blur, so the animation
 * stays visible; the full quote is on the case page).
 */
export default function Casos() {
  const [ref, active] = useInView<HTMLDivElement>(0.2);

  return (
    <section id="casos" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20 sm:py-28 scroll-mt-8">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
        <SectionHeading muted="Negocios que ya" strong="trabajan con IA." />
        <p className="text-[15px] text-body leading-relaxed max-w-[280px]">
          Resultados medidos en proyectos reales, no promesas.
        </p>
      </Reveal>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {cases.map((c, i) => (
          <Reveal
            key={c.slug}
            delay={i * 90}
            className={i === cases.length - 1 && cases.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <Link
              href={`/casos/${c.slug}`}
              className="group block rounded-[22px] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
            >
              <div className="relative h-[360px] sm:h-[400px] rounded-[22px] overflow-hidden flex items-center justify-center px-5 sm:px-6">
                <Atmosphere variant="soft" mark={false} />
                <div className="relative w-full flex justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
                  <CaseVisual type={c.visual} image={c.image} url={c.url} chat={c.chat} active={active} />
                </div>
                <div className="hidden lg:block absolute inset-x-4 bottom-4 glass rounded-[16px] px-4 py-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[14px] leading-snug text-ink">&ldquo;{c.quote}&rdquo;</p>
                </div>
                <span className="absolute top-4 right-4 text-[11px] text-ink/70 bg-white/70 border border-white backdrop-blur rounded-full px-2.5 py-1">
                  {c.role}
                </span>
              </div>

              <div className="pt-5 px-1">
                <div className="text-[44px] sm:text-[48px] leading-none tracking-[-0.045em] text-ink tabular-nums">
                  <AnimatedMetric value={c.metric} active={active} />
                </div>
                <p className="mt-2 text-[14px] text-body">{c.metricLabel}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] text-ink">
                  {c.name}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-3.5 h-3.5 text-ink/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  >
                    <path d="M6.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
