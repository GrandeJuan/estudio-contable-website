# PROGRESS.md — Estado del Proyecto

## Estado General: 🟢 En producción — casi completo

---

## ✅ Completado

- [x] Estructura base del proyecto (React + Vite + Tailwind)
- [x] Todos los componentes de la landing: Navbar, Hero, SobreNosotros, Servicios, ServicioDetalle, Equipo, Contacto, Footer
- [x] Sistema de routing hash para páginas individuales de servicios
- [x] FAQs expandibles por servicio
- [x] Integración WhatsApp y Email
- [x] Google Maps con dirección real del estudio
- [x] SEO completo (ver sección SEO abajo)
- [x] Diseño responsive completo
- [x] Fotos reales del equipo
- [x] Datos de contacto reales (teléfono, email, dirección, WhatsApp)
- [x] Textos y servicios revisados y aprobados
- [x] Deploy en Vercel → https://estudio-contable-website.vercel.app
- [x] Repositorio en GitHub → https://github.com/GrandeJuan/estudio-contable-website
- [x] Favicon con logo del estudio (`logo.png`)
- [x] Vercel Analytics integrado (`@vercel/analytics`)
- [x] Vercel Speed Insights integrado (`@vercel/speed-insights`)
- [x] Logo del estudio (`logo-hero.png`) integrado en la sección Hero
- [x] Rediseño visual completo: esquema de colores claro/crema en toda la página
  - Hero con fondo degradado crema en lugar de azul oscuro
  - Todas las secciones armonizadas con paleta clara (crema, blanco, beige)
  - Iconos y números en azul marino `#1B2A4A` (mejor contraste con fondo claro)
  - Dorado `#D4A843` reservado solo para detalles decorativos (líneas bajo títulos)
  - Infografía de estadísticas con fondo crema y cards blancas
  - Contacto y Footer adaptados al esquema claro
- [x] Modal de consulta actualizado al nuevo esquema de colores
- [x] Datos de contacto actualizados:
  - Email: `info@grandeyasoc.com.ar`
  - Teléfono/WhatsApp: `+54 11 4384-8924`
  - LinkedIn del estudio: `linkedin.com/company/grandeyasoc`
- [x] Todos los links de teléfono redirigen a WhatsApp
- [x] Dominio `grandeyasociados.com.ar` configurado en NIC.ar → Vercel (DNS delegados a `ns1/ns2.vercel-dns.com`)
- [x] EmailJS integrado — modal de consultas envía emails realmente vía Gmail (`consultas.grandeyasoc@gmail.com`) a `info@grandeyasoc.com.ar`

---

## 📋 Pendiente
- [ ] Diseñar logo y banner para el perfil de LinkedIn del estudio (`linkedin.com/company/grandeyasoc`)
- [ ] **SEO estructural (alto impacto):** las páginas de servicio usan hash routing (`#/servicio/...`) y no se indexan como URLs propias; el sitemap lista URLs con `#` que Google ignora. Evaluar prerender estático (p. ej. `vite-react-ssg`) o rutas reales con rewrites en Vercel, para que cada servicio tenga su título/description/canonical. Requiere decisión sobre routing.

### Completado recientemente (revisión de calidad):
- [x] **Performance de imágenes:** hero `logo-hero.png` 492 KB → `logo-hero.webp` 51 KB; logo navbar/footer 238 KB → `logo.webp` 7 KB; fotos del equipo → WebP ~8 KB; PNGs de OG/JSON-LD/favicon reducidos. Se agregó `width`/`height` (anti-CLS), `fetchpriority` en el hero y `loading="lazy"` en imágenes bajo el pliegue. Eliminado `Logo.svg` huérfano.
- [x] **Accesibilidad:** labels del formulario asociados (`htmlFor`/`id`), botón hamburguesa con `aria-label`/`aria-expanded`, modal con `role="dialog"`/`aria-modal`/`aria-labelledby` y foco inicial, alt más descriptivo en fotos del equipo.
- [x] **Seguridad:** honeypot anti-spam en el formulario de consulta; `vercel.json` con headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) y cache de assets; `npm audit fix` (5 → 2 vulns, restantes requieren cambios breaking).
- [x] **Armonía/diseño:** tokens de color unificados en `index.css` (un solo azul `#1B2A4A` y un solo dorado `#D4A843`; se eliminó la deriva de 3 dorados); `text-justify` solo en desktop (mejora lectura en mobile); estado activo del nav en azul (mejor contraste que el dorado).
- [x] **Fixes:** coordenadas `geo` del JSON-LD corregidas a la dirección real; bug de scroll en "Ver todos los servicios" resuelto.

### Completado recientemente:
- [x] ~~Configurar EmailJS~~ → funcionando con Gmail (`consultas.grandeyasoc@gmail.com`) + reenvío a `info@grandeyasoc.com.ar`
  - Service ID: `service_41lb5cw` | Template ID: `template_o0nkrtt`
  - 200 emails/mes en plan gratuito (se resetea mensualmente)
- [x] ~~Esperar propagación DNS de `grandeyasociados.com.ar`~~ → dominio activo y funcionando
- [x] ~~Registrar en Google Search Console y enviar sitemap~~ → verificado, sitemap enviado (6 páginas descubiertas)

---

## 🔮 Futuro (fuera de scope de este proyecto)

- Portal de clientes → proyecto separado (`estudio-contable-portal`)
  - Next.js + Supabase
  - Autenticación de usuarios
  - Subida de documentos
  - Panel del contador y panel del cliente
  - URL: `app.dominio.com.ar`

---

## 🔍 SEO — Implementación completa

El SEO es una parte clave del proyecto. Sin él, Google no indexa la página y nadie la encuentra.

### Implementado en el código:
- **Meta tags** — title, description, keywords en `index.html`
- **Open Graph** — og:title, og:description, og:image, og:url, og:locale, og:site_name
- **Twitter Cards** — summary_large_image con imagen y descripción
- **JSON-LD** (schema.org) — tipo `AccountingService` con datos del negocio, dirección, teléfono, email, horarios, servicios ofrecidos y LinkedIn
- **Canonical URL** — apunta a `https://grandeyasociados.com.ar/`
- **Robots meta** — `index, follow`
- **sitemap.xml** — homepage + 5 páginas de servicios
- **robots.txt** — permite indexación, apunta al sitemap
- **H1 correcto** — el slogan del Hero es el `<h1>` de la página
- **Jerarquía de headings** — H1 → H2 (secciones) → H3 (subsecciones)
- **HTML semántico** — `<nav>`, `<main>`, `<section>`, `<footer>`
- **Alt tags** — todas las imágenes tienen texto alternativo descriptivo
- **Favicon** — logo del estudio como ícono del sitio

### Completado fuera del código:
- [x] Registrado en Google Search Console, sitemap enviado y aceptado (6 páginas)
- [x] Dominio `grandeyasociados.com.ar` activo y propagado

### Archivos relacionados:
- `index.html` — meta tags, Open Graph, Twitter Cards, JSON-LD
- `public/sitemap.xml` — mapa del sitio
- `public/robots.txt` — directivas para crawlers

---

## Decisiones técnicas tomadas

| Decisión | Motivo |
|----------|--------|
| Vite en lugar de Next.js | Proyecto estático simple, sin necesidad de SSR |
| Hash routing en lugar de React Router | Funciona sin configuración especial en Vercel con Vite |
| Contenido centralizado en `contenido.js` | Facilita ediciones sin tocar componentes |
| Vercel como hosting | Deploy automático desde GitHub, gratuito, sin configuración |
| DNS delegados a Vercel desde NIC.ar | Permite manejar dominio `.com.ar` directamente desde Vercel |
| Teléfono redirige a WhatsApp | El estudio usa una línea fija con WhatsApp Business, toda comunicación va por ahí |
| EmailJS con Gmail intermedio | El SMTP de DattaWeb no conectaba desde EmailJS; se usa un Gmail dedicado como remitente |
