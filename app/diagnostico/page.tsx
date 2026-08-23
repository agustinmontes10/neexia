import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import DiagnosticoQuiz from "@/app/components/DiagnosticoQuiz";

const title = "Diagnóstico gratuito";
const description =
  "Contanos cómo trabaja tu negocio hoy y te decimos, gratis y sin compromiso, qué procesos podés automatizar y cuántas horas por semana podés ahorrar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/diagnostico" },
  openGraph: { title, description, url: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <Nav />

      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-[640px] mx-auto text-center flex flex-col items-center gap-4 mb-12 sm:mb-16">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand">
            Diagnóstico gratuito
          </p>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] leading-[1.08]">
            ¿Cuánto tiempo podés recuperar automatizando tu negocio?
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#555555] leading-relaxed">
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
