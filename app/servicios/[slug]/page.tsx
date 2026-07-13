import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";
import ServiceIcon from "@/app/components/ServiceIcon";
import ServiceVisual from "@/app/components/ServiceVisual";
import { services } from "@/app/lib/landing-data";
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
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `/servicios/${slug}` },
    openGraph: {
      title: service.title,
      description: service.desc,
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
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <Nav />

      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <Link
          href="/#servicios"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#777777] hover:text-brand transition-colors mb-10 sm:mb-14 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
        >
          <ArrowLeftIcon />
          Volver a servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <div className="flex flex-col gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF1EC] flex items-center justify-center text-brand">
              <ServiceIcon shape={service.icon} />
            </div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
              Servicio {service.num}
            </p>
            <h1 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.02em] leading-[1.05]">
              {service.title}
            </h1>
            <p className="text-[17px] text-[#555555] leading-relaxed max-w-[480px]">
              {service.longDescription}
            </p>
            <a
              href={whatsappLink(
                `Hola! Vi el servicio de ${service.title} en la web y quiero más información.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center bg-black text-white px-6 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand transition-colors mt-2 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <ServiceVisual icon={service.icon} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 pt-14 sm:pt-16 border-t border-[#ECECEC]">
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.01em] mb-6">
              Qué incluye
            </h2>
            <div className="flex flex-col gap-4">
              {service.benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 text-[15px] text-[#444444]"
                >
                  <CheckIcon />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.01em] mb-6">
              Para quién es
            </h2>
            <div className="flex flex-col gap-3">
              {service.idealFor.map((it) => (
                <div
                  key={it}
                  className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] px-5 py-4 text-[15px] text-[#444444]"
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
