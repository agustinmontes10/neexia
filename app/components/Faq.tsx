import { faqs } from "@/app/lib/landing-data";
import { faqPageSchema } from "@/app/lib/structured-data";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section
      id="preguntas"
      className="max-w-[1280px] mx-auto px-6 sm:px-12 py-16 sm:py-24"
    >
      <JsonLd data={faqPageSchema(faqs)} />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 lg:gap-16">
        <Reveal>
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] leading-[1.1]">
            Lo que suelen preguntarnos
          </h2>
          <p className="text-lg text-[#555555] leading-relaxed mt-4">
            Si tenés otra duda, escribinos por WhatsApp y la charlamos.
          </p>
        </Reveal>

        <div className="flex flex-col border-t border-[#ECECEC] max-w-[760px]">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-[#ECECEC] py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[16px] sm:text-[17px] font-semibold text-[#111111] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2">
                {item.q}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 shrink-0 text-[#999999] transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="text-[15px] text-[#555555] leading-relaxed mt-3 max-w-[640px]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
