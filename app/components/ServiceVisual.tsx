import type { ServiceIconShape } from "@/app/lib/landing-data";
import ServiceIcon from "./ServiceIcon";

function Node({
  x,
  y,
  size,
  filled,
  pulse,
  delay = "0s",
  icon,
}: {
  x: number;
  y: number;
  size: number;
  filled?: boolean;
  pulse?: boolean;
  delay?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-brand ${
        filled ? "bg-brand" : "bg-[#FFF1EC]"
      }`}
      style={{ left: x, top: y, width: size, height: size }}
    >
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-ring-pulse"
          style={{ animationDelay: delay }}
        />
      )}
      {icon}
    </div>
  );
}

function Link({
  x,
  y,
  length,
  angle,
  delay = "0s",
}: {
  x: number;
  y: number;
  length: number;
  angle: number;
  delay?: string;
}) {
  return (
    <div
      className="absolute h-[2px] bg-[#ECECEC] origin-left"
      style={{ left: x, top: y, width: length, transform: `rotate(${angle}deg)` }}
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand animate-flow-dot-x"
        style={{ animationDelay: delay }}
      />
    </div>
  );
}

function DiagnosticoVisual() {
  const lines = ["92%", "70%", "84%", "55%"];
  return (
    <div className="relative w-full max-w-[260px] mx-auto rounded-2xl border border-[#ECECEC] bg-white p-6 overflow-hidden">
      <div className="flex items-center gap-1.5 mb-5">
        <span className="w-2 h-2 rounded-full bg-[#FFD7C2]" />
        <span className="w-2 h-2 rounded-full bg-[#FFE7DA]" />
        <span className="text-[11px] font-semibold text-[#999999] uppercase tracking-wide ml-1.5">
          Reporte
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {lines.map((w, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span
              className="w-3.5 h-3.5 rounded-full border-2 border-brand shrink-0 animate-check-wave"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <div className="h-2 rounded-full bg-[#F0F0F0]" style={{ width: w }} />
          </div>
        ))}
      </div>
      <span className="pointer-events-none absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-brand/10 to-transparent animate-flow-dot-y" />
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative w-full max-w-[300px] h-[170px] mx-auto">
      <Link x={30} y={130} length={113} angle={-45} delay="0s" />
      <Link x={110} y={50} length={106} angle={41} delay="0.4s" />
      <Link x={190} y={120} length={100} angle={-37} delay="0.8s" />
      <Node x={30} y={130} size={20} pulse delay="0s" />
      <Node x={110} y={50} size={16} />
      <Node x={190} y={120} size={22} pulse delay="0.6s" />
      <Node x={270} y={60} size={16} filled />
    </div>
  );
}

function AgentsVisual() {
  return (
    <div className="relative w-full max-w-[300px] h-[180px] mx-auto">
      <Link x={40} y={40} length={121} angle={24} delay="0s" />
      <Link x={260} y={40} length={121} angle={156} delay="0.5s" />
      <Link x={150} y={160} length={70} angle={-90} delay="1s" />
      <Node x={40} y={40} size={16} filled />
      <Node x={260} y={40} size={16} filled />
      <Node x={150} y={160} size={16} filled />
      <Node
        x={150}
        y={90}
        size={56}
        pulse
        icon={<ServiceIcon shape="agents" />}
      />
    </div>
  );
}

function SkeletonBubble({
  align,
  widths,
  dark,
  delay,
}: {
  align: "left" | "right";
  widths: string[];
  dark?: boolean;
  delay: string;
}) {
  return (
    <div className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-2xl px-4 py-3 flex flex-col gap-1.5 max-w-[75%] ${
          dark ? "bg-[#111111]" : "bg-[#F5F5F5]"
        }`}
      >
        {widths.map((w, i) => (
          <div
            key={i}
            className={`h-2 rounded-full animate-pulse ${dark ? "bg-[#333333]" : "bg-[#E4E4E4]"}`}
            style={{ width: w, animationDelay: delay }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="w-full max-w-[260px] mx-auto rounded-2xl border border-[#ECECEC] bg-white p-6 flex flex-col gap-3">
      <SkeletonBubble align="left" widths={["140px", "90px"]} delay="0s" />
      <SkeletonBubble align="right" widths={["100px"]} dark delay="0.2s" />
      <SkeletonBubble align="left" widths={["160px", "110px"]} delay="0.4s" />
      <div className="flex items-center gap-1.5 pl-1 pt-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#CCCCCC] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="animate-web-resize rounded-xl border border-[#ECECEC] bg-white shadow-[0_12px_32px_-12px_rgba(17,17,17,0.15)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#F0F0F0] bg-[#FAFAFA]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD7C2] shrink-0" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE7DA] shrink-0" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0F0F0] shrink-0" />
          <div className="flex-1" />
          <div className="relative w-8 h-4 shrink-0">
            <div className="animate-web-nav-out absolute inset-0 flex items-center justify-end gap-1">
              <span className="w-2.5 h-[2px] bg-[#DDDDDD] rounded-full" />
              <span className="w-2.5 h-[2px] bg-[#DDDDDD] rounded-full" />
              <span className="w-2.5 h-[2px] bg-[#DDDDDD] rounded-full" />
            </div>
            <div className="animate-web-nav-in absolute inset-0 flex flex-col items-end justify-center gap-[3px]">
              <span className="w-3 h-[2px] bg-[#DDDDDD] rounded-full" />
              <span className="w-3 h-[2px] bg-[#DDDDDD] rounded-full" />
              <span className="w-3 h-[2px] bg-[#DDDDDD] rounded-full" />
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-wrap gap-2">
          <span className="h-10 flex-1 min-w-[70px] rounded-lg bg-[#FFF1EC]" />
          <span className="h-10 flex-1 min-w-[70px] rounded-lg bg-[#F5F5F5]" />
          <span className="h-10 flex-1 min-w-[70px] rounded-lg bg-[#F5F5F5]" />
        </div>
      </div>
    </div>
  );
}

export default function ServiceVisual({ icon }: { icon: ServiceIconShape }) {
  return (
    <div className="w-full min-h-[280px] sm:min-h-[320px] rounded-[24px] border border-[#ECECEC] bg-[#FAFAFA] flex items-center justify-center p-6 sm:p-10">
      {icon === "diagnostic" && <DiagnosticoVisual />}
      {icon === "automation" && <AutomationVisual />}
      {icon === "agents" && <AgentsVisual />}
      {icon === "chat" && <ChatVisual />}
      {icon === "web" && <WebVisual />}
    </div>
  );
}
