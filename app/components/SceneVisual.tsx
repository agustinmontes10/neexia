"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import type { SceneVisualShape } from "@/app/lib/landing-data";
import ToolIcon from "./ToolIcon";

/**
 * Big, simple "before → after" illustrations for the scenes in `Intro.tsx` —
 * two or three large pieces each, readable at a glance (the owner rejected
 * denser UI mock-ups). Each one is driven by a single registered custom
 * property, `--scene` (0 = how it is today, 1 = with Neexia; `@property
 * --scene` in globals.css), transitioned once the visual mounts and `play` is
 * true. Pieces derive a staggered `--pi` from it with `at()`. Under reduced
 * motion the transition collapses and the visual shows its final state.
 */

const DURATION: Record<SceneVisualShape, number> = {
  messages: 3000,
  followUp: 3200,
  reminders: 3400,
  order: 2400,
};

/** Local progress `--pi` for a piece that starts at `d` and takes `span` of the scene. */
function at(d: number, span = 0.25): CSSProperties {
  return {
    "--d": d,
    "--span": span,
    "--pi": "clamp(0, calc((var(--scene) - var(--d)) / var(--span)), 1)",
  } as CSSProperties;
}

/** Fades/slides a piece in as its `--pi` goes 0 → 1. */
const appear: CSSProperties = {
  opacity: "var(--pi)",
  transform: "translateY(calc((1 - var(--pi)) * 10px))",
};

/** Fades a piece out as its `--pi` goes 0 → 1. */
const vanish: CSSProperties = { opacity: "calc(1 - var(--pi))" };

function Check({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-white text-brand-dark text-[12px] sm:text-[13px] px-3 py-1.5 shadow-[0_10px_24px_-14px_rgba(90,45,10,0.45)]">
      <Check className="w-3.5 h-3.5 shrink-0" /> {children}
    </span>
  );
}

const card = "bg-white rounded-[20px] border border-white shadow-[0_24px_60px_-30px_rgba(90,45,10,0.45)]";

function Bubble({ out = false, time, children }: { out?: boolean; time: string; children: ReactNode }) {
  return (
    <div
      className={`w-fit max-w-full rounded-[20px] px-4 py-3 text-[15px] sm:text-[17px] leading-snug tracking-[-0.01em] text-ink shadow-[0_18px_40px_-24px_rgba(90,45,10,0.5)] ${
        out ? "ml-auto bg-[#dcf8c6] rounded-br-[6px]" : "bg-white rounded-bl-[6px]"
      }`}
    >
      {children}
      <span className="ml-3 text-[12px] text-ink/40 tabular-nums">{time}</span>
    </div>
  );
}

/* ---------- 1. A message at night, answered on the spot ---------- */

function Messages() {
  return (
    <div className="w-full max-w-[520px] mx-auto flex flex-col gap-4">
      <div className="flex items-end gap-3">
        <span className="w-8 h-8 shrink-0 inline-flex">
          <ToolIcon name="whatsapp" />
        </span>
        <Bubble time="23:14">¿Tienen turno para el jueves?</Bubble>
      </div>
      <div style={{ ...at(0.25), ...appear }}>
        <Bubble out time="23:14">
          ¡Sí! Te agendé el jueves a las 10:00.
        </Bubble>
      </div>
      <div className="flex justify-end" style={{ ...at(0.7), ...appear }}>
        <Chip>Respondido al instante, aunque sean las 23 h</Chip>
      </div>
    </div>
  );
}

/* ---------- 2. A quote that gets followed up on its own ---------- */

const STEPS = [
  { day: "Día 0", label: "Presupuesto enviado", short: "Enviado" },
  { day: "Día 3", label: "Seguimiento automático", short: "Seguimiento" },
  { day: "Día 5", label: "«¡Dale, arrancamos!»", short: "«¡Dale!»" },
];

function FollowUp() {
  return (
    <div className={`${card} relative w-full max-w-[600px] mx-auto px-6 sm:px-9 py-7 sm:py-9`}>
      <p className="text-[13px] text-mute">Familia Ortiz</p>
      <p className="mt-1 text-[18px] sm:text-[22px] tracking-[-0.02em] text-ink">Reforma de cocina</p>

      <div className="relative mt-8 sm:mt-10">
        {/* Track + fill */}
        <div className="absolute left-[10px] right-[10px] top-[9px] h-[2px] bg-line" />
        <div
          className="absolute left-[10px] right-[10px] top-[9px] h-[2px] bg-brand origin-left"
          style={{ ...at(0.1, 0.65), transform: "scaleX(var(--pi))" }}
        />
        <ol className="relative grid grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.day}
              className={`flex flex-col ${i === 0 ? "items-start" : i === 1 ? "items-center text-center" : "items-end text-right"}`}
              style={at(i === 0 ? 0 : 0.1 + i * 0.32, 0.12)}
            >
              <span
                className="w-5 h-5 rounded-full border-2 border-brand flex items-center justify-center text-white"
                style={{
                  background:
                    i === 0
                      ? "var(--color-brand)"
                      : "color-mix(in srgb, var(--color-brand) calc(var(--pi) * 100%), white)",
                }}
              >
                <Check className="w-3 h-3" />
              </span>
              <span className="mt-3 text-[12px] text-mute">{s.day}</span>
              <span
                className="mt-0.5 text-[12px] sm:text-[14px] leading-snug text-ink"
                style={i === 0 ? undefined : { opacity: "calc(0.25 + var(--pi) * 0.75)" }}
              >
                <span className="sm:hidden">{s.short}</span>
                <span className="hidden sm:inline">{s.label}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Today: it just goes quiet. */}
      <p className="absolute right-6 sm:right-9 top-7 sm:top-9 text-[13px] sm:text-[14px] text-[#c0392b]" style={{ ...at(0, 0.12), ...vanish }}>
        Sin respuesta hace 9 días…
      </p>
    </div>
  );
}

/* ---------- 3. A reminder that goes out by itself ---------- */

function Reminders() {
  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="grid [&>*]:[grid-area:1/1]">
        {/* Today: a post-it nobody gets to. */}
        <div className="flex justify-center items-center" style={{ ...at(0.05, 0.2), ...vanish }}>
          <div className="w-[230px] sm:w-[260px] -rotate-3 bg-[#ffe680] px-6 py-6 shadow-[0_18px_34px_-16px_rgba(90,45,10,0.5)]">
            <p className="text-[17px] sm:text-[19px] leading-snug italic text-ink/80">
              Avisarle a Gómez que vence la póliza!!
            </p>
          </div>
        </div>

        {/* With Neexia: it went out, and he answered. */}
        <div className="flex flex-col gap-4" style={{ ...at(0.2, 0.2), opacity: "var(--pi)" }}>
          <Bubble out time="09:00">
            Hola Gómez, tu póliza vence el 15/11. ¿La renovamos?
          </Bubble>
          <div style={{ ...at(0.5), ...appear }}>
            <Bubble time="09:12">Sí, renovala.</Bubble>
          </div>
          <div className="flex justify-end" style={{ ...at(0.78), ...appear }}>
            <Chip>Póliza renovada, sin que tengas que acordarte</Chip>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 4. Scattered pieces, one place ---------- */

const LOOSE: { text: ReactNode; x: number; y: number; r: number; className: string }[] = [
  { text: "¿Llegó mi pedido?", x: -150, y: -110, r: -7, className: "bg-[#dcf8c6] rounded-[16px] rounded-bl-[4px]" },
  {
    text: (
      <span className="flex items-center gap-2">
        <span className="w-5 h-5 inline-flex">
          <ToolIcon name="excel" />
        </span>
        pedidos_final_v3.xlsx
      </span>
    ),
    x: 140,
    y: -70,
    r: 5,
    className: "bg-white rounded-[12px]",
  },
  { text: <span className="italic">Llamar a Juan (reclamo)!!</span>, x: -110, y: 95, r: 8, className: "bg-[#ffe680]" },
  {
    text: (
      <span className="flex items-center gap-2">
        <span className="w-5 h-5 inline-flex">
          <ToolIcon name="gmail" />
        </span>
        23 sin leer
      </span>
    ),
    x: 150,
    y: 90,
    r: -4,
    className: "bg-white rounded-[12px]",
  },
];

const ROWS = [
  { text: "Pedido #0412 · 2 cajas", status: "Confirmado" },
  { text: "Reclamo de Juan · falta 1 caja", status: "En curso" },
  { text: "Resumen de la semana", status: "Enviado" },
];

function Order() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto [--k:0.55] sm:[--k:1]">
      {/* With Neexia: one place, each thing with its status. */}
      <div
        className={`${card} px-5 sm:px-7 py-5 sm:py-6`}
        style={{ ...at(0.35, 0.35), opacity: "var(--pi)", transform: "scale(calc(0.94 + var(--pi) * 0.06))" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="x-mark w-5 aspect-[425/452] bg-gradient-to-br from-brand-light to-brand-dark" />
          <span className="text-[14px] sm:text-[15px] text-ink">Todo en un solo lugar</span>
        </div>
        <ul className="mt-4">
          {ROWS.map((r) => (
            <li
              key={r.text}
              className="flex items-center justify-between gap-4 py-3 border-t border-line text-[13px] sm:text-[15px] text-ink"
            >
              <span className="min-w-0 leading-snug sm:truncate">{r.text}</span>
              <span className="shrink-0 inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-brand-dark bg-brand/15 rounded-full px-2.5 py-1">
                <Check className="w-3 h-3" /> {r.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Today: loose pieces everywhere, drifting to the centre and fading. */}
      {LOOSE.map((l, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            ...at(0, 0.55),
            transform: `translate(-50%, -50%) translate(calc(${l.x}px * var(--k) * (1 - var(--pi))), calc(${l.y}px * var(--k) * (1 - var(--pi)))) rotate(calc(${l.r}deg * (1 - var(--pi)))) scale(calc(1 - var(--pi) * 0.3))`,
            opacity: "clamp(0, calc((0.6 - var(--pi)) * 2.5), 1)",
          }}
        >
          <div
            className={`whitespace-nowrap px-4 py-2.5 text-[13px] sm:text-[15px] text-ink/85 shadow-[0_16px_32px_-16px_rgba(90,45,10,0.5)] ${l.className}`}
          >
            {l.text}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Entry ---------- */

const VISUALS: Record<SceneVisualShape, () => ReactNode> = {
  messages: Messages,
  followUp: FollowUp,
  reminders: Reminders,
  order: Order,
};

/**
 * Mount with a `key` per scene so switching scenes starts again from "today".
 * `play` gates the run until the section is in view.
 */
export default function SceneVisual({ shape, play }: { shape: SceneVisualShape; play: boolean }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!play) return;
    // A beat on "today" before it resolves (skipped under reduced motion).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => setOn(true), reduce ? 0 : 900);
    return () => window.clearTimeout(id);
  }, [play]);

  const Visual = VISUALS[shape];
  return (
    <div
      className="w-full"
      style={
        {
          "--scene": on ? 1 : 0,
          transition: `--scene ${DURATION[shape]}ms cubic-bezier(0.45,0,0.25,1)`,
        } as CSSProperties
      }
    >
      <Visual />
    </div>
  );
}
