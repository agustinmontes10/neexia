import type { ServiceIconShape } from "@/app/lib/landing-data";
import Atmosphere from "./Atmosphere";
import ServiceIcon from "./ServiceIcon";

type Canvas = { w: number; h: number };

// AutomationVisual/AgentsVisual are authored against a fixed-size canvas
// (see CANVAS below) but the container itself is responsive (w-full,
// capped by max-w). Positions/lengths are expressed as percentages of the
// canvas so the diagram scales and stays centered instead of overflowing
// its box on narrow mobile widths, where the container renders well under
// the canvas's design width.
function Node({
  x,
  y,
  canvas,
  size,
  filled,
  pulse,
  delay = "0s",
  icon,
}: {
  x: number;
  y: number;
  canvas: Canvas;
  size: number;
  filled?: boolean;
  pulse?: boolean;
  delay?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(x / canvas.w) * 100}%`,
        top: `${(y / canvas.h) * 100}%`,
        width: size,
        height: size,
      }}
    >
      {/* The pulse is a filled disc *behind* the (opaque) node that scales out
          and fades — the visible part is the same ring an animated box-shadow
          spread would draw, but transform/opacity run on the compositor
          instead of repainting every frame. --pulse-scale = (node + 2 × the
          old 11px spread, measured from the padding box) / node. */}
      {pulse && (
        <span
          className="absolute inset-0 rounded-full bg-brand-light animate-ring-pulse"
          style={
            { animationDelay: delay, "--pulse-scale": (size + 22) / size } as React.CSSProperties
          }
        />
      )}
      <div
        className={`absolute inset-0 rounded-full flex items-center justify-center text-brand ${
          filled ? "bg-brand" : "bg-white border border-[#efe4da] shadow-[0_6px_16px_-8px_rgba(120,60,20,0.35)]"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}

function Link({
  x,
  y,
  canvas,
  length,
  angle,
  delay = "0s",
}: {
  x: number;
  y: number;
  canvas: Canvas;
  length: number;
  angle: number;
  delay?: string;
}) {
  return (
    <div
      className="absolute h-[2px] bg-[#ddd5ca] origin-left"
      style={{
        left: `${(x / canvas.w) * 100}%`,
        top: `${(y / canvas.h) * 100}%`,
        width: `${(length / canvas.w) * 100}%`,
        transform: `rotate(${angle}deg)`,
      }}
    >
      {/* The wrapper spans the whole link and slides by its own width
          (translateX(100%)), carrying the dot from start to end on the
          compositor — animating `left` forced a layout every frame. */}
      <span className="absolute inset-0 animate-flow-dot-x" style={{ animationDelay: delay }}>
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand" />
      </span>
    </div>
  );
}

function DiagnosticoVisual() {
  const lines = ["92%", "70%", "84%", "55%"];
  return (
    <div className="relative w-full max-w-[260px] mx-auto rounded-2xl border border-line bg-white p-6 overflow-hidden shadow-[0_18px_40px_-24px_rgba(120,60,20,0.35)]">
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
      <span className="pointer-events-none absolute inset-0 animate-flow-dot-y">
        <span className="absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-transparent via-brand/10 to-transparent" />
      </span>
    </div>
  );
}

function AutomationVisual() {
  const canvas = { w: 300, h: 170 };
  return (
    <div className="relative w-full max-w-[300px] mx-auto aspect-[300/170]">
      <Link canvas={canvas} x={30} y={130} length={113} angle={-45} delay="0s" />
      <Link canvas={canvas} x={110} y={50} length={106} angle={41} delay="0.4s" />
      <Link canvas={canvas} x={190} y={120} length={100} angle={-37} delay="0.8s" />
      <Node canvas={canvas} x={30} y={130} size={20} pulse delay="0s" />
      <Node canvas={canvas} x={110} y={50} size={16} />
      <Node canvas={canvas} x={190} y={120} size={22} pulse delay="0.6s" />
      <Node canvas={canvas} x={270} y={60} size={16} filled />
    </div>
  );
}

function AgentsVisual() {
  const canvas = { w: 300, h: 180 };
  return (
    <div className="relative w-full max-w-[300px] mx-auto aspect-[300/180]">
      <Link canvas={canvas} x={40} y={40} length={121} angle={24} delay="0s" />
      <Link canvas={canvas} x={260} y={40} length={121} angle={156} delay="0.5s" />
      <Link canvas={canvas} x={150} y={160} length={70} angle={-90} delay="1s" />
      <Node canvas={canvas} x={40} y={40} size={16} filled />
      <Node canvas={canvas} x={260} y={40} size={16} filled />
      <Node canvas={canvas} x={150} y={160} size={16} filled />
      <Node
        canvas={canvas}
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
    <div className="w-full max-w-[260px] mx-auto rounded-2xl border border-line bg-white p-6 flex flex-col gap-3 shadow-[0_18px_40px_-24px_rgba(120,60,20,0.35)]">
      <SkeletonBubble align="left" widths={["100px", "90px"]} delay="0s" />
      <SkeletonBubble align="right" widths={["100px"]} dark delay="0.2s" />
      <SkeletonBubble align="left" widths={["100px", "110px"]} delay="0.4s" />
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
      <div className="animate-web-resize rounded-xl border border-line bg-white shadow-[0_18px_40px_-20px_rgba(120,60,20,0.35)] overflow-hidden">
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

export default function ServiceVisual({
  icon,
  bare = false,
}: {
  icon: ServiceIconShape;
  /** Skip the default framed box (e.g. when the visual sits on an <Atmosphere />). */
  bare?: boolean;
}) {
  const visual = (
    <>
      {icon === "diagnostic" && <DiagnosticoVisual />}
      {icon === "automation" && <AutomationVisual />}
      {icon === "agents" && <AgentsVisual />}
      {icon === "chat" && <ChatVisual />}
      {icon === "web" && <WebVisual />}
    </>
  );
  if (bare) return <div className="w-full flex items-center justify-center">{visual}</div>;
  return (
    <div className="relative w-full min-h-[280px] sm:min-h-[320px] rounded-[24px] overflow-hidden flex items-center justify-center p-6 sm:p-10">
      <Atmosphere variant="soft" mark={false} />
      <div className="relative w-full">{visual}</div>
    </div>
  );
}
