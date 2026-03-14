# Learnings

## Session Retrospective (Hero Redesign)

### What we nailed 🏆
*   **The "Liquid Gold" Palette & Aesthetic**: Establishing a premium `#0A0A08` (true black) background with subtle golden accents and film grain instantly elevated the site to a "Luxury Tech" level.
*   **Asset Leverage**: Falling back to the high-quality, pre-rendered `logo-aurea-clean.png` instead of forcing code-based drawing resulted in the most premium look. The image already contained the gorgeous text rendering.
*   **The Final Minimalist Entrance**: Fading in the singular asset with a soft glow and drop shadow was rock-solid and visually striking.

### What we missed ⚠️
*   **Asset Awareness**: Initially, we didn't realize that the `logo-aurea-clean.png` already had the "AUREA" and "DISEÑO Y DESARROLLO WEB" text baked into it. This led to us trying to overlay HTML text on top, creating a duplicated text issue.
*   **Mobile/Responsive Spacing Checks**: When we first removed the duplicate HTML text, we left behind `margin-bottom` classes and lacked `max-height` constraints on the single image, which created a large empty vertical gap on shorter laptop screens.

### What we did horribly ❌
*   **The "Hack" Approach to Layout**: Attempting to use `clip-path` and `overflow: hidden` hacks to "crop out" the baked-in text from the logo image so we could animate our own HTML text was a terrible idea. It was fragile, broke alignment, and led to a subpar, non-premium visual experience. 
*   **Forcing Complex Animations over Quality**: We wasted time trying to build a "generative wireframe" SVG tracer (`LogoWireframeAnim.tsx`) from a poorly automated SVG output. The result was messy, visually unappealing, and compromised the "Luxury" brand promise.
*   **Excessive Vertical Spacing**: I consistently make the mistake of leaving way too much empty vertical space (padding + margin stacking) between major sections (like between the Hero and Cases). This fragments the reading experience and makes the layout feel disjointed rather than cohesive.

## Design Philosophy

*   **Simplicity over complex fragility**: When designing premium, "luxury tech" interfaces, a clean, perfectly aligned, and robust layout is almost always better than a highly complex animation that is prone to visual bugs, alignment issues, or timeline fragility. A simple, elegant fade-in of a high-quality asset communicates luxury better than a broken or misaligned complex effect. 
*   **Cohesive Vertical Density**: Avoid stacking massive paddings and margins between sections (e.g., `py-32` on a section container *plus* `mb-32` on an internal element). Keep the vertical rhythm tight so sections feel like a continuous scrolling journey rather than isolated islands floating in empty space.

## Conversión y Copywriting (2026-03-11)

### El Drunk Test es la métrica número uno
- Antes de marcar cualquier sección como terminada: ¿puede un visitante distraído entender en 5 segundos qué hacemos y qué hacer?
- Si el H1 es tendencia ("LA REVOLUCIÓN DE LA IA") en vez de beneficio, la sección falla el test.

### Features vs. Benefits — regla de oro
- ❌ Feature: "Certificación SSL", "Visual premium", "Experiencia de usuario impecable"
- ✓ Benefit: "Tus clientes no se van a otro lado", "Diseño que convierte visitas en consultas"
- Regla: para cada feature, preguntarse "¿y eso qué le da al cliente?"

### El diferenciador más fuerte siempre al frente
- "Primero probás, después pagás" es la propuesta más potente de Aurea y estaba en el bullet 7 de una sección secundaria.
- Regla: el diferenciador clave va en Hero (tarjeta o subtítulo) y en Process (paso destacado). No enterrado.

### DRY en datos de contacto
- El teléfono de WhatsApp estaba hardcodeado en App.tsx Y Hero.tsx ignorando `CLIENT.whatsappPhone` del config.
- Regla: cualquier dato de contacto/precio/copy siempre sale de `client.config.ts`. Cero literales en componentes.

### TypeScript + `as const` + `.filter()` → ternarios imposibles
- Si se filtra un array `as const` con `filter(p => p.id === 'a' || p.id === 'b')`, TypeScript sabe que el conjunto resultante solo puede tener esos ids.
- Un ternario `(plan.id === 'a' || plan.id === 'b') ? ... : ...` dentro del `.map()` posterior tiene rama `else` de tipo `never` → error en build.
- Fix: eliminar el ternario, la rama `else` nunca se ejecuta de todas formas.

### Portfolio sin resultados concretos = 0 credibilidad
- Cases con `desc: ""` + `url: "#"` + categorías estéticas ("Cálido y Acogedor") no prueban nada.
- Mínimo viable: 1-2 oraciones de resultado por caso. Ideal: métrica real ("triplicó la tasa de contacto").

## Development Best Practices

*   **Audit your assets first**: Always double-check exactly what is contained in the image assets (especially transparency and baked-in text) before writing complex layout code around them.
*   **Avoid layout hacks for images**: Using `clipPath` or negative margins to "hide" baked-in text in images often leads to responsive layout nightmares. If an asset needs cropping, and you don't have the source file, wrapping it in an `overflow: hidden` container with exact dimensions and positioning is more stable, but requesting a clean asset is always the best path.
*   **SVG Tracing constraints**: Generative SVG tracing (converting PNG to SVG via code) rarely produces paths suitable for a clean `stroke-dasharray` drawing animation. The resulting paths usually represent the *fills* of the shapes, not the structural centerlines. If a drawing animation is required, a properly constructed, hand-drawn vector SVG is mandatory.
