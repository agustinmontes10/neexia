import { brandMarkImage } from "@/app/lib/brand-mark";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return brandMarkImage({ size: 512, scale: 0.82 });
}
