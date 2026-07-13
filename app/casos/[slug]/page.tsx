import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";
import CaseVisual from "@/app/components/CaseVisual";
import { cases, services } from "@/app/lib/landing-data";
import { whatsappLink } from "@/app/lib/site";

type Params = { slug: string };

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 text-brand" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path
        d="M5 8.3L7.1 10.3L11.2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = cases.find((c) => c.slug === slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.title,
    description: caseStudy.quote,
    alternates: { canonical: `/casos/${slug}` },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.quote,
      url: `/casos/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const caseStudy = cases.find((c) => c.slug === slug);
  if (!caseStudy) notFound();

  const relatedServices = caseStudy.relatedServices
    .map((s) => services.find((service) => service.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <Nav />

      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <Link
          href="/#casos"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#777777] hover:text-brand transition-colors mb-10 sm:mb-14 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
        >
          <ArrowLeftIcon />
          Volver a casos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-brand bg-brand/10 px-2.5 py-1 rounded-full w-fit">
              {caseStudy.role}
            </span>
            <h1 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.02em] leading-[1.05]">
              {caseStudy.title}
            </h1>
            <p className="text-[17px] text-[#555555] leading-relaxed max-w-[480px]">
              {caseStudy.longDescription}
            </p>
            <a
              href={whatsappLink(
                `Hola! Vi el caso "${caseStudy.title}" en la web y quiero algo similar para mi negocio.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center bg-black text-white px-6 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand transition-colors mt-2 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="w-full min-h-[280px] sm:min-h-[320px] rounded-[24px] border border-[#ECECEC] bg-[#FAFAFA] flex items-center justify-center p-6 sm:p-10">
            <CaseVisual type={caseStudy.visual} image={caseStudy.image} active />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 pt-14 sm:pt-16 border-t border-[#ECECEC]">
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.01em] mb-6">
              Qué hicimos
            </h2>
            <div className="flex flex-col gap-4">
              {caseStudy.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 text-[15px] text-[#444444]"
                >
                  <CheckIcon />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.01em] mb-6">
              El resultado
            </h2>
            <div className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] p-6 flex flex-col gap-4">
              <div>
                <div className="text-[40px] font-extrabold tracking-[-0.02em] text-[#111111] leading-none tabular-nums">
                  {caseStudy.metric}
                </div>
                <div className="text-[13px] text-[#777777] mt-2">
                  {caseStudy.metricLabel}
                </div>
              </div>
              <p className="text-[14px] text-[#444444] leading-relaxed">
                &ldquo;{caseStudy.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-4 border-t border-[#ECECEC]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {caseStudy.name.charAt(0)}
                </div>
                <div className="text-sm font-semibold text-[#111111] truncate">
                  {caseStudy.name}
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedServices.length > 0 && (
          <div className="pt-14 sm:pt-16">
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
