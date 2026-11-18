"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CaseChatMessage, CaseVisualShape } from "@/app/lib/landing-data";
import Atmosphere from "./Atmosphere";
import ToolIcon from "./ToolIcon";

/**
 * "Video" of a website: a browser window over a full-page screenshot that
 * scrolls down section by section and jumps back to the top (`page-scroll`
 * keyframe, a background-position pan so no height math is needed — 0% is the
 * top of the page, 100% the footer). Under reduced motion the keyframe's last
 * frame is the top of the page. Fills its parent's height and has no bottom
 * edge: it's meant to sit against the bottom of a `CaseStage`, cropped.
 */
function WebScrollVisual({ image, url, active }: { image?: string; url?: string; active: boolean }) {
  return (
    <div className="w-full h-full flex flex-col rounded-t-[14px] border border-b-0 border-white/90 bg-white shadow-[0_30px_60px_-28px_rgba(80,40,10,0.4)] overflow-hidden">
      <div className="shrink-0 flex items-center gap-2 px-3 py-2 border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <span className="flex gap-1 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#FFD7C2]" />
          <span className="w-2 h-2 rounded-full bg-[#FFE7DA]" />
          <span className="w-2 h-2 rounded-full bg-[#F0F0F0]" />
        </span>
        <div className="flex-1 max-w-[280px] mx-auto h-5 rounded-full bg-white border border-[#F0F0F0] px-2.5 flex items-center justify-center text-[10px] text-ink/45 truncate">
          {url}
        </div>
      </div>
      {image ? (
        <div
          role="img"
          aria-label={url ? `Recorrido por ${url}` : "Recorrido por el sitio"}
          className="flex-1 min-h-0 bg-no-repeat bg-[length:100%_auto] animate-page-scroll"
          style={{
            backgroundImage: `url(${image})`,
            animationPlayState: active ? "running" : "paused",
          }}
        />
      ) : (
        <div className="flex-1 min-h-0 flex items-center justify-center bg-gradient-to-br from-[#FFF1EC] to-[#FAFAFA] text-[12px] text-ink/40">
          Captura del sitio próximamente
        </div>
      )}
    </div>
  );
}

function VoiceNote({ duration }: { duration: string }) {
  const bars = [4, 9, 6, 12, 8, 14, 7, 10, 5, 11, 7, 4, 8, 5];
  return (
    <span className="flex items-center gap-2 py-0.5" aria-label={`Audio de ${duration}`}>
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-ink/60 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M4 2.8v10.4a.6.6 0 0 0 .9.5l8.4-5.2a.6.6 0 0 0 0-1L4.9 2.3a.6.6 0 0 0-.9.5Z" />
      </svg>
      <span className="flex items-center gap-[2px] h-4" aria-hidden="true">
        {bars.map((h, i) => (
          <span key={i} className="w-[2px] rounded-full bg-ink/35" style={{ height: h }} />
        ))}
      </span>
      <span className="text-[11px] text-ink/50 tabular-nums">{duration}</span>
    </span>
  );
}

/**
 * WhatsApp conversation answered by the AI agent: customer messages come in,
 * the agent "types" and replies, then the chat clears and loops. Only runs
 * while in view; under reduced motion the whole conversation is shown at once.
 * Drawn as a phone (white bezel, no bottom edge) that fills its parent's
 * height, so it sits cropped against the bottom of a `CaseStage`.
 */
function WhatsappChatVisual({
  chat = [],
  avatar,
  active,
}: {
  chat?: CaseChatMessage[];
  avatar?: string;
  active: boolean;
}) {
  // Number of messages visible, and whether the agent is "typing" the next one.
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!active || chat.length === 0) return;
    const timers: number[] = [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers.push(window.setTimeout(() => setShown(chat.length), 0));
      return () => timers.forEach(clearTimeout);
    }

    let t = 0;
    const at = (ms: number, fn: () => void) => {
      t += ms;
      timers.push(window.setTimeout(fn, t));
    };

    const run = () => {
      t = 0;
      setShown(0);
      setTyping(false);
      chat.forEach((m, i) => {
        if (m.from === "agent") {
          at(i === 0 ? 400 : 700, () => setTyping(true));
          at(1300, () => {
            setTyping(false);
            setShown(i + 1);
          });
        } else {
          at(i === 0 ? 500 : 1500, () => setShown(i + 1));
        }
      });
      at(4500, run);
    };
    timers.push(window.setTimeout(run, 0));
    return () => timers.forEach(clearTimeout);
  }, [active, chat]);

  return (
    <div className="w-full max-w-[320px] h-full flex flex-col rounded-t-[34px] border-[7px] border-b-0 border-white bg-[#FBF8F3] shadow-[0_30px_60px_-28px_rgba(80,40,10,0.4)] overflow-hidden">
      <div className="shrink-0 flex items-center gap-2.5 px-4 pt-4 pb-3 bg-white border-b border-[#F0ECE6]">
        <span className="relative w-9 h-9 rounded-full bg-white border border-[#ECE8E2] flex items-center justify-center shrink-0">
          {avatar ? (
            <Image src={avatar} alt="" width={36} height={36} className="w-7 h-7 object-contain" />
          ) : (
            <span className="w-3 h-3 rounded-full bg-brand" aria-hidden="true" />
          )}
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5">
            <ToolIcon name="whatsapp" />
          </span>
        </span>
        <div className="min-w-0">
          <p className="text-[14px] text-ink leading-tight">Asistente IA</p>
          <p className="text-[11px] text-ink/45 leading-tight">{typing ? "escribiendo…" : "en línea"}</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 px-3.5 pt-3 pb-6 flex flex-col justify-end gap-2 overflow-hidden" aria-live="off">
        {chat.slice(0, shown).map((m, i) => (
          <div
            key={i}
            className={`shrink-0 max-w-[84%] rounded-[16px] px-3.5 py-2.5 text-[13.5px] leading-snug text-ink animate-fade-up ${
              m.from === "agent"
                ? "self-end bg-[#FFE9C7] rounded-br-[4px]"
                : "self-start bg-white border border-[#F0ECE6] rounded-bl-[4px]"
            }`}
          >
            {m.audio ? <VoiceNote duration={m.text} /> : m.text}
          </div>
        ))}
        {typing && (
          <div className="shrink-0 self-end bg-[#FFE9C7] rounded-[16px] rounded-br-[4px] px-3.5 py-3 flex gap-1 animate-fade-up" aria-hidden="true">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-typing-dot"
                style={{ animationDelay: `${d * 160}ms` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseVisual({
  type,
  image,
  url,
  chat,
  avatar,
  active,
}: {
  type: CaseVisualShape;
  image?: string;
  url?: string;
  chat?: CaseChatMessage[];
  avatar?: string;
  active: boolean;
}) {
  switch (type) {
    case "webScroll":
      return <WebScrollVisual image={image} url={url} active={active} />;
    case "whatsappChat":
      return <WhatsappChatVisual chat={chat} avatar={avatar} active={active} />;
  }
}

/**
 * The case's stage: a soft atmosphere surface with the visual standing on its
 * bottom edge, cropped (the visual overflows by a few px so a hover lift never
 * reveals a gap). Pass the height via `className`; extra overlays (badge, quote)
 * go in `children`. `visualClassName` styles the visual's wrapper (hover lift).
 */
export function CaseStage({
  className = "",
  visualClassName = "",
  children,
  ...visual
}: {
  className?: string;
  visualClassName?: string;
  children?: React.ReactNode;
  type: CaseVisualShape;
  image?: string;
  url?: string;
  chat?: CaseChatMessage[];
  avatar?: string;
  active: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] bg-white/35 flex flex-col pt-14 px-5 sm:px-10 ${className}`}
    >
      <Atmosphere variant="soft" mark={false} />
      <div className={`relative flex-1 min-h-0 -mb-3 flex justify-center ${visualClassName}`}>
        <CaseVisual {...visual} />
      </div>
      {children}
      {/* Hairline edge on top of everything so the atmosphere can't wash it out. */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/80" />
    </div>
  );
}
