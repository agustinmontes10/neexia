type ToolIconName =
  | "mail"
  | "chat"
  | "sheet"
  | "calendar"
  | "hash"
  | "camera";

function ToolIcon({ name }: { name: ToolIconName }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "w-5 h-5",
  };
  switch (name) {
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 6.5 8 6.2 8-6.2" />
        </svg>
      );
    case "chat":
      return (
        <svg {...props}>
          <path d="M12 3.5a8.2 8.2 0 0 0-7.1 12.3L4 20.5l4.9-1.1A8.2 8.2 0 1 0 12 3.5Z" />
          <path d="M8.3 12h.01M12 12h.01M15.7 12h.01" strokeWidth="2.2" />
        </svg>
      );
    case "sheet":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9.5h18M9.5 4v16M15.5 9.5V20" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="4.5" width="18" height="16" rx="2" />
          <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        </svg>
      );
    case "hash":
      return (
        <svg {...props}>
          <path d="M9.5 3v18M14.5 3v18M3 8.5h18M3 15.5h18" />
        </svg>
      );
    case "camera":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

const tools: { name: string; icon: ToolIconName }[] = [
  { name: "Gmail", icon: "mail" },
  { name: "WhatsApp", icon: "chat" },
  { name: "Excel", icon: "sheet" },
  { name: "Calendar", icon: "calendar" },
  { name: "Slack", icon: "hash" },
  { name: "Instagram", icon: "camera" },
];

export default function ToolsBanner() {
  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <p className="text-center text-[13px] text-[#999999] font-medium mb-6">
        Conectamos las herramientas que usás para automatizar tus procesos
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex items-center gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-[14px] bg-white border border-[#ECECEC] flex items-center justify-center shrink-0 text-[#9A9A9A] shadow-[0_2px_8px_rgba(17,17,17,0.05)] transition-colors hover:text-brand hover:border-[#FFDCCB]">
                <ToolIcon name={tool.icon} />
              </div>
              <span className="text-[11px] text-[#999999] font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
