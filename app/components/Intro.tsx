"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/app/lib/useInView";
import Atmosphere from "./Atmosphere";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ToolIcon, { type ToolIconName } from "./ToolIcon";

/**
 * "Tu negocio, funcionando solo." — an illustrative automation dashboard that
 * assembles itself piece by piece inside an atmosphere frame. Numbers here are
 * sample data (labelled as such under the frame), not client results.
 */

function Piece({
  show,
  delay,
  className = "",
  children,
}: {
  show: boolean;
  delay: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`transition-[opacity,filter,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        show ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-3"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

const KPIS = [
  { label: "Flujos activos", value: "12", delta: "+2" },
  { label: "Leads calificados hoy", value: "38", delta: "+9" },
  { label: "Horas ahorradas", value: "21h", delta: "esta semana" },
  { label: "Consultas resueltas", value: "94%", delta: "sin intervención" },
];

const BARS = [38, 52, 46, 64, 88, 40, 30];
const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const ACTIVITY: { tool: ToolIconName; text: string; time: string }[] = [
  { tool: "whatsapp", text: "El chatbot respondió 14 consultas", time: "hace 3 min" },
  { tool: "gmail", text: "Se enviaron 6 presupuestos automáticos", time: "hace 12 min" },
  { tool: "excel", text: "Ventas del día sincronizadas", time: "hace 40 min" },
];

export default function Intro() {
  const [ref, show] = useInView<HTMLDivElement>(0.2);

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <SectionHeading muted="Tu negocio," strong="funcionando solo." />
        <Link
          href="/diagnostico"
          className="w-fit shrink-0 bg-brand text-ink px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-brand-light transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
        >
          Diagnóstico gratis
        </Link>
      </Reveal>

      <div ref={ref} className="relative rounded-[28px] overflow-hidden px-3 pt-6 sm:px-14 sm:pt-14 lg:px-24 lg:pt-20">
        <Atmosphere variant="soft" />

        {/* The panel peeks out of the bottom edge of the frame. */}
        <div className="relative rounded-t-[20px] bg-white/80 backdrop-blur-xl border border-white/80 border-b-0 shadow-[0_30px_80px_-40px_rgba(120,60,20,0.45)] p-4 sm:p-6">
          {/* Top bar */}
          <Piece show={show} delay={0} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="x-mark w-6 aspect-[425/452] bg-gradient-to-br from-brand-light to-brand-dark" />
              <div className="hidden sm:flex items-center gap-1 rounded-full bg-[#f3f1ec] p-1 text-[12px]">
                <span className="px-3 py-1 rounded-full bg-ink text-white">Resumen</span>
                <span className="px-3 py-1 text-ink/60">Flujos</span>
                <span className="px-3 py-1 text-ink/60">Leads</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex text-[12px] text-ink/70 bg-white border border-line rounded-full px-3 py-1.5">
                Ver reporte
              </span>
              <span className="text-[12px] text-ink bg-brand rounded-full px-3 py-1.5">+ Nuevo flujo</span>
            </div>
          </Piece>

          <Piece show={show} delay={120} className="mt-5 sm:mt-6">
            <p className="text-[20px] sm:text-[26px] tracking-[-0.02em] text-ink">Buen día, equipo</p>
          </Piece>

          {/* KPIs */}
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {KPIS.map((k, i) => (
              <Piece key={k.label} show={show} delay={240 + i * 90}>
                <div className="rounded-[14px] bg-[#faf9f6] border border-line p-3 sm:p-4 h-full">
                  <p className="text-[11px] sm:text-[12px] text-ink/55">{k.label}</p>
                  <div className="mt-3 sm:mt-5 flex items-end justify-between gap-2">
                    <span className="text-[22px] sm:text-[28px] leading-none tracking-[-0.03em] text-ink tabular-nums">
                      {k.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-brand-dark bg-brand/10 rounded-full px-2 py-0.5 whitespace-nowrap">
                      {k.delta}
                    </span>
                  </div>
                </div>
              </Piece>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-3">
            {/* Hours saved chart */}
            <Piece show={show} delay={620}>
              <div className="rounded-[14px] bg-[#faf9f6] border border-line p-4 h-full">
                <p className="text-[12px] text-ink/55">Horas ahorradas por día</p>
                <div className="mt-4 flex items-end gap-2 h-[110px]">
                  {BARS.map((h, i) => {
                    const peak = h === Math.max(...BARS);
                    return (
                      <div key={DAYS[i]} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className={`w-full rounded-[6px] origin-bottom transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            peak ? "bg-gradient-to-t from-brand to-brand-light" : "bg-[#ebe8e1]"
                          }`}
                          style={{
                            height: `${h}%`,
                            transform: show ? "scaleY(1)" : "scaleY(0)",
                            transitionDelay: `${760 + i * 70}ms`,
                          }}
                        />
                        <span className="text-[10px] text-ink/45">{DAYS[i]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Piece>

            {/* Activity */}
            <Piece show={show} delay={720}>
              <div className="rounded-[14px] bg-[#faf9f6] border border-line p-4 h-full">
                <p className="text-[12px] text-ink/55">Actividad automática</p>
                <ul className="mt-3 flex flex-col">
                  {ACTIVITY.map((a, i) => (
                    <li
                      key={a.text}
                      className={`flex items-center gap-3 py-2.5 transition-[opacity,transform] duration-700 ${
                        i > 0 ? "border-t border-line" : ""
                      } ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                      style={{ transitionDelay: `${1000 + i * 160}ms` }}
                    >
                      <span className="w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center shrink-0">
                        <span className="w-3.5 h-3.5 inline-flex">
                          <ToolIcon name={a.tool} />
                        </span>
                      </span>
                      <span className="flex-1 text-[13px] text-ink/80 leading-snug">{a.text}</span>
                      <span className="hidden sm:inline text-[11px] text-ink/40 whitespace-nowrap">{a.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Piece>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-mute text-center">Panel ilustrativo, con datos de ejemplo.</p>
    </section>
  );
}
