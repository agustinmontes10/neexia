// Glosario de /glosario — términos de IA y automatización explicados para
// negocios, no para ingenieros. Se emite además como DefinedTermSet JSON-LD.
// Mantener ordenado alfabéticamente por `term`.

export type GlossaryTerm = {
  term: string;
  /** Ancla en la página: /glosario#<slug>. */
  slug: string;
  definition: string;
};

export const glossary: GlossaryTerm[] = [
  {
    term: "Agente de IA",
    slug: "agente-de-ia",
    definition:
      "Un sistema de IA que no solo responde, sino que ejecuta tareas por su cuenta: consulta datos, decide según reglas y dispara acciones dentro de un proceso definido. A diferencia de un chatbot, actúa, no solo conversa.",
  },
  {
    term: "Alucinación",
    slug: "alucinacion",
    definition:
      "Cuando un modelo de IA responde con información que suena convincente pero es incorrecta o inventada. Se reduce dándole acceso a datos reales (RAG), definiendo reglas claras y dejando que una persona revise los casos sensibles.",
  },
  {
    term: "API",
    slug: "api",
    definition:
      "Una interfaz que permite que dos sistemas se comuniquen entre sí de forma automática. Las integraciones y automatizaciones se apoyan en las APIs de las herramientas que ya usás.",
  },
  {
    term: "Automatización de procesos",
    slug: "automatizacion-de-procesos",
    definition:
      "Hacer que una serie de tareas repetitivas se ejecuten solas, conectando las herramientas que ya se usan (CRM, mail, planillas, WhatsApp) para que los datos y las acciones fluyan sin carga manual.",
  },
  {
    term: "Calificación de leads (lead scoring)",
    slug: "calificacion-de-leads",
    definition:
      "Asignarle a cada contacto un puntaje según su probabilidad de compra, para que el equipo comercial priorice a los más calientes. Un agente de IA puede calcularlo automáticamente con cada consulta nueva.",
  },
  {
    term: "Chatbot conversacional",
    slug: "chatbot-conversacional",
    definition:
      "Un asistente que entiende el lenguaje natural de las personas y responde consultas de forma fluida, sin menús rígidos de opciones. Resuelve solo lo frecuente y deriva a una persona lo que necesita criterio.",
  },
  {
    term: "Embedding",
    slug: "embedding",
    definition:
      "Una representación numérica de un texto que captura su significado, de modo que se pueden comparar textos por similitud. Es lo que permite buscar por concepto y no solo por palabra exacta, y es clave para el RAG.",
  },
  {
    term: "Fine-tuning (ajuste fino)",
    slug: "fine-tuning",
    definition:
      "Entrenar un modelo ya existente con ejemplos propios para que se especialice en una tarea o adopte un estilo específico. No siempre hace falta: muchas veces alcanza con un buen prompt y RAG.",
  },
  {
    term: "Flujo de trabajo (workflow)",
    slug: "flujo-de-trabajo",
    definition:
      "La secuencia de pasos que sigue un proceso de principio a fin. Automatizar un workflow es hacer que esos pasos se ejecuten solos, con condiciones y ramas según cada caso.",
  },
  {
    term: "Human-in-the-loop (persona en el circuito)",
    slug: "human-in-the-loop",
    definition:
      "Un diseño en el que la IA hace el trabajo pesado pero una persona aprueba o revisa los pasos críticos. Da velocidad sin perder control sobre lo que sale.",
  },
  {
    term: "Integración de sistemas",
    slug: "integracion-de-sistemas",
    definition:
      "Conectar herramientas que antes no se hablaban entre sí para que compartan datos y disparen acciones, evitando copiar información de un lado a otro a mano.",
  },
  {
    term: "Modelo de lenguaje (LLM)",
    slug: "modelo-de-lenguaje-llm",
    definition:
      "Un modelo de IA entrenado con enormes cantidades de texto que puede entender y generar lenguaje. Es lo que está detrás de herramientas como ChatGPT y de los asistentes y agentes que construimos.",
  },
  {
    term: "n8n",
    slug: "n8n",
    definition:
      "Una plataforma de automatización que permite construir flujos conectando cientos de servicios distintos. La usamos para orquestar automatizaciones a medida sin atar tu operación a un producto cerrado.",
  },
  {
    term: "Orquestación de agentes",
    slug: "orquestacion-de-agentes",
    definition:
      "Coordinar varios agentes o automatizaciones especializados para que trabajen juntos en un proceso más grande, cada uno encargándose de su parte.",
  },
  {
    term: "Procesamiento de lenguaje natural (NLP)",
    slug: "procesamiento-de-lenguaje-natural",
    definition:
      "El campo de la IA que se ocupa de que las máquinas entiendan e interpreten el lenguaje humano, en texto y voz. Es la base de los chatbots, la clasificación de mensajes y el análisis de consultas.",
  },
  {
    term: "Prompt",
    slug: "prompt",
    definition:
      "La instrucción y el contexto que se le da a un modelo de IA para obtener una respuesta. Diseñar buenos prompts es parte de lograr que un asistente responda con precisión y con el tono correcto.",
  },
  {
    term: "RAG (generación aumentada por recuperación)",
    slug: "rag",
    definition:
      "Una técnica que le da al modelo acceso a información propia del negocio (documentos, catálogos, políticas) en el momento de responder, para que sus respuestas se basen en datos reales y actualizados.",
  },
  {
    term: "Webhook",
    slug: "webhook",
    definition:
      "Un aviso automático que un sistema le envía a otro cuando ocurre un evento, por ejemplo “entró un lead nuevo”. Permite que las automatizaciones reaccionen en tiempo real.",
  },
];
