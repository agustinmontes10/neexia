import Link from "next/link";
import { whatsappLink } from "@/app/lib/site";
import { btnGlass, btnInk } from "@/app/lib/ui";
import Atmosphere from "./Atmosphere";
import ToolIcon, { type ToolIconName } from "./ToolIcon";

const PILL_TOOLS: ToolIconName[] = ["whatsapp", "chatgpt", "gmail"];

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

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col">
      <Atmosphere variant="dawn" />
      {/* Melt the atmosphere into the bone page background. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-bone/60 to-bone" />

      {/*
        Centred in the free space below the overlay nav. Top padding only has to
        clear the nav; the larger bottom padding lifts the block slightly above
        the geometric centre, where it reads as optically centred.
      */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-10 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-[clamp(96px,12svh,128px)] lg:pb-[clamp(64px,15svh,168px)]">
        {/* The headline and paragraph are visible from the first paint on
            purpose — no blur-in. Chrome ignores content painted at opacity 0
            as an LCP candidate, so while they faded in, LCP fell on the tiny
            nav logo and PageSpeed mobile reported LCP 3.1s / Speed Index 4.3s.
            The pills and the buttons keep their entrance. */}
        <h1 className="text-[38px] sm:text-[64px] lg:text-[length:clamp(46px,min(5.8vw,10svh),84px)] leading-[1.04] font-normal tracking-[-0.045em] text-ink max-w-[980px] text-balance">
          Hacé que <span className="whitespace-nowrap">la IA <ToolPills /></span>
          <br /> trabaje para tu negocio
        </h1>

        <p className="mt-7 sm:mt-8 lg:mt-[clamp(20px,3.6svh,36px)] text-[16px] sm:text-[18px] lg:text-[length:clamp(16px,2.6svh,18px)] leading-[1.65] text-ink/70 max-w-[540px] text-balance">
          Dejamos funcionando solas las tareas que hoy te comen el día: responder
          consultas, hacer seguimiento, mandar recordatorios y ordenar tus datos.
          A medida de pymes y startups.
        </p>

        <div className="animate-blur-in [animation-delay:250ms] mt-10 sm:mt-12 lg:mt-[clamp(28px,5svh,48px)] flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink("Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnInk} px-6 py-3.5 text-[15px]`}
          >
            Hablar por WhatsApp
          </a>
          <Link
            href="/#servicios"
            className={`${btnGlass} px-6 py-3.5 text-[15px]`}
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
