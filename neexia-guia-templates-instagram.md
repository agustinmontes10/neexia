# Guía de diseño — Templates de Instagram para Neexia (Orshot)

Basada en la identidad real de neexia.ai (colores y tipografía extraídos directo del código del sitio), para que el contenido de Instagram se vea como una extensión de la marca, no como algo aparte.

## Sistema de marca

**Colores**
- Naranja Neexia (acento principal): `#FF8336`
- Naranja oscuro (hover/profundidad): `#E14A28`
- Texto oscuro: `#111111` (el mismo que usa la web) o `#1C1320` (el tono que usa el logo — cualquiera de los dos funciona, elegí uno y sé consistente)
- Fondo: blanco `#FFFFFF` — el sitio es predominantemente blanco/clean, no uses fondos oscuros salvo excepción puntual

**Tipografía**
- Inter, en todos los pesos (400 regular, 600 semibold, 800 extrabold). Es gratis en Google Fonts, Orshot la soporta directo.
- Jerarquía: títulos en Inter 800 (extrabold), subtítulos/cuerpo en Inter 400-500.

**Logo**
- Wordmark horizontal (`logoNeexia.svg`), proporción ancho:alto ≈ 3.8:1. Tiene un detalle en naranja `#FF8336` en la "x" — no lo recolorees.
- Tamaño mínimo legible: que el logo ocupe al menos 120px de ancho en el render final.
- Zona de seguridad: dejá un margen alrededor del logo igual a la altura de una letra "n" del propio logo — no lo pegues al borde ni lo tapes con otros elementos.

**Estilo general del sitio** (para que el template "se sienta" igual): mucho blanco, un solo acento de color fuerte (el naranja) usado con moderación —no satures la pieza de naranja—, esquinas suaves/redondeadas en vez de cuadradas, sombras sutiles en vez de bordes duros.

## Template 1 — Post único (feed)

**Tamaño**: 1080×1350px (4:5) en vez de 1:1 cuadrado — ocupa más espacio vertical en el feed, mejor alcance.

**Estructura**:
1. Fondo blanco limpio. Opcional: una versión muy sutil (5-8% opacidad) del patrón de grilla que ya usás en el Hero de la web, como textura de fondo — le da coherencia sin competir con el texto.
2. Logo de Neexia arriba a la izquierda o abajo a la derecha, chico (no protagonista).
3. Un "tag" o píldora de categoría arriba del título (ej. "Automatización" / "Agentes de IA"), fondo naranja `#FF8336` con texto blanco, esquinas bien redondeadas — esto también sirve para que el lector ubique de qué servicio se trata de un vistazo.
4. Título grande (Inter 800, ~64-80px), texto oscuro, máximo 6 palabras, alineado a la izquierda.
5. Subtítulo debajo (Inter 500, ~28-32px), gris medio, máximo 10 palabras.
6. Un elemento gráfico simple del naranja de marca (una línea, un ángulo, o un círculo parcial) como acento visual — no ilustración compleja, algo geométrico que combine con la estética "clean" del sitio.

**Parámetros dinámicos a marcar en Orshot** (ya coinciden con lo que te manda el workflow, no cambies los nombres): `titulo`, `subtitulo`. Si querés sumar la píldora de categoría como dinámica también, llamala `categoria` y yo actualizo el nodo de n8n para mandarla.

**Prompt sugerido para el AI Design Agent de Orshot** (pegalo tal cual y después ajustás a mano):
> Instagram post 1080x1350px for a modern AI agency. Clean white background, generous whitespace, subtle faint grid texture at 5% opacity. Small horizontal wordmark logo top-left. Rounded orange pill-shaped category tag (#FF8336, white text) above a large bold headline in dark near-black Inter Extrabold (up to 6 words), left-aligned. Smaller gray Inter subtitle below (up to 10 words). One simple geometric orange accent shape (thin line or partial circle), minimal, no illustrations, no gradients, no clutter. Professional, tech-forward, editorial feel — not playful or cartoonish.

## Template 2 — Carrusel

Mismo sistema visual, tres tipos de slide reutilizando los mismos estilos de texto/color que el post único:

**Slide 1 (portada/gancho)**: como el Template 1 completo — título grande + píldora de categoría + logo. Es la que decide si alguien sigue deslizando.

**Slides intermedios (contenido)**: fondo blanco, número de slide chico en una esquina (ej. "2/5") en naranja, un título de sección corto arriba (Inter 600, ~36px) y el cuerpo de texto del tip/paso en Inter 400 (~26-30px), más espacio en blanco que en la portada — estos slides son para leer, no para impactar visualmente.

**Slide final (cierre/CTA)**: fondo naranja `#FF8336` sólido (única excepción a "fondo blanco" — es el cierre, puede romper el patrón), logo de Neexia en blanco centrado, texto corto tipo "¿Querés esto para tu negocio?" + handle de Instagram o web abajo.

**Parámetros dinámicos**: cada slide necesita su propio set (`slide1_titulo`, `slide2_titulo`, `slide2_cuerpo`, etc.) — como Orshot Studio maneja multi-página con prefijo `pageN@`, seguí esa convención al nombrarlos. Cuando tengas el carrusel armado, hay que ajustar el workflow de n8n para que genere contenido para varios slides (no solo título/subtítulo) y arme un carousel container en Instagram en vez de un post simple — es un cambio real al workflow, avisame cuando llegues a esa parte y lo hacemos juntos.

## Checklist antes de dar por bueno un template

Texto legible al tamaño que se ve en el feed del celular (probá achicando la vista, no solo mirándolo grande). Contraste suficiente entre texto y fondo. El naranja aparece una sola vez como acento fuerte, no repetido por todos lados. El logo se lee incluso chico. Se ve claramente distinto a una plantilla de Canva genérica — con personalidad propia de Neexia.
