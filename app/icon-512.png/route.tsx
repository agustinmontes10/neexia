import { brandMarkImage } from "@/app/lib/brand-mark";

// Web-manifest icon. Emitted as a static file at build time.
export const dynamic = "force-static";

export function GET() {
  return brandMarkImage({ size: 512, scale: 0.82 });
}
