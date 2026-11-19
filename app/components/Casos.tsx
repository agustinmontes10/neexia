"use client";

import Link from "next/link";
import { cases, type CaseVisualShape } from "@/app/lib/landing-data";
import { useInView } from "@/app/lib/useInView";
import AnimatedMetric from "./AnimatedMetric";
import { CaseStage } from "./CaseVisual";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Landscape visuals (websites) take two columns of the bento on lg; the chat (a phone) takes one. */
const WIDE = new Set<CaseVisualShape>(["webScroll"]);

/**
 * Success stories as a bento: each case's live visual standing on the bottom
 * edge of a soft-atmosphere stage (`CaseStage`), websites two columns wide and
 * the WhatsApp chat (a phone) one, then the counting metric, label and business
 * type below. The quote slides in over the bottom on hover (desktop only — no
 * blur, so the animation stays visible; the full quote is on the case page).
 */
export default function Casos() {
  const [ref, active] = useInView<HTMLDivElement>(0.2);

  return (
    <section id="casos" className="screen-section max-w-[1200px] mx-auto px-5 sm:px-10 py-20 sm:py-28">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14 lg:mb-[clamp(20px,4svh,56px)]">
        <SectionHeading muted="Negocios que ya" strong="trabajan con IA." />
        <p className="text-[15px] text-body leading-relaxed max-w-[280px]">
          Resultados medidos en proyectos reales, no promesas.
        </p>
      </Reveal>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12">
        {cases.map((c, i) => (
          <Reveal key={c.slug} delay={i * 90} className={WIDE.has(c.visual) ? "lg:col-span-2" : ""}>
            <Link
              href={`/casos/${c.slug}`}
              className="group block rounded-[22px] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
            >
              <CaseStage
                type={c.visual}
                image={c.image}
                url={c.url}
                chat={c.chat}
                avatar={c.chatAvatar}
                active={active}
                className="h-[420px] sm:h-[480px] lg:h-[clamp(260px,calc(68svh-128px),500px)]"
                visualClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2"
              >
                <span className="absolute top-4 left-4 text-[11px] text-ink/70 bg-white/70 border border-white backdrop-blur rounded-full px-2.5 py-1">
                  {c.role}
                </span>
                <div className="hidden lg:block absolute inset-x-4 bottom-4 glass rounded-[16px] px-4 py-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[14px] leading-snug text-ink">&ldquo;{c.quote}&rdquo;</p>
                </div>
              </CaseStage>

              <div className="pt-5 lg:pt-4 px-1 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                <div>
                  <div className="text-[44px] sm:text-[48px] lg:text-[length:clamp(36px,6svh,48px)] leading-none tracking-[-0.045em] text-ink tabular-nums">
                    <AnimatedMetric value={c.metric} active={active} />
                  </div>
                  <p className="mt-2 text-[14px] text-body">{c.metricLabel}</p>
                </div>
                <p className="inline-flex items-center gap-1.5 text-[14px] text-ink">
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
