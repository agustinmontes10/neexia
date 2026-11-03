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
  inline = false,
}: {
  muted: ReactNode;
  strong: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "lg" | "xl";
  /** Keep both tones on the same line (wrapping naturally) instead of stacking them. */
  inline?: boolean;
}) {
  const part = inline ? "inline" : "block";
  const sizes =
    size === "xl"
      ? "text-[38px] sm:text-[52px] lg:text-[60px]"
      : "text-[32px] sm:text-[44px] lg:text-[52px]";
  return (
    <Tag
      className={`${sizes} font-normal leading-[1.06] tracking-[-0.035em] text-balance ${className}`}
    >
      <span className={`${part} text-mute`}>{muted}</span>
      {inline && " "}
      <span className={`${part} text-ink`}>{strong}</span>
    </Tag>
  );
}
