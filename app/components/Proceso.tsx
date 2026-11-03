"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/app/lib/landing-data";
import Atmosphere from "./Atmosphere";
import Reveal from "./Reveal";
import ToolIcon from "./ToolIcon";

/**
 * "Cómo trabajamos": on lg+ the section is pinned (sticky) while you scroll
 * through it, and scroll progress picks the active step — the step card
 * highlights and the framed visual on the left swaps. Below lg it's a plain
 * stack of cards, each with its own visual.
 *
 * Relies on no ancestor having non-visible overflow (see CLAUDE.md), or
 * `sticky` silently stops working.
 */

function Check({ on }: { on: boolean }) {
  return (
    <span
      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${
        on ? "bg-brand text-ink" : "bg-[#ece9e2] text-transparent"
      }`}
    >
      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5" aria-hidden="true">
        <path d="M3 6.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DiagnosticoCard() {
  const rows = [
    { label: "Procesos relevados", value: "8" },
    { label: "Tareas repetitivas detectadas", value: "5" },
    { label: "Oportunidad de automatización", value: "Alta" },
  ];
  return (
    <div className="w-full max-w-[300px] rounded-[18px] bg-white/85 border border-white p-5 shadow-[0_24px_60px_-30px_rgba(120,60,20,0.45)]">
      <p className="text-[14px] text-ink">Relevamiento</p>
      <ul className="mt-3 flex flex-col">
        {rows.map((r, i) => (
          <li key={r.label} className={`flex items-center gap-3 py-2.5 ${i > 0 ? "border-t border-line" : ""}`}>
            <Check on />
            <span className="flex-1 text-[12px] text-ink/70">{r.label}</span>
            <span className="text-[12px] text-ink">{r.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PropuestaCard() {
  const items = ["Chatbot de WhatsApp", "Integración con tus planillas", "Reporte semanal automático"];
  return (
    <div className="w-full max-w-[300px] rounded-[18px] bg-white/85 border border-white p-5 shadow-[0_24px_60px_-30px_rgba(120,60,20,0.45)]">
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-ink">Propuesta a medida</p>
        <span className="text-[11px] text-brand-dark bg-brand/10 rounded-full px-2 py-0.5">Lista</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((it) => (
          <li key={it} className="flex items-center justify-between gap-3 rounded-[12px] bg-[#faf9f6] border border-line px-3 py-2.5">
            <span className="text-[12px] text-ink/75">{it}</span>
            <span className="w-7 h-4 rounded-full bg-brand relative shrink-0">
              <span className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImplementacionCard() {
  return (
    <div className="w-full max-w-[320px] rounded-[18px] bg-white/85 border border-white p-5 shadow-[0_24px_60px_-30px_rgba(120,60,20,0.45)]">
      <p className="text-[14px] text-ink">Flujo en producción</p>
      <div className="mt-5 flex items-center">
        <span className="w-11 h-11 rounded-full bg-white border border-line flex items-center justify-center shrink-0">
          <span className="w-5 h-5 inline-flex"><ToolIcon name="whatsapp" /></span>
        </span>
        <span className="relative flex-1 h-px bg-line mx-1">
          <span className="absolute top-1/2 -mt-[3px] w-1.5 h-1.5 rounded-full bg-brand animate-flow-dot-x" />
        </span>
        <span className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand flex items-center justify-center shrink-0 shadow-[0_8px_24px_-8px_rgba(255,131,54,0.8)]">
          <span className="x-mark w-5 aspect-[425/452] bg-white" />
        </span>
        <span className="relative flex-1 h-px bg-line mx-1">
          <span className="absolute top-1/2 -mt-[3px] w-1.5 h-1.5 rounded-full bg-brand animate-flow-dot-x [animation-delay:0.9s]" />
        </span>
        <span className="w-11 h-11 rounded-full bg-white border border-line flex items-center justify-center shrink-0">
          <span className="w-5 h-5 inline-flex"><ToolIcon name="excel" /></span>
        </span>
      </div>
      <div className="mt-5 flex items-center gap-2 text-[12px] text-ink/65">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3fbf6a]" />
        Funcionando, sin intervención manual
      </div>
    </div>
  );
}

function AcompanamientoCard() {
  const bars = [30, 42, 40, 55, 63, 78];
  return (
    <div className="w-full max-w-[300px] rounded-[18px] bg-white/85 border border-white p-5 shadow-[0_24px_60px_-30px_rgba(120,60,20,0.45)]">
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-ink">Mejora continua</p>
        <span className="text-[11px] text-ink/50">Mensual</span>
      </div>
      <div className="mt-4 flex items-end gap-2 h-[96px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-[6px] ${i === bars.length - 1 ? "bg-gradient-to-t from-brand to-brand-light" : "bg-[#ebe8e1]"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const VISUALS = [DiagnosticoCard, PropuestaCard, ImplementacionCard, AcompanamientoCard];

function StepVisual({ index }: { index: number }) {
  const V = VISUALS[index % VISUALS.length];
  return <V />;
}

export default function Proceso() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = pinRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999);
      setActive(Math.floor(progress * steps.length));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const header = (
    <>
      <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.04] tracking-[-0.04em] text-ink">
        Cómo trabajamos
      </h2>
      <p className="mt-4 text-[16px] text-body leading-relaxed max-w-[400px]">
        Un proceso simple, de punta a punta. Sin promesas vacías: te
        acompañamos en cada paso.
      </p>
    </>
  );

  return (
    <section id="proceso" className="bg-[#efede7] scroll-mt-0">
      {/* Desktop: pinned, scroll-driven */}
      <div ref={pinRef} className="hidden lg:block relative" style={{ height: `${steps.length * 70 + 30}vh` }}>
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-10 grid grid-cols-[1.15fr_1fr] gap-16 items-center">
            <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden">
              <Atmosphere variant="soft" />
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 flex items-center justify-center p-10 transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i === active ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[0.97]"
                  }`}
                >
                  <StepVisual index={i} />
                </div>
              ))}
            </div>

            <div>
              {header}
              <ol className="mt-12 flex flex-col gap-2">
                {steps.map((s, i) => {
                  const on = i === active;
                  return (
                    <li
                      key={s.n}
                      aria-current={on ? "step" : undefined}
                      className={`rounded-[18px] px-5 py-4 transition-all duration-500 ${
                        on ? "bg-white shadow-[0_18px_40px_-24px_rgba(60,40,20,0.35)]" : "bg-transparent"
                      }`}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className={`text-[12px] tabular-nums transition-colors duration-500 ${on ? "text-brand-dark" : "text-mute"}`}>
                          {s.n}
                        </span>
                        <h3 className={`text-[18px] tracking-[-0.01em] transition-colors duration-500 ${on ? "text-ink" : "text-ink/45"}`}>
                          {s.title}
                        </h3>
                      </div>
                      <p className={`mt-1 pl-[30px] text-[14px] leading-relaxed transition-colors duration-500 ${on ? "text-body" : "text-ink/35"}`}>
                        {s.desc}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: simple stack */}
      <div className="lg:hidden max-w-[640px] mx-auto px-5 sm:px-10 py-20 sm:py-24">
        <Reveal>{header}</Reveal>
        <div className="mt-10 flex flex-col gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div>
                <div className="relative h-[240px] rounded-[22px] overflow-hidden flex items-center justify-center p-6">
                  <Atmosphere variant="soft" mark={false} />
                  <div className="relative w-full flex justify-center">
                    <StepVisual index={i} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-3 px-1">
                  <span className="text-[12px] text-brand-dark tabular-nums">{s.n}</span>
                  <h3 className="text-[18px] text-ink tracking-[-0.01em]">{s.title}</h3>
                </div>
                <p className="mt-1 pl-[30px] pr-1 text-[14px] text-body leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
