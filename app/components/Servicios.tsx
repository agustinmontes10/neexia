import Link from "next/link";
import { services } from "@/app/lib/landing-data";
import Atmosphere from "./Atmosphere";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceVisual from "./ServiceVisual";

// Bento spans for 5 cards: 3 across the first row, 2 wider ones below.
function spanFor(i: number, total: number) {
  const lg = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
  const sm = i === total - 1 && total % 2 === 1 ? "sm:col-span-2" : "";
  return `${sm} ${lg}`;
}

export default function Servicios() {
  return (
    <section id="servicios" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20 sm:py-28 lg:py-[clamp(72px,12svh,112px)]">
      <Reveal className="mb-12 sm:mb-14 lg:mb-[clamp(36px,6svh,56px)] max-w-[760px]">
        <SectionHeading inline muted="Cinco servicios." strong="Un mismo objetivo." />
        <p className="mt-5 text-[16px] text-body leading-relaxed max-w-[520px]">
          Soluciones concretas para negocios reales: del primer diagnóstico a
          la IA funcionando en tu operación.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-10">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 90} className={spanFor(i, services.length)}>
            <Link
              href={`/servicios/${s.slug}`}
              className="group block focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4 rounded-[22px]"
            >
              <div className="relative h-[260px] sm:h-[300px] lg:h-[clamp(240px,34svh,300px)] rounded-[22px] overflow-hidden flex items-center justify-center px-6">
                <Atmosphere variant="soft" mark={false} />
                <div className="relative w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]">
                  <ServiceVisual icon={s.icon} bare />
                </div>
                <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/60 border border-white/70 backdrop-blur flex items-center justify-center text-ink/70 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M5 11l6-6M11 5H6M11 5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="pt-4 px-1">
                <h3 className="text-[17px] font-medium text-ink tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-1.5 text-[14px] text-body leading-relaxed max-w-[420px]">{s.desc}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
