"use client";

import Image from "next/image";
import type { CaseVisualShape } from "@/app/lib/landing-data";

type StepIconName = "clock" | "sparkle" | "mail" | "camera";

function StepIcon({ name }: { name: StepIconName }) {
  switch (name) {
    case "clock":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[18px] h-[18px]"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8.2" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
          <path d="M9.94 15.5a2 2 0 0 0-1.44-1.44l-6.13-1.58a.5.5 0 0 1 0-.96l6.13-1.58a2 2 0 0 0 1.44-1.44l1.58-6.13a.5.5 0 0 1 .96 0l1.58 6.13a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[18px] h-[18px]"
          aria-hidden="true"
        >
          <rect x="3" y="5.5" width="18" height="13" rx="2.3" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "camera":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[18px] h-[18px]"
          aria-hidden="true"
        >
          <rect x="3.5" y="5.5" width="17" height="14" rx="4" />
          <circle cx="12" cy="12.3" r="3.4" />
          <circle cx="16.2" cy="8.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

function WorkflowNode({ icon, label }: { icon: StepIconName; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 w-16 shrink-0">
      <div className="w-9 h-9 rounded-full bg-[#FFF1EC] text-brand flex items-center justify-center animate-ring-pulse">
        <StepIcon name={icon} />
      </div>
      <div className="text-[10px] font-medium text-[#777777] text-center leading-tight">
        {label}
      </div>
    </div>
  );
}

function WorkflowConnector({ delay }: { delay: string }) {
  return (
    <div className="relative self-start mt-[18px] h-[2px] flex-1 min-w-[16px] bg-[#ECECEC] shrink-0">
      <span
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand animate-flow-dot-x"
        style={{ animationDelay: delay }}
      />
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="flex items-start w-full">
      <WorkflowNode icon="clock" label="Cada mañana" />
      <WorkflowConnector delay="0s" />
      <WorkflowNode icon="sparkle" label="Genera el posteo con IA" />
      <WorkflowConnector delay="0.45s" />
      <WorkflowNode icon="mail" label="Aprobación por Gmail" />
      <WorkflowConnector delay="0.9s" />
      <WorkflowNode icon="camera" label="Publica en Instagram" />
    </div>
  );
}

function LeadRow({
  label,
  width,
  highlight,
  active,
  delay,
}: {
  label: string;
  width: string;
  highlight?: boolean;
  active: boolean;
  delay: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-all duration-500 ease-out ${
        highlight ? "border-brand/30 bg-brand/5" : "border-[#ECECEC] bg-white"
      } ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
      style={{ transitionDelay: delay }}
    >
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${highlight ? "bg-brand" : "bg-[#DDDDDD]"}`}
      />
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-[11px] font-medium text-[#666666] truncate">{label}</span>
        <div className="h-1.5 rounded-full bg-[#F0F0F0]" style={{ width }} />
      </div>
      {highlight && (
        <span className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 animate-ring-pulse">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
            aria-hidden="true"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </span>
      )}
    </div>
  );
}

function AgentHubVisual({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[240px]">
      <LeadRow label="Lead calificado" width="75%" highlight active={active} delay="0ms" />
      <LeadRow label="Nuevo contacto" width="55%" active={active} delay="150ms" />
      <LeadRow label="En seguimiento" width="45%" active={active} delay="300ms" />
    </div>
  );
}

function WebPreviewVisual({ image }: { image?: string }) {
  return (
    <div className="w-full max-w-[280px] rounded-xl border border-[#ECECEC] bg-white shadow-[0_12px_32px_-14px_rgba(17,17,17,0.15)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD7C2] shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFE7DA] shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#F0F0F0] shrink-0" />
        <div className="flex-1 h-4 rounded-full bg-white border border-[#F0F0F0]" />
      </div>
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
        {image ? (
          <Image
            src={image}
            alt="Vista previa del sitio de la agencia de viajes"
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFF1EC] to-[#FAFAFA] text-[#C9A38F]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
              aria-hidden="true"
            >
              <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.4" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseVisual({
  type,
  image,
  active,
}: {
  type: CaseVisualShape;
  image?: string;
  active: boolean;
}) {
  switch (type) {
    case "workflow":
      return <WorkflowVisual />;
    case "agentHub":
      return <AgentHubVisual active={active} />;
    case "webPreview":
      return <WebPreviewVisual image={image} />;
  }
}
