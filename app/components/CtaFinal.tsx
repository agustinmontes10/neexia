import Link from "next/link";
import { whatsappLink } from "@/app/lib/site";
import Atmosphere from "./Atmosphere";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-20 sm:pb-28">
      <Reveal>
        <div className="relative rounded-[28px] overflow-hidden px-4 py-20 sm:px-10 sm:py-28 flex justify-center">
          <Atmosphere variant="dusk" />
          <div className="relative w-full max-w-[680px] rounded-[24px] bg-[rgba(48,24,10,0.26)] border border-white/25 backdrop-blur-xl px-6 py-12 sm:px-12 sm:py-14 text-center shadow-[0_30px_80px_-40px_rgba(60,20,0,0.6)]">
            <h2 className="text-[30px] sm:text-[44px] font-normal leading-[1.08] tracking-[-0.035em] text-balance">
              <span className="block text-white/65">El mejor momento</span>
              <span className="block text-white">para que la IA trabaje por vos.</span>
            </h2>
            <p className="mt-5 text-[15px] sm:text-[16px] text-white/80 leading-relaxed max-w-[460px] mx-auto">
              Escribinos sin compromiso y en una charla vemos dónde la IA suma
              valor real a tu operación.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink("Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-ink px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-brand-light transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="/diagnostico"
                className="bg-white/15 border border-white/30 text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-white/25 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                Hacer el diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
