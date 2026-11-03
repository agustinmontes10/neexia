import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import DiagnosticoQuiz from "@/app/components/DiagnosticoQuiz";
import { breadcrumbSchema } from "@/app/lib/structured-data";

const title = "Diagnóstico gratuito de automatización con IA";
const description =
  "Contanos cómo trabaja tu negocio hoy y te decimos, gratis y sin compromiso, qué procesos podés automatizar con IA y cuántas horas por semana podés ahorrar.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "diagnóstico de automatización",
    "diagnóstico de IA gratis",
    "cuánto puedo automatizar",
    "automatización para pymes",
  ],
  alternates: { canonical: "/diagnostico" },
  openGraph: { title, description, url: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <div className="w-full min-h-screen bg-bone text-ink">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Diagnóstico gratuito", path: "/diagnostico" },
        ])}
      />
      <Nav />

      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-[640px] mx-auto text-center flex flex-col items-center gap-4 mb-12 sm:mb-16">
          <p className="text-[13px] text-brand-dark">
            Diagnóstico gratuito
          </p>
          <h1 className="text-[32px] sm:text-[44px] font-normal tracking-[-0.04em] leading-[1.06]">
            ¿Cuánto tiempo podés recuperar automatizando tu negocio?
          </h1>
          <p className="text-[16px] sm:text-[17px] text-body leading-relaxed">
            Respondé algunas preguntas sobre cómo trabajás hoy y te armamos, gratis y sin
            compromiso, un informe con los procesos que podés automatizar y las horas por semana
            que podés ahorrar.
          </p>
        </div>

        <DiagnosticoQuiz />
      </section>

      <Footer />
    </div>
  );
}
