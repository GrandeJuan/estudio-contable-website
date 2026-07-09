# CLAUDE.md — Instrucciones para Claude Code

Este archivo le indica a Claude Code cómo trabajar en este proyecto.

---

## ¿Qué es este proyecto?

Sitio web institucional (landing page) para **Estudio Contable Grande & Asociados**.  
Es una página informativa — no tiene backend, base de datos ni autenticación.  
El objetivo es presentar el estudio, sus servicios y datos de contacto.

**No confundir con el portal de clientes**, que es un proyecto separado y futuro.

---

## Stack

- React 18 + Vite
- Tailwind CSS (clases utilitarias, sin CSS custom salvo `index.css`)
- **Rutas reales por path con `react-router-dom`** (`/` y `/servicio/{id}`)
- **Prerender estático (SSG) con `vite-react-ssg`**: `npm run build` genera un HTML por ruta
- Sin backend, sin base de datos

---

## Reglas importantes al trabajar en este proyecto

1. **Todo el contenido está en `src/data/contenido.js`** — si hay que cambiar textos, servicios, contacto o equipo, ese es el único lugar.

2. **No instalar librerías innecesarias** — el proyecto es intencionalmente simple y liviano.

3. **Routing = rutas reales por path + prerender (SSG).** Las páginas viven en `/` y `/servicio/{id}` (definidas en `src/routes.jsx`), y `vite-react-ssg` prerenderiza una por una en el build. Para navegar interno usar `<Link>`/`useNavigate` de `react-router-dom` (nunca `window.location.hash`). El scroll suave entre secciones de la home usa `react-scroll` (solo en la home). Si agregás una ruta nueva, asegurate de que quede prerenderizada (para rutas dinámicas, exportar `getStaticPaths`).

4. **Tailwind primero** — usar clases de Tailwind para estilos. Evitar escribir CSS custom salvo casos excepcionales.

5. **Responsive siempre** — cualquier componente nuevo debe funcionar en mobile, tablet y desktop.

---

## Cómo levantar el proyecto localmente

```bash
npm install
npm run dev
# → abre http://localhost:5173
```

---

## Cómo hacer deploy

El deploy es automático. Cada `git push` a la rama `main` actualiza la página en Vercel automáticamente.

```bash
git add .
git commit -m "descripción del cambio"
git push
```

---

## Estructura de componentes

```
main.jsx → entry del SSG (ViteReactSSG) → routes.jsx
  Layout.jsx → shell común (Navbar, Footer, modal, Outlet) + redirect de URLs viejas con hash
  ├── pages/Home.jsx       → home (Hero, SobreNosotros, Servicios, Equipo, Contacto) + <Seo>
  ├── pages/ServicioPage.jsx → /servicio/:id + <Seo> + getStaticPaths
  ├── Navbar.jsx        → navegación superior
  ├── Hero.jsx          → sección principal con CTA
  ├── SobreNosotros.jsx → historia y valores del estudio
  ├── Servicios.jsx     → grid de cards de servicios
  ├── ServicioDetalle.jsx → vista individual de cada servicio + FAQs
  ├── Equipo.jsx        → miembros del equipo
  ├── Contacto.jsx      → formulario, mapa y datos de contacto
  └── Footer.jsx        → pie de página
```

---

## Paleta de colores

| Variable | Hex | Uso |
|----------|-----|-----|
| Azul Marino (principal) | `#1B2A4A` | Títulos, iconos, botones, textos destacados |
| Azul Marino claro | `#2C3E65` | Hover de botones, degradados |
| Dorado (solo detalles) | `#D4A843` | Líneas decorativas bajo títulos, separadores |
| Crema claro (fondos) | `#F5F5F0` | Fondo de secciones alternas, navbar |
| Beige (fondos) | `#E8E6DF` | Fondo footer, bordes |
| Beige oscuro | `#D9D5CC` | Degradados, bordes footer |
| Gris texto | `#4A5568` | Texto secundario, párrafos |
| Blanco | `#FFFFFF` | Fondo de secciones alternas, cards |

---

## Documentación del proyecto

- **Después de cada cambio que lo amerite**, actualizar `PROGRESS.md` automáticamente.
- Mover tareas completadas a la sección "Completado" y agregar nuevas tareas pendientes si surgen.
- Cambios que ameritan actualizar la documentación: nuevas funcionalidades, integraciones, configuraciones, correcciones importantes, o cambios en el stack/dependencias.
- No es necesario documentar cambios menores como ajustes de estilos o correcciones de typos.

---

## SEO

El SEO es parte fundamental del proyecto. Cualquier cambio debe mantener o mejorar el SEO existente.
Cada página (home + 5 servicios) es una **URL real prerenderizada** con meta y contenido propios en el HTML.

- **`src/seo.js`** — fuente única de `<title>`, `description`, canonical, OG/Twitter y JSON-LD por página (derivados de `contenido.js`). Si cambiás textos de servicios, la meta se actualiza sola.
- **`src/components/Seo.jsx`** — inyecta esa meta en el `<head>` prerenderizado (componente `<Head>` de vite-react-ssg). NO poner meta por-página en `index.html` (generaría duplicados).
- **`index.html`** — solo el shell (charset, viewport, favicon, fuentes, `keywords`).
- **JSON-LD** — `AccountingService` en la home; `Service` + `BreadcrumbList` en cada servicio.
- **`public/sitemap.xml`** — URLs reales (`/servicio/{id}`, sin `#`). Actualizar si se agregan/quitan servicios.
- **`public/robots.txt`** — permite indexación y `/assets/`; apunta al sitemap.
- **H1** está en el Hero (home) y en el header de cada página de servicio (uno por página).
- **Jerarquía**: H1 → H2 (secciones) → H3 (subtítulos)
- **Alt tags**: todas las imágenes deben tener texto alternativo descriptivo
- **Dominio canónico**: `https://grandeyasociados.com.ar/`
- **Verificar siempre** antes de dar por hecho un cambio de SEO: `npm run build` + `npm run preview` y confirmar que cada `/servicio/{id}` sirve su `<title>` y contenido únicos.

---

## Qué NO hacer en este proyecto

- ❌ No agregar backend o API routes (esto es solo frontend estático)
- ❌ No migrar a Next.js (el portal de clientes futuro será Next.js, no este)
- ❌ No agregar autenticación ni base de datos
- ❌ No romper el build de Vite — siempre verificar con `npm run build` antes de commitear
