export type ServiceIconShape = "diagnostic" | "automation" | "agents" | "chat" | "web";

export type Service = {
  icon: ServiceIconShape;
  slug: string;
  num: string;
  tabLabel: string;
  title: string;
  desc: string;
  features: string[];
  /** Detail page content below — placeholder copy, needs a real writing pass. */
  longDescription: string;
  benefits: string[];
  idealFor: string[];
  /** SEO overrides for `/servicios/[slug]` — fall back to title/desc/longDescription when absent. */
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

export type Step = {
  n: string;
  title: string;
  desc: string;
};

export type CaseVisualShape = "workflow" | "agentHub" | "webPreview";

export type CaseStudy = {
  slug: string;
  title: string;
  visual: CaseVisualShape;
  /** Only used by the "webPreview" visual — real screenshot of the project. */
  image?: string;
  /**
   * Big animated result number (e.g. "-5h", "3x", "+45%"). Omit when there's
   * no verified figure yet — pair `resultHeadline`/`resultCaption` instead.
   * Never invent a number here; only real, confirmed results.
   */
  metric?: string;
  metricLabel?: string;
  /** Shown in place of metric/metricLabel when there's no hard number yet — a short qualitative result, not an animated count. */
  resultHeadline?: string;
  resultCaption?: string;
  quote: string;
  /** Business type shown under the quote, e.g. "Agencia de viajes" — no client names/photos used. */
  name: string;
  /** Service category shown as the badge, e.g. "Desarrollo web". */
  role: string;
  /** Detail page content below — placeholder copy, needs a real writing pass. */
  longDescription: string;
  highlights: string[];
  /** Slugs into `services`, rendered as links on the detail page. */
  relatedServices: string[];
  /** SEO overrides for `/casos/[slug]` — fall back to title/longDescription when absent. */
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

export type Stat = {
  /** Parsed by AnimatedMetric — keep the shape `[+-]?number + suffix` (e.g. "-5h", "3x", "24/7"). */
  value: string;
  label: string;
};

/** Results strip under the hero — sourced from real `cases` metrics, shown early for credibility. */
// Nota: -5h y 3x salían de automatizacion-instagram y agente-ia-leads, dos
// casos que ya no existen con esas cifras (ver `cases` más abajo) — se
// sacaron de acá para no mostrar un número sin caso real que lo respalde.
// Si se reactiva Resultados.tsx, sumar stats nuevas solo con datos reales.
export const stats: Stat[] = [
  { value: "+45%", label: "reservas generadas desde la web" },
  { value: "24/7", label: "atención automática, sin esperas" },
];

export const services: Service[] = [
  {
    icon: "diagnostic",
    slug: "diagnostico",
    num: "01",
    tabLabel: "Diagnóstico",
    title: "Análisis y diagnóstico",
    desc: "Relevamos tus procesos y detectamos dónde la IA puede generar más impacto y ahorro.",
    features: ["Relevamiento de procesos", "Plan de acción priorizado"],
    longDescription:
      "Empezamos por relevar cómo funciona hoy tu operación: qué tareas consumen más tiempo, dónde se pierden datos y qué procesos dependen de trabajo manual repetitivo. Con ese diagnóstico armamos un plan de acción priorizado por impacto y facilidad de implementación, para que sepas exactamente por dónde empezar a automatizar con IA.",
    benefits: [
      "Identificás en semanas, no meses, dónde te conviene invertir en IA",
      "Priorización clara por impacto y esfuerzo de implementación",
      "Detección de cuellos de botella que hoy pasan desapercibidos",
      "Base objetiva para decidir, sin apostar a ciegas",
    ],
    idealFor: [
      "Pymes que quieren empezar con IA pero no saben por dónde",
      "Equipos con procesos manuales que nadie terminó de mapear",
      "Negocios que ya automatizaron algo y buscan el próximo paso",
    ],
    seo: {
      title: "Diagnóstico de IA y automatización de procesos",
      description:
        "Relevamos tus procesos y detectamos dónde la IA puede generar más ahorro e impacto, y armamos un plan de acción priorizado por dónde empezar.",
      keywords: [
        "diagnóstico de automatización",
        "consultoría de IA",
        "relevamiento de procesos",
        "IA para pymes",
        "oportunidades de automatización",
      ],
    },
  },
  {
    icon: "automation",
    slug: "automatizacion",
    num: "02",
    tabLabel: "Automatización",
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas conectando tus herramientas con flujos inteligentes.",
    features: ["Integración de sistemas", "Flujos sin intervención manual"],
    longDescription:
      "Conectamos las herramientas que ya usás — CRM, planillas, mail, WhatsApp — en flujos que corren solos, sin que nadie tenga que copiar datos de un lado a otro. Diseñamos cada automatización a medida de tu proceso real, no de una plantilla genérica, y la dejamos funcionando de punta a punta.",
    benefits: [
      "Menos horas perdidas en tareas repetitivas y manuales",
      "Menos errores por carga manual de datos",
      "Tus herramientas actuales conectadas entre sí, sin migrar de sistema",
      "Procesos que corren solos, incluso fuera de horario",
    ],
    idealFor: [
      "Equipos que cargan los mismos datos en varias herramientas",
      "Negocios con procesos que dependen de una sola persona",
      "Empresas que ya tienen las herramientas pero no están conectadas",
    ],
    seo: {
      title: "Automatización de procesos con IA",
      description:
        "Automatizamos tareas repetitivas conectando tu CRM, planillas, mail y WhatsApp en flujos que corren solos, a medida de tu proceso real.",
      keywords: [
        "automatización de procesos",
        "integración de sistemas",
        "flujos de trabajo automáticos",
        "automatizar WhatsApp",
        "n8n",
      ],
    },
  },
  {
    icon: "agents",
    slug: "agentes-ia",
    num: "03",
    tabLabel: "Agentes de IA",
    title: "Agentes de IA",
    desc: "Agentes autónomos que ejecutan tareas complejas dentro de tu operación diaria.",
    features: ["Toma de decisiones automática", "Disponibles todo el día"],
    longDescription:
      "Diseñamos e implementamos agentes de IA que no solo responden, sino que ejecutan: califican leads, arman propuestas, actualizan tu CRM o disparan acciones según reglas que definimos juntos. Cada agente se entrena con el contexto de tu negocio y queda disponible las 24 horas, sin supervisión constante.",
    benefits: [
      "Tareas complejas resueltas sin intervención humana constante",
      "Disponibilidad las 24 horas, todos los días",
      "Decisiones consistentes, basadas en las reglas de tu negocio",
      "Se integra con las herramientas que ya usa tu equipo",
    ],
    idealFor: [
      "Equipos comerciales que no dan abasto con el volumen de leads",
      "Negocios con procesos de decisión repetibles y bien definidos",
      "Empresas que buscan escalar operación sin sumar headcount",
    ],
    seo: {
      title: "Agentes de IA a medida para tu operación",
      description:
        "Agentes de IA que ejecutan tareas complejas —califican leads, arman propuestas, actualizan tu CRM— según las reglas de tu negocio y 24/7.",
      keywords: [
        "agentes de IA",
        "agentes autónomos",
        "IA para ventas",
        "calificación de leads con IA",
        "automatización con agentes",
      ],
    },
  },
  {
    icon: "chat",
    slug: "chatbots",
    num: "04",
    tabLabel: "Chatbots",
    title: "Chatbots conversacionales",
    desc: "Atención al cliente 24/7 con bots que entienden y resuelven de verdad.",
    features: ["Respuestas naturales", "Atención 24/7 sin esperas"],
    longDescription:
      "Implementamos chatbots conversacionales entrenados con la información real de tu negocio, que entienden el lenguaje natural de tus clientes y resuelven consultas sin sonar a script. Se integran a WhatsApp, tu web o Instagram, y derivan a una persona solo cuando realmente hace falta.",
    benefits: [
      "Respuestas inmediatas, sin tiempos de espera",
      "Atención consistente los 365 días del año",
      "Menos consultas repetitivas para tu equipo humano",
      "Conversaciones naturales, no menús rígidos de opciones",
    ],
    idealFor: [
      "Negocios con alto volumen de consultas repetidas",
      "Empresas que atienden por WhatsApp o redes fuera de horario",
      "Equipos de soporte que quieren enfocarse en casos complejos",
    ],
    seo: {
      title: "Chatbots con IA para atención al cliente 24/7",
      description:
        "Chatbots entrenados con la información de tu negocio para atender por WhatsApp, web e Instagram 24/7 y derivar a una persona solo si hace falta.",
      keywords: [
        "chatbot con IA",
        "chatbot para WhatsApp",
        "atención al cliente automática",
        "asistente virtual",
        "chatbot conversacional",
      ],
    },
  },
  {
    icon: "web",
    slug: "desarrollo-web",
    num: "05",
    tabLabel: "Desarrollo web",
    title: "Desarrollo web",
    desc: "Sitios y plataformas a medida, rápidos y preparados para integrar IA.",
    features: ["Diseño a medida", "Listo para integrar IA"],
    longDescription:
      "Desarrollamos sitios y plataformas a medida, pensados desde el inicio para integrar IA: formularios inteligentes, chat, automatizaciones o paneles con datos en tiempo real. Priorizamos velocidad de carga y una experiencia simple, sin templates genéricos que después hay que rehacer.",
    benefits: [
      "Sitio rápido, optimizado para conversión desde el día uno",
      "Arquitectura lista para sumar IA sin rehacer todo",
      "Diseño a medida de tu marca, no una plantilla genérica",
      "Panel simple para que tu equipo actualice contenido sin depender de vos",
    ],
    idealFor: [
      "Negocios que necesitan renovar una web lenta o desactualizada",
      "Empresas que planean sumar IA a su sitio a futuro",
      "Marcas que buscan una web a medida, no una plantilla",
    ],
    seo: {
      title: "Desarrollo web a medida, listo para integrar IA",
      description:
        "Sitios y plataformas a medida, rápidos y pensados desde el inicio para integrar IA: formularios inteligentes, chat, automatizaciones y paneles.",
      keywords: [
        "desarrollo web a medida",
        "sitios web rápidos",
        "desarrollo web Next.js",
        "web con IA integrada",
        "diseño web para pymes",
      ],
    },
  },
];

export const steps: Step[] = [
  { n: "01", title: "Diagnóstico", desc: "Analizamos tu negocio y detectamos oportunidades concretas." },
  { n: "02", title: "Propuesta", desc: "Diseñamos una solución a medida, con alcance y tiempos claros." },
  { n: "03", title: "Implementación", desc: "Desarrollamos e integramos la solución en tu operación." },
  { n: "04", title: "Acompañamiento", desc: "Medimos resultados y optimizamos de forma continua." },
];

export const cases: CaseStudy[] = [
  {
    slug: "web-agencia-viajes",
    title: "Sitio web para agencia de viajes",
    visual: "webPreview",
    image: "/casos/mtturismoweb-preview.png",
    metric: "+45%",
    metricLabel: "reservas generadas desde la web",
    quote: "El sitio nuevo carga rápido y convierte visitas en reservas reales.",
    name: "Agencia de viajes",
    role: "Desarrollo web",
    longDescription:
      "Una agencia de viajes tenía un sitio lento y desactualizado que perdía visitas antes de que llegaran a reservar. Rediseñamos y desarrollamos una web nueva, rápida y pensada para convertir, con un proceso de consulta y reserva simplificado de principio a fin, un panel de administrador para manejar los paquetes sin depender de nosotros, y una base de SEO y GEO para aparecer tanto en Google como en las respuestas de IAs como ChatGPT o Claude.",
    highlights: [
      "Rediseñamos la experiencia de búsqueda y reserva de punta a punta",
      "Optimizamos la velocidad de carga en todas las páginas",
      "Simplificamos el formulario de consulta para reducir abandonos",
      "Sumamos un panel de administrador para gestionar los paquetes sin depender de nosotros",
      "Trabajamos SEO y GEO para aparecer en Google y en respuestas de IAs como ChatGPT o Claude",
    ],
    relatedServices: ["desarrollo-web"],
    seo: {
      title: "Caso: sitio web para agencia de viajes",
      description:
        "Cómo una agencia de viajes aumentó un 45% las reservas online con un sitio nuevo, rápido y con el proceso de consulta y reserva simplificado.",
      keywords: [
        "desarrollo web agencia de viajes",
        "web que convierte",
        "caso de éxito de desarrollo web",
      ],
    },
  },
  {
    slug: "agente-ia-agencia-viajes",
    title: "Agente de IA para agencia de viajes",
    visual: "agentHub",
    resultHeadline: "Responde con el tono del equipo, todo el día",
    resultCaption: "consultas atendidas con la info real de los paquetes",
    quote:
      "El agente responde con nuestro tono de siempre y solo nos avisa cuando hace falta que entremos nosotros.",
    name: "Agencia de viajes",
    role: "Agentes de IA",
    longDescription:
      "Una agencia de viajes recibía consultas todo el día por distintos canales y quería que la primera respuesta fuera inmediata sin perder su forma de atender. Construimos un agente de IA que responde con un tono personalizado, igual al del equipo humano, y accede a los paquetes publicados en el sitio para contestar con información real y actualizada. Cuando la consulta lo requiere, deriva a una persona. Todo queda centralizado en un inbox propio, donde el equipo puede ver los mensajes, asignarlos entre sí y tomar la conversación directamente desde WhatsApp Business.",
    highlights: [
      "Agente de IA que responde con el tono y el estilo del equipo humano",
      "Acceso a los paquetes publicados en el sitio para responder con información real",
      "Deriva a una persona del equipo cuando la consulta lo requiere",
      "Inbox propio con asignación de conversaciones y toma directa desde WhatsApp Business",
    ],
    relatedServices: ["agentes-ia", "chatbots"],
    seo: {
      title: "Caso: agente de IA para agencia de viajes",
      description:
        "Cómo una agencia de viajes atiende consultas todo el día con un agente de IA que usa su tono, responde con los paquetes reales del sitio y deriva a una persona si hace falta.",
      keywords: [
        "agente de IA para turismo",
        "chatbot para agencia de viajes",
        "atención al cliente con IA",
        "IA para WhatsApp Business",
      ],
    },
  },
  {
    slug: "agente-ia-inmobiliaria",
    title: "Agente de IA para inmobiliaria",
    visual: "agentHub",
    resultHeadline: "Responde con datos reales de cada propiedad",
    resultCaption: "y actualiza el CRM en cada conversación",
    quote:
      "El agente responde con la información real de cada propiedad y nosotros solo entramos cuando hace falta cerrar.",
    name: "Inmobiliaria",
    role: "Agentes de IA",
    longDescription:
      "Una inmobiliaria necesitaba responder consultas con información precisa de cada propiedad, no respuestas genéricas armadas al toque. Construimos un agente de IA que consulta una base de datos con la documentación real de cada inmueble para responder con datos concretos, y deriva a una persona cuando la consulta lo requiere. El agente además se conecta con el CRM de la inmobiliaria, así cada conversación queda registrada y el seguimiento de leads no depende de que alguien lo cargue a mano.",
    highlights: [
      "Agente de IA que responde consultas con información real de cada propiedad",
      "Respuestas basadas en documentación real del inmueble, no genéricas",
      "Deriva a una persona del equipo cuando la consulta lo requiere",
      "Integración con el CRM para el seguimiento de leads sin carga manual",
    ],
    relatedServices: ["agentes-ia", "automatizacion"],
    seo: {
      title: "Caso: agente de IA para inmobiliaria",
      description:
        "Cómo un agente de IA responde consultas de una inmobiliaria con datos reales de cada propiedad, deriva a una persona si hace falta y actualiza el CRM solo.",
      keywords: [
        "agente de IA para inmobiliaria",
        "chatbot inmobiliario",
        "IA con base de datos de propiedades",
        "CRM inmobiliario automatizado",
      ],
    },
  },
];

export type Faq = { q: string; a: string };

/** FAQ general del home — también se emite como FAQPage JSON-LD. */
export const faqs: Faq[] = [
  {
    q: "¿Cuánto cuesta un proyecto de IA con Neexia?",
    a: "Depende del alcance. Empezamos con un diagnóstico para dimensionar el proyecto y te pasamos una propuesta con precio cerrado antes de arrancar, sin sorpresas después.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados?",
    a: "La primera automatización suele quedar funcionando en pocas semanas, no meses. A partir de ahí medimos y ajustamos de forma continua.",
  },
  {
    q: "¿Qué es un agente de IA y en qué se diferencia de un chatbot?",
    a: "Un chatbot responde. Un agente además ejecuta: califica un lead, arma una propuesta, actualiza tu CRM o dispara una acción según reglas que definimos juntos.",
  },
  {
    q: "¿Tengo que cambiar las herramientas que ya uso?",
    a: "No. Nos integramos con tu CRM, tus planillas, tu mail y WhatsApp. La idea es conectar lo que ya tenés, no migrar todo a un sistema nuevo.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos?",
    a: "No. Nos encargamos del desarrollo y la integración de punta a punta, y te dejamos algo simple de operar para tu equipo.",
  },
  {
    q: "¿Qué pasa con los datos de mi negocio y de mis clientes?",
    a: "Quedan en tus sistemas. No compartimos información con terceros y las automatizaciones corren sobre tus propias herramientas.",
  },
  {
    q: "¿Trabajan con negocios fuera de Argentina?",
    a: "Sí. Estamos en Argentina y trabajamos de forma remota con pymes y startups de toda Latinoamérica.",
  },
];
