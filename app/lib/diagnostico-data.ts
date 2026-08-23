// Preguntas del diagnóstico gratuito, organizadas por rubro.
// Implementados: inmobiliaria, seguros, contable-juridico, concesionarias,
// consorcios, gastronomia, salud-estetica, servicios-profesionales y otro
// (quiz genérico, sin investigación de rubro propia).

export type RubroSlug =
  | "inmobiliaria"
  | "contable-juridico"
  | "seguros"
  | "gastronomia"
  | "salud-estetica"
  | "servicios-profesionales"
  | "concesionarias"
  | "consorcios"
  | "otro";

export type QuizOption = { value: string; label: string };

export type QuizQuestion = {
  key: string;
  eyebrow: string;
  question: string;
  hint?: string;
  type: "options" | "open";
  options?: QuizOption[];
  placeholder?: string;
  /** Si se define, la pregunta solo se muestra cuando esta función devuelve true. */
  condition?: (answers: Record<string, string>) => boolean;
};

export type RubroConfig = {
  slug: RubroSlug;
  label: string;
  available: boolean;
  questions?: QuizQuestion[];
};

export const RUBROS: RubroConfig[] = [
  {
    slug: "inmobiliaria",
    label: "Inmobiliaria",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en la inmobiliaria?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "dedicacion",
        eyebrow: "Contexto",
        question: "¿A qué se dedica principalmente la inmobiliaria?",
        type: "options",
        options: [
          { value: "venta", label: "Venta de propiedades" },
          { value: "alquileres", label: "Alquileres" },
          { value: "ambos", label: "Venta y alquileres" },
          { value: "ambos_consorcios", label: "Ambos, y también administro consorcios" },
        ],
      },
      {
        key: "volumen_consultas",
        eyebrow: "Atención de consultas",
        question: "¿Cuántas consultas nuevas por propiedades reciben por semana, aproximadamente?",
        hint: "Contá WhatsApp, portales, redes y llamadas juntos.",
        type: "options",
        options: [
          { value: "menos_10", label: "Menos de 10" },
          { value: "10_30", label: "Entre 10 y 30" },
          { value: "30_60", label: "Entre 30 y 60" },
          { value: "mas_60", label: "Más de 60" },
        ],
      },
      {
        key: "fuera_horario",
        eyebrow: "Atención de consultas",
        question: "Cuando alguien escribe fuera de horario (a la noche, un domingo), ¿qué pasa normalmente?",
        type: "options",
        options: [
          { value: "respondo_tarde", label: "Le respondo apenas puedo, aunque sea horas después" },
          { value: "se_pierde", label: "Se pierde hasta el próximo día hábil" },
          { value: "automatico", label: "Ya tengo algo que responde automático" },
        ],
      },
      {
        key: "centralizacion",
        eyebrow: "Atención de consultas",
        question: "¿Dónde vive hoy el historial de esas conversaciones?",
        type: "options",
        options: [
          { value: "celular", label: "En mi celular o el de cada asesor" },
          { value: "planilla", label: "En una planilla compartida" },
          { value: "crm", label: "En un CRM (por ejemplo Tokko)" },
        ],
      },
      {
        key: "seguimiento_leads",
        eyebrow: "Seguimiento",
        question: "Cuando un interesado no responde después del primer contacto, ¿qué pasa?",
        type: "options",
        options: [
          { value: "reescribo_si_recuerdo", label: "Le reescribo si me acuerdo" },
          { value: "recordatorio_sistema", label: "Tengo un recordatorio o sistema que me avisa cuándo reinsistir" },
          { value: "se_corta", label: "Ahí se corta, sigo con el próximo" },
        ],
      },
      {
        key: "cantidad_portales",
        eyebrow: "Publicación de propiedades",
        question: "¿En cuántos portales o redes publican cada propiedad?",
        type: "options",
        options: [
          { value: "1", label: "Uno solo" },
          { value: "2_3", label: "Entre 2 y 3" },
          { value: "4_mas", label: "4 o más" },
        ],
      },
      {
        key: "actualizacion_precios",
        eyebrow: "Publicación de propiedades",
        question: "¿Cómo actualizan precio y disponibilidad cuando cambian?",
        type: "options",
        options: [
          { value: "manual", label: "Entro a cada plataforma a mano" },
          { value: "part_time", label: "Alguien se encarga part-time de mantenerlo al día" },
          { value: "semi_automatizado", label: "Ya tengo algo semi-automatizado" },
        ],
      },
      {
        key: "reclamos_mantenimiento",
        eyebrow: "Alquileres",
        question: "¿Cómo manejan hoy un reclamo de mantenimiento urgente de un inquilino?",
        type: "options",
        condition: (a) =>
          a.dedicacion === "alquileres" || a.dedicacion === "ambos" || a.dedicacion === "ambos_consorcios",
        options: [
          { value: "cuando_puedo", label: "Lo vemos cuando podemos" },
          { value: "proceso_claro", label: "Tenemos un proceso con plazos claros" },
          { value: "sin_canal", label: "No tenemos un canal definido para esto" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez sentiste que perdiste una operación por no responder a tiempo, o por perder el hilo de una conversación?",
        hint: "Contanos qué pasó — esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: el otro día me escribieron un sábado por un depto en el centro y para cuando contesté el lunes ya habían alquilado en otro lado…",
      },
    ],
  },
  {
    slug: "contable-juridico",
    label: "Estudio contable / jurídico",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en el estudio?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "cantidad_clientes",
        eyebrow: "Contexto",
        question:
          "¿Aproximadamente cuántos clientes activos maneja el estudio hoy (personas humanas, unipersonales y PyMEs)?",
        type: "options",
        options: [
          { value: "menos_20", label: "Menos de 20" },
          { value: "20_50", label: "Entre 20 y 50" },
          { value: "50_100", label: "Entre 50 y 100" },
          { value: "mas_100", label: "Más de 100" },
        ],
      },
      {
        key: "sistema_vencimientos",
        eyebrow: "Gestión de vencimientos",
        question: "¿Cómo llevan hoy el calendario de vencimientos de DDJJ y presentaciones de todos los clientes?",
        type: "options",
        options: [
          { value: "papel_memoria", label: "En papel o de memoria" },
          { value: "excel", label: "En una planilla" },
          { value: "software", label: "En un software especializado (ONVIO, Sismon, Witmi, Colppy, etc.)" },
        ],
      },
      {
        key: "pedido_documentacion",
        eyebrow: "Documentación",
        question: "¿Cómo le pedís hoy la documentación a un cliente cuando se acerca un vencimiento?",
        type: "options",
        options: [
          { value: "espera_que_manden", label: "Espero a que la manden, sin recordatorio" },
          { value: "manual", label: "Le escribo o llamo yo mismo cada vez" },
          { value: "automatico", label: "Ya tengo recordatorios automáticos" },
        ],
      },
      {
        key: "vencimiento_perdido",
        eyebrow: "Vencimientos",
        question:
          "¿Les pasó en el último año perder algún vencimiento o presentarlo fuera de término por falta de documentación de un cliente?",
        hint: "Desde 2026 las multas por presentación fuera de término llegan a $220.000 (personas humanas) y $440.000 (personas jurídicas).",
        type: "options",
        options: [
          { value: "nunca", label: "Nunca, o casi nunca" },
          { value: "alguna_vez", label: "Alguna vez" },
          { value: "seguido", label: "Sí, nos pasa seguido" },
        ],
      },
      {
        key: "cobranza_honorarios",
        eyebrow: "Cobranza",
        question: "¿Cómo manejás el cobro de honorarios mensuales a la cartera de clientes?",
        type: "options",
        options: [
          { value: "no_gestiono", label: "No hago un seguimiento activo" },
          { value: "manual", label: "Llamo o escribo yo a cada cliente" },
          { value: "automatico", label: "Ya tengo recordatorios automáticos" },
        ],
      },
      {
        key: "tiempo_administrativo",
        eyebrow: "Tareas administrativas",
        question:
          "¿Cuánto tiempo por semana dedica el equipo a tareas repetitivas (carga de comprobantes, conciliación bancaria, generación de reportes)?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "10_20", label: "Entre 10 y 20 horas" },
          { value: "mas_20", label: "Más de 20 horas" },
        ],
      },
      {
        key: "anticipacion_picos",
        eyebrow: "Picos de carga",
        question:
          "¿Tenés forma de anticipar cuándo se vienen picos de vencimientos superpuestos entre varios clientes, antes de que exploten?",
        type: "options",
        options: [
          { value: "si_tengo_alerta", label: "Sí, tengo alertas o visibilidad clara" },
          { value: "mas_o_menos", label: "Más o menos, lo intuyo por experiencia" },
          { value: "no_me_entero", label: "No, lo descubro cuando ya está encima" },
        ],
      },
      {
        key: "consultas_frecuentes",
        eyebrow: "Atención a clientes",
        question:
          "¿Cuánto interrumpen al equipo las consultas frecuentes de clientes (¿cuándo vence tal cosa?, ¿ya presentaron mi declaración?)?",
        type: "options",
        options: [
          { value: "constantemente", label: "Constantemente, todos los días" },
          { value: "algunas_veces", label: "Algunas veces por semana" },
          { value: "casi_nunca", label: "Casi nunca, no es un problema" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez corrieron contra un vencimiento (o lo perdieron) por documentación que no llegó a tiempo? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: un cliente nos mandó los comprobantes el mismo día del vencimiento de IVA y terminamos presentando tarde…",
      },
    ],
  },
  {
    slug: "seguros",
    label: "Broker de seguros",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en el estudio o la productora?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "cartera_polizas",
        eyebrow: "Contexto",
        question: "¿Aproximadamente cuántas pólizas activas tenés en tu cartera hoy?",
        type: "options",
        options: [
          { value: "menos_100", label: "Menos de 100" },
          { value: "100_300", label: "Entre 100 y 300" },
          { value: "300_700", label: "Entre 300 y 700" },
          { value: "mas_700", label: "Más de 700" },
        ],
      },
      {
        key: "aviso_vencimiento",
        eyebrow: "Renovaciones",
        question: "Cuando se acerca el vencimiento de una póliza, ¿cómo avisás al cliente hoy?",
        type: "options",
        options: [
          { value: "no_aviso", label: "No tengo un proceso, depende de si me acuerdo" },
          { value: "manual", label: "Lo hago yo a mano, llamando o escribiendo" },
          { value: "automatico", label: "Ya tengo algo automático que lo hace" },
        ],
      },
      {
        key: "renovaciones_perdidas",
        eyebrow: "Renovaciones",
        question: "¿Se te escapó alguna renovación el último año por no avisar a tiempo?",
        type: "options",
        options: [
          { value: "nunca", label: "Nunca, o casi nunca" },
          { value: "alguna_vez", label: "Alguna vez" },
          { value: "seguido", label: "Sí, me pasa seguido" },
        ],
      },
      {
        key: "sistema_cartera",
        eyebrow: "Gestión de cartera",
        question: "¿Dónde llevás hoy el control de tu cartera de clientes y pólizas?",
        type: "options",
        options: [
          { value: "papel_memoria", label: "En papel o de memoria" },
          { value: "excel", label: "En una planilla" },
          { value: "software", label: "En un software especializado (NexoSmart, Figuro, etc.)" },
        ],
      },
      {
        key: "tiempo_administrativo",
        eyebrow: "Tareas administrativas",
        question:
          "¿Cuánto tiempo por semana dedicás a tareas administrativas (formularios, certificados, entregar documentación)?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "10_20", label: "Entre 10 y 20 horas" },
          { value: "mas_20", label: "Más de 20 horas" },
        ],
      },
      {
        key: "cobranza",
        eyebrow: "Cobranza",
        question: "¿Cómo manejás el seguimiento de cuotas vencidas o a vencer?",
        type: "options",
        options: [
          { value: "no_gestiono", label: "No hago un seguimiento activo" },
          { value: "manual", label: "Llamo o escribo yo a cada cliente" },
          { value: "automatico", label: "Ya tengo recordatorios automáticos" },
        ],
      },
      {
        key: "cross_selling",
        eyebrow: "Cross-selling",
        question:
          "¿Sabés hoy qué clientes tienen una sola cobertura y podrían necesitar otra (por ejemplo, seguro de auto pero no de hogar)?",
        type: "options",
        options: [
          { value: "si_lo_se", label: "Sí, lo tengo bastante claro" },
          { value: "idea_aproximada", label: "Tengo una idea aproximada" },
          { value: "no_tengo_forma", label: "No tengo forma de saberlo hoy" },
        ],
      },
      {
        key: "seguimiento_siniestros",
        eyebrow: "Siniestros",
        question: "Cuando un cliente tiene un siniestro, ¿cómo le das seguimiento del estado del reclamo?",
        type: "options",
        options: [
          { value: "proceso_claro", label: "Tenemos un proceso con plazos claros" },
          { value: "cuando_puedo", label: "Lo veo cuando puedo" },
          { value: "no_hago_seguimiento", label: "No hago un seguimiento activo" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez perdiste una renovación o una venta de cross-selling por no llegar a tiempo? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: se me venció la póliza de un cliente sin que me diera cuenta y renovó con la competencia…",
      },
    ],
  },
  {
    slug: "gastronomia",
    label: "Gastronomía",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en el local (dueño, mozos, cocina, salón)?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo (o con un socio)" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "volumen_pedidos_semana",
        eyebrow: "Pedidos y reservas",
        question:
          "¿Más o menos cuántos pedidos o consultas de reserva atendés por semana a través de WhatsApp, Instagram o teléfono (sin contar los que entran directo por apps de delivery)?",
        hint: "Una estimación aproximada está bien.",
        type: "options",
        options: [
          { value: "menos_20", label: "Menos de 20 por semana" },
          { value: "20_50", label: "Entre 20 y 50 por semana" },
          { value: "50_100", label: "Entre 50 y 100 por semana" },
          { value: "mas_100", label: "Más de 100 por semana" },
        ],
      },
      {
        key: "gestion_whatsapp",
        eyebrow: "Pedidos y reservas",
        question: "¿Cómo manejás hoy esos pedidos y consultas que llegan por chat?",
        type: "options",
        options: [
          { value: "todo_manual", label: "Uno o varios empleados contestan todo a mano" },
          { value: "planilla_o_agenda", label: "Los anotamos en un cuaderno o planilla aparte" },
          { value: "chatbot_basico", label: "Tenemos respuestas automáticas simples, pero el pedido se cierra a mano" },
          { value: "agente_automatizado", label: "Un sistema centraliza y confirma el pedido o la reserva solo" },
        ],
      },
      {
        key: "atencion_hora_pico",
        eyebrow: "Operación diaria",
        question: "¿Qué tan seguido se te pierde o confunde un pedido en la hora pico (mediodía o noche)?",
        type: "options",
        options: [
          { value: "nunca", label: "Nunca, tenemos todo bajo control" },
          { value: "alguna_vez", label: "Alguna vez pasó" },
          { value: "seguido", label: "Pasa seguido, al menos una vez por semana" },
          { value: "constantemente", label: "Es un problema constante en cada turno fuerte" },
        ],
      },
      {
        key: "uso_apps_delivery",
        eyebrow: "Apps de delivery",
        question: "¿Qué parte de tus ventas pasa hoy por apps de delivery como PedidosYa o Rappi?",
        type: "options",
        options: [
          { value: "no_uso", label: "No trabajamos con apps de delivery" },
          { value: "menos_20pct", label: "Menos del 20% de las ventas" },
          { value: "entre_20_50pct", label: "Entre el 20% y el 50% de las ventas" },
          { value: "mas_50pct", label: "Más del 50% de las ventas" },
        ],
      },
      {
        key: "gestion_reservas",
        eyebrow: "Reservas",
        question: "¿Cómo hacés seguimiento de las reservas para que no se te vacíe una mesa por un no-show?",
        type: "options",
        options: [
          { value: "no_tomamos_reservas", label: "No tomamos reservas" },
          { value: "wsp_manual_sin_recordatorio", label: "Quedan anotadas en el chat, sin recordatorio previo" },
          { value: "planilla_con_recordatorio_manual", label: "Las pasamos a una planilla y a veces llamamos para confirmar" },
          { value: "recordatorio_automatico", label: "Tenemos un recordatorio automático antes de la reserva" },
        ],
      },
      {
        key: "control_merma",
        eyebrow: "Costos",
        question:
          "¿Llevás el control de la merma de insumos (vencimientos, sobras, error de porcionado) medido en pesos?",
        type: "options",
        options: [
          { value: "medido_en_pesos", label: "Sí, la medimos en pesos todos los meses" },
          { value: "lo_notamos_sin_medir", label: "La notamos, pero no la tenemos medida" },
          { value: "no_controlamos", label: "No la controlamos" },
          { value: "no_se_food_cost", label: "La verdad no sabría decir cuál es nuestro food cost" },
        ],
      },
      {
        key: "gestion_resenas",
        eyebrow: "Reputación online",
        question: "¿Quién responde hoy las reseñas de Google o Instagram del local?",
        type: "options",
        options: [
          { value: "nadie_responde", label: "Nadie las responde" },
          { value: "dueño_cuando_tiene_tiempo", label: "El dueño o encargado, cuando tiene un rato" },
          { value: "empleado_designado", label: "Hay alguien designado para responderlas" },
          { value: "sistema_automatico", label: "Tenemos un sistema que pide y gestiona reseñas automáticamente" },
        ],
      },
      {
        key: "tiempo_administrativo",
        eyebrow: "Equipo y tiempo",
        question:
          "¿Cuántas horas por semana le dedicás (vos o tu equipo) a tareas administrativas como pedir stock, controlar mermas y responder reseñas o reclamos?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "10_20", label: "Entre 10 y 20 horas" },
          { value: "mas_20", label: "Más de 20 horas" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez perdiste una venta, una reserva o un cliente por no llegar a responder a tiempo en WhatsApp o redes? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: un sábado a la noche se nos juntaron los pedidos por WhatsApp y una reserva quedó sin confirmar, el cliente se fue a otro lado…",
      },
    ],
  },
  {
    slug: "salud-estetica",
    label: "Salud / estética",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas atienden en el consultorio o centro?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "volumen_turnos_semana",
        eyebrow: "Volumen",
        question: "¿Cuántos turnos atendés por semana, aproximadamente?",
        type: "options",
        options: [
          { value: "menos_20", label: "Menos de 20" },
          { value: "20_50", label: "Entre 20 y 50" },
          { value: "50_100", label: "Entre 50 y 100" },
          { value: "mas_100", label: "Más de 100" },
        ],
      },
      {
        key: "canal_turnos",
        eyebrow: "Cómo agendás hoy",
        question: "¿Cómo se agendan los turnos en el consultorio hoy?",
        type: "options",
        options: [
          { value: "papel_o_memoria", label: "En papel o de memoria" },
          { value: "whatsapp_manual", label: "Por WhatsApp, anotando a mano" },
          { value: "planilla_excel", label: "En una planilla o Excel" },
          { value: "software_turnos", label: "Con un software de turnos (Doctoralia, Consultorio24hs, etc.)" },
        ],
      },
      {
        key: "recordatorio_turno",
        eyebrow: "Recordatorios",
        question: "¿Le recordás el turno al paciente antes de que venga?",
        type: "options",
        options: [
          { value: "no_recuerdo", label: "No, no le recuerdo" },
          { value: "a_veces_manual", label: "A veces, por WhatsApp a mano" },
          { value: "siempre_manual", label: "Siempre, pero a mano (llamada o WhatsApp)" },
          { value: "automatico", label: "Sí, con recordatorio automático" },
        ],
      },
      {
        key: "ausentismo",
        eyebrow: "Ausentismo",
        question: "¿Cuántos turnos se te caen por semana porque el paciente no viene y no avisa?",
        hint: "El promedio del sector ronda el 23% de los turnos agendados.",
        type: "options",
        options: [
          { value: "casi_ninguno", label: "Casi ninguno" },
          { value: "1_3", label: "Entre 1 y 3" },
          { value: "4_8", label: "Entre 4 y 8" },
          { value: "mas_8", label: "Más de 8" },
        ],
      },
      {
        key: "atencion_fuera_horario",
        eyebrow: "Atención al paciente",
        question: "Cuando estás atendiendo a un paciente, ¿quién contesta el WhatsApp o el teléfono del consultorio?",
        type: "options",
        options: [
          { value: "nadie_se_acumula", label: "Nadie, se acumula y respondo después" },
          { value: "yo_entre_turno", label: "Yo, entre paciente y paciente" },
          { value: "recepcion", label: "Una persona de recepción" },
          { value: "sistema_automatico", label: "Un sistema automático" },
        ],
      },
      {
        key: "gestion_resenas",
        eyebrow: "Reputación online",
        question: "¿Le pedís a tus pacientes que dejen una reseña en Google o Doctoralia?",
        hint: "El 84% de los pacientes mira reseñas antes de elegir, pero solo el 5% las deja sin que se las pidan.",
        type: "options",
        options: [
          { value: "no_pido", label: "No, nunca se lo pido" },
          { value: "pido_a_veces", label: "A veces, si me acuerdo" },
          { value: "pido_siempre_manual", label: "Siempre, pero a mano" },
          { value: "sistema_automatico", label: "Sí, con un mensaje automático" },
        ],
      },
      {
        key: "facturacion_obra_social",
        eyebrow: "Obras sociales y prepagas",
        question: "¿Atendés pacientes con obra social o prepaga?",
        type: "options",
        options: [
          { value: "no_atiendo", label: "No, solo particulares" },
          { value: "pocas_veces", label: "Pocas veces" },
          { value: "regularmente", label: "Regularmente, y tardan en pagarme" },
          { value: "mayoria_pacientes", label: "Es la mayoría de mis pacientes" },
        ],
      },
      {
        key: "gestion_historia_clinica",
        eyebrow: "Ficha del paciente",
        question: "¿Cómo llevás la ficha o historia clínica de cada paciente?",
        type: "options",
        options: [
          { value: "papel", label: "En papel" },
          { value: "excel", label: "En una planilla o Excel" },
          { value: "memoria_dispersa", label: "Depende de quién atendió la última vez" },
          { value: "sistema_digital", label: "En un sistema digital centralizado" },
        ],
      },
      {
        key: "tiempo_administrativo",
        eyebrow: "Tiempo administrativo",
        question:
          "¿Cuántas horas por semana dedicás (vos o tu equipo) a tareas administrativas: facturación, historia clínica, seguimiento de pagos?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "10_20", label: "Entre 10 y 20 horas" },
          { value: "mas_20", label: "Más de 20 horas" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez un paciente abandonó un tratamiento o pack de sesiones a mitad de camino, o se te complicó el seguimiento? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: una paciente empezó un pack de kinesiología y dejó de venir a la tercera sesión sin avisar…",
      },
    ],
  },
  {
    slug: "servicios-profesionales",
    label: "Servicios profesionales",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en tu estudio, agencia o práctica profesional?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo (freelance o unipersonal)" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "tipo_servicio",
        eyebrow: "Contexto",
        question: "¿Qué tipo de servicio profesional brindan principalmente?",
        type: "options",
        options: [
          { value: "consultoria_asesoria", label: "Consultoría o asesoría de negocio" },
          { value: "diseño_creatividad", label: "Diseño, branding o producción creativa" },
          { value: "marketing_comunicacion", label: "Marketing, comunicación o redes" },
          { value: "tech_u_otro", label: "Desarrollo tech u otro servicio profesional" },
        ],
      },
      {
        key: "volumen_propuestas",
        eyebrow: "Propuestas y cotizaciones",
        question: "¿Cuántas propuestas o cotizaciones enviás a clientes potenciales por mes, aproximadamente?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5" },
          { value: "5_15", label: "Entre 5 y 15" },
          { value: "15_30", label: "Entre 15 y 30" },
          { value: "mas_30", label: "Más de 30" },
        ],
      },
      {
        key: "seguimiento_propuestas",
        eyebrow: "Propuestas y cotizaciones",
        question: "Cuando enviás una propuesta y el cliente no responde, ¿qué hacés?",
        type: "options",
        options: [
          { value: "no_hago_seguimiento", label: "No hago nada, si no contesta asumo que no le interesó" },
          { value: "manual", label: "Le vuelvo a escribir yo a mano, si me acuerdo" },
          { value: "automatico", label: "Tengo recordatorios automáticos programados" },
        ],
      },
      {
        key: "propuestas_perdidas",
        eyebrow: "Propuestas y cotizaciones",
        question: "¿Se te perdió alguna propuesta o cotización el último año por no hacerle seguimiento a tiempo?",
        type: "options",
        options: [
          { value: "nunca", label: "Nunca, o casi nunca" },
          { value: "alguna_vez", label: "Alguna vez" },
          { value: "seguido", label: "Sí, me pasa seguido" },
        ],
      },
      {
        key: "tiempo_administrativo",
        eyebrow: "Tareas administrativas",
        question:
          "¿Cuánto tiempo por semana dedicás a tareas administrativas (armar propuestas, facturar, organizar archivos, coordinar)?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "10_20", label: "Entre 10 y 20 horas" },
          { value: "mas_20", label: "Más de 20 horas" },
        ],
      },
      {
        key: "cobranza",
        eyebrow: "Cobranza",
        question: "¿Cómo manejás el cobro cuando una factura o un honorario se atrasa?",
        type: "options",
        options: [
          { value: "no_gestiono", label: "No hago un seguimiento activo" },
          { value: "manual", label: "Reclamo yo mismo, llamando o escribiendo" },
          { value: "automatico", label: "Ya tengo recordatorios automáticos" },
        ],
      },
      {
        key: "pagos_atrasados",
        eyebrow: "Cobranza",
        question: "¿Qué tan seguido se te atrasan los pagos de clientes respecto a la fecha acordada?",
        hint: "Un análisis sobre más de 100.000 facturas de freelancers encontró que el 29% se paga después de vencer.",
        type: "options",
        options: [
          { value: "casi_nunca", label: "Casi nunca" },
          { value: "a_veces", label: "A veces" },
          { value: "seguido", label: "Seguido, es casi la norma" },
        ],
      },
      {
        key: "pedido_referidos",
        eyebrow: "Referidos",
        question: "¿Le pedís a tus clientes de forma sistemática que te recomienden después de un proyecto exitoso?",
        hint: "El 69% de los clientes estaría dispuesto a referirte, pero el 72% de los profesionales nunca se lo pidió explícitamente.",
        type: "options",
        options: [
          { value: "nunca", label: "No, nunca se lo pido explícitamente" },
          { value: "a_veces", label: "A veces, si se da la oportunidad" },
          { value: "siempre_sistematico", label: "Sí, tengo un proceso para pedirlo siempre" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez perdiste un cliente o una propuesta por no hacer seguimiento a tiempo, o te costó cobrar un trabajo ya entregado? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: mandé una propuesta y nunca más volví a escribir, el cliente terminó contratando a otro consultor que sí insistió…",
      },
    ],
  },
  {
    slug: "concesionarias",
    label: "Concesionaria",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en la concesionaria?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "tipo_negocio",
        eyebrow: "Contexto",
        question: "¿A qué se dedica la concesionaria?",
        type: "options",
        options: [
          { value: "solo_venta", label: "Solo venta (0km y/o usados)" },
          { value: "solo_posventa", label: "Solo posventa / service" },
          { value: "ambos", label: "Venta y posventa/service" },
        ],
      },
      {
        key: "volumen_consultas_venta",
        eyebrow: "Atención de consultas",
        question:
          "¿Cuántas consultas nuevas de venta reciben por semana, aproximadamente?",
        hint: "Contá WhatsApp, Instagram, MercadoLibre y teléfono juntos.",
        type: "options",
        options: [
          { value: "menos_20", label: "Menos de 20" },
          { value: "20_50", label: "Entre 20 y 50" },
          { value: "50_100", label: "Entre 50 y 100" },
          { value: "mas_100", label: "Más de 100" },
        ],
      },
      {
        key: "gestion_whatsapp_ventas",
        eyebrow: "Atención de consultas",
        question: "¿Cómo gestionan hoy las consultas de WhatsApp/Instagram de los vendedores?",
        type: "options",
        options: [
          { value: "whatsapp_personal", label: "Cada vendedor maneja su propio WhatsApp" },
          { value: "planilla", label: "Las volcamos a una planilla compartida" },
          { value: "crm", label: "Tenemos un CRM (deConcesionarias, DeAutos.io, Ropofy, etc.)" },
        ],
      },
      {
        key: "tiempo_respuesta_consulta",
        eyebrow: "Atención de consultas",
        question:
          "Cuando alguien consulta por un auto fuera de horario o en un momento de mucha demanda, ¿qué pasa normalmente?",
        type: "options",
        options: [
          { value: "respondo_tarde", label: "Se le responde apenas alguien puede, aunque sea horas después" },
          { value: "se_pierde", label: "Se pierde hasta el próximo día hábil" },
          { value: "automatico", label: "Ya tenemos algo que responde automático" },
        ],
      },
      {
        key: "gestion_turnos_service",
        eyebrow: "Posventa / service",
        question: "¿Cómo gestionan hoy los turnos de service/taller?",
        type: "options",
        condition: (a) => a.tipo_negocio === "solo_posventa" || a.tipo_negocio === "ambos",
        options: [
          { value: "telefono_manual", label: "A mano, por teléfono o WhatsApp" },
          { value: "planilla", label: "Con una planilla o agenda compartida" },
          { value: "sistema_automatico", label: "Con un sistema que agenda y confirma solo" },
        ],
      },
      {
        key: "reclamos_posventa",
        eyebrow: "Reclamos",
        question:
          "Cuando llega un reclamo (de venta o de service) por WhatsApp, mail o teléfono, ¿qué pasa hoy?",
        type: "options",
        options: [
          { value: "sin_dueno", label: "Nadie lo centraliza, queda disperso según el canal" },
          { value: "alguien_a_veces", label: "Alguien lo toma, pero sin un proceso fijo" },
          { value: "proceso_claro", label: "Tenemos un proceso con responsable y plazo claros" },
        ],
      },
      {
        key: "reserva_no_cargada",
        eyebrow: "Reservas y entregas",
        question:
          "¿Les pasó que una reserva o una fecha de entrega prometida al cliente no quedó bien cargada en el sistema (de la terminal o interno)?",
        type: "options",
        options: [
          { value: "nunca", label: "Nunca, o casi nunca" },
          { value: "alguna_vez", label: "Alguna vez" },
          { value: "seguido", label: "Sí, nos pasa seguido" },
        ],
      },
      {
        key: "seguimiento_no_compro",
        eyebrow: "Seguimiento",
        question: "¿Cómo hacen seguimiento de un cliente que consultó pero todavía no compró?",
        type: "options",
        options: [
          { value: "no_hacemos", label: "No hacemos un seguimiento activo" },
          { value: "si_recuerdo", label: "Le vuelvo a escribir si me acuerdo" },
          { value: "recordatorio_sistema", label: "Tenemos un recordatorio o sistema que nos avisa cuándo reinsistir" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez perdiste una venta o un cliente de service se quejó por una demora o un descuido? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: un cliente pidió turno de service por WhatsApp y se le traspapeló, terminó yendo a otro taller…",
      },
    ],
  },
  {
    slug: "consorcios",
    label: "Administración de consorcios",
    available: true,
    questions: [
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en el estudio de administración?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "cantidad_consorcios",
        eyebrow: "Contexto",
        question: "¿Cuántos consorcios administrás actualmente?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5" },
          { value: "5_15", label: "Entre 5 y 15" },
          { value: "15_30", label: "Entre 15 y 30" },
          { value: "mas_30", label: "Más de 30" },
        ],
      },
      {
        key: "canal_reclamos",
        eyebrow: "Reclamos y mantenimiento",
        question: "¿Cómo reciben hoy los reclamos de los vecinos (rotura de ascensor, filtración, ruido, etc.)?",
        type: "options",
        options: [
          { value: "disperso", label: "Por WhatsApp, mail y portero, todo mezclado y sin registro" },
          { value: "whatsapp_registro", label: "Por WhatsApp, pero después lo anotamos en una planilla" },
          { value: "sistema", label: "En un sistema con seguimiento tipo ticket" },
        ],
      },
      {
        key: "sistema_gestion",
        eyebrow: "Reclamos y mantenimiento",
        question: "¿Usan algún sistema de gestión de consorcios (CONSO, SiDomus, ConsorcioAbierto, etc.) o es todo manual?",
        type: "options",
        options: [
          { value: "manual", label: "Todo manual o en Excel" },
          { value: "planillas", label: "Planillas más organizadas, pero sin sistema dedicado" },
          { value: "software", label: "Sí, usamos un software de gestión de consorcios" },
        ],
      },
      {
        key: "nivel_morosidad",
        eyebrow: "Expensas y cobranza",
        question: "¿Cuál es tu nivel de morosidad promedio en los consorcios que administrás?",
        type: "options",
        options: [
          { value: "bajo", label: "Menos del 10% de las unidades" },
          { value: "medio", label: "Entre el 10% y el 20%" },
          { value: "alto", label: "Más del 20%" },
          { value: "no_lo_mido", label: "No lo tengo medido con precisión" },
        ],
      },
      {
        key: "recordatorio_expensas",
        eyebrow: "Expensas y cobranza",
        question: "¿Cómo avisan a los propietarios que se acerca el vencimiento de expensas?",
        type: "options",
        options: [
          { value: "no_avisamos", label: "No avisamos, cada uno se fija" },
          { value: "manual", label: "Aviso manual: llamado o mensaje uno por uno" },
          { value: "automatico", label: "Recordatorio automático a todos" },
        ],
      },
      {
        key: "consultas_repetitivas",
        eyebrow: "Atención a vecinos",
        question:
          "¿Cuánto tiempo por semana te consume responder consultas repetitivas de vecinos (¿cuánto debo?, ¿ya se arregló el ascensor?, ¿cuándo es la asamblea?)?",
        type: "options",
        options: [
          { value: "menos_2", label: "Menos de 2 horas" },
          { value: "2_5", label: "Entre 2 y 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "mas_10", label: "Más de 10 horas" },
        ],
      },
      {
        key: "transparencia_rendicion",
        eyebrow: "Transparencia",
        question: "¿Cómo le rendís cuentas hoy a los propietarios sobre en qué se gastó la plata?",
        type: "options",
        options: [
          { value: "solo_asamblea", label: "Solo en la asamblea anual" },
          { value: "a_pedido", label: "Si me lo piden, mando planillas o comprobantes" },
          { value: "periodico_automatico", label: "Envío periódico y automático de la rendición" },
        ],
      },
      {
        key: "denuncia_conflicto",
        eyebrow: "Riesgo y conflicto",
        question:
          "¿Alguna vez tuviste un reclamo formal, una denuncia o un conflicto serio con vecinos por falta de transparencia o demora en resolver algo?",
        type: "options",
        options: [
          { value: "nunca", label: "Nunca" },
          { value: "alguna_vez", label: "Alguna vez" },
          { value: "seguido", label: "Me pasa con cierta frecuencia" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez un reclamo sin resolver o una duda de expensas escaló a un conflicto grande con un vecino o el consejo? Contanos qué pasó.",
        hint: "Esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: un vecino dejó de pagar expensas porque no confiaba en cómo se calculaban los gastos y terminó mandando una carta documento…",
      },
    ],
  },
  {
    slug: "otro",
    label: "Otro rubro",
    available: true,
    questions: [
      {
        key: "descripcion_negocio",
        eyebrow: "Contanos primero",
        question: "¿A qué se dedica tu negocio?",
        hint: "Contanos en pocas palabras qué hacés y a quién le vendés — así el diagnóstico habla de tu negocio real, no de generalidades.",
        type: "open",
        placeholder:
          "Ej: somos un estudio de arquitectura que hace proyectos residenciales y de reforma para particulares.",
      },
      {
        key: "tamano_equipo",
        eyebrow: "Contexto",
        question: "¿Cuántas personas trabajan en el negocio?",
        type: "options",
        options: [
          { value: "solo_yo", label: "Solo yo" },
          { value: "2_5", label: "Entre 2 y 5 personas" },
          { value: "6_15", label: "Entre 6 y 15 personas" },
          { value: "mas_15", label: "Más de 15 personas" },
        ],
      },
      {
        key: "volumen_consultas",
        eyebrow: "Atención de consultas",
        question:
          "¿Cuántas consultas o pedidos nuevos reciben por semana, aproximadamente?",
        hint: "Contá WhatsApp, redes, mail, teléfono y lo que uses, todo junto.",
        type: "options",
        options: [
          { value: "menos_10", label: "Menos de 10" },
          { value: "10_30", label: "Entre 10 y 30" },
          { value: "30_60", label: "Entre 30 y 60" },
          { value: "mas_60", label: "Más de 60" },
        ],
      },
      {
        key: "fuera_horario",
        eyebrow: "Atención de consultas",
        question: "Cuando alguien escribe fuera de horario (a la noche, un domingo), ¿qué pasa normalmente?",
        type: "options",
        options: [
          { value: "respondo_tarde", label: "Le respondo apenas puedo, aunque sea horas después" },
          { value: "se_pierde", label: "Se pierde hasta el próximo día hábil" },
          { value: "automatico", label: "Ya tengo algo que responde automático" },
        ],
      },
      {
        key: "centralizacion",
        eyebrow: "Atención de consultas",
        question: "¿Dónde vive hoy el historial de esas conversaciones o pedidos?",
        type: "options",
        options: [
          { value: "celular", label: "En mi celular o el de cada persona del equipo" },
          { value: "planilla", label: "En una planilla compartida" },
          { value: "sistema", label: "En un CRM o sistema centralizado" },
        ],
      },
      {
        key: "seguimiento",
        eyebrow: "Seguimiento",
        question: "Cuando un interesado no responde después del primer contacto, ¿qué pasa?",
        type: "options",
        options: [
          { value: "reescribo_si_recuerdo", label: "Le reescribo si me acuerdo" },
          { value: "recordatorio_sistema", label: "Tengo un recordatorio o sistema que me avisa cuándo reinsistir" },
          { value: "se_corta", label: "Ahí se corta, sigo con el próximo" },
        ],
      },
      {
        key: "tiempo_administrativo",
        eyebrow: "Tareas administrativas",
        question:
          "¿Cuánto tiempo por semana dedicás a tareas administrativas (presupuestos, facturación, cargar datos a mano)?",
        type: "options",
        options: [
          { value: "menos_5", label: "Menos de 5 horas" },
          { value: "5_10", label: "Entre 5 y 10 horas" },
          { value: "10_20", label: "Entre 10 y 20 horas" },
          { value: "mas_20", label: "Más de 20 horas" },
        ],
      },
      {
        key: "cobranza",
        eyebrow: "Cobranza",
        question: "¿Cómo manejás el seguimiento de pagos o cobros pendientes?",
        type: "options",
        options: [
          { value: "no_gestiono", label: "No hago un seguimiento activo" },
          { value: "manual", label: "Llamo o escribo yo a cada cliente" },
          { value: "automatico", label: "Ya tengo recordatorios automáticos" },
        ],
      },
      {
        key: "pregunta_abierta",
        eyebrow: "En tus palabras",
        question:
          "¿Alguna vez sentiste que perdiste una venta u oportunidad por no responder a tiempo o por perder el seguimiento de una conversación?",
        hint: "Contanos qué pasó — esto nos ayuda a armar un diagnóstico realmente a medida, no genérico.",
        type: "open",
        placeholder:
          "Ej: un cliente me escribió un viernes a la tarde y para cuando le contesté el lunes ya había comprado en otro lado…",
      },
    ],
  },
];

export function getRubro(slug: RubroSlug) {
  return RUBROS.find((r) => r.slug === slug);
}

/**
 * Ruta propia del sitio (mismo origen, sin CORS) que hace de puente hacia el
 * workflow de n8n. Ver app/api/diagnostico/route.ts — ahí vive la URL real
 * del webhook de n8n, del lado del servidor. Es la misma ruta para todos los
 * rubros: el body ya manda "rubro" y el workflow resuelve el resto.
 */
export const DIAGNOSTICO_API_URL = "/api/diagnostico";

export type Informe = {
  titulo: string;
  resumen_horas: string;
  recomendaciones: {
    area: string;
    diagnostico: string;
    solucion: string;
    horas_estimadas: string;
  }[];
  cierre: string;
};

export type Calculo = {
  horas_totales_ahorradas: number;
  [key: string]: unknown;
};
