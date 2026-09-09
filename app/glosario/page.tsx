import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { glossary } from "@/app/lib/glossary-data";
import { breadcrumbSchema, glossarySchema } from "@/app/lib/structured-data";

const title = "Glosario de IA y automatización";
const description =
  "Los términos de inteligencia artificial y automatización que aparecen en cualquier proyecto, explicados para negocios: agente de IA, RAG, LLM, workflow y más.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "glosario de IA",
    "términos de inteligencia artificial",
    "qué es un agente de IA",
    "qué es RAG",
    "qué es un LLM",
  ],
  alternates: { canonical: "/glosario" },
  openGraph: { title, description, url: "/glosario" },
};

export default function GlosarioPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <JsonLd
        data={[
          glossarySchema(glossary),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Glosario", path: "/glosario" },
          ]),
        ]}
      />
      <Nav />

      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-[720px] flex flex-col gap-4 mb-12 sm:mb-16">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Glosario
          </p>
          <h1 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.02em] leading-[1.05]">
            IA y automatización, sin la jerga
          </h1>
          <p className="text-[17px] text-[#555555] leading-relaxed">
            Los términos que suelen aparecer cuando se habla de un proyecto de IA,
            explicados en criollo y con foco en para qué sirven en un negocio.
          </p>
        </div>

        <dl className="border-t border-[#ECECEC] max-w-[820px]">
          {glossary.map((t) => (
            <div
              key={t.slug}
              id={t.slug}
              className="scroll-mt-24 border-b border-[#ECECEC] py-7 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-8"
            >
              <dt className="text-[16px] font-bold tracking-[-0.01em]">{t.term}</dt>
              <dd className="text-[15px] text-[#555555] leading-relaxed">
                {t.definition}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaFinal />
      <Footer />
    </div>
  );
}
