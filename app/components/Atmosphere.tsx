/**
 * "Atmósfera Neexia" — the brand's own backdrop for the calm redesign.
 * A warm mesh gradient (peach / amber / cream / dusty rose) built from a few
 * slowly drifting blurred blobs, the Neexia X mark as a diffuse light source,
 * and a film-grain overlay. Pure CSS, no imagery.
 *
 * Renders as an absolutely positioned layer: the parent must be `relative`
 * and clip it (`overflow-hidden` + rounded corners when used inside a card).
 */

type Variant = "dawn" | "soft" | "dusk";

type Blob = {
  color: string;
  /** center, as % of the layer */
  x: number;
  y: number;
  /** diameter, as % of the layer width */
  size: number;
  opacity: number;
  anim: string;
};

const PALETTES: Record<Variant, { base: string; blobs: Blob[]; mark: number }> = {
  dawn: {
    base: "linear-gradient(180deg, #f3ede6 0%, #f7e2cd 38%, #f6c79c 70%, #f0a676 100%)",
    blobs: [
      { color: "#f4cfdc", x: 84, y: 10, size: 60, opacity: 0.7, anim: "animate-atmo-c" },
      { color: "#fff7ec", x: 48, y: 30, size: 55, opacity: 0.95, anim: "animate-atmo-a" },
      { color: "#ffbd59", x: 22, y: 78, size: 70, opacity: 0.7, anim: "animate-atmo-b" },
      { color: "#ff8336", x: 82, y: 92, size: 62, opacity: 0.5, anim: "animate-atmo-a" },
    ],
    mark: 0.55,
  },
  soft: {
    base: "linear-gradient(160deg, #f6f0e9 0%, #f6e1cb 55%, #f2c6a0 100%)",
    blobs: [
      { color: "#fff8ef", x: 30, y: 25, size: 70, opacity: 0.9, anim: "animate-atmo-a" },
      { color: "#f4d2dc", x: 90, y: 20, size: 55, opacity: 0.55, anim: "animate-atmo-c" },
      { color: "#ffbd59", x: 70, y: 90, size: 65, opacity: 0.55, anim: "animate-atmo-b" },
    ],
    mark: 0.4,
  },
  dusk: {
    base: "linear-gradient(180deg, #f2d9c4 0%, #f2b383 45%, #e98a5a 80%, #d9693f 100%)",
    blobs: [
      { color: "#fff1df", x: 50, y: 18, size: 60, opacity: 0.85, anim: "animate-atmo-a" },
      { color: "#f0c1cf", x: 12, y: 30, size: 50, opacity: 0.6, anim: "animate-atmo-c" },
      { color: "#ffbd59", x: 75, y: 60, size: 60, opacity: 0.7, anim: "animate-atmo-b" },
      { color: "#e14a28", x: 20, y: 100, size: 70, opacity: 0.45, anim: "animate-atmo-a" },
    ],
    mark: 0.5,
  },
};

export default function Atmosphere({
  variant = "dawn",
  mark = true,
  className = "",
}: {
  variant?: Variant;
  /** Show the blurred X mark light source. */
  mark?: boolean;
  className?: string;
}) {
  const p = PALETTES[variant];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ background: p.base }}
    >
      {p.blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.anim}`}
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}%`,
            aspectRatio: "1",
            marginLeft: `-${b.size / 2}%`,
            marginTop: `-${b.size / 2}%`,
            opacity: b.opacity,
            background: `radial-gradient(circle at center, ${b.color} 0%, ${b.color}00 68%)`,
          }}
        />
      ))}
      {mark && (
        // Blur lives on the wrapper: CSS applies `filter` before `mask` on the
        // same element, which would leave the X's edges crisp.
        <div
          className="absolute right-[-6%] top-[8%] w-[46%] max-w-[620px] aspect-[425/452] blur-[40px] animate-atmo-c"
          style={{ opacity: p.mark }}
        >
          <div
            className="x-mark w-full h-full"
            style={{ background: "linear-gradient(160deg, #fff6e6 0%, #ffd08a 45%, #ff9a52 100%)" }}
          />
        </div>
      )}
      <div className="grain absolute inset-0" />
    </div>
  );
}
