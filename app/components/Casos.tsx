"use client";

import Image from "next/image";
import Link from "next/link";
import { cases, type CaseStudy } from "@/app/lib/landing-data";
import { useInView } from "@/app/lib/useInView";
import AnimatedMetric from "./AnimatedMetric";
import Atmosphere from "./Atmosphere";
import CaseVisual from "./CaseVisual";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M6.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const cardBase =
  "group relative snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-auto min-h-[460px] rounded-[22px] flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1";

/** Case with a real screenshot: full-bleed image card with the copy over a dark fade. */
function PhotoCard({ c, active }: { c: CaseStudy; active: boolean }) {
  return (
    <Link href={`/casos/${c.slug}`} className={`${cardBase} text-white focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4`}>
      <Image
        src={c.image!}
        alt={`Vista del proyecto: ${c.title}`}
        fill
        sizes="(min-width: 1024px) 380px, 340px"
        className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 via-40% to-black/85" />
      <div className="relative p-5 flex flex-col h-full">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[13px] text-white/90">{c.name}</span>
          <span className="text-[11px] bg-white/20 backdrop-blur rounded-full px-2.5 py-1">{c.role}</span>
        </div>
        <div className="mt-auto">
          <div className="text-[48px] leading-none tracking-[-0.04em] tabular-nums">
            <AnimatedMetric value={c.metric} active={active} />
          </div>
          <p className="text-[13px] text-white/80 mt-1">{c.metricLabel}</p>
          <p className="mt-4 text-[15px] leading-snug">&ldquo;{c.quote}&rdquo;</p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] text-white/90">
            Ver caso completo <Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
}

function StoryCard({ c, active }: { c: CaseStudy; active: boolean }) {
  return (
    <Link href={`/casos/${c.slug}`} className={`${cardBase} bg-white border border-line p-5 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-light to-brand text-ink text-[11px] font-medium flex items-center justify-center">
            {initials(c.name)}
          </span>
          <span className="text-[13px] text-ink">{c.name}</span>
        </div>
        <span className="text-[11px] text-brand-dark bg-brand/10 rounded-full px-2.5 py-1">{c.role}</span>
      </div>

      <div className="mt-6">
        <div className="text-[48px] leading-none tracking-[-0.04em] text-ink tabular-nums">
          <AnimatedMetric value={c.metric} active={active} />
        </div>
        <p className="text-[13px] text-body mt-1">{c.metricLabel}</p>
      </div>

      <div className="relative mt-5 h-[150px] rounded-[16px] overflow-hidden flex items-center justify-center px-4">
        <Atmosphere variant="soft" mark={false} />
        <div className="relative w-full flex justify-center">
          <CaseVisual type={c.visual} image={c.image} active={active} />
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-snug text-ink">&ldquo;{c.quote}&rdquo;</p>
      <span className="mt-auto pt-4 inline-flex items-center gap-1 text-[13px] text-brand-dark">
        Ver caso completo <Arrow />
      </span>
    </Link>
  );
}

export default function Casos() {
  const [ref, active] = useInView<HTMLDivElement>(0.2);

  return (
    <section id="casos" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20 sm:py-28 scroll-mt-8">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <SectionHeading muted="Negocios que ya" strong="trabajan con IA." />
        <p className="text-[15px] text-body leading-relaxed max-w-[280px]">
          Resultados medidos en proyectos reales, no promesas.
        </p>
      </Reveal>

      {/* Horizontal snap carousel on mobile/tablet; a plain 3-up grid on lg. */}
      <div
        ref={ref}
        className="-mx-5 px-5 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible"
      >
        {cases.map((c) =>
          c.image ? <PhotoCard key={c.slug} c={c} active={active} /> : <StoryCard key={c.slug} c={c} active={active} />
        )}
      </div>
    </section>
  );
}
