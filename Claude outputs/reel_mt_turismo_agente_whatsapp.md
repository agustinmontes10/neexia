# Reel Neexia — Agente de WhatsApp para MT Turismo

**Cuenta:** @neexia.ai · **Duración estimada:** ~45-55 seg · **Dirección de contenido:** trabajo real mostrado, no dramatizado (demo en vivo de un producto que existe)

**Antes de grabar:** cargá precio y moneda en al menos 2-3 paquetes de prueba en `/admin/packages` (hoy están todos en null) para que el bot tenga algo real para mostrar cuando busque. Y tapá/recortá cualquier dato sensible que se vea en el workflow de n8n al grabar la pantalla (API keys, credenciales, teléfono real del cliente).

---

## Guion (bloques con corte de cámara)

**[0:00–0:04] — Cámara en mano, primer plano, hablando directo**

> "Le mandé un audio a una agencia de viajes preguntando por paquetes. Mirá quién contesta."

*(Mientras lo decís, grabás en cámara el gesto de mandar el audio por WhatsApp — no hace falta que se escuche el contenido del audio, solo que se vea la acción.)*

Texto en pantalla: **"Le mandé un audio a esta agencia de viajes..."**

---

**[0:04–0:18] — Corte a pantalla grabada (celular con WhatsApp abierto)**

Se ve en tiempo real:
- El audio enviado (burbuja de audio saliente)
- "escribiendo…" 
- La respuesta del bot apareciendo — texto natural, con los paquetes reales que devuelve el catálogo (precio, moneda, mes de salida)

Sin narración encima — dejalo respirar, es la prueba en sí misma. Subtítulo quemado con la respuesta clave si el texto es largo (para el que mira sin audio).

Texto en pantalla (esquina, sutil): **"Respuesta real, sin editar"**

---

**[0:18–0:26] — Vuelta a cámara**

> "Eso es un agente de IA que armamos para MT Turismo. Entiende texto y audio, busca los paquetes reales — nunca inventa un precio — y si hace falta algo más puntual, deriva a una persona del equipo."

---

**[0:26–0:42] — Corte a pantalla del workflow en n8n (pan/zoom lento sobre el canvas)**

VO tuya (tu voz siguiendo sobre la pantalla, no un TTS ni voz genérica):

> "Atrás hay un flujo que clasifica el mensaje, entiende si el cliente ya está siendo atendido por una persona para no interrumpir, busca en el catálogo real de la agencia, y contesta como alguien del equipo — no como un bot con menú."

Mostrá rápido, sin quedarte fijo: el router de texto/audio, el nodo del agente, la conexión a las tools. No hace falta explicar cada nodo — es para transmitir "esto es real e ingeniería de verdad", no una clase técnica.

Texto en pantalla: **"El workflow completo, armado en n8n"**

---

**[0:42–0:50] — Cierre a cámara**

> "Esto lo armamos para una agencia de viajes, pero sirve para cualquier negocio que atiende por WhatsApp y no da abasto. Si te interesa algo así, te dejo el link en la bio."

Texto en pantalla (últimos 2 seg): **"neexia.com.ar"** o el CTA que uses habitualmente en bio.

---

## Notas de producción

- **Regla de formato Reels:** vos en cámara hablando en primera persona en los bloques de apertura/explicación/cierre — el workflow y el chat de WhatsApp son cortes de pantalla, no el video entero. Ya está armado así arriba.
- **Audio real, no actuado:** grabá el intercambio real con el bot, no simules la conversación — es justamente lo que hace fuerte a esta pieza (categoría "trabajo real mostrado, no dramatizado").
- **No mencionar que Neexia sos vos solo** — mantené el tono de agencia en los textos en pantalla si agregás alguno fuera de tu voz en cámara (igual acá la voz es tuya en primera persona, así que no aplica tanto, pero ojo si editás textos adicionales).
- Si el bot tarda en responder al grabar, podés cortar el tiempo muerto en edición — no hace falta mostrar el "escribiendo…" completo si tarda de más.
- Alternativa de hook si preferís no arrancar con la cara: arrancar directo en la pantalla del audio enviándose, y meter tu cara recién en el segundo bloque explicando qué fue eso. Lo tenés más fuerte como gancho si mostrás tu cara reaccionando primero, pero las dos versiones funcionan.
