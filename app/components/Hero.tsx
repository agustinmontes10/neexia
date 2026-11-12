import Link from "next/link";
import { services, stats } from "@/app/lib/landing-data";
import { whatsappLink } from "@/app/lib/site";
import AnimatedMetric from "./AnimatedMetric";
import Atmosphere from "./Atmosphere";
import ServiceIcon from "./ServiceIcon";
import ToolIcon, { type ToolIconName } from "./ToolIcon";

const PILL_TOOLS: ToolIconName[] = ["whatsapp", "chatgpt", "gmail"];

function ArrowButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="shrink-0 w-8 h-8 rounded-full bg-white/55 border border-white/70 flex items-center justify-center text-ink/70 hover:bg-white hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M5 11l6-6M11 5H6M11 5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

/** Inline row of overlapping tool "avatars" that sits inside the headline. */
function ToolPills() {
  return (
    <span aria-hidden className="inline-flex align-middle -space-x-[0.18em] mx-[0.12em] -translate-y-[0.06em]">
      {PILL_TOOLS.map((tool, i) => (
        <span
          key={tool}
          className="relative inline-flex items-center justify-center w-[0.8em] h-[0.8em] rounded-full bg-white border-[0.04em] border-[#f7e6d4] shadow-[0_6px_16px_-8px_rgba(120,60,20,0.5)] animate-blur-in"
          style={{ zIndex: PILL_TOOLS.length - i, animationDelay: `${300 + i * 120}ms` }}
        >
          <span className="w-[0.42em] h-[0.42em] inline-flex">
            <ToolIcon name={tool} />
          </span>
        </span>
      ))}
    </span>
  );
}

const RING_R = 18;
const RING_C = 2 * Math.PI * RING_R;

export default function Hero() {
  const stat = stats[0];

  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col">
      <Atmosphere variant="dawn" />
      {/* Melt the atmosphere into the bone page background. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-bone/60 to-bone" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-10 pt-32 sm:pt-40 pb-12">
        <h1 className="animate-blur-in text-[38px] sm:text-[64px] lg:text-[76px] leading-[1.04] font-normal tracking-[-0.045em] text-ink max-w-[980px]">
          Hacé que <span className="whitespace-nowrap">la IA <ToolPills /></span>
          <br /> trabaje para tu negocio
        </h1>

        <p className="animate-blur-in [animation-delay:150ms] mt-6 text-[16px] sm:text-[18px] leading-relaxed text-ink/70 max-w-[540px]">
          Dejamos funcionando solas las tareas que hoy te comen el día: responder
          consultas, hacer seguimiento, mandar recordatorios y ordenar tus datos.
          A medida de pymes y startups.
        </p>

        <div className="animate-blur-in [animation-delay:250ms] mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink("Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-black transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Hablar por WhatsApp
          </a>
          <Link
            href="/#servicios"
            className="glass text-ink px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Ver servicios
          </Link>
        </div>
      </div>

      {/* Glass cards resting on the atmosphere. */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-10 pb-10 sm:pb-14 grid grid-cols-1 md:grid-cols-[1.45fr_1fr_1fr] gap-3">
        {/* Diagnóstico */}
        <div className="glass rounded-[22px] p-3 flex gap-4 animate-blur-in [animation-delay:400ms]">
          <div className="relative w-[112px] sm:w-[128px] shrink-0 rounded-[16px] overflow-hidden min-h-[120px]">
            <Atmosphere variant="soft" mark={false} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="x-mark w-12 aspect-[425/452] bg-gradient-to-br from-brand-light to-brand-dark" />
            </div>
          </div>
          <div className="flex-1 flex flex-col py-1.5 pr-1.5 text-left">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[15px] font-medium text-ink">Empezá por un diagnóstico</p>
              <ArrowButton href="/diagnostico" label="Ir al diagnóstico gratuito" />
            </div>
            <p className="text-[13px] leading-snug text-ink/65 mt-1 max-w-[260px]">
              Respondé unas preguntas y te decimos dónde la IA te ahorra más tiempo.
            </p>
            <Link
              href="/diagnostico"
              className="mt-auto pt-3 w-fit text-[12px] font-medium text-ink bg-white/70 hover:bg-white px-3.5 py-1.5 rounded-full transition-colors"
            >
              Diagnóstico gratis
            </Link>
          </div>
        </div>

        {/* Servicios */}
        <div className="glass rounded-[22px] p-4 flex flex-col text-left animate-blur-in [animation-delay:500ms]">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[15px] font-medium text-ink">{services.length} servicios, un objetivo</p>
            <ArrowButton href="/#servicios" label="Ver servicios" />
          </div>
          <p className="text-[13px] leading-snug text-ink/65 mt-1">
            Del diagnóstico a la implementación.
          </p>
          <div className="mt-auto pt-4 flex gap-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                title={s.title}
                aria-label={s.title}
                className="w-9 h-9 rounded-full bg-white/65 hover:bg-white flex items-center justify-center text-brand-dark transition-colors [&_svg]:w-[18px] [&_svg]:h-[18px]"
              >
                <ServiceIcon shape={s.icon} />
              </Link>
            ))}
          </div>
        </div>

        {/* Métrica */}
        {stat && (
          <div className="glass rounded-[22px] p-4 flex flex-col text-left animate-blur-in [animation-delay:600ms]">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[15px] font-medium text-ink">Resultados reales</p>
              <ArrowButton href="/#casos" label="Ver casos de éxito" />
            </div>
            <p className="text-[13px] leading-snug text-ink/65 mt-1">
              Medidos en proyectos que ya implementamos.
            </p>
            <div className="mt-auto pt-4 flex items-center gap-3">
              <svg viewBox="0 0 44 44" className="w-11 h-11 -rotate-90" aria-hidden="true">
                <circle cx="22" cy="22" r={RING_R} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
                <circle
                  cx="22"
                  cy="22"
                  r={RING_R}
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  className="animate-ring-fill [animation-delay:800ms]"
                  style={
                    {
                      strokeDashoffset: RING_C * 0.3,
                      "--ring-from": RING_C,
                      "--ring-to": RING_C * 0.3,
                    } as React.CSSProperties
                  }
                />
              </svg>
              <div>
                <div className="text-[22px] leading-none tracking-[-0.02em] text-ink tabular-nums">
                  <AnimatedMetric value={stat.value} active />
                </div>
                <div className="text-[12px] text-ink/60 mt-1">{stat.label}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
