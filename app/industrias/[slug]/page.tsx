import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { industries, getIndustry } from "@/app/lib/industries-data";
import { cases, services } from "@/app/lib/landing-data";
import { breadcrumbSchema, faqPageSchema } from "@/app/lib/structured-data";
import { whatsappLink } from "@/app/lib/site";

type Params = { slug: string };

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
      <path
        d="M9.5 12L5.5 8l4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
  );
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.seo.title,
    description: industry.seo.description,
    keywords: industry.seo.keywords,
    alternates: { canonical: `/industrias/${slug}` },
    openGraph: {
      type: "article",
      title: industry.seo.title,
      description: industry.seo.description,
      url: `/industrias/${slug}`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedServices = industry.relatedServices
    .map((s) => services.find((service) => service.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));
  const relatedCase = industry.relatedCase
    ? cases.find((c) => c.slug === industry.relatedCase)
    : undefined;

  return (
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <JsonLd
        data={[
          faqPageSchema(industry.faq),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Industrias", path: "/industrias" },
            { name: industry.label, path: `/industrias/${industry.slug}` },
          ]),
        ]}
      />
      <Nav />

      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <Link
          href="/industrias"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#777777] hover:text-brand transition-colors mb-10 sm:mb-14 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
        >
          <ArrowLeftIcon />
          Volver a industrias
        </Link>

        {/* Hero */}
        <div className="max-w-[760px] flex flex-col gap-5 mb-16 sm:mb-24">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Industrias · {industry.label}
          </p>
          <h1 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.02em] leading-[1.05]">
            {industry.hero.title}
          </h1>
          <p className="text-[17px] text-[#555555] leading-relaxed">
            {industry.hero.intro}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href={whatsappLink(
                `Hola! Quiero ver qué puede automatizar Neexia para ${industry.label.toLowerCase()}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand text-white px-6 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </div>

        {/* Lo que suele pasar */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 pt-14 sm:pt-16 border-t border-[#ECECEC]">
          <h2 className="text-[22px] font-bold tracking-[-0.01em]">
            Lo que suele pasar
          </h2>
          <ul className="flex flex-col gap-4 max-w-[640px]">
            {industry.pains.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] text-[#444444] leading-relaxed">
                <DotIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Qué podés automatizar */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 pt-14 sm:pt-16 mt-14 sm:mt-16 border-t border-[#ECECEC]">
          <h2 className="text-[22px] font-bold tracking-[-0.01em]">
            Qué podés automatizar con IA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[760px]">
            {industry.solutions.map((s, i) => (
              <div
                key={s.title}
                className="group relative flex flex-col gap-3 rounded-[20px] border border-[#ECECEC] bg-white p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_56px_-24px_rgba(255,131,54,0.22)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-dark transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="text-[12px] font-bold tabular-nums tracking-[0.12em] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[16px] font-bold tracking-[-0.01em] leading-snug">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#555555] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resultado / caso */}
        <div className="pt-14 sm:pt-16 mt-14 sm:mt-16 border-t border-[#ECECEC]">
          <div className="rounded-[24px] bg-[#0A0A0A] text-white p-8 sm:p-12 max-w-[900px]">
            <p className="text-[17px] sm:text-[19px] leading-relaxed">
              {industry.outcome}
            </p>
            {relatedCase && (
              <Link
                href={`/casos/${relatedCase.slug}`}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-light hover:text-white transition-colors mt-5 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
              >
                Ver el caso completo
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M6.5 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 pt-14 sm:pt-16 mt-14 sm:mt-16 border-t border-[#ECECEC]">
          <h2 className="text-[22px] font-bold tracking-[-0.01em]">Preguntas frecuentes</h2>
          <div className="flex flex-col max-w-[720px] border-t border-[#ECECEC]">
            {industry.faq.map((item) => (
              <details
                key={item.q}
                className="group border-b border-[#ECECEC] py-5"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[16px] font-semibold text-[#111111] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                  {item.q}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4 shrink-0 text-[#999999] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 3.5v9M3.5 8h9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="text-[15px] text-[#555555] leading-relaxed mt-3">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Servicios aplicados */}
        {relatedServices.length > 0 && (
          <div className="pt-14 sm:pt-16 mt-14 sm:mt-16 border-t border-[#ECECEC]">
            <h2 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#999999] mb-4">
              Servicios aplicados
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#111111] border border-[#ECECEC] rounded-full px-4 py-2 hover:border-brand/30 hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                >
                  {s.tabLabel}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <CtaFinal />
      <Footer />
    </div>
  );
}
