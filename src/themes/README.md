# Agency Themes

Four visual themes for the `agency-core-starter`. Each theme replaces `Hero.tsx`, `Catalog.tsx`, and `index.css` to completely change the visual identity without touching any other component.

---

## Themes

| Theme | Perfil | Paleta | Para |
|-------|--------|--------|------|
| `organic-warm` | A | Terracota + off-white, serif | Panadería, artesanal, food, emprendimientos |
| `brutalist-dark` | B | Negro + azul eléctrico, sans bold | Construcción, industrial, tecnología, corporativo |
| `luxury-dark` | B Premium | Warm grey + oro, serif italic | Clínicas estéticas, legales, alto valor |
| `minimalist-light` | B Boutique | Cream + negro + rust, sans black | Estudios creativos, diseño, consultoras, boutique |

---

## Cómo aplicar un tema

### 1. Copiar los archivos del tema

```bash
# Ejemplo: aplicar organic-warm
cp src/themes/organic-warm/Hero.tsx    src/components/Hero.tsx
cp src/themes/organic-warm/Catalog.tsx src/components/Catalog.tsx
cp src/themes/organic-warm/index.css   src/index.css
```

### 2. Google Fonts requeridas en `index.html`

Cada tema necesita sus fuentes importadas en `<head>`:

**organic-warm**, **luxury-dark**, **minimalist-light**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

**brutalist-dark**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
```

### 3. Imagen hero

Colocar la imagen del cliente en:
```
public/images/hero/hero.jpg
```

### 4. Llenar `src/lib/client.config.ts`

Editar solo este archivo con los datos del cliente. Todos los componentes se actualizan automáticamente.

---

## Qué NO cambia por tema

- `Navbar.tsx` — mismo en todos los temas (usa tokens CSS)
- `About.tsx` — siempre reescribir por cliente
- `OrderForm.tsx` — mismo en todos los temas
- `Footer.tsx` — mismo en todos los temas
- `App.tsx` — no tocar
- `client.config.ts` — fuente única de verdad

---

## Color tokens (mismos nombres en todos los temas)

| Token | organic-warm | brutalist-dark | luxury-dark | minimalist-light |
|-------|-------------|----------------|-------------|------------------|
| `--color-primary` | `#1A1A1A` charcoal | `#FAFAFA` off-white | `#FDFBFC` off-white | `#111110` near-black |
| `--color-secondary` | `#F8F5F2` warm white | `#09090B` near-black | `#181614` warm dark | `#F8F7F4` warm cream |
| `--color-accent` | `#D97743` terracota | `#2563EB` electric blue | `#C5A059` gold | `#D4622A` warm rust |
| `--color-muted` | `#8A8580` stone | `#71717A` zinc | `#8A7F75` warm grey | `#8A8580` stone |
