import { brandMarkImage } from "@/app/lib/brand-mark";

// `maskable` manifest icon: Android crops it to a circle/squircle, so the mark
// sits small on an opaque dark field with a wide safe zone.
export const dynamic = "force-static";

export function GET() {
  return brandMarkImage({ size: 512, background: "#0A0A0A", scale: 0.56 });
}
