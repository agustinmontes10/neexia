import Image from "next/image";
import { whatsappLink } from "@/app/lib/site";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section className="max-w-[1280px] mx-auto mb-16 sm:mb-24 px-6 sm:px-12">
      <Reveal>
        <div className="relative overflow-hidden bg-black rounded-[24px] py-16 sm:py-20 px-6 sm:px-12 flex flex-col items-center text-center gap-6">
          {/* Warm brand glow + oversized brand-X artwork, clipped by the card. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[-10%] w-[560px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(255,131,54,0.28),rgba(255,189,89,0.10)_50%,transparent_72%)] blur-2xl"
          />
          <Image
            src="/X.svg"
            alt=""
            aria-hidden
            width={425}
            height={452}
            className="pointer-events-none absolute -right-14 -bottom-20 w-[240px] sm:w-[300px] rotate-12 opacity-[0.16] select-none"
          />

          <div className="relative flex flex-col items-center gap-6">
            <Image
              src="/LogoNeexiaBlanco.svg"
              alt="Neexia"
              width={2048}
              height={535}
              className="h-6 w-auto opacity-90"
            />
            <h2 className="text-white text-[28px] sm:text-[40px] font-extrabold tracking-[-0.02em] max-w-[600px] leading-[1.15]">
              ¿Charlamos sobre cómo la IA puede ayudar a tu negocio?
            </h2>
            <p className="text-[#BBBBBB] text-[17px] max-w-[520px] leading-relaxed">
              Escribinos por WhatsApp, sin compromiso, y en minutos vemos dónde
              la IA suma valor real a tu operación.
            </p>
            <a
              href={whatsappLink(
                "Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-8 py-4 rounded-[10px] text-base font-semibold hover:bg-brand-dark transition-colors mt-2 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
