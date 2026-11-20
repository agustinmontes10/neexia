import { whatsappLink } from "@/app/lib/site";
import { btnInk } from "@/app/lib/ui";
import Atmosphere from "./Atmosphere";
import Reveal from "./Reveal";

const FADE = "radial-gradient(ellipse 60% 65% at 50% 50%, black 25%, transparent 75%)";

/**
 * Open closing call to action: no card, just a big two-tone heading on the
 * bone background with a soft atmosphere glow behind it (radially masked so
 * it has no visible edges).
 */
export default function CtaFinal() {
  return (
    <section className="relative px-5 sm:px-10 pt-24 pb-28 sm:pt-32 sm:pb-36 lg:pt-[clamp(72px,14svh,128px)] lg:pb-[clamp(80px,16svh,144px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ maskImage: FADE, WebkitMaskImage: FADE }}
      >
        <Atmosphere variant="soft" />
      </div>

      <Reveal className="relative max-w-[760px] mx-auto text-center">
        <h2 className="text-[36px] sm:text-[52px] lg:text-[length:clamp(40px,min(4.4vw,7.2svh),60px)] font-normal leading-[1.05] tracking-[-0.04em] text-balance">
          <span className="block text-mute">El mejor momento</span>
          <span className="block text-ink">para que la IA trabaje por vos.</span>
        </h2>
        <p className="mt-6 text-[16px] sm:text-[17px] text-body leading-relaxed max-w-[480px] mx-auto">
          Escribinos sin compromiso y en una charla vemos dónde la IA suma
          valor real a tu operación.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink("Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnInk} px-6 py-3.5 text-[15px]`}
          >
            Hablar por WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
