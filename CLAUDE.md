# panel_tshirts — Claude Context File

## Stack
React 19 · TypeScript · Vite 7 · Tailwind CSS v4 · Express 4 · wouter (routing)
shadcn/ui (Radix) · react-hook-form + zod · sonner · pnpm

## Estructura clave (solo fuente)
```
client/src/
  pages/
    home/           → index.tsx (composición), HeroSection, FeaturedSection,
                      DesignerCTA, CatalogSection, AboutSection,
                      NewsletterSection, Footer, useCartLogic.ts
    DesignerPage    → iframe wrapper de /designer.html
    BibliotecaPage  → iframe wrapper de /biblioteca.html
    NotFound        → 404
  components/
    NavBar          → sticky nav, menú móvil, badge carrito
    ProductCard     → imagen, selector color/talla, add-to-cart
    ShoppingCart    → sidebar, cantidades, totales, checkout
    ErrorBoundary   → error boundary de clase
    ui/             → button · input · card · dialog · label · separator
                      sheet · skeleton · sonner · tooltip · command · item
  lib/
    products.ts     → Product interface + array de 5 productos hardcoded
    utils.ts        → cn() helper para Tailwind merge
  contexts/
    ThemeContext    → tema light fijo (switchable: false)
  hooks/
    useMobile       → breakpoint < 768px
    useComposition  → IME para CJK
    usePersistFn    → función persistente (alternativa a useCallback)
server/index.ts     → Express: sirve dist/public/ + SPA fallback, puerto 3000
shared/const.ts     → COOKIE_NAME, ONE_YEAR_MS
```

## Rutas (wouter en App.tsx)
| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | pages/home/index.tsx | Tienda principal |
| `/designer` | DesignerPage | Diseñador de camisetas (iframe) |
| `/biblioteca` | BibliotecaPage | Galería de diseños (iframe) |
| `/*` | NotFound | 404 fallback |

## Comandos
```bash
pnpm dev     # dev server en localhost:3000
pnpm build   # Vite (cliente) + esbuild (servidor) → dist/
pnpm start   # producción desde dist/
pnpm check   # TypeScript noEmit
pnpm format  # Prettier
```

## Productos (client/src/lib/products.ts)
5 items: Classic Black/White ($29.99), Duo Pack ($49.99), Oversized Black/White ($34.99)
Cada uno: id, name, description, price, colors[], sizes[], featured, imageUrl

## Sistema de diseño
- Tipografía headings: Montserrat Bold (fontFamily inline `'Montserrat', sans-serif`)
- Tipografía body: Inter Regular
- Colores: oklch — tokens en client/src/index.css → `--color-*`
- Hover cards: `scale(1.02)`, 300ms, `shadow-lg`
- Tema oscuro definido en CSS pero NO habilitado

## Alias Vite
- `@/` → `client/src/`
- `@shared/` → `shared/`

## README update rule
Cuando agregues/elimines/modifiques rutas, páginas, componentes principales,
productos, hooks o utilidades → **actualiza README.md antes de terminar**.

## Ignorar siempre
node_modules/ · dist/ · .manus-logs/ · client/public/images/ · pnpm-lock.yaml
