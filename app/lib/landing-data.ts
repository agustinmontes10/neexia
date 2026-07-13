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
  metric: string;
  metricLabel: string;
  quote: string;
  name: string;
  role: string;
  /** Detail page content below — placeholder copy, needs a real writing pass. */
  longDescription: string;
  highlights: string[];
  /** Slugs into `services`, rendered as links on the detail page. */
  relatedServices: string[];
};

export const logos: { name: string }[] = [
  { name: "cliente 1" },
  { name: "cliente 2" },
  { name: "cliente 3" },
  { name: "cliente 4" },
  { name: "cliente 5" },
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
    slug: "automatizacion-instagram",
    title: "Automatización de contenido para Instagram",
    visual: "workflow",
    metric: "-5h",
    metricLabel: "por semana en creación de contenido",
    quote: "Ahora el contenido se genera y publica solo; nosotros solo aprobamos desde el mail.",
    name: "Cliente",
    role: "Marca de indumentaria",
    longDescription:
      "Una marca de indumentaria necesitaba publicar contenido en Instagram todas las semanas, pero el proceso manual de crear piezas, escribir copy y programar publicaciones les consumía horas que no tenían. Diseñamos un flujo que genera el contenido automáticamente a partir de su catálogo y calendario, y lo deja listo para aprobar por mail antes de publicarse.",
    highlights: [
      "Automatizamos la generación de piezas de contenido a partir del catálogo",
      "Armamos un flujo de aprobación simple por mail, sin herramientas nuevas que aprender",
      "Conectamos la publicación directa a Instagram una vez aprobado el contenido",
    ],
    relatedServices: ["automatizacion"],
  },
  {
    slug: "agente-ia-leads",
    title: "Agente de IA para seguimiento de leads",
    visual: "agentHub",
    metric: "3x",
    metricLabel: "más leads contactados a tiempo",
    quote: "El agente prioriza los leads calientes y avisa al vendedor en el momento justo.",
    name: "Cliente",
    role: "Inmobiliaria",
    longDescription:
      "Una inmobiliaria recibía leads desde varios canales, pero muchos se enfriaban antes de que un vendedor llegara a contactarlos. Implementamos un agente de IA que califica cada lead automáticamente, prioriza los más calientes y avisa al vendedor correcto en el momento justo para no perder la oportunidad.",
    highlights: [
      "Centralizamos los leads de todos los canales en un solo flujo",
      "El agente califica y prioriza cada lead según su probabilidad de cierre",
      "Notificaciones automáticas al vendedor indicado en tiempo real",
    ],
    relatedServices: ["agentes-ia"],
  },
  {
    slug: "web-agencia-viajes",
    title: "Sitio web para agencia de viajes",
    visual: "webPreview",
    image: "/casos/travelAgency-web.png",
    metric: "+45%",
    metricLabel: "reservas generadas desde la web",
    quote: "El sitio nuevo carga rápido y convierte visitas en reservas reales.",
    name: "Cliente",
    role: "Agencia de viajes",
    longDescription:
      "Una agencia de viajes tenía un sitio lento y desactualizado que perdía visitas antes de que llegaran a reservar. Rediseñamos y desarrollamos una web nueva, rápida y pensada para convertir, con un proceso de consulta y reserva simplificado de principio a fin.",
    highlights: [
      "Rediseñamos la experiencia de búsqueda y reserva de punta a punta",
      "Optimizamos la velocidad de carga en todas las páginas",
      "Simplificamos el formulario de consulta para reducir abandonos",
    ],
    relatedServices: ["desarrollo-web"],
  },
];
