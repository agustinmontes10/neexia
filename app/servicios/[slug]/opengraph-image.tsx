import { notFound } from "next/navigation";
import { services } from "@/app/lib/landing-data";
import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/app/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = OG_ALT;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return ogImage({ eyebrow: `Servicio ${service.num}`, title: service.title });
}
