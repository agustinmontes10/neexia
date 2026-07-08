export type ServiceIconShape = "circle" | "square" | "triangle" | "diamond" | "ring";

export type Service = {
  icon: ServiceIconShape;
  num: string;
  title: string;
  desc: string;
  features: string[];
};

export type Step = {
  n: string;
  title: string;
  desc: string;
};

export type CaseStudy = {
  metric: string;
  metricLabel: string;
  quote: string;
  name: string;
  role: string;
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
    icon: "circle",
    num: "01",
    title: "Análisis y diagnóstico",
    desc: "Relevamos tus procesos y detectamos dónde la IA puede generar más impacto y ahorro.",
    features: ["Relevamiento de procesos", "Plan de acción priorizado"],
  },
  {
    icon: "square",
    num: "02",
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas conectando tus herramientas con flujos inteligentes.",
    features: ["Integración de sistemas", "Flujos sin intervención manual"],
  },
  {
    icon: "triangle",
    num: "03",
    title: "Agentes de IA",
    desc: "Agentes autónomos que ejecutan tareas complejas dentro de tu operación diaria.",
    features: ["Toma de decisiones automática", "Disponibles todo el día"],
  },
  {
    icon: "diamond",
    num: "04",
    title: "Chatbots conversacionales",
    desc: "Atención al cliente 24/7 con bots que entienden y resuelven de verdad.",
    features: ["Respuestas naturales", "Atención 24/7 sin esperas"],
  },
  {
    icon: "ring",
    num: "05",
    title: "Desarrollo web",
    desc: "Sitios y plataformas a medida, rápidos y preparados para integrar IA.",
    features: ["Diseño a medida", "Listo para integrar IA"],
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
    metric: "-40%",
    metricLabel: "tiempo administrativo",
    quote: "Automatizamos la carga de pedidos y liberamos horas del equipo cada semana.",
    name: "Cliente",
    role: "Retail local",
  },
  {
    metric: "+65%",
    metricLabel: "consultas resueltas",
    quote: "El chatbot atiende la mayoría de las consultas sin intervención humana.",
    name: "Cliente",
    role: "E-commerce",
  },
  {
    metric: "3x",
    metricLabel: "más leads calificados",
    quote: "El agente de IA prioriza leads y nuestro equipo comercial cierra más rápido.",
    name: "Cliente",
    role: "Startup B2B",
  },
];
