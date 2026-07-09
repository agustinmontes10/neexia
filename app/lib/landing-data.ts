export type ServiceIconShape = "diagnostic" | "automation" | "agents" | "chat" | "web";

export type Service = {
  icon: ServiceIconShape;
  num: string;
  tabLabel: string;
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
  image: string;
  avatar: string;
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
    icon: "diagnostic",
    num: "01",
    tabLabel: "Diagnóstico",
    title: "Análisis y diagnóstico",
    desc: "Relevamos tus procesos y detectamos dónde la IA puede generar más impacto y ahorro.",
    features: ["Relevamiento de procesos", "Plan de acción priorizado"],
  },
  {
    icon: "automation",
    num: "02",
    tabLabel: "Automatización",
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas conectando tus herramientas con flujos inteligentes.",
    features: ["Integración de sistemas", "Flujos sin intervención manual"],
  },
  {
    icon: "agents",
    num: "03",
    tabLabel: "Agentes de IA",
    title: "Agentes de IA",
    desc: "Agentes autónomos que ejecutan tareas complejas dentro de tu operación diaria.",
    features: ["Toma de decisiones automática", "Disponibles todo el día"],
  },
  {
    icon: "chat",
    num: "04",
    tabLabel: "Chatbots",
    title: "Chatbots conversacionales",
    desc: "Atención al cliente 24/7 con bots que entienden y resuelven de verdad.",
    features: ["Respuestas naturales", "Atención 24/7 sin esperas"],
  },
  {
    icon: "web",
    num: "05",
    tabLabel: "Desarrollo web",
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
    image: "/casos/proyecto-1.svg",
    avatar: "/casos/cliente-1.svg",
    metric: "-40%",
    metricLabel: "tiempo administrativo",
    quote: "Automatizamos la carga de pedidos y liberamos horas del equipo cada semana.",
    name: "Cliente",
    role: "Retail local",
  },
  {
    image: "/casos/proyecto-2.svg",
    avatar: "/casos/cliente-2.svg",
    metric: "+65%",
    metricLabel: "consultas resueltas",
    quote: "El chatbot atiende la mayoría de las consultas sin intervención humana.",
    name: "Cliente",
    role: "E-commerce",
  },
  {
    image: "/casos/proyecto-3.svg",
    avatar: "/casos/cliente-3.svg",
    metric: "3x",
    metricLabel: "más leads calificados",
    quote: "El agente de IA prioriza leads y nuestro equipo comercial cierra más rápido.",
    name: "Cliente",
    role: "Startup B2B",
  },
];
