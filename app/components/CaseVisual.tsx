"use client";

import { useEffect, useState } from "react";
import type { CaseChatMessage, CaseVisualShape } from "@/app/lib/landing-data";
import ToolIcon from "./ToolIcon";

/**
 * "Video" of a website: a browser window over a full-page screenshot that
 * scrolls down section by section and jumps back to the top (`page-scroll`
 * keyframe, a background-position pan so no height math is needed — 0% is the
 * top of the page, 100% the footer). Under reduced motion the keyframe's last
 * frame is the top of the page.
 */
function WebScrollVisual({ image, url, active }: { image?: string; url?: string; active: boolean }) {
  return (
    <div className="w-full max-w-[340px] rounded-[14px] border border-white/80 bg-white shadow-[0_24px_48px_-24px_rgba(80,40,10,0.35)] overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <span className="flex gap-1 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#FFD7C2]" />
          <span className="w-2 h-2 rounded-full bg-[#FFE7DA]" />
          <span className="w-2 h-2 rounded-full bg-[#F0F0F0]" />
        </span>
        <div className="flex-1 h-5 rounded-full bg-white border border-[#F0F0F0] px-2.5 flex items-center text-[10px] text-ink/45 truncate">
          {url}
        </div>
      </div>
      {image ? (
        <div
          role="img"
          aria-label={url ? `Recorrido por ${url}` : "Recorrido por el sitio"}
          className="h-[250px] sm:h-[270px] bg-no-repeat bg-[length:100%_auto] animate-page-scroll"
          style={{
            backgroundImage: `url(${image})`,
            animationPlayState: active ? "running" : "paused",
          }}
        />
      ) : (
        <div className="h-[250px] sm:h-[270px] flex items-center justify-center bg-gradient-to-br from-[#FFF1EC] to-[#FAFAFA] text-[12px] text-ink/40">
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
      <span className="text-[10px] text-ink/50 tabular-nums">{duration}</span>
    </span>
  );
}

/**
 * WhatsApp conversation answered by the AI agent: customer messages come in,
 * the agent "types" and replies, then the chat clears and loops. Only runs
 * while in view; under reduced motion the whole conversation is shown at once.
 */
function WhatsappChatVisual({ chat = [], active }: { chat?: CaseChatMessage[]; active: boolean }) {
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
    <div className="w-full max-w-[290px] rounded-[20px] border border-white/80 bg-[#FBF8F3] shadow-[0_24px_48px_-24px_rgba(80,40,10,0.35)] overflow-hidden">
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border-b border-[#F0ECE6]">
        <span className="relative w-8 h-8 rounded-full bg-brand/25 flex items-center justify-center shrink-0">
          <span className="x-mark w-4 h-4 bg-brand-light" aria-hidden="true" />
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5">
            <ToolIcon name="whatsapp" />
          </span>
        </span>
        <div className="min-w-0">
          <p className="text-[12px] text-ink leading-tight">Asistente IA</p>
          <p className="text-[10px] text-ink/45 leading-tight">{typing ? "escribiendo…" : "en línea"}</p>
        </div>
      </div>

      <div className="h-[244px] sm:h-[262px] px-3 py-3 flex flex-col justify-end gap-1.5 overflow-hidden" aria-live="off">
        {chat.slice(0, shown).map((m, i) => (
          <div
            key={i}
            className={`max-w-[82%] rounded-[14px] px-3 py-2 text-[12px] leading-snug text-ink animate-fade-up ${
              m.from === "agent"
                ? "self-end bg-[#FFE9C7] rounded-br-[4px]"
                : "self-start bg-white border border-[#F0ECE6] rounded-bl-[4px]"
            }`}
          >
            {m.audio ? <VoiceNote duration={m.text} /> : m.text}
          </div>
        ))}
        {typing && (
          <div className="self-end bg-[#FFE9C7] rounded-[14px] rounded-br-[4px] px-3 py-2.5 flex gap-1 animate-fade-up" aria-hidden="true">
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
  active,
}: {
  type: CaseVisualShape;
  image?: string;
  url?: string;
  chat?: CaseChatMessage[];
  active: boolean;
}) {
  switch (type) {
    case "webScroll":
      return <WebScrollVisual image={image} url={url} active={active} />;
    case "whatsappChat":
      return <WhatsappChatVisual chat={chat} active={active} />;
  }
}
