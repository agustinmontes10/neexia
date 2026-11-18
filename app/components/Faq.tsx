"use client";

import { useState } from "react";
import { faqs } from "@/app/lib/faq-data";
import { faqSchema } from "@/app/lib/structured-data";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20 sm:py-28">
      <JsonLd data={faqSchema(faqs)} />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16">
        <Reveal>
          <SectionHeading muted="Antes de empezar," strong="un poco de claridad." />
          <p className="mt-5 text-[15px] text-body leading-relaxed max-w-[340px]">
            ¿Te quedó otra duda? Escribinos por WhatsApp y lo charlamos.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="border-t border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const id = `faq-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 rounded-sm"
                  >
                    <span className="text-[16px] sm:text-[17px] text-ink tracking-[-0.01em]">{f.q}</span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-brand text-ink" : "bg-[#ebe8e1] text-ink/60"
                      }`}
                    >
                      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5" aria-hidden="true">
                        <path d="M2.5 6h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path
                          d="M6 2.5v7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className={`origin-center transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`}
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={id}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-[14px] sm:text-[15px] text-body leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
