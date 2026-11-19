"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { scenes } from "@/app/lib/landing-data";
import { useInView } from "@/app/lib/useInView";
import Atmosphere from "./Atmosphere";
// Previous visual (illustrative dashboard), kept in case we go back to it:
// render <IntroDashboard show={inView} /> inside an atmosphere frame
// (`relative rounded-[28px] overflow-hidden px-3 pt-6 sm:px-14 sm:pt-14 lg:px-24 lg:pt-20`
// + <Atmosphere variant="soft" />) in place of the scenes block below.
// import IntroDashboard from "./IntroDashboard";
import Reveal from "./Reveal";
import SceneVisual from "./SceneVisual";
import SectionHeading from "./SectionHeading";
import ToolIcon, { type ToolIconName } from "./ToolIcon";

/**
 * "Lo que hacemos, en tu día a día." — what Neexia does, told as everyday pains
 * in the owner's own words (content in `scenes`, landing-data.ts). Built to fit
 * in one viewport on desktop: heading + intro on one row, then a browser-like
 * window (atmosphere frame) with one tab per scene on top — the active tab is
 * unfilled so it merges with the window, and a soft fill sweeping across it
 * shows the time left — and below, the active quote and its big, simple
 * before → after visual (`SceneVisual.tsx`); the one-line answer + service
 * link sit under the window. Scenes auto-advance every ADVANCE ms (the fill's
 * `animationend` drives it), paused on hover and until in view, and off under
 * reduced motion; tabs are also clickable.
 */

const ADVANCE = 8000;

/** "Favicon" of each browser-like tab, by position in `scenes`. */
const TAB_ICONS: ToolIconName[] = ["whatsapp", "gmail", "calendar", "excel"];

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

export default function Intro() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const auto = !useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => true);

  const scene = scenes[active];

  return (
    <section className="screen-section max-w-[1200px] mx-auto px-5 sm:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28">
      <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10 mb-10 sm:mb-12 lg:mb-[clamp(20px,4svh,48px)]">
        <SectionHeading muted="Lo que hacemos," strong="en tu día a día." />
        <p className="text-[16px] text-body leading-relaxed max-w-[440px] lg:text-right">
          No importa el rubro: casi todos los negocios pierden tiempo en las mismas cosas. Estas son las que
          dejamos funcionando solas.
        </p>
      </Reveal>

      {/* On lg the section is one screen tall (.screen-section) and the window
          takes whatever height is left, capped so it doesn't balloon on tall
          monitors; its min-height is what the shortest scene needs. */}
      <div
        ref={ref}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="lg:flex-1 lg:max-h-[660px] lg:flex lg:flex-col"
      >
        {/* Browser-like window: tabs on top, the active scene below. */}
        <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col lg:flex-1 lg:min-h-[340px]">
          <Atmosphere variant="soft" />

          {/* Tab strip. The active tab has no fill so the window's own background
              shows through it; a huge box-shadow in the strip colour paints the
              rest of the strip around its rounded top (clipped by overflow). */}
          <div
            role="tablist"
            aria-label="Situaciones que resolvemos"
            className="relative flex items-end h-[46px] sm:h-[52px] px-1.5 sm:px-3 pt-1.5 sm:pt-2 overflow-hidden"
          >
            <span aria-hidden className="hidden sm:flex items-center gap-1.5 self-center pl-2 pr-4 relative z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
            </span>
            {scenes.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.tab}
                  type="button"
                  role="tab"
                  id={`scene-tab-${i}`}
                  aria-selected={on}
                  aria-controls="scene-panel"
                  onClick={() => setActive(i)}
                  className={`group relative cursor-pointer flex-none sm:flex-1 min-w-0 sm:max-w-[220px] h-full flex items-center gap-2 px-2.5 sm:px-4 rounded-t-[12px] text-[12px] sm:text-[13.5px] focus-visible:outline-2 focus-visible:outline-brand focus-visible:-outline-offset-2 ${
                    on ? "z-0 text-ink" : "z-10 text-ink/50 hover:text-ink/80"
                  }`}
                  style={on ? { boxShadow: "0 0 0 3000px rgba(222, 215, 203, 0.95)" } : undefined}
                >
                  {/* Time running out: a soft fill sweeping across the active tab. */}
                  {on && (
                    <span
                      key={active}
                      aria-hidden
                      className="absolute inset-0 rounded-t-[12px] bg-white/45"
                      style={
                        auto
                          ? {
                              animation: `tab-progress ${ADVANCE}ms linear forwards`,
                              animationPlayState: inView && !hover ? "running" : "paused",
                            }
                          : { opacity: 0 }
                      }
                      onAnimationEnd={() => setActive((active + 1) % scenes.length)}
                    />
                  )}
                  {/* Hover pill + separator for the inactive ones. */}
                  {!on && (
                    <>
                      <span aria-hidden className="absolute inset-0 rounded-t-[12px] bg-white/0 group-hover:bg-white/30 transition-colors" />
                      {i > 0 && i - 1 !== active && (
                        <span aria-hidden className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-ink/15 transition-opacity group-hover:opacity-0 [[role=tab]:hover+[role=tab]_&]:opacity-0" />
                      )}
                    </>
                  )}
                  <span className="relative hidden sm:inline-flex w-3.5 h-3.5 shrink-0">
                    <ToolIcon name={TAB_ICONS[i]} />
                  </span>
                  <span className="relative truncate">{s.tab}</span>
                </button>
              );
            })}
            {/* Fill the rest of the strip when the last tab is active. */}
            <span aria-hidden className="flex-1" />
          </div>

          <div
            id="scene-panel"
            role="tabpanel"
            aria-labelledby={`scene-tab-${active}`}
            className="relative flex-1 flex flex-col px-5 sm:px-10 pt-7 sm:pt-9 pb-10 lg:pt-[clamp(18px,3.5svh,36px)] lg:pb-[clamp(16px,3.5svh,40px)]"
          >
            <p
              key={`q${active}`}
              className="animate-blur-in text-center text-[19px] sm:text-[24px] lg:text-[length:clamp(19px,3.4svh,24px)] leading-[1.2] tracking-[-0.025em] text-ink max-w-[640px] mx-auto"
            >
              “{scene.quote}”
            </p>
            <div className="flex-1 flex items-center mt-8 lg:mt-4">
              <div className="fit-zoom w-full">
                <SceneVisual key={active} shape={scene.visual} play={inView} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-8 gap-y-2">
          <p key={`w${active}`} className="animate-blur-in text-[15px] leading-relaxed text-body">
            {scene.withUs}
          </p>
          <Link
            href={`/servicios/${scene.service}`}
            className="shrink-0 text-[14px] text-ink underline decoration-line underline-offset-4 hover:decoration-ink transition-colors"
          >
            Ver cómo lo hacemos →
          </Link>
        </div>
      </div>
    </section>
  );
}
