# DECISIONS — Registro de decisiones técnicas

Decisiones de arquitectura del sitio institucional. Formato: contexto → decisión → alternativas → consecuencias.

---

## 2026-07-09 — Rutas reales por path + prerender estático (SSG) para SEO indexable

### Contexto
El sitio usaba **hash routing** (`#/servicio/{id}`). Google ignora todo lo que va
después del `#`, así que las 5 páginas de servicio **no se indexaban** como URLs
propias: el `sitemap.xml` listaba URLs con `#` (inútiles para el crawler) y ninguna
página de servicio tenía su propio `<title>`/`description`/canonical. Al ser 100%
client-side, los crawlers y los scrapers sociales solo veían el shell de la home.
Juan aprobó cambiar el hash routing (era la restricción del `CLAUDE.md`).

Restricciones vigentes: sigue siendo **frontend estático** (sin backend, sin base de
datos, **sin migrar a Next.js** — reservado para el futuro portal de clientes), y se
mantiene el stack **Vite**.

### Decisión
Migrar a **rutas reales por path** (`/` y `/servicio/{id}`) con **react-router-dom**,
y agregar **prerender estático (SSG) con `vite-react-ssg`**: en `vite build` se genera
un HTML por ruta con su `<title>`, `description`, canonical, Open Graph, Twitter Card,
JSON-LD y el **contenido del servicio ya presente en el HTML inicial** (el crawler lo
ve sin ejecutar JS). El HTML hidrata a la SPA en el cliente, así que la navegación
sigue siendo instantánea y suave.

- Meta por página vía el componente `<Head>` de vite-react-ssg (react-helmet-async).
- `getStaticPaths()` en `ServicioPage` enumera los servicios desde `contenido.js`
  (fuente única), de modo que agregar un servicio genera su página automáticamente.
- `dirStyle: 'nested'` → cada ruta es `servicio/{id}/index.html` (URLs limpias).

### Alternativas consideradas
- **`react-snap`**: casi sin cambios de código, pero usa Puppeteer/Chromium en un
  `postbuild`, está sin mantenimiento y es frágil en el build de Vercel (no hay
  Chromium garantizado). Descartado por riesgo de romper el deploy automático.
- **Rewrites en Vercel sin prerender**: no resuelve el problema de fondo — el HTML
  servido seguiría siendo el shell sin contenido ni meta por página.
- **Prerender casero con `react-dom/server`**: termina reimplementando lo que
  `vite-react-ssg` ya hace (SSR + hidratación + manejo de `<head>` + assets hasheados).
  Más código propio y más superficie de bugs.
- **Migrar a Next.js**: prohibido por el `CLAUDE.md` (reservado para el portal).

### Consecuencias
- Se agregan 2 dependencias: `react-router-dom` (routing real, estándar) y
  `vite-react-ssg` (SSG). Justificadas: el `CLAUDE.md` prioriza el SEO y estas son lo
  mínimo para lograr URLs indexables sin cambiar de stack.
- El prerender corre en Node durante `vite build` (sin browser) → funciona en Vercel.
- Se quita `react-scroll` del camino crítico de SEO, pero se mantiene para el
  scroll suave dentro de la home (es SSR-safe, se verificó en el build).
- Compatibilidad: las viejas URLs con hash (`#/servicio/{id}`) redirigen a la ruta
  real por JS en el `Layout` (no se pierden links ya compartidos/indexados).
- `vercel.json`: `cleanUrls`, `trailingSlash: false` y fallback SPA (`rewrites` a
  `/index.html`, que Vercel aplica **después** del filesystem, sin pisar las páginas
  prerenderizadas).

### A verificar por Juan (fuera del código)
- En **Google Search Console**: reenviar/validar el nuevo `sitemap.xml` (URLs sin `#`)
  y pedir indexación de las 5 URLs de servicio. Las viejas URLs con `#` desaparecerán
  solas del índice (nunca fueron URLs reales para Google).
