import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import ServiceIcon from "@/app/components/ServiceIcon";
import ServiceVisual from "@/app/components/ServiceVisual";
import { services } from "@/app/lib/landing-data";
import { breadcrumbSchema, serviceSchema } from "@/app/lib/structured-data";
import { whatsappLink } from "@/app/lib/site";
import { backArrow, backLink, btnInk } from "@/app/lib/ui";

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
    <svg viewBox="0 0 16 16" fill="none" className={`w-4 h-4 ${backArrow}`} aria-hidden="true">
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
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const description = service.seo?.description ?? service.desc;
  return {
    title: service.seo?.title ?? service.title,
    description,
    keywords: service.seo?.keywords,
    alternates: { canonical: `/servicios/${slug}` },
    openGraph: {
      type: "article",
      title: service.seo?.title ?? service.title,
      description,
      url: `/servicios/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="w-full min-h-screen bg-bone text-ink">
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/#servicios" },
            { name: service.title, path: `/servicios/${service.slug}` },
          ]),
        ]}
      />
      <Nav />

      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <Link
          href="/#servicios"
          className={`${backLink} mb-10 sm:mb-14`}
        >
          <ArrowLeftIcon />
          Volver a servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <div className="flex flex-col gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand">
              <ServiceIcon shape={service.icon} />
            </div>
            <p className="text-[13px] text-brand-dark">
              Servicio {service.num}
            </p>
            <h1 className="text-[34px] sm:text-[48px] font-normal tracking-[-0.04em] leading-[1.04]">
              {service.title}
            </h1>
            <p className="text-[17px] text-body leading-relaxed max-w-[480px]">
              {service.longDescription}
            </p>
            <a
              href={whatsappLink(
                `Hola! Vi el servicio de ${service.title} en la web y quiero más información.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnInk} w-fit px-6 py-3.5 text-[15px] mt-2`}
            >
              Hablar por WhatsApp
            </a>
          </div>

          <ServiceVisual icon={service.icon} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 pt-14 sm:pt-16 border-t border-line">
          <div>
            <h2 className="text-[24px] font-normal tracking-[-0.02em] mb-6">
              Qué incluye
            </h2>
            <div className="flex flex-col gap-4">
              {service.benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 text-[15px] text-ink/80"
                >
                  <CheckIcon />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[24px] font-normal tracking-[-0.02em] mb-6">
              Para quién es
            </h2>
            <div className="flex flex-col gap-3">
              {service.idealFor.map((it) => (
                <div
                  key={it}
                  className="rounded-2xl border border-line bg-white px-5 py-4 text-[15px] text-ink/80"
                >
                  {it}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
      <Footer />
    </div>
  );
}
