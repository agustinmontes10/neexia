"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/app/lib/site";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#casos", label: "Casos de éxito" },
];

const WHATSAPP_HREF = whatsappLink(
  "Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio."
);

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Full-screen mobile menu: freeze the page underneath and allow Esc to close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between max-w-[1280px] mx-auto px-6 sm:px-12 py-6">
        <Link href="/" aria-label="Neexia — inicio">
          <Image src="/logoNeexia.svg" alt="Neexia" width={2048} height={535} className="h-7 w-auto" priority />
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#111111] hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Hablemos
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg border border-[#E2E2E2] bg-white focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            <span
              className={`block w-4.5 h-[1.5px] bg-[#111111] rounded-full transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4.5 h-[1.5px] bg-[#111111] rounded-full transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4.5 h-[1.5px] bg-[#111111] rounded-full transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-[60] flex flex-col bg-white animate-fade-up"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Link href="/" aria-label="Neexia — inicio" onClick={() => setOpen(false)}>
              <Image src="/logoNeexia.svg" alt="Neexia" width={2048} height={535} className="h-7 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E2E2E2] bg-white focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              <span className="relative block w-4.5 h-4.5">
                <span className="absolute inset-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 rotate-45 rounded-full bg-[#111111]" />
                <span className="absolute inset-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-[#111111]" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6 overflow-y-auto">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between gap-4 border-b border-[#F0F0F0] py-5 animate-fade-up focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-[13px] font-semibold text-brand-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[26px] font-semibold tracking-tight text-[#111111] transition-colors group-active:text-brand">
                    {link.label}
                  </span>
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="shrink-0 text-[#B1B1B1] transition-colors group-active:text-brand"
                >
                  <path
                    d="M4 14L14 4M14 4H6M14 4V12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          <div
            className="border-t border-[#F0F0F0] px-6 pt-6 animate-fade-up"
            style={{ animationDelay: `${links.length * 70}ms`, paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
          >
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center bg-brand text-white px-4 py-4 rounded-xl text-[16px] font-semibold hover:bg-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Hablar por WhatsApp
            </a>
            <div className="mt-5 flex items-center justify-center gap-2 text-[13px] text-[#999999]">
              <a
                href="mailto:contact.neexia@gmail.com"
                className="hover:text-brand transition-colors"
              >
                contact.neexia@gmail.com
              </a>
              <span aria-hidden="true">·</span>
              <a href="tel:+5492983697357" className="hover:text-brand transition-colors">
                +54 9 2983 697357
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
