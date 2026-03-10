# Learnings

## Design Philosophy

*   **Simplicity over complex fragility**: When designing premium, "luxury tech" interfaces, a clean, perfectly aligned, and robust layout is almost always better than a highly complex animation that is prone to visual bugs, alignment issues, or timeline fragility. A simple, elegant fade-in of a high-quality asset communicates luxury better than a broken or misaligned complex effect. 

## Development Best Practices

*   **Avoid layout hacks for images**: Using `clipPath` or negative margins to "hide" baked-in text in images often leads to responsive layout nightmares. If an asset needs cropping, and you don't have the source file, wrapping it in an `overflow: hidden` container with exact dimensions and positioning is more stable, but requesting a clean asset is always the best path.
*   **SVG Tracing constraints**: Generative SVG tracing (converting PNG to SVG via code) rarely produces paths suitable for a clean `stroke-dasharray` drawing animation. The resulting paths usually represent the *fills* of the shapes, not the structural centerlines. If a drawing animation is required, a properly constructed, hand-drawn vector SVG is mandatory.
