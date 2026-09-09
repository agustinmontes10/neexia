import { cases, services } from "@/app/lib/landing-data";
import { industries } from "@/app/lib/industries-data";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/app/lib/site";

// Served at /llms.txt — a plain-text map of the site for LLMs / generative
// engines. Built from landing-data so it never drifts from the real pages.
// https://llmstxt.org/
export const dynamic = "force-static";

export function GET() {
  const serviceLines = services
    .map(
      (s) =>
        `- [${s.title}](${SITE_URL}/servicios/${s.slug}): ${s.desc}`
    )
    .join("\n");

  const caseLines = cases
    .map(
      (c) =>
        `- [${c.title}](${SITE_URL}/casos/${c.slug}): ${c.seo?.description ?? c.longDescription}`
    )
    .join("\n");

  const industryLines = industries
    .map(
      (i) =>
        `- [${i.label}](${SITE_URL}/industrias/${i.slug}): ${i.seo.description}`
    )
    .join("\n");

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

Neexia diseña e implementa soluciones de inteligencia artificial a medida para
pymes, startups y negocios locales: relevamiento y diagnóstico de procesos,
automatización de tareas repetitivas, agentes de IA autónomos, chatbots
conversacionales y desarrollo web preparado para integrar IA. El foco está en
resultados concretos —horas de trabajo ahorradas, más leads contactados a
tiempo, más ventas desde la web— y no en la tecnología por sí misma.

## Servicios
${serviceLines}

## IA por industria
${industryLines}

## Casos de éxito
${caseLines}

## Contacto
- Sitio: ${SITE_URL}
- Email: ${CONTACT_EMAIL}
- WhatsApp / teléfono: ${PHONE_DISPLAY}
- Base: Adolfo Gonzales Chaves, Buenos Aires, Argentina — trabajo remoto en toda Latinoamérica
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
