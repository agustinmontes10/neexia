"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164, whatsappLink } from "@/app/lib/site";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#casos", label: "Casos" },
  { href: "/#faq", label: "FAQ" },
];

/** Landing section ids the links point at, used for the active-section indicator. */
const SECTION_IDS = links.map((l) => l.href.split("#")[1]).filter(Boolean);

/** Scroll distance (px) in one direction before the floating pill hides/shows. */
const DIRECTION_SLOP = 8;

const WHATSAPP_HREF = whatsappLink(
  "Hola! Quiero charlar sobre cómo la IA puede ayudar a mi negocio."
);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2";

export default function Nav({
  overlay = false,
}: {
  /** Float over the page's first section (the home hero) instead of taking up space. */
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Floating pill: appears once the in-flow nav has scrolled away, hides while
  // scrolling down and comes back on any scroll up. `holdUntil` keeps it visible
  // during the smooth scroll that a click on one of its own links triggers.
  const [pill, setPill] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const holdUntil = useRef(0);

  useEffect(() => {
    let anchorY = window.scrollY;
    let frame = 0;

    const update = (initial = false) => {
      frame = 0;
      const y = window.scrollY;
      const threshold = overlay ? window.innerHeight * 0.75 : 160;
      const delta = y - anchorY;

      if (y < threshold) {
        setPill(false);
        anchorY = y;
      } else if (initial || Date.now() < holdUntil.current) {
        setPill(true);
        anchorY = y;
      } else if (Math.abs(delta) > DIRECTION_SLOP) {
        setPill(delta < 0);
        anchorY = y;
      }

      if (isHome) {
        // Active = the section crossing a line 40% down the viewport. The gaps
        // (hero, intro, closing CTA) leave nothing highlighted.
        const line = window.innerHeight * 0.4;
        let current: string | null = null;
        for (const id of SECTION_IDS) {
          const r = document.getElementById(id)?.getBoundingClientRect();
          if (r && r.top <= line && r.bottom > line) {
            current = id;
            break;
          }
        }
        setActive(current);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(() => update());
    };

    update(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [overlay, isHome]);

  // Sliding highlight behind the active pill link, measured from the DOM.
  const linksRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? linksRef.current?.querySelector<HTMLElement>(`[data-section="${active}"]`) : null;
      // With nothing active, keep the last position so the highlight just fades out.
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const holdPill = () => {
    holdUntil.current = Date.now() + 1500;
    setPill(true);
  };

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
    <header className={`${overlay ? "absolute inset-x-0 top-0" : "relative"} z-50`}>
      <nav className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center max-w-[1200px] mx-auto px-5 sm:px-10 py-6">
        <Link href="/" aria-label="Neexia — inicio" className={`w-fit ${focusRing}`}>
          <Image src="/logoNeexia.svg" alt="Neexia" width={2048} height={535} className="h-6 w-auto" preload />
        </Link>

        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] text-ink/75 hover:text-ink transition-colors ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-brand text-ink px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-brand-light transition-colors ${focusRing}`}
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full bg-white/60 backdrop-blur border border-white/70 ${focusRing}`}
          >
            <span className="block w-4 h-[1.5px] bg-ink rounded-full" />
            <span className="block w-4 h-[1.5px] bg-ink rounded-full" />
          </button>
        </div>
      </nav>

      {/* Floating glass pill, shown after the bar above has scrolled away. */}
      <div
        inert={!pill}
        aria-hidden={!pill}
        className={`fixed inset-x-0 top-3 z-50 flex justify-center px-3 pointer-events-none transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          pill ? "translate-y-0 opacity-100" : "-translate-y-[140%] opacity-0"
        }`}
      >
        <nav
          aria-label="Navegación flotante"
          className="glass pointer-events-auto flex w-full max-w-fit items-center gap-1 rounded-full p-1.5 pl-4"
        >
          <Link href="/" aria-label="Neexia — inicio" className={`mr-auto md:mr-3 shrink-0 rounded-full ${focusRing}`}>
            <Image src="/logoNeexia.svg" alt="Neexia" width={2048} height={535} className="h-5 w-auto" />
          </Link>

          <div ref={linksRef} className="relative hidden md:flex items-center">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 rounded-full bg-white/80 shadow-[0_1px_2px_rgba(22,22,22,0.06)] transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                left: indicator?.left ?? 0,
                width: indicator?.width ?? 0,
                opacity: active && indicator ? 1 : 0,
              }}
            />
            {links.map((link) => {
              const id = link.href.split("#")[1];
              const on = isHome && id === active;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-section={id}
                  aria-current={on ? "location" : undefined}
                  onClick={holdPill}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] transition-colors ${
                    on ? "text-ink" : "text-ink/65 hover:text-ink"
                  } ${focusRing}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 shrink-0 bg-brand text-ink px-4 py-2 rounded-full text-[13px] font-medium hover:bg-brand-light transition-colors ${focusRing}`}
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menú"
            className={`md:hidden w-9 h-9 shrink-0 flex flex-col items-center justify-center gap-[5px] rounded-full bg-white/70 ${focusRing}`}
          >
            <span className="block w-4 h-[1.5px] bg-ink rounded-full" />
            <span className="block w-4 h-[1.5px] bg-ink rounded-full" />
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-[60] flex flex-col bg-bone animate-fade-up"
        >
          <div className="flex items-center justify-between px-5 py-6">
            <Link href="/" aria-label="Neexia — inicio" onClick={() => setOpen(false)}>
              <Image src="/logoNeexia.svg" alt="Neexia" width={2048} height={535} className="h-6 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white border border-line ${focusRing}`}
            >
              <span className="relative block w-4 h-4">
                <span className="absolute inset-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 rotate-45 rounded-full bg-ink" />
                <span className="absolute inset-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-ink" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-5 overflow-y-auto">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  holdPill();
                }}
                className={`group flex items-center justify-between gap-4 border-b border-line py-5 animate-fade-up ${focusRing}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="text-[28px] tracking-[-0.03em] text-ink">{link.label}</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-mute">
                  <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </nav>

          <div
            className="px-5 pt-6 animate-fade-up"
            style={{ animationDelay: `${links.length * 70}ms`, paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
          >
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-center bg-brand text-ink px-4 py-4 rounded-full text-[16px] font-medium hover:bg-brand-light transition-colors ${focusRing}`}
            >
              Hablar por WhatsApp
            </a>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] text-body">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink transition-colors">
                {CONTACT_EMAIL}
              </a>
              <span aria-hidden="true">·</span>
              <a href={`tel:${PHONE_E164}`} className="hover:text-ink transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
