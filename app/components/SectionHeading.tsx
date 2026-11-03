import type { ReactNode } from "react";

/**
 * Two-tone heading used across the calm redesign: a quiet gray first line
 * followed by the ink-colored statement line. Light weight, tight tracking.
 */
export default function SectionHeading({
  muted,
  strong,
  as: Tag = "h2",
  className = "",
  size = "lg",
}: {
  muted: ReactNode;
  strong: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "lg" | "xl";
}) {
  const sizes =
    size === "xl"
      ? "text-[38px] sm:text-[52px] lg:text-[60px]"
      : "text-[32px] sm:text-[44px] lg:text-[52px]";
  return (
    <Tag
      className={`${sizes} font-normal leading-[1.06] tracking-[-0.035em] text-balance ${className}`}
    >
      <span className="block text-mute">{muted}</span>
      <span className="block text-ink">{strong}</span>
    </Tag>
  );
}
