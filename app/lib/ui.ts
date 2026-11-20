/**
 * Shared interaction classes, so the same kind of control behaves the same
 * everywhere. Hovers follow the "calm" rules (see CLAUDE.md, animation
 * performance): only translate/opacity plus colour changes are transitioned,
 * nothing moves layout, and the hover shadow lives on a `::before` layer whose
 * opacity is faded instead of animating `box-shadow`. Tailwind v4's `hover:`
 * only applies on devices that can hover.
 */

/** Keyboard focus ring used across the site. */
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2";

/**
 * Pill button base: a 2px lift and a soft shadow fading in underneath, on hover
 * and on keyboard focus. Pressing settles it back down. Each variant sets its
 * colours and the shadow tint (`before:shadow-*`). Class names are written out
 * in full (no interpolated fragments) so Tailwind's scanner finds them.
 */
const pillButton = [
  "relative inline-flex items-center justify-center rounded-full font-medium",
  "transition-[translate,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
  "hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:translate-y-0",
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
  "before:opacity-0 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.16,1,0.3,1)]",
  "hover:before:opacity-100 focus-visible:before:opacity-100",
  focusRing,
].join(" ");

/** Dark primary button ("Hablar por WhatsApp"). */
export const btnInk = `${pillButton} bg-ink text-white hover:bg-black before:shadow-[0_12px_24px_-12px_rgba(22,22,22,0.55)]`;

/** Brand (orange) button ("Hablemos"). `brand-light` is the darker hover on purpose. */
export const btnBrand = `${pillButton} bg-brand text-ink hover:bg-brand-light before:shadow-[0_12px_24px_-12px_rgba(225,74,40,0.55)]`;

/** Frosted secondary button over an atmosphere ("Ver servicios"). */
export const btnGlass = `${pillButton} glass text-ink hover:bg-white/70 before:shadow-[0_14px_28px_-14px_rgba(120,60,20,0.45)]`;

/** White outlined chip linking somewhere related (e.g. "Servicios aplicados"). */
export const btnChip = `${pillButton} gap-1.5 bg-white text-ink border border-line hover:border-ink/20 before:shadow-[0_10px_20px_-12px_rgba(60,40,20,0.35)]`;

/** "Volver a …" link on detail pages; pair it with `backArrow` on its icon. */
export const backLink = `group inline-flex items-center gap-2 text-[14px] text-body hover:text-ink transition-colors duration-300 ${focusRing}`;

/** Arrow inside `backLink`: nudges back by 2px on hover / keyboard focus. */
export const backArrow =
  "transition-[translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5";

/** Arrow after a text link (`group` on the link): nudges forward by 2px. */
export const forwardArrow =
  "inline-block transition-[translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5";
