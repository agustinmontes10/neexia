import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/lib/landing-data";
import {
  ADDRESS,
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  SOCIAL_LINKS,
  whatsappLink,
} from "@/app/lib/site";

const linkCls =
  "text-[14px] text-body hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[14px] text-ink mb-4">{title}</p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-white border-t border-line px-5 sm:px-10 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-6 gap-y-12">
        <div className="col-span-2 lg:col-span-1">
          <Image src="/logoNeexia.svg" alt="Neexia" width={2048} height={535} className="h-6 w-auto" />
          <p className="mt-4 text-[14px] text-body leading-relaxed max-w-[280px]">
            Agencia de IA para pymes y startups. Automatizamos lo repetitivo
            para que te enfoques en crecer.
          </p>
        </div>

        <Column title="Servicios">
          {services.map((s) => (
            <Link key={s.slug} href={`/servicios/${s.slug}`} className={linkCls}>
              {s.title}
            </Link>
          ))}
        </Column>

        <Column title="Neexia">
          <Link href="/#proceso" className={linkCls}>Cómo trabajamos</Link>
          <Link href="/#casos" className={linkCls}>Casos de éxito</Link>
          <Link href="/#faq" className={linkCls}>Preguntas frecuentes</Link>
          <Link href="/glosario" className={linkCls}>Glosario</Link>
        </Column>

        <Column title="Contacto">
          <a
            href={whatsappLink("Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            WhatsApp
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkCls} break-all`}>{CONTACT_EMAIL}</a>
          <a href={`tel:${PHONE_E164}`} className={linkCls}>{PHONE_DISPLAY}</a>
          <span className="text-[14px] text-body">
            {ADDRESS.locality}, {ADDRESS.region}, Argentina
          </span>
        </Column>
      </div>

      <div className="max-w-[1200px] mx-auto mt-14 pt-6 border-t border-line flex items-center justify-between gap-4">
        <p className="text-[13px] text-mute">© {new Date().getFullYear()} Neexia. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Neexia en LinkedIn"
            className="w-8 h-8 rounded-full bg-bone flex items-center justify-center text-ink/70 hover:text-ink transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.6-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4v-11Z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Neexia en Instagram"
            className="w-8 h-8 rounded-full bg-bone flex items-center justify-center text-ink/70 hover:text-ink transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="3.8" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
