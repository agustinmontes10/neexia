import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/lib/landing-data";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164, whatsappLink } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-[#ECECEC] pt-16 px-6 sm:px-12 pb-10"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/logoNeexia.svg"
            alt="Neexia"
            width={2048}
            height={535}
            className="h-7 w-auto mb-4"
          />
          <p className="text-[15px] text-[#666666] leading-relaxed max-w-[320px]">
            Agencia de IA para pymes, startups y negocios locales.
            Automatizamos lo repetitivo para que te enfoques en crecer.
          </p>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#999999] mb-4">
            Servicios
          </div>
          <div className="flex flex-col gap-2.5 text-[15px] text-[#333333]">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/industrias"
              className="hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              IA por industria
            </Link>
          </div>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#999999] mb-4">
            Contacto
          </div>
          <div className="flex flex-col gap-2.5 text-[15px] text-[#333333]">
            <a
              href={whatsappLink(
                "Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              {PHONE_DISPLAY}
            </a>
            <span>Adolfo Gonzales Chaves, Buenos Aires, Argentina</span>
          </div>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#999999] mb-4">
            Redes
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <a
              href="https://www.linkedin.com/company/neexia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333333] hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/neexia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333333] hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-6 border-t border-[#F2F2F2] text-[13px] text-[#999999]">
        © 2026 Neexia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
