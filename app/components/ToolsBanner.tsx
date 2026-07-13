import { useId } from "react";

type ToolIconName =
  | "gmail"
  | "whatsapp"
  | "excel"
  | "calendar"
  | "chatgpt"
  | "instagram";

/**
 * Real brand marks sourced from the Iconify "logos"/"skill-icons"/"vscode-icons"
 * collections (extracted at authoring time, no runtime dependency on those packages).
 */
const ICONS: Record<ToolIconName, { viewBox: string; body: string }> = {
  gmail: {
    viewBox: "0 0 256 193",
    body: '<path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>',
  },
  whatsapp: {
    viewBox: "0 0 256 258",
    body: '<defs><linearGradient id="tb-wa-1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38"/><stop offset="100%" stop-color="#60d669"/></linearGradient><linearGradient id="tb-wa-2" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><path fill="url(#tb-wa-1)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#tb-wa-2)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/>',
  },
  excel: {
    viewBox: "0 0 32 32",
    body: '<defs><linearGradient id="tb-xl-1" x1="4.494" x2="13.832" y1="-2092.086" y2="-2075.914" gradientTransform="translate(0 2100)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#18884f"/><stop offset=".5" stop-color="#117e43"/><stop offset="1" stop-color="#0b6631"/></linearGradient></defs><path fill="#185c37" d="M19.581 15.35L8.512 13.4v14.409A1.19 1.19 0 0 0 9.705 29h19.1A1.19 1.19 0 0 0 30 27.809V22.5Z"/><path fill="#21a366" d="M19.581 3H9.705a1.19 1.19 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"/><path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z"/><path d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2" opacity=".1"/><path d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191" opacity=".2"/><path d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191" opacity=".2"/><path d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191" opacity=".2"/><path fill="url(#tb-xl-1)" d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.19 1.19 0 0 1 2 21.959V10.041A1.19 1.19 0 0 1 3.194 8.85"/><path fill="#fff" d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017q.123-.281.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.4 2.4 0 0 1 9.2 16.8h-.024a1.7 1.7 0 0 1-.168.351l-1.493 2.722Z"/><path fill="#33c481" d="M28.806 3h-9.225v6.5H30V4.191A1.19 1.19 0 0 0 28.806 3"/><path fill="#107c41" d="M19.581 16H30v6.5H19.581Z"/>',
  },
  calendar: {
    viewBox: "0 0 256 256",
    body: '<path fill="#fff" d="M195.368 60.632H60.632v134.736h134.736z"/><path fill="#ea4335" d="M195.368 256L256 195.368l-30.316-5.172l-30.316 5.172l-5.533 27.73z"/><path fill="#188038" d="M0 195.368v40.421C0 246.956 9.044 256 20.21 256h40.422l6.225-30.316l-6.225-30.316l-33.033-5.172z"/><path fill="#1967d2" d="M256 60.632V20.21C256 9.044 246.956 0 235.79 0h-40.422q-5.532 22.554-5.533 33.196q0 10.641 5.533 27.436q20.115 5.76 30.316 5.76T256 60.631"/><path fill="#fbbc04" d="M256 60.632h-60.632v134.736H256z"/><path fill="#34a853" d="M195.368 195.368H60.632V256h134.736z"/><path fill="#4285f4" d="M195.368 0H20.211C9.044 0 0 9.044 0 20.21v175.158h60.632V60.632h134.736z"/><path fill="#4285f4" d="M88.27 165.154c-5.036-3.402-8.523-8.37-10.426-14.94l11.689-4.816q1.59 6.063 5.558 9.398c2.627 2.223 5.827 3.318 9.566 3.318q5.734 0 9.852-3.487c2.746-2.324 4.127-5.288 4.127-8.875q0-5.508-4.345-8.994c-2.897-2.324-6.535-3.486-10.88-3.486h-6.754v-11.57h6.063q5.608 0 9.448-3.033c2.56-2.02 3.84-4.783 3.84-8.303c0-3.132-1.145-5.625-3.435-7.494c-2.29-1.87-5.188-2.813-8.708-2.813c-3.436 0-6.164.91-8.185 2.745a16.1 16.1 0 0 0-4.413 6.754l-11.57-4.817c1.532-4.345 4.345-8.185 8.471-11.503s9.398-4.985 15.798-4.985c4.733 0 8.994.91 12.767 2.745c3.772 1.836 6.736 4.379 8.875 7.613c2.14 3.25 3.2 6.888 3.2 10.93c0 4.126-.993 7.613-2.98 10.476s-4.43 5.052-7.327 6.585v.69a22.25 22.25 0 0 1 9.398 7.327c2.442 3.284 3.672 7.208 3.672 11.79c0 4.58-1.163 8.673-3.487 12.26c-2.324 3.588-5.54 6.417-9.617 8.472c-4.092 2.055-8.69 3.1-13.793 3.1c-5.912.016-11.369-1.685-16.405-5.087m71.797-58.005l-12.833 9.28l-6.417-9.734l23.023-16.607h8.825v78.333h-12.598z"/>',
  },
  chatgpt: {
    viewBox: "0 0 256 260",
    body: '<path fill="#000" d="M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z"/>',
  },
  instagram: {
    viewBox: "0 0 256 256",
    body: '<g fill="none"><rect width="256" height="256" fill="url(#tb-ig-1)" rx="60"/><rect width="256" height="256" fill="url(#tb-ig-2)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" /><defs><radialGradient id="tb-ig-1" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="tb-ig-2" cx="0" cy="0" r="1" gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g>',
  },
};

function ToolIcon({ name }: { name: ToolIconName }) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const { viewBox, body } = ICONS[name];
  // The same icon can render more than once at a time (desktop diagram +
  // mobile fallback both live in the DOM), so gradient ids must be scoped
  // per instance or duplicate ids make the browser pick the wrong fill.
  const scopedBody = body.replace(/tb-(wa|xl|ig)-(\d)/g, `${rawId}-$1-$2`);
  return (
    <svg
      viewBox={viewBox}
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: scopedBody }}
    />
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
      <path d="M9.94 15.5a2 2 0 0 0-1.44-1.44l-6.13-1.58a.5.5 0 0 1 0-.96l6.13-1.58a2 2 0 0 0 1.44-1.44l1.58-6.13a.5.5 0 0 1 .96 0l1.58 6.13a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z" />
    </svg>
  );
}

type NodeSpec = {
  icon: ToolIconName;
  x: number;
  y: number;
  delay: string;
};

// Coordinate system the whole desktop diagram is authored in — see VIEWBOX below.
// Sized to the nodes' actual vertical extent (y 52-160, ±ICON_R/HUB_R) so the
// box doesn't carry a tall dead zone below the diagram — it previously used
// VB_H=320, twice what the content needed, which read as stray whitespace
// before the Servicios section.
const VB_W = 800;
const VB_H = 200;
// Half the tool icon's real rendered size (w-14 = 56px) converted into
// viewBox units at the diagram's reference width (max-w-[900px] / 800 vb
// units ≈ 1.125px per unit) — matching this closely is what makes each
// curve's start point land exactly on the icon's bottom edge.
const ICON_R = 25;
const HUB = { x: 400, y: 150 };
// Radius (in viewBox units) of the point where curves should touch the hub —
// kept a little under the hub's actual rendered radius so every line lands
// on (or just inside) its edge instead of stopping short of it.
const HUB_R = 36;

const leftNodes: NodeSpec[] = [
  { icon: "gmail", x: 54, y: 54, delay: "0s" },
  { icon: "whatsapp", x: 172, y: 160, delay: "0.08s" },
  { icon: "excel", x: 290, y: 66, delay: "0.16s" },
];

const rightNodes: NodeSpec[] = [
  { icon: "calendar", x: 510, y: 70, delay: "0.24s" },
  { icon: "chatgpt", x: 628, y: 160, delay: "0.32s" },
  { icon: "instagram", x: 746, y: 52, delay: "0.4s" },
];

// One entry angle per node (degrees from straight up, negative = left of
// the hub), spread across its top arc so all six curves land ON the hub's
// edge — evenly spaced instead of a fixed x offset, which for the outer
// nodes previously landed past the edge of the circle and never touched it.
const ENTRY_ANGLES = [-58, -35, -12, 12, 35, 58];

function hubEntryPoint(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: HUB.x + HUB_R * Math.sin(rad), y: HUB.y - HUB_R * Math.cos(rad) };
}

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

function DesktopToolNode({ x, y, delay, icon }: NodeSpec) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / VB_W) * 100}%`, top: `${(y / VB_H) * 100}%` }}
    >
      <div
        className="animate-tool-node-in w-14 h-14 rounded-2xl overflow-hidden bg-white p-1.5 shadow-[0_6px_18px_rgba(17,17,17,0.12)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
        style={{ animationDelay: delay }}
      >
        <ToolIcon name={icon} />
      </div>
    </div>
  );
}

function DesktopHub() {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(HUB.x / VB_W) * 100}%`, top: `${(HUB.y / VB_H) * 100}%` }}
    >
      <div className="animate-tool-node-in relative w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center shadow-[0_12px_28px_-6px_rgba(255,131,54,0.5)]">
        <span className="absolute inset-0 rounded-full animate-ring-pulse" />
        <SparkleIcon />
      </div>
    </div>
  );
}

function DesktopDiagram() {
  const allNodes = [...leftNodes, ...rightNodes];
  return (
    <div className="hidden sm:block relative w-full max-w-[900px] mx-auto aspect-[4/1]">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 w-full h-full">
        {allNodes.map((n, i) => {
          const entry = hubEntryPoint(ENTRY_ANGLES[i]);
          const d = curvePath(n.x, n.y + ICON_R, entry.x, entry.y);
          // The dot travels the same curve in reverse so it visibly
          // originates at the hub and flows out to each tool.
          const dotPath = curvePath(entry.x, entry.y, n.x, n.y + ICON_R);
          return (
            <g key={n.icon}>
              <path d={d} stroke="#ECECEC" strokeWidth="2" fill="none" />
              <circle r="4" style={{ fill: "var(--color-brand)" }}>
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin={n.delay}
                  path={dotPath}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {leftNodes.map((n) => (
        <DesktopToolNode key={n.icon} {...n} />
      ))}
      <DesktopHub />
      {rightNodes.map((n) => (
        <DesktopToolNode key={n.icon} {...n} />
      ))}
    </div>
  );
}

// Mobile-only circular layout: same six icons as the desktop diagram, spaced
// evenly (60° apart) around the hub instead of desktop's asymmetric curved
// spine — a wheel reads better than a tall stack at phone width.
const MOBILE_VB = 300;
const MOBILE_CENTER = 150;
const MOBILE_HUB_R = 34;
const MOBILE_NODE_R = 112;
const MOBILE_ICON_R = 26;

function mobileNodePoint(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: MOBILE_CENTER + radius * Math.sin(rad),
    y: MOBILE_CENTER - radius * Math.cos(rad),
  };
}

function MobileCircleNode({ x, y, delay, icon }: { x: number; y: number; delay: string; icon: ToolIconName }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / MOBILE_VB) * 100}%`, top: `${(y / MOBILE_VB) * 100}%` }}
    >
      <div
        className="animate-tool-node-in w-12 h-12 rounded-2xl overflow-hidden bg-white p-1.5 shadow-[0_6px_18px_rgba(17,17,17,0.12)] ring-1 ring-black/5"
        style={{ animationDelay: delay }}
      >
        <ToolIcon name={icon} />
      </div>
    </div>
  );
}

function MobileCircleHub() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="animate-tool-node-in relative w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center shadow-[0_12px_28px_-6px_rgba(255,131,54,0.5)]">
        <span className="absolute inset-0 rounded-full animate-ring-pulse" />
        <SparkleIcon />
      </div>
    </div>
  );
}

function MobileCircle() {
  const allTools = [...leftNodes, ...rightNodes];
  return (
    <div className="sm:hidden relative w-full max-w-[260px] aspect-square mx-auto">
      <svg viewBox={`0 0 ${MOBILE_VB} ${MOBILE_VB}`} className="absolute inset-0 w-full h-full">
        {allTools.map((n, i) => {
          const angle = i * 60;
          const inner = mobileNodePoint(angle, MOBILE_HUB_R);
          const outer = mobileNodePoint(angle, MOBILE_NODE_R - MOBILE_ICON_R);
          const d = `M ${inner.x} ${inner.y} L ${outer.x} ${outer.y}`;
          return (
            <g key={n.icon}>
              <path d={d} stroke="#ECECEC" strokeWidth="2" fill="none" />
              <circle r="4" style={{ fill: "var(--color-brand)" }}>
                <animateMotion dur="2.4s" repeatCount="indefinite" begin={n.delay} path={d} />
              </circle>
            </g>
          );
        })}
      </svg>

      {allTools.map((n, i) => {
        const pos = mobileNodePoint(i * 60, MOBILE_NODE_R);
        return <MobileCircleNode key={n.icon} x={pos.x} y={pos.y} delay={n.delay} icon={n.icon} />;
      })}
      <MobileCircleHub />
    </div>
  );
}

export default function ToolsBanner() {
  return (
    <div className="w-full">
      <div className="text-center mb-10 sm:mb-14">
        <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.01em] mb-2">
          Conectamos las herramientas
        </h3>
        <p className="text-[15px] text-[#666666] max-w-[440px] mx-auto leading-relaxed">
          Integramos tus apps favoritas para automatizar tus procesos de punta
          a punta.
        </p>
      </div>

      <DesktopDiagram />
      <MobileCircle />
    </div>
  );
}
