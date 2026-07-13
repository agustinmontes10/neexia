export const SITE_URL = "https://neexia.com.ar";
export const SITE_NAME = "Neexia";

export const WHATSAPP_NUMBER = "5492983697357";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
