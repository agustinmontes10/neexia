"use client";

import { useEffect, useState, type ReactNode } from "react";

type StepIconName = "brain" | "database" | "send";

function StepIcon({ name }: { name: StepIconName }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "w-5 h-5",
  };
  switch (name) {
    case "brain":
      return (
        <svg {...props}>
          <path d="M12 3.5a3.3 3.3 0 0 0-3.3 3.3v.3a2.8 2.8 0 0 0-.9 5.35v1.55a3.3 3.3 0 0 0 3.3 3.3h1.8a3.3 3.3 0 0 0 3.3-3.3v-1.55a2.8 2.8 0 0 0-.9-5.35v-.3A3.3 3.3 0 0 0 12 3.5Z" />
          <path d="M9.7 7v7.5M14.3 7v7.5" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="7" ry="2.8" />
          <path d="M5 6v12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V6" />
          <path d="M5 12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8" />
        </svg>
      );
    case "send":
      return (
        <svg {...props}>
          <path d="m3 11 18-8-8 18-2.5-7.5L3 11Z" />
        </svg>
      );
  }
}

function CheckIcon({ className = "text-brand" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-3.5 h-3.5 shrink-0 ${className}`}
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function ConnectorDesktop() {
  return (
    <div className="hidden sm:block relative h-[2px] w-10 md:w-14 bg-[#ECECEC] shrink-0 self-center">
      <span className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand animate-flow-dot-x" />
    </div>
  );
}

function ConnectorMobile() {
  return (
    <div className="sm:hidden relative w-[2px] h-8 bg-[#ECECEC] shrink-0 mx-auto">
      <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand animate-flow-dot-y" />
    </div>
  );
}

function Connector() {
  return (
    <>
      <ConnectorDesktop />
      <ConnectorMobile />
    </>
  );
}

function IconNode({
  icon,
  label,
  delay,
}: {
  icon: StepIconName;
  label: string;
  delay: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5 shrink-0">
      <div
        className="w-12 h-12 rounded-full bg-[#FFF1EC] text-brand flex items-center justify-center animate-ring-pulse"
        style={{ animationDelay: delay }}
      >
        <StepIcon name={icon} />
      </div>
      <div className="text-[12px] font-medium text-[#666666] max-w-[100px] text-center leading-snug">
        {label}
      </div>
    </div>
  );
}

function EmailCard() {
  return (
    <div className="w-full sm:w-[210px] rounded-2xl border border-[#ECECEC] bg-white p-5 text-left shrink-0">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#EFEFEF] flex items-center justify-center text-[11px] font-bold text-[#777777] shrink-0">
          JP
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold truncate">Julieta Pérez</div>
          <div className="text-[11px] text-[#999999]">hace 4 segundos</div>
        </div>
      </div>
      <div className="text-[13px] font-semibold mb-2 leading-snug">
        ¿Tienen stock del modelo azul?
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 rounded-full bg-[#F0F0F0] w-full" />
        <div className="h-1.5 rounded-full bg-[#F0F0F0] w-4/5" />
      </div>
    </div>
  );
}

function ResponseCard() {
  return (
    <div className="w-full sm:w-[210px] rounded-2xl bg-[#111111] p-5 text-left shrink-0">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
        <span className="text-[11px] font-semibold text-[#AAAAAA] uppercase tracking-wide">
          Respuesta automática
        </span>
      </div>
      <p className="text-[13px] text-white leading-relaxed">
        Sí, nos quedan 12 unidades del modelo azul. ¿Te reservo una?
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#8A8A8A]">
        <CheckIcon />
        Enviada sin intervención humana
      </div>
    </div>
  );
}

function SheetRowCard() {
  return (
    <div className="w-full sm:w-[210px] rounded-2xl border border-[#ECECEC] bg-white p-5 text-left shrink-0">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold text-[#999999] uppercase tracking-wide">
          Cobros · Sheets
        </span>
        <span className="text-[10px] font-bold text-[#E14A28] bg-[#FFF1EC] px-2 py-0.5 rounded-full shrink-0">
          Vence hoy
        </span>
      </div>
      <div className="text-[13px] font-semibold mb-1">Gimnasio Fit+</div>
      <div className="text-[12px] text-[#777777] mb-3">Cuota mensual · $8.500</div>
      <div className="space-y-1.5">
        <div className="h-1.5 rounded-full bg-[#F0F0F0] w-full" />
        <div className="h-1.5 rounded-full bg-[#F0F0F0] w-3/5" />
      </div>
    </div>
  );
}

function WhatsAppCard() {
  return (
    <div className="w-full sm:w-[210px] rounded-2xl bg-[#111B14] p-5 text-left shrink-0">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
        <span className="text-[11px] font-semibold text-[#9FE0B4] uppercase tracking-wide">
          WhatsApp automático
        </span>
      </div>
      <p className="text-[13px] text-white leading-relaxed">
        Hola! Tu cuota de $8.500 vence hoy. Pagá acá 👉 link.com/pagar
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#8FBE9E]">
        <CheckIcon className="text-[#25D366]" />
        Cobrado y actualizado en Sheets
      </div>
    </div>
  );
}

type Slide = {
  id: string;
  tabLabel: string;
  context: string;
  render: () => ReactNode;
};

const slides: Slide[] = [
  {
    id: "soporte",
    tabLabel: "Soporte por email",
    context: "soporte@tuempresa.com",
    render: () => (
      <>
        <EmailCard />
        <Connector />
        <IconNode icon="brain" label="La IA analiza el mensaje" delay="0s" />
        <Connector />
        <IconNode icon="database" label="Consulta tus datos" delay="0.6s" />
        <Connector />
        <ResponseCard />
      </>
    ),
  },
  {
    id: "cobros",
    tabLabel: "Cobros pendientes",
    context: "Recordatorios de pago",
    render: () => (
      <>
        <SheetRowCard />
        <Connector />
        <IconNode icon="brain" label="Arma el recordatorio" delay="0s" />
        <Connector />
        <IconNode icon="send" label="Envía por WhatsApp" delay="0.6s" />
        <Connector />
        <WhatsAppCard />
      </>
    ),
  },
];

export default function WorkflowDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active, paused]);

  const slide = slides[active];

  return (
    <div
      className="w-full max-w-[1000px] rounded-[24px] border border-[#ECECEC] bg-white shadow-[0_24px_64px_-12px_rgba(17,17,17,0.12)] overflow-hidden text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-brand" />
          </span>
          <span className="text-[13px] font-semibold text-[#555555]">
            Ejemplos, en vivo
          </span>
        </div>
        <span className="hidden sm:block text-[12px] font-mono text-[#AAAAAA]">
          {slide.context}
        </span>
      </div>

      <div className="p-6 sm:p-10">
        <div
          key={slide.id}
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          {slide.render()}
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 pb-6 px-6">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(i)}
            aria-current={i === active}
            className={`relative pb-2 text-[13px] font-semibold transition-colors ${
              i === active
                ? "text-[#111111]"
                : "text-[#AAAAAA] hover:text-[#777777]"
            }`}
          >
            {s.tabLabel}
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#ECECEC] rounded-full overflow-hidden">
              {i === active && (
                <span
                  key={active}
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                  className="absolute inset-0 bg-brand origin-left animate-tab-drain"
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
