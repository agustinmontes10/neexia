export const SITE_URL = "https://neexia.com.ar";
export const SITE_NAME = "Neexia";

/** Category label used across metadata, JSON-LD and llms.txt — keep it consistent. */
export const SITE_TAGLINE = "Agencia de IA para pymes y startups";

/**
 * Canonical company description. Reused in the root `<meta description>`, the
 * OpenGraph/Twitter description, the Organization JSON-LD, the manifest and
 * llms.txt so every surface tells the same story. Kept at ~150 chars so it
 * doesn't get truncated as a meta description (Bing/Google flag >160).
 */
export const SITE_DESCRIPTION =
  "Agencia de IA que ayuda a pymes y startups a automatizar procesos, atender mejor a sus clientes y decidir con mejores datos. Argentina y Latinoamérica.";

export const CONTACT_EMAIL = "contact.neexia@gmail.com";

export const WHATSAPP_NUMBER = "5492983697357";
/** E.164 for `tel:` links and JSON-LD `telephone`. */
export const PHONE_E164 = "+5492983697357";
export const PHONE_DISPLAY = "+54 9 2983 697357";

/** Head office — used for NAP consistency (footer, JSON-LD, Google Business Profile). */
export const ADDRESS = {
  locality: "Adolfo Gonzales Chaves",
  region: "Buenos Aires",
  country: "AR",
} as const;

/** Where the service is offered — broader than the head office on purpose. */
export const AREA_SERVED = ["Argentina", "Latinoamérica"] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/neexia",
  instagram: "https://www.instagram.com/neexia.ai",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
