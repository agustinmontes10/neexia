"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { services } from "@/app/lib/landing-data";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import ServiceVisual from "./ServiceVisual";

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 text-brand">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path
        d="M5 8.3L7.1 10.3L11.2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const INTERVAL_MS = 6000;

export default function Servicios() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % services.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [active, paused]);

  const service = services[active];

  return (
    <section
      id="servicios"
      className="max-w-[1280px] mx-auto px-6 sm:px-12 py-16 sm:py-24"
    >
      <Reveal className="max-w-[640px] mx-auto mb-14 text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Servicios
        </p>
        <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.1]">
          Todo lo que necesitás para escalar con IA
        </h2>
        <p className="text-lg text-[#555555] leading-relaxed">
          Soluciones concretas, pensadas para negocios reales — no ciencia
          ficción.
        </p>
      </Reveal>

      <div
        className="rounded-[32px] p-6 sm:p-10 lg:p-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mb-10">
          {/* Mobile: individual boxed filters in a grid, no horizontal scroll */}
          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {services.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`px-4 py-3 rounded-xl border text-[13px] font-semibold text-left transition-all duration-300 ${
                  i === services.length - 1 && services.length % 2 === 1
                    ? "col-span-2"
                    : ""
                } ${
                  i === active
                    ? "bg-brand border-brand text-white shadow-[0_4px_12px_rgba(255,107,53,0.25)]"
                    : "border-[#ECECEC] bg-white text-[#666666] hover:border-brand/40"
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>

          {/* Tablet/desktop: single pill row */}
          <div className="hidden sm:flex justify-center">
            <div className="flex flex-wrap justify-center gap-1.5 rounded-full border border-[#ECECEC] bg-gray-light p-1.5 mx-auto max-w-full">
              {services.map((s, i) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={`px-4 py-2 cursor-pointer rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    i === active
                      ? "bg-white text-[#111111] shadow-[0_4px_12px_rgba(17,17,17,0.08)]"
                      : "text-[#999999] hover:text-[#555555]"
                  }`}
                >
                  {s.tabLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          key={service.num}
          className="animate-fade-up grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div className="flex flex-col gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF1EC] flex items-center justify-center text-brand">
              <ServiceIcon shape={service.icon} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[26px] sm:text-[32px] font-bold tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-[16px] text-[#666666] leading-relaxed max-w-[440px]">
                {service.desc}
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              {service.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 text-[15px] text-[#444444]"
                >
                  <CheckIcon />
                  {f}
                </div>
              ))}
            </div>
            <Link
              href={`/servicios/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-dark transition-colors w-fit pt-1"
            >
              Ver más
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path
                  d="M6.5 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <ServiceVisual icon={service.icon} />
        </div>
      </div>
    </section>
  );
}
