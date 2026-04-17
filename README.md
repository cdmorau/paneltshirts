# PANEL! T-Shirts

Tienda de camisetas urbanas con diseño minimalista contemporáneo. App full-stack con catálogo de productos, carrito de compras, diseñador de paneles y galería de diseños.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19 + TypeScript |
| Build | Vite 7 + Tailwind CSS v4 |
| UI | shadcn/ui (Radix) |
| Routing | wouter v3 |
| Forms | react-hook-form + zod |
| Notificaciones | sonner |
| Backend | Express 4 (Node.js) |
| Package manager | pnpm |

---

## Estructura del proyecto

```
panel_tshirts/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home/               ← Página principal (composición de secciones)
│   │   │   │   ├── index.tsx       ← Composición + NavBar + ShoppingCart
│   │   │   │   ├── useCartLogic.ts ← Estado y handlers del carrito
│   │   │   │   ├── HeroSection.tsx ← Hero con CTA
│   │   │   │   ├── FeaturedSection.tsx
│   │   │   │   ├── DesignerCTA.tsx ← Banner "Diseña tu panel"
│   │   │   │   ├── CatalogSection.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── NewsletterSection.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── DesignerPage.tsx    ← iframe de /designer.html
│   │   │   ├── BibliotecaPage.tsx  ← iframe de /biblioteca.html
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   ├── NavBar.tsx          ← Navegación sticky + menú móvil + badge carrito
│   │   │   ├── ProductCard.tsx     ← Tarjeta de producto (imagen, color, talla, carrito)
│   │   │   ├── ShoppingCart.tsx    ← Sidebar de carrito (cantidades, totales, checkout)
│   │   │   ├── ErrorBoundary.tsx   ← Captura errores React
│   │   │   └── ui/                 ← Componentes shadcn activos (13 archivos)
│   │   ├── lib/
│   │   │   ├── products.ts         ← Catálogo de productos (5 items)
│   │   │   └── utils.ts            ← cn() helper (Tailwind merge)
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    ← Tema light fijo
│   │   ├── hooks/
│   │   │   ├── useMobile.tsx       ← Breakpoint < 768px
│   │   │   ├── useComposition.ts   ← IME para inputs CJK
│   │   │   └── usePersistFn.ts     ← Función persistente (alternativa a useCallback)
│   │   ├── App.tsx                 ← Router + providers
│   │   ├── main.tsx                ← Entry point React
│   │   └── index.css               ← Tailwind + tokens oklch
│   └── public/
│       ├── images/                 ← Assets SVG (334 diseños PANEL!)
│       ├── designer.html           ← Herramienta de diseño externa
│       └── biblioteca.html         ← Galería de diseños externa
├── server/
│   └── index.ts                    ← Express: estático + SPA fallback, puerto 3000
├── shared/
│   └── const.ts                    ← COOKIE_NAME, ONE_YEAR_MS
├── vite.config.ts
├── tsconfig.json
├── CLAUDE.md                       ← Contexto para Claude Code
└── package.json
```

---

## Rutas de la aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `pages/home/index.tsx` | Tienda principal: hero, destacados, catálogo, newsletter |
| `/designer` | `pages/DesignerPage.tsx` | Diseñador de camisetas (iframe) |
| `/biblioteca` | `pages/BibliotecaPage.tsx` | Galería de diseños (iframe) |
| `/*` | `pages/NotFound.tsx` | 404 fallback |

**Navegación (NavBar):** Destacados `/#featured` · Catálogo `/#catalog` · Acerca de `/#about` · Diseñar `/designer` · Biblioteca `/biblioteca`

---

## Catálogo de productos

| Producto | Precio | Colores | Tallas | Destacado |
|---------|--------|---------|--------|-----------|
| PANEL! Classic Black | $29.99 | Negro (#1A1A1A) | XS-XXL | Sí |
| PANEL! Classic White | $29.99 | Blanco (#FFFFFF) | XS-XXL | Sí |
| PANEL! Duo Pack | $49.99 | Negro + Blanco | XS-XXL | No |
| PANEL! Oversized Black | $34.99 | Negro (#1A1A1A) | XS-XXL | No |
| PANEL! Oversized White | $34.99 | Blanco (#FFFFFF) | XS-XXL | No |

> Fuente: `client/src/lib/products.ts`

---

## Componentes principales

| Componente | Props clave | Responsabilidad |
|-----------|------------|----------------|
| `NavBar` | `cartCount`, `onCartOpen` | Navegación global, badge de carrito, menú móvil |
| `ProductCard` | `product`, `onAddToCart` | Vista de producto con selector de color/talla |
| `ShoppingCart` | `items`, `isOpen`, `onClose`, `onUpdateQuantity`, `onRemoveItem` | Sidebar lateral: lista items, calcula totales, checkout |
| `ErrorBoundary` | children | Captura errores React en producción |

**Componentes UI activos (shadcn/ui):** `button` · `input` · `card` · `dialog` · `label` · `separator` · `sheet` · `skeleton` · `sonner` · `tooltip` · `command` · `item` · `spinner`

---

## Carrito de compras

El estado del carrito vive en `pages/home/useCartLogic.ts`:

- **`cartItems: CartItem[]`** — items actuales
- **`handleAddToCart(product, color, size)`** — agrega o incrementa cantidad
- **`handleUpdateQuantity(id, quantity)`** — actualiza, elimina si quantity=0
- **`handleRemoveItem(id)`** — elimina item del carrito
- Impuesto: 10% del subtotal (calculado en `ShoppingCart.tsx`)

---

## Sistema de diseño

**Tipografía**
- Headings: Montserrat Bold (vía inline `fontFamily: "'Montserrat', sans-serif"`)
- Body: Inter Regular
- Fuentes cargadas desde Google Fonts en `client/index.html`

**Colores** (definidos en `client/src/index.css` con oklch):
- Background: blanco puro `oklch(1 0 0)`
- Foreground: negro `oklch(0.141 0.005 285.823)`
- Secondary: gris muy claro `oklch(0.95 0 0)`
- Tema oscuro: definido en CSS pero no habilitado (`ThemeContext.switchable = false`)

**Animaciones**
- Cards: `scale(1.02)` en hover, 300-400ms, `shadow-lg`
- Transiciones: `transition-transform duration-300`
- Designer grid: `hover:-translate-y-2`

---

## Comandos de desarrollo

```bash
pnpm dev      # Dev server en localhost:3000 (hot reload)
pnpm build    # Build producción → dist/
pnpm start    # Servidor producción desde dist/
pnpm check    # TypeScript noEmit (sin errores = ok)
pnpm format   # Prettier en todo el proyecto
```

---

## Variables de entorno

| Variable | Requerida | Descripción |
|---------|-----------|-------------|
| `VITE_OAUTH_PORTAL_URL` | No | URL del portal OAuth |
| `VITE_APP_ID` | No | ID de la aplicación para OAuth |
| `PORT` | No | Puerto del servidor Express (default: 3000) |

> Definir en archivo `.env` en la raíz del proyecto (no commitear).

---

## Servidor Express

`server/index.ts` (34 líneas): sirve archivos estáticos desde `dist/public/` y envía `index.html` para todas las rutas no encontradas (SPA fallback). Sin API REST propia — la app es completamente client-side.

---

*Actualizado automáticamente por Claude Code cuando se modifica la estructura del proyecto.*
