// Contenido de las páginas por industria (/industrias/[slug]).
//
// Los "dolores" salen de mapear las preguntas del quiz por rubro en
// `diagnostico-data.ts` a lenguaje llano. NO se usan estadísticas de terceros
// sin fuente citable — la credibilidad la aportan las métricas reales de
// `cases` (landing-data.ts), referenciadas vía `relatedCase`.

export type IndustryFaq = { q: string; a: string };

export type IndustrySolution = { title: string; desc: string };

export type Industry = {
  /** Ruta: /industrias/[slug]. */
  slug: string;
  /** Nombre en plural para nav, cards e índice. */
  label: string;
  /** Nombre en singular para breadcrumbs y texto corrido. */
  shortLabel: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    /** H1 de la página. */
    title: string;
    /** 1-2 oraciones bajo el H1. */
    intro: string;
  };
  /** "Lo que suele pasar" — situación actual del rubro, en cualitativo. */
  pains: string[];
  /** "Qué podés automatizar con IA" — 3-4 soluciones concretas para el rubro. */
  solutions: IndustrySolution[];
  /** Línea de cierre cualitativa; suele referenciar el caso de `relatedCase`. */
  outcome: string;
  faq: IndustryFaq[];
  /** Slugs hacia `services` (landing-data.ts). */
  relatedServices: string[];
  /** Slug hacia `cases` (landing-data.ts). */
  relatedCase?: string;
};

export const industries: Industry[] = [
  {
    slug: "inmobiliarias",
    label: "Inmobiliarias",
    shortLabel: "inmobiliaria",
    seo: {
      title: "IA para inmobiliarias: no perder consultas ni leads",
      description:
        "Automatizá con IA la atención de consultas 24/7, el seguimiento de interesados y la publicación en portales. Para inmobiliarias en Argentina.",
      keywords: [
        "IA para inmobiliarias",
        "automatización inmobiliaria",
        "chatbot para inmobiliaria",
        "seguimiento de leads inmobiliaria",
        "CRM inmobiliario",
      ],
    },
    hero: {
      title: "IA para inmobiliarias que no quieren perder una operación",
      intro:
        "En el rubro inmobiliario la diferencia entre cerrar y no cerrar suele ser quién respondió primero. Automatizamos la atención y el seguimiento para que ninguna consulta se enfríe.",
    },
    pains: [
      "Las consultas entran por WhatsApp, portales, redes y teléfono, y las que llegan fuera de horario se pierden hasta el próximo día hábil.",
      "El historial de cada conversación vive en el celular de cada asesor, sin un lugar común.",
      "Cuando un interesado no responde al primer contacto, reinsistir depende de que alguien se acuerde.",
      "Cada propiedad se publica y se actualiza a mano en varios portales, uno por uno.",
      "Los reclamos de mantenimiento de inquilinos no tienen un canal definido y se mezclan con todo lo demás.",
    ],
    solutions: [
      {
        title: "Respuesta inmediata a consultas, 24/7",
        desc: "Un asistente contesta al instante en WhatsApp y en la web con la información de la propiedad, responde las preguntas típicas y agenda la visita, aunque sea un domingo a la noche.",
      },
      {
        title: "Seguimiento de interesados sin depender de la memoria",
        desc: "Un agente califica cada consulta según su probabilidad de cierre, prioriza las más calientes y le avisa al asesor correcto cuándo volver a escribir.",
      },
      {
        title: "Publicación y actualización centralizada",
        desc: "Cargás la propiedad una sola vez y se sincroniza a todos los portales; los cambios de precio y disponibilidad se propagan solos.",
      },
      {
        title: "Reclamos de inquilinos ordenados",
        desc: "Cada reclamo entra por un único canal, queda registrado con su estado y se asigna con un plazo claro.",
      },
    ],
    outcome:
      "En un caso real, una inmobiliaria triplicó los leads contactados a tiempo con un agente de IA que califica cada consulta y avisa al asesor en el momento justo.",
    faq: [
      {
        q: "¿Tengo que cambiar mi CRM (Tokko u otro)?",
        a: "No. Nos integramos con el CRM y las herramientas que ya usás; la idea es conectarlas, no reemplazarlas.",
      },
      {
        q: "¿El asistente puede derivar la consulta a un asesor?",
        a: "Sí. Responde lo repetitivo y deriva a una persona cuando la consulta se complica o el interesado lo pide, con todo el contexto de la conversación.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Empezamos con un diagnóstico corto y ponemos en marcha la primera automatización en pocas semanas, no meses.",
      },
      {
        q: "¿Sirve si soy una inmobiliaria chica o trabajo solo?",
        a: "Sí. Cuando el equipo es chico, no perder las consultas que entran fuera de horario es justamente donde más se nota el impacto.",
      },
      {
        q: "¿Qué pasa con los datos de mis clientes?",
        a: "Quedan en tus sistemas. No compartimos información con terceros y todo el flujo corre sobre tus propias herramientas.",
      },
    ],
    relatedServices: ["chatbots", "agentes-ia", "automatizacion"],
    relatedCase: "agente-ia-leads",
  },
  {
    slug: "estudios-contables",
    label: "Estudios contables y jurídicos",
    shortLabel: "estudio contable o jurídico",
    seo: {
      title: "IA para estudios contables y jurídicos",
      description:
        "Automatizá con IA el calendario de vencimientos, el pedido de documentación a clientes y las consultas repetitivas. Para estudios en Argentina.",
      keywords: [
        "IA para estudios contables",
        "automatización estudio jurídico",
        "recordatorios de vencimientos",
        "gestión de documentación de clientes",
        "IA para contadores",
      ],
    },
    hero: {
      title: "IA para estudios que no pueden permitirse un vencimiento fuera de término",
      intro:
        "En un estudio contable o jurídico, el costo de una presentación tardía no es solo la multa: es la confianza del cliente. Automatizamos los recordatorios, el pedido de documentación y las consultas repetitivas para que el equipo se enfoque en el trabajo profesional.",
    },
    pains: [
      "El calendario de vencimientos de todos los clientes se lleva en una planilla o en la cabeza de alguien.",
      "La documentación se le pide a cada cliente a mano, uno por uno, cada vez que se acerca un vencimiento.",
      "Cuando un cliente no manda lo que falta, el seguimiento depende de que alguien lo recuerde.",
      "El equipo pierde horas respondiendo las mismas consultas: cuándo vence tal cosa, si ya se presentó una declaración.",
      "Los picos de vencimientos superpuestos se descubren cuando ya están encima.",
    ],
    solutions: [
      {
        title: "Recordatorios automáticos de vencimientos",
        desc: "Cada cliente recibe el aviso de su vencimiento con la anticipación que definas, sin que nadie tenga que mandarlo a mano.",
      },
      {
        title: "Pedido y seguimiento de documentación",
        desc: "El sistema le pide la documentación al cliente, le reinsiste si no responde y avisa al equipo solo cuando falta algo.",
      },
      {
        title: "Asistente para consultas frecuentes",
        desc: "Responde al instante las preguntas típicas de los clientes sobre vencimientos y estados, y deriva al equipo lo que requiere criterio profesional.",
      },
      {
        title: "Tareas administrativas automatizadas",
        desc: "Carga de comprobantes, conciliaciones y reportes recurrentes, conectando las herramientas que ya usás.",
      },
    ],
    outcome:
      "El objetivo es que ningún vencimiento dependa de la memoria de una persona, y que el equipo dedique su tiempo al trabajo que factura, no a perseguir papeles.",
    faq: [
      {
        q: "¿Se integra con mi software de gestión (ONVIO, Colppy, etc.)?",
        a: "Sí. Trabajamos sobre las herramientas que ya usás; la idea es conectarlas, no migrar todo a un sistema nuevo.",
      },
      {
        q: "¿El asistente puede dar información sensible de un cliente?",
        a: "Responde solo lo que definas y con los permisos que configuremos; lo que requiere criterio profesional siempre pasa a una persona.",
      },
      {
        q: "¿Sirve para un estudio chico?",
        a: "Sí. Cuanto más chico el equipo, más pesa cada hora que hoy se va en tareas administrativas repetitivas.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Arrancamos con un diagnóstico corto y la primera automatización queda andando en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de mis clientes?",
        a: "Quedan en tus sistemas. No compartimos información con terceros.",
      },
    ],
    relatedServices: ["automatizacion", "agentes-ia", "chatbots"],
  },
  {
    slug: "seguros",
    label: "Brokers de seguros",
    shortLabel: "productora de seguros",
    seo: {
      title: "IA para brokers y productoras de seguros",
      description:
        "Automatizá con IA los avisos de renovación, el seguimiento de cobranza y las oportunidades de cross-selling en tu cartera. Para productores en Argentina.",
      keywords: [
        "IA para seguros",
        "automatización productora de seguros",
        "avisos de renovación de pólizas",
        "seguimiento de cobranza seguros",
        "cross-selling seguros",
      ],
    },
    hero: {
      title: "IA para que ninguna renovación se te escape",
      intro:
        "En una cartera de seguros, cada póliza que vence sin aviso es un cliente que puede renovar con la competencia. Automatizamos los avisos, la cobranza y la detección de oportunidades para que trabajes tu cartera completa, no solo lo urgente.",
    },
    pains: [
      "Los avisos de vencimiento de póliza dependen de que te acuerdes de cada cliente.",
      "El control de la cartera vive en una planilla, y actualizarla es trabajo manual.",
      "El seguimiento de cuotas vencidas se hace llamando o escribiendo uno por uno.",
      "No hay forma rápida de saber qué clientes tienen una sola cobertura y podrían necesitar otra.",
      "Cuando un cliente tiene un siniestro, el seguimiento del estado del reclamo se hace a pulmón.",
    ],
    solutions: [
      {
        title: "Avisos de renovación automáticos",
        desc: "Cada cliente recibe el aviso antes del vencimiento, con la anticipación que definas, sin que revises la cartera a mano.",
      },
      {
        title: "Seguimiento de cobranza",
        desc: "Recordatorios automáticos de cuotas a vencer y vencidas, con escalamiento a vos solo cuando hace falta.",
      },
      {
        title: "Detección de cross-selling",
        desc: "El sistema cruza tu cartera y te marca qué clientes tienen una sola cobertura y son candidatos a otra.",
      },
      {
        title: "Asistente para consultas y siniestros",
        desc: "Responde consultas frecuentes y le da al cliente el estado de su trámite, derivándote lo que requiere gestión.",
      },
    ],
    outcome:
      "La idea es simple: que trabajes tu cartera entera de forma proactiva, en vez de reaccionar solo cuando algo se prende fuego.",
    faq: [
      {
        q: "¿Se integra con mi software (NexoSmart, Figuro, etc.)?",
        a: "Sí, trabajamos sobre lo que ya usás.",
      },
      {
        q: "¿Los avisos salen con mi nombre o el de un bot?",
        a: "Con tu marca. El cliente siente que le escribís vos, no un sistema genérico.",
      },
      {
        q: "¿Sirve si tengo una cartera chica?",
        a: "Sí. Con cartera chica, perder una sola renovación por no avisar a tiempo ya se nota.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Diagnóstico corto y primera automatización en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de mis asegurados?",
        a: "Quedan en tus sistemas, sin compartirse con terceros.",
      },
    ],
    relatedServices: ["agentes-ia", "automatizacion", "chatbots"],
  },
  {
    slug: "gastronomia",
    label: "Gastronomía",
    shortLabel: "local gastronómico",
    seo: {
      title: "IA para restaurantes y locales gastronómicos",
      description:
        "Automatizá con IA los pedidos y reservas por WhatsApp e Instagram, los recordatorios de reserva y la gestión de reseñas. Para gastronomía en Argentina.",
      keywords: [
        "IA para restaurantes",
        "automatización gastronomía",
        "pedidos por WhatsApp restaurante",
        "reservas automáticas",
        "gestión de reseñas de Google",
      ],
    },
    hero: {
      title: "IA para no perder un pedido ni una reserva en la hora pico",
      intro:
        "En gastronomía, las ventas que llegan por WhatsApp e Instagram compiten con el servicio del salón. Automatizamos la toma de pedidos y reservas para que nada se pierda cuando el local está lleno.",
    },
    pains: [
      "Los pedidos y consultas de reserva por WhatsApp, Instagram y teléfono los contesta alguien a mano, entre todo lo demás.",
      "En la hora pico se traspapela o se confunde algún pedido.",
      "Las reservas quedan anotadas en el chat, sin recordatorio previo, y una mesa se enfría por un no-show.",
      "Nadie responde las reseñas de Google o Instagram, o las responde el dueño cuando tiene un rato.",
      "El control de mermas e insumos no está medido en pesos.",
    ],
    solutions: [
      {
        title: "Toma de pedidos y reservas automática",
        desc: "Un asistente confirma el pedido o la reserva solo en WhatsApp e Instagram, con el menú y la disponibilidad actualizados, incluso en plena hora pico.",
      },
      {
        title: "Recordatorios de reserva",
        desc: "El cliente recibe un recordatorio antes de la reserva y puede confirmar o cancelar, para que no se te caiga una mesa sin aviso.",
      },
      {
        title: "Gestión de reseñas",
        desc: "El sistema pide reseña a los clientes después de la visita y te ayuda a responder las que llegan, sin depender de que alguien se acuerde.",
      },
      {
        title: "Reportes de operación",
        desc: "Pedidos, reservas y consumos consolidados para ver mermas y tendencias sin cargar planillas a mano.",
      },
    ],
    outcome:
      "El objetivo es que el equipo esté enfocado en el salón y la cocina, no en no perderle el rastro a un pedido de WhatsApp.",
    faq: [
      {
        q: "¿Reemplaza a las apps de delivery?",
        a: "No. Ordena los pedidos y reservas que te llegan directo (WhatsApp, Instagram, teléfono), que son los que hoy se manejan a pulmón.",
      },
      {
        q: "¿El asistente puede tomar el pago?",
        a: "Puede enviar el link de pago y confirmar cuando se acredita; la configuración depende de tu medio de cobro.",
      },
      {
        q: "¿Sirve para un local chico?",
        a: "Sí. Con equipo chico, la hora pico es justo cuando más pedidos se pierden.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Diagnóstico corto y primera automatización en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de mis clientes?",
        a: "Quedan en tus sistemas, sin compartirse con terceros.",
      },
    ],
    relatedServices: ["chatbots", "automatizacion", "agentes-ia"],
  },
  {
    slug: "salud-estetica",
    label: "Salud y estética",
    shortLabel: "consultorio o centro",
    seo: {
      title: "IA para consultorios y centros de salud y estética",
      description:
        "Automatizá con IA la gestión de turnos, los recordatorios para reducir el ausentismo y las consultas de pacientes. Para salud y estética en Argentina.",
      keywords: [
        "IA para consultorios",
        "automatización de turnos médicos",
        "recordatorios de turnos",
        "reducir ausentismo en el consultorio",
        "IA para centros de estética",
      ],
    },
    hero: {
      title: "IA para llenar la agenda y bajar los turnos que se caen",
      intro:
        "En un consultorio, cada turno que se cae sin aviso es tiempo profesional que no se recupera. Automatizamos la agenda, los recordatorios y la atención de consultas para que la agenda se mantenga llena.",
    },
    pains: [
      "Los turnos se agendan por WhatsApp anotando a mano, o en una planilla.",
      "No siempre se le recuerda el turno al paciente, o se hace a mano llamando uno por uno.",
      "Se caen turnos porque el paciente no viene y no avisa.",
      "Mientras se atiende a un paciente, el WhatsApp del consultorio se acumula y se responde después.",
      "No se le pide reseña a los pacientes de forma sistemática.",
    ],
    solutions: [
      {
        title: "Agenda y confirmación de turnos",
        desc: "El paciente reserva, reprograma o cancela su turno solo, con la disponibilidad real, sin llamadas.",
      },
      {
        title: "Recordatorios para bajar el ausentismo",
        desc: "Recordatorio automático antes del turno, con opción de confirmar; los horarios que se liberan se pueden reofrecer.",
      },
      {
        title: "Atención de consultas mientras atendés",
        desc: "Un asistente responde las consultas frecuentes del consultorio en el momento, y deja para una persona lo que corresponde.",
      },
      {
        title: "Pedido de reseñas",
        desc: "Después de la consulta, el sistema le pide la reseña al paciente en Google o el portal que uses.",
      },
    ],
    outcome:
      "La meta es una agenda que se mantiene llena sola, con menos huecos por ausentismo y menos tiempo administrativo entre paciente y paciente.",
    faq: [
      {
        q: "¿Se integra con mi software de turnos (Doctoralia, etc.)?",
        a: "Sí, trabajamos sobre el que ya usás.",
      },
      {
        q: "¿El asistente maneja información médica?",
        a: "Responde solo información administrativa (turnos, indicaciones generales); nada clínico pasa por el asistente.",
      },
      {
        q: "¿Sirve para un consultorio de un solo profesional?",
        a: "Sí. Con agenda de un profesional, cada turno que se cae pesa el doble.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Diagnóstico corto y primera automatización en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de los pacientes?",
        a: "Quedan en tus sistemas, sin compartirse con terceros. El tratamiento de datos de salud se configura según lo que corresponda.",
      },
    ],
    relatedServices: ["chatbots", "automatizacion", "agentes-ia"],
  },
  {
    slug: "servicios-profesionales",
    label: "Servicios profesionales",
    shortLabel: "estudio, agencia o consultora",
    seo: {
      title: "IA para agencias, consultoras y estudios profesionales",
      description:
        "Automatizá con IA el seguimiento de propuestas, la cobranza de honorarios y el pedido de referidos. Para servicios profesionales en Argentina.",
      keywords: [
        "IA para consultoras",
        "automatización de agencia",
        "seguimiento de propuestas comerciales",
        "cobranza de honorarios",
        "pedido de referidos",
      ],
    },
    hero: {
      title: "IA para que ninguna propuesta ni ningún cobro queden sin seguimiento",
      intro:
        "En servicios profesionales, la mayoría de las oportunidades no se pierden en la reunión: se pierden después, cuando nadie hizo el seguimiento. Automatizamos ese seguimiento —propuestas, cobros y referidos— para que no dependa de acordarse.",
    },
    pains: [
      "Cuando enviás una propuesta y el cliente no responde, el seguimiento depende de que te acuerdes.",
      "Se pierden propuestas por no reinsistir a tiempo.",
      "El reclamo de una factura atrasada lo hacés vos, llamando o escribiendo.",
      "No hay un proceso para pedir referidos después de un proyecto que salió bien.",
      "Las tareas administrativas (armar propuestas, facturar, organizar archivos) se comen horas cada semana.",
    ],
    solutions: [
      {
        title: "Seguimiento automático de propuestas",
        desc: "Cada propuesta enviada entra en una secuencia de seguimiento; vos intervenís solo cuando el cliente responde.",
      },
      {
        title: "Recordatorios de cobranza",
        desc: "Avisos automáticos de facturas por vencer y vencidas, con escalamiento a vos cuando hace falta.",
      },
      {
        title: "Pedido sistemático de referidos",
        desc: "Al cerrar un proyecto, el sistema dispara el pedido de recomendación en el momento justo.",
      },
      {
        title: "Armado de propuestas y tareas repetitivas",
        desc: "Plantillas que se completan con los datos del cliente, y las tareas administrativas recurrentes conectadas entre sí.",
      },
    ],
    outcome:
      "El objetivo es que tu pipeline no se enfríe por falta de seguimiento, y que cobrar lo entregado no sea un trabajo aparte.",
    faq: [
      {
        q: "¿Se adapta a cómo trabaja mi estudio?",
        a: "Sí. Las secuencias y plantillas se diseñan sobre tu proceso real, no sobre un modelo genérico.",
      },
      {
        q: "¿El seguimiento suena a bot?",
        a: "No. Los mensajes salen con tu voz y tu marca; el cliente no siente que le escribe un sistema.",
      },
      {
        q: "¿Sirve si soy freelance o unipersonal?",
        a: "Sí. Justamente ahí el seguimiento suele ser lo primero que se cae por falta de tiempo.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Diagnóstico corto y primera automatización en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de mis clientes?",
        a: "Quedan en tus sistemas, sin compartirse con terceros.",
      },
    ],
    relatedServices: ["automatizacion", "agentes-ia", "chatbots"],
  },
  {
    slug: "concesionarias",
    label: "Concesionarias",
    shortLabel: "concesionaria",
    seo: {
      title: "IA para concesionarias de autos",
      description:
        "Automatizá con IA la atención de consultas de venta, los turnos de service y el seguimiento de interesados. Para concesionarias en Argentina.",
      keywords: [
        "IA para concesionarias",
        "automatización de venta de autos",
        "turnos de service automáticos",
        "seguimiento de leads en concesionaria",
        "chatbot para concesionaria",
      ],
    },
    hero: {
      title: "IA para atender cada consulta de venta y cada turno de service a tiempo",
      intro:
        "En una concesionaria, las consultas entran por muchos canales y cada vendedor maneja su propio WhatsApp. Automatizamos la atención y el seguimiento para que nada se pierda entre la venta y la posventa.",
    },
    pains: [
      "Cada vendedor maneja su propio WhatsApp y las consultas quedan dispersas.",
      "Las consultas que entran fuera de horario o en momentos de mucha demanda se responden tarde o se pierden.",
      "El seguimiento de un cliente que consultó pero no compró depende de que alguien se acuerde.",
      "Los turnos de service se coordinan a mano, por teléfono o WhatsApp.",
      "Los reclamos, de venta o de service, llegan por varios canales y nadie los centraliza.",
    ],
    solutions: [
      {
        title: "Atención centralizada de consultas de venta",
        desc: "Un asistente responde al instante en todos los canales con la info del vehículo y agenda la prueba o la visita, y todo queda en un solo lugar.",
      },
      {
        title: "Seguimiento de interesados",
        desc: "El sistema prioriza los leads más calientes y le avisa al vendedor cuándo volver a contactar.",
      },
      {
        title: "Turnos de service automáticos",
        desc: "El cliente saca, reprograma o cancela su turno de taller solo, con la disponibilidad real.",
      },
      {
        title: "Reclamos con seguimiento",
        desc: "Cada reclamo entra por un canal único, queda registrado y se asigna con responsable y plazo.",
      },
    ],
    outcome:
      "La idea es que ninguna consulta de venta se enfríe y ningún turno de service se traspapele, sin importar por qué canal entró.",
    faq: [
      {
        q: "¿Se integra con nuestro CRM?",
        a: "Sí, trabajamos sobre el que ya usan.",
      },
      {
        q: "¿Cada vendedor mantiene su contacto con el cliente?",
        a: "Sí. El asistente ordena y no reemplaza la relación del vendedor; le llega el lead calificado y con contexto.",
      },
      {
        q: "¿Sirve solo para venta o también para posventa?",
        a: "Para las dos. Se puede empezar por una y sumar la otra después.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Diagnóstico corto y primera automatización en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de los clientes?",
        a: "Quedan en sus sistemas, sin compartirse con terceros.",
      },
    ],
    relatedServices: ["chatbots", "agentes-ia", "automatizacion"],
  },
  {
    slug: "administracion-consorcios",
    label: "Administración de consorcios",
    shortLabel: "administración de consorcios",
    seo: {
      title: "IA para administradores de consorcios",
      description:
        "Automatizá con IA los reclamos de vecinos, los recordatorios de expensas y las consultas repetitivas. Para administradores de consorcios en Argentina.",
      keywords: [
        "IA para administración de consorcios",
        "automatización de expensas",
        "reclamos de vecinos tipo ticket",
        "recordatorio de expensas",
        "IA para administradores",
      ],
    },
    hero: {
      title: "IA para responder a cada vecino sin que se te vaya el día en eso",
      intro:
        "Administrar consorcios es responder lo mismo mil veces y perseguir reclamos que llegan por todos lados. Automatizamos la recepción de reclamos, los recordatorios de expensas y las consultas repetitivas para que el estudio recupere horas.",
    },
    pains: [
      "Los reclamos llegan por WhatsApp, mail y portero, todo mezclado y sin registro.",
      "Es todo manual o en Excel, sin un sistema con seguimiento tipo ticket.",
      "Avisar el vencimiento de expensas se hace uno por uno, o directamente no se avisa.",
      "Responder consultas repetitivas de vecinos (cuánto debo, cuándo es la asamblea, si se arregló el ascensor) consume horas cada semana.",
      "La rendición de cuentas a los propietarios se hace solo en la asamblea o a pedido.",
    ],
    solutions: [
      {
        title: "Reclamos con seguimiento tipo ticket",
        desc: "Cada reclamo entra por un canal único, queda registrado con su estado y se asigna con un plazo, y el vecino puede ver en qué está.",
      },
      {
        title: "Recordatorios de expensas",
        desc: "Aviso automático de vencimiento a todos los propietarios, con el detalle de lo que deben.",
      },
      {
        title: "Asistente para consultas de vecinos",
        desc: "Responde al instante las preguntas frecuentes (saldo, asamblea, estado de un arreglo) y deriva al estudio lo que requiere gestión.",
      },
      {
        title: "Rendición periódica automática",
        desc: "Envío regular y automático de la rendición a los propietarios, sin armarla a mano cada vez.",
      },
    ],
    outcome:
      "El objetivo es que el estudio deje de ser un call center de consultas repetidas y que cada reclamo tenga un estado visible, no un ida y vuelta de mensajes.",
    faq: [
      {
        q: "¿Se integra con mi sistema de gestión (CONSO, SiDomus, etc.)?",
        a: "Sí, trabajamos sobre el que ya usás.",
      },
      {
        q: "¿Los vecinos tienen que instalar una app?",
        a: "No. Todo funciona sobre WhatsApp y los canales que ya usan.",
      },
      {
        q: "¿Sirve si administro pocos consorcios?",
        a: "Sí. Con pocos consorcios, las consultas repetitivas igual se comen una parte grande de la semana.",
      },
      {
        q: "¿En cuánto tiempo queda funcionando?",
        a: "Diagnóstico corto y primera automatización en pocas semanas.",
      },
      {
        q: "¿Qué pasa con los datos de los propietarios?",
        a: "Quedan en tus sistemas, sin compartirse con terceros.",
      },
    ],
    relatedServices: ["automatizacion", "chatbots", "agentes-ia"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
