import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { industries } from "@/app/lib/industries-data";
import { breadcrumbSchema } from "@/app/lib/structured-data";

const title = "IA por industria";
const description =
  "Cómo aplicamos IA y automatización según tu rubro: inmobiliarias, estudios contables, seguros, gastronomía, salud, servicios profesionales y más.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "IA por industria",
    "automatización por rubro",
    "IA para pymes",
    "soluciones de IA a medida",
  ],
  alternates: { canonical: "/industrias" },
  openGraph: { title, description, url: "/industrias" },
};

export default function IndustriasPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Industrias", path: "/industrias" },
        ])}
      />
      <Nav />

      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-[720px] flex flex-col gap-4 mb-12 sm:mb-16">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Industrias
          </p>
          <h1 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.02em] leading-[1.05]">
            IA aplicada a tu rubro, no en general
          </h1>
          <p className="text-[17px] text-[#555555] leading-relaxed">
            Cada industria tiene sus propios cuellos de botella. Elegí la tuya y
            mirá qué se puede automatizar con IA, con ejemplos concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industrias/${industry.slug}`}
              className="group flex flex-col justify-between gap-6 rounded-[24px] border border-[#ECECEC] bg-[#FAFAFA] p-7 min-h-[200px] hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_56px_-24px_rgba(255,131,54,0.25)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-[20px] font-bold tracking-[-0.01em]">
                  {industry.label}
                </h2>
                <p className="text-[14px] text-[#666666] leading-relaxed line-clamp-3">
                  {industry.hero.intro}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand group-hover:text-brand-dark transition-colors">
                Ver más
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M6.5 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaFinal />
      <Footer />
    </div>
  );
}
