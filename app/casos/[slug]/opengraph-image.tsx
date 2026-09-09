import { notFound } from "next/navigation";
import { cases } from "@/app/lib/landing-data";
import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/app/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = OG_ALT;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = cases.find((c) => c.slug === slug);
  if (!caseStudy) notFound();
  return ogImage({ eyebrow: `Caso · ${caseStudy.role}`, title: caseStudy.title });
}
