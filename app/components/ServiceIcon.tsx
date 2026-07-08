import type { ServiceIconShape } from "@/app/lib/landing-data";

export default function ServiceIcon({ shape }: { shape: ServiceIconShape }) {
  switch (shape) {
    case "circle":
      return <span className="w-5 h-5 rounded-full bg-brand block" />;
    case "square":
      return <span className="w-[19px] h-[19px] bg-brand block" />;
    case "triangle":
      return (
        <span className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-brand block" />
      );
    case "diamond":
      return <span className="w-[18px] h-[18px] bg-brand block rotate-45" />;
    case "ring":
      return (
        <span className="w-5 h-5 rounded-full border-[3px] border-brand block" />
      );
  }
}
