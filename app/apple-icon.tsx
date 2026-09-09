import { brandMarkImage } from "@/app/lib/brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS ignores transparency and rounds the corners itself — opaque white with
// padding gives a clean home-screen tile.
export default function AppleIcon() {
  return brandMarkImage({ size: 180, background: "#ffffff", scale: 0.66 });
}
