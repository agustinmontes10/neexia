export type Faq = { q: string; a: string };

/**
 * Home FAQ — rendered by app/components/Faq.tsx and emitted as FAQPage JSON-LD
 * (see faqSchema in structured-data.ts). First-pass copy: review before launch.
 * Deliberately avoids promising prices or delivery times.
 */
export const faqs: Faq[] = [
  {
    q: "¿Qué hace exactamente Neexia?",
    a: "Somos una agencia de IA para pymes y startups. Detectamos dónde la inteligencia artificial te ahorra más tiempo y la implementamos: automatizaciones entre tus herramientas, agentes de IA, chatbots y sitios web preparados para integrar IA.",
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Vos nos contás cómo funciona tu negocio y nosotros nos ocupamos de la parte técnica. Te entregamos todo funcionando y te explicamos cómo usarlo en lenguaje simple.",
  },
  {
    q: "¿Tengo que cambiar las herramientas que ya uso?",
    a: "En la mayoría de los casos, no. Conectamos lo que ya usás —WhatsApp, mail, planillas, tu CRM— para que trabajen juntas, sin migrar de sistema.",
  },
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance de cada solución. Arrancamos con un diagnóstico gratuito y, a partir de ahí, te pasamos una propuesta a medida con alcance, tiempos y costo claros antes de empezar.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "Depende de qué automaticemos y de cuántas herramientas haya que integrar. Los tiempos quedan definidos en la propuesta, y priorizamos lo que antes te genere resultados.",
  },
  {
    q: "¿Qué pasa después de la implementación?",
    a: "No desaparecemos. Medimos los resultados, ajustamos lo que haga falta y te acompañamos para seguir optimizando a medida que tu negocio crece.",
  },
  {
    q: "¿Trabajan solo en Argentina?",
    a: "Estamos en Adolfo Gonzales Chaves, Buenos Aires, y trabajamos de forma remota con negocios de toda Argentina y Latinoamérica.",
  },
];
