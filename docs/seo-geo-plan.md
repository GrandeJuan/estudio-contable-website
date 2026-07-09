# Plan de visibilidad orgánica — SEO + GEO/LLM SEO

**Sitio:** https://grandeyasociados.com.ar — Estudio Contable Grande & Asociados
**Autor:** Especialista SEO/GEO del Estudio · **Fecha:** 2026-07-09 · **Modo:** estudio-solo
**Stack:** Vite + React, rutas reales + prerender estático (SSG con `vite-react-ssg`), deploy en Vercel
**Contenido centralizado en:** `src/data/contenido.js` · **SEO en:** `src/seo.js` + `src/components/Seo.jsx`

> Solo white-hat. El orgánico tarda: Local SEO puede mover la aguja en **4–8 semanas**; el
> contenido y la autoridad, en **3–6 meses**. Nada de rankings garantizados. Este doc es la capa
> **estratégica y de contenido** que hoy no existe — la base técnica ya está resuelta.

---

## 0. Resumen ejecutivo (lo más importante primero)

La base técnica quedó **muy bien**: SSG real, contenido en el HTML inicial, un H1 por página,
jerarquía de headings correcta, JSON-LD presente, sitemap y robots limpios. **Eso ya no es el
cuello de botella.** El cuello de botella ahora es de **negocio y contenido**:

1. 🔴 **No hay Google Business Profile** (o no está optimizado/verificado). Para un estudio con
   dirección física en CABA, esto es lo que **más rápido** trae clientes. Máxima prioridad.
2. 🔴 **El sitio no tiene contenido que capture demanda.** Todas las búsquedas reales de valor
   ("recategorización monotributo julio 2026", "SRL o SA cuál conviene", "cuánto cobra un contador")
   las ganan competidores **con blog fechado**. Grande tiene 0 artículos. Es el mayor gap orgánico.
3. 🔴 **La marca es invisible en buscadores y en answer-engines.** Sondeé Google y consultas de
   categoría: no aparece ni por marca ni por servicio. Baseline GEO = **cero citaciones**.
4. 🟡 **Faltan quick-wins de schema** que ya están "gratis": `FAQPage` (hay FAQs en 4 de 5
   servicios sin marcar), enriquecer el `AccountingService`/local, y `hasMap`/`priceRange`.
5. 🟡 **Robots no está optimizado para IA ni Bing.** No hay guiño explícito a GPTBot/PerplexityBot/
   ClaudeBot, ni el sitio está en Bing Webmaster Tools (ChatGPT/Copilot usan Bing).
6. 🟡 **Desactualización de entidad:** el sitio dice "AFIP"; desde fines de 2024 el organismo es
   **ARCA** (ex-AFIP). Y el catálogo societario menciona SA/SRL/SAU pero **omite SAS**, el vehículo
   más buscado por emprendedores/startups.

**Orden de ataque recomendado:** (1) Google Business Profile → (2) quick-wins de schema/entidad →
(3) primeros 4 artículos de contenido → (4) infra GEO/Bing → (5) autoridad/citations sostenido.

---

## 1. Auditoría con evidencia

### 1.1 Técnico — qué verifiqué en vivo y en el repo

| Chequeo | Estado | Evidencia |
|---|---|---|
| Contenido en HTML inicial (sin ejecutar JS) | ✅ Bien | WebFetch a la home y a `/servicio/liquidacion-impuestos` devuelve el texto completo, listas y FAQs en el HTML servido. El SSG funciona. |
| Un solo H1 por página | ✅ Bien | Home: `Soluciones a tu medida`. Servicio: `Liquidación de Impuestos`. |
| Jerarquía H1→H2→H3 | ✅ Bien | Servicio: H2 "Descripción", "Qué incluye", "Preguntas Frecuentes"; H3 por cada FAQ. |
| `title` único por página | ✅ Bien | `src/seo.js`: home y `servicioSeo()` generan títulos distintos. |
| `meta description` única | ✅ Bien (en el código) | `src/seo.js` la deriva por página. (El modelo de WebFetch no expone `<head>` crudo, pero el código lo inyecta vía `Seo.jsx`.) |
| Canonical por página | ✅ Bien | `canonical` por ruta en `seo.js`. |
| `robots.txt` | ✅ Permisivo y correcto | `User-agent: * / Allow: / + Sitemap`. Mejorable para IA (ver §5). |
| `sitemap.xml` | ✅ Real, sin `#` | 6 URLs (home + 5 servicios), `lastmod` 2026-07-09. |
| JSON-LD | ✅ Presente | `AccountingService` (home) + `Service`+`BreadcrumbList` (servicios). Mejorable (ver §4). |
| **`FAQPage` schema** | ❌ **Falta** | Hay FAQs en 4 servicios (contabilidad, impuestos, sueldos, auditoría, societario) sin marcar. Quick-win de rich results. |
| Core Web Vitals | ⚠️ No medible acá | No pude correr Lighthouse en este entorno (requiere Chrome headless, no garantizado en Windows). La pasada previa optimizó imágenes a WebP (hero 492KB→51KB), width/height, lazy-load. **Dependencia de Juan:** correr PageSpeed Insights (gratis) — ver §6/§8. |
| hreflang / i18n | N/A | El sitio es solo español (público AR). No aplica es/en/pt acá. Correcto. |

**Veredicto técnico:** sólido. No hay que rehacer nada; solo agregar `FAQPage` y enriquecer el
JSON-LD. El trabajo real está en negocio, contenido y autoridad.

### 1.2 On-page / contenido — diagnóstico

- **Home ~800–900 palabras**, institucional y correcta, pero **genérica**: dice "soluciones a tu
  medida", "más de 30 años", valores. No captura ninguna búsqueda de intención. Falta señal local
  fuerte en el copy visible (barrio, "contador en el centro / microcentro / Av. Corrientes").
- **Páginas de servicio**: buena estructura (descripción + "qué incluye" + FAQs). Thin-content NO es
  un problema grave, pero les falta profundidad de long-tail y señales locales. Son la base perfecta
  para expandir.
- **Cero contenido informacional** (blog/guías). Es el gap #1 de captación orgánica.
- **Entidad desactualizada**: "AFIP" en `index.html` keywords y textos. Hoy es **ARCA (ex-AFIP)**.
  Conviene usar ambos ("ARCA (ex-AFIP)") porque la gente todavía busca "AFIP".

### 1.3 Local — diagnóstico

- NAP en el sitio consistente (Av. Corrientes 1257, 3° F, CABA · +54 11 4384-8924). ⚠️ **Ojo**: el
  sitio usa dos emails — `info@grandeyasoc.com.ar` (contenido.js) y el brief menciona
  `info@grandeyasociados.com.ar`. **Unificar** (define uno y usalo en todos lados: sitio, GBP,
  directorios, firma de mail). La inconsistencia de NAP diluye señal local.
- Sin evidencia de **Google Business Profile** activo (no aparece en las búsquedas de marca). Es la
  pieza que falta más urgente.
- `sameAs` en JSON-LD solo tiene LinkedIn de empresa. Faltan perfiles (GBP, directorios, LinkedIn de
  los socios ya existen en `contenido.js` y podrían sumarse).

### 1.4 GEO / answer-engines — baseline (cualitativo)

Sondeé con WebSearch (aproxima lo que los answer-engines "ven" e indexan):

- **Consulta de marca** ("Estudio Contable Grande y Asociados Corrientes 1257 CABA"): **no aparece**.
  Los motores devuelven otros estudios. La entidad "Grande & Asociados" **no está en el knowledge
  graph** ni es reconocible para los LLMs todavía.
- **Consultas de categoría** ("mejor estudio contable CABA para PyMEs", "estudio contable CABA"):
  aparecen Piacentini, ALWA, del Amo, Giuliani, Lugones, Canudas, Grabar, Lorenzo — **nunca Grande**.
- **Consultas informacionales** ("recategorización monotributo julio 2026 paso a paso", "SRL o SA
  cuál conviene costo"): dominadas por estudios **con blog fechado y actualizado** (Bertora Brown,
  Sterba y Asoc., Wynges, Contablix, Conta Online, Estudio La Mota) y medios (iProfesional). Estos
  son exactamente los contenidos que los LLMs citan.

**Baseline GEO = 0 citaciones.** La buena noticia: el patrón es clarísimo — **quien publica guías
extraíbles y fechadas, gana la cita**. Es un juego de contenido + schema + consistencia de entidad,
todo white-hat y alcanzable.

### 1.5 Competencia — qué hacen que Grande no

| Estudio | Qué hace bien | Gap de Grande |
|---|---|---|
| **Bertora Brown** (estudiobertorabrown.com.ar) | Blog con guías fechadas ("Cuánto cobra un contador 2026", "Recategorización julio 2026") que rankean y se citan | Sin blog |
| **Sterba y Asoc.** | Sección noticias/blog por tema ARCA, muy fresca | Sin blog |
| **Contablix / Conta Online** | Hubs de contenido + **calculadoras** (monotributo, sociedades) que atraen links | Sin herramientas ni guías |
| **Estudio La Mota** | Artículos comparativos ("SAS, SRL o SA cuál conviene 2026") bien estructurados | Sin contenido comparativo |
| **Giuliani** | Buen targeting local transaccional ("Contabilidad PyMEs en CABA") | Grande no explota señal local en copy; pero Giuliani **tampoco** tiene schema/FAQ/GBP visible → oportunidad de superarlo con nuestra base técnica ya sólida |

**Insight competitivo:** los que rankean **no** tienen mejor sitio técnico que Grande — tienen
**más contenido**. La base técnica de Grande (SSG, schema) ya es mejor que la de varios. Sumando
contenido + GBP, Grande puede superarlos.

---

## 2. Estrategia — qué targetear y por qué

### 2.1 Prioridad de canales (por rapidez de retorno)

1. **Local SEO (GBP + citations)** → resultados en semanas. Es donde un estudio con oficina física
   gana clientes cercanos con alta intención ("contador cerca de mí", "estudio contable microcentro").
2. **Contenido informacional (guías)** → resultados en 3–6 meses, pero es lo que construye tráfico
   compuesto y **citaciones en IA**.
3. **On-page + schema de servicios** → refuerza lo transaccional (mejora en semanas–meses).
4. **Autoridad/off-page (directorios, menciones)** → lento y sostenido; alimenta SEO y GEO a la vez.

### 2.2 Arquitectura de keywords e intención

**Transaccional / comercial (alta intención — priorizar en home y servicios):**
- "estudio contable CABA", "contador público CABA / microcentro / Av. Corrientes / Congreso"
- "estudio contable para PyMEs Buenos Aires", "contador para monotributistas CABA"
- "liquidación de sueldos [empresa/pyme] CABA", "liquidación de impuestos CABA"
- "constitución de SRL / SA / SAS IGJ Buenos Aires", "contador para comercios CABA"
- Estos son **long-tail locales alcanzables** para un sitio nuevo/chico. NO pelear por "contador
  Argentina" (demasiado amplio) al principio.

**Informacional (guías / blog — captura demanda y alimenta GEO):**
- "cómo recategorizar monotributo julio 2026 paso a paso" (estacional, altísimo volumen 2 veces/año)
- "cuánto cobra un contador en 2026 / honorarios contador"
- "SAS vs SRL vs SA cuál conviene 2026 costos"
- "cómo constituir una SRL ante IGJ paso a paso"
- "calendario de vencimientos ARCA / impositivo 2026"
- "qué es la planificación fiscal", "monotributo vs responsable inscripto qué conviene"
- "qué libros contables son obligatorios", "cómo leer un balance"

> **Regla de oro:** cada guía informacional debe enlazar internamente al servicio transaccional que
> resuelve ese problema (la guía de recategorización → `/servicio/liquidacion-impuestos`; SAS/SRL →
> `/servicio/societario`). Así el contenido no solo trae tráfico: **convierte**.

### 2.3 Entidades a consolidar (clave para SEO local y para el knowledge graph de las IAs)

Mismo **nombre, dirección, teléfono, email** en todos lados. Entidades a nombrar consistentemente:
"Estudio Contable Grande & Asociados", "Cr. Horacio Grande", "Cr. Leonardo Wacs", "Av. Corrientes
1257, CABA", "ARCA (ex-AFIP)", "IGJ", "Consejo Profesional de Ciencias Económicas de CABA (CPCECABA)".

### 2.4 E-E-A-T (Experiencia, Expertise, Autoridad, Confianza)

Un estudio contable es **YMYL** (Your Money Your Life): Google exige señales de confianza fuertes.
- **Autoría real**: firmar las guías con el contador (Cr. Horacio Grande / Cr. Leonardo Wacs), con
  matrícula CPCECABA. Da E-E-A-T y es diferencial vs. blogs anónimos.
- **Página "Nosotros" robusta** con credenciales (UBA, UADE, matrícula, años).
- **Reseñas** en Google Business (prueba social + señal de ranking local).

---

## 3. Tácticas on-page listas para usar (titles/metas)

Los títulos actuales están bien pero son **puramente de marca**. Propongo versiones con **keyword +
señal local** por delante (más CTR y relevancia). Se editan en `src/seo.js`.

### Home
- **Title actual:** `Estudio Contable Grande & Asociados | Servicios Contables e Impositivos en Buenos Aires`
- **Sugerido:** `Estudio Contable en CABA | Grande & Asociados — Contadores hace +30 años`
- **Description sugerida:** `Estudio contable en Av. Corrientes 1257, CABA. Contabilidad, impuestos (ARCA), sueldos, auditoría y sociedades para PyMEs, comercios y monotributistas. +30 años. Pedí una consulta.`

### Servicios (patrón: `[Servicio] en CABA | [beneficio corto] — Grande & Asociados`)

| Página | Title sugerido | Description sugerida (≤155c) |
|---|---|---|
| contabilidad-general | `Contabilidad para PyMEs en CABA | Grande & Asociados` | `Contabilidad integral, balances y outsourcing contable para empresas y comercios en CABA. Información al día para decidir. +30 años de experiencia.` |
| liquidacion-impuestos | `Liquidación de Impuestos y Asesoría ARCA en CABA | Grande & Asociados` | `Liquidación de IVA, Ganancias, IIBB y Monotributo. Planificación fiscal y atención de fiscalizaciones ARCA (ex-AFIP) en CABA. Consultá con contadores.` |
| liquidacion-sueldos | `Liquidación de Sueldos y Cargas Sociales en CABA | Grande & Asociados` | `Liquidación mensual de sueldos, recibos, cargas sociales y rúbrica bajo todos los convenios. Para PyMEs y comercios en CABA. Pedí presupuesto.` |
| auditoria | `Auditoría de Estados Contables en CABA | Grande & Asociados` | `Auditoría y certificaciones bajo normas profesionales para bancos y organismos. Estados contables anuales e intermedios en CABA. Contadores matriculados.` |
| societario | `Constitución de Sociedades SRL, SA y SAS ante IGJ | Grande & Asociados` | `Constitución de SRL, SA, SAS y SAU ante IGJ, balances y modificaciones societarias en CABA. Te asesoramos qué sociedad te conviene. +30 años.` |

> Nota: `servicioSeo()` hoy arma el title como `${nombre} | ${NOMBRE}`. Para usar estos títulos con
> keyword local conviene agregar un campo opcional `seoTitle`/`seoDescription` por servicio en
> `contenido.js` y que `seo.js` lo use si existe (fallback al actual). Spec en §7.

### Contenido on-page a agregar (bajo impacto de esfuerzo, alto de señal)
- **Home:** un párrafo con señal local explícita ("En pleno microcentro porteño, sobre Av.
  Corrientes al 1200, a metros del Obelisco y Tribunales…") y mención de **ARCA (ex-AFIP)**.
- **Servicio societario:** agregar **SAS** al copy y FAQs (hoy solo SA/SRL/SAU). Es el tipo más
  buscado por emprendedores y hoy es un gap de keyword.
- Reemplazar "AFIP" por "ARCA (ex-AFIP)" en `index.html` keywords y textos.

---

## 4. JSON-LD nuevo y mejorado (listo para implementar)

### 4.1 `FAQPage` por servicio — QUICK WIN 🔴 (rich results + citación IA)

Las FAQs ya existen en `contenido.js`. Marcarlas con `FAQPage` habilita el rich result de FAQ en
Google y las hace **directamente extraíbles por los answer-engines**. Generar en `seo.js` y sumar al
array de `servicioJsonLd(servicio)`:

```js
// En src/seo.js — agregar dentro de servicioJsonLd(servicio), al array que retorna:
function faqPageJsonLd(servicio) {
  const faqs = servicio.detalles?.faqs;
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };
}
// ...y en el return de servicioJsonLd, filtrando nulos:
//   return [ serviceObj, breadcrumbObj, faqPageJsonLd(servicio) ].filter(Boolean);
```

### 4.2 Enriquecer `AccountingService` (home) — 🟡

Agregar campos que refuerzan señal local y de entidad (los datos ya existen):

```js
// Sumar a accountingServiceJsonLd en src/seo.js:
priceRange: '$$',
areaServed: [
  { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
  { '@type': 'AdministrativeArea', name: 'AMBA' },
],
hasMap: 'https://maps.google.com/?q=Av.+Corrientes+1257+CABA',
knowsLanguage: 'es-AR',
// sameAs: sumar GBP (cuando esté), y LinkedIn de los socios ya presentes en contenido.js
sameAs: [
  contenido.estudio.redesSociales.linkedin,
  'https://www.linkedin.com/in/horacio-grandeyasoc/',
  'https://www.linkedin.com/in/leonardo-wacs-6314261a6/',
  // '<URL de Google Business Profile cuando exista>',
],
// Opcional cuando haya reseñas reales en Google (NUNCA inventar):
// aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '<n real>' },
```

> ⚠️ **Nunca** poner `aggregateRating` con datos inventados — es contra las políticas y white-hat.
> Solo cuando haya reseñas reales verificables.

### 4.3 Breadcrumb — fix menor 🟢
`servicioJsonLd` usa `item: ${SITE_URL}/#servicios` (hash) para el nivel "Servicios". Es aceptable,
pero si en el futuro hay una página `/servicios` real, apuntar ahí. Bajo impacto.

### 4.4 Validación
Tras implementar: validar en **Rich Results Test** y **Schema Markup Validator** (ambos gratis,
Google). Dependencia parcial de Juan (o del `/bullet` que implemente y valide en preview).

---

## 5. Infra GEO / LLM SEO (listo para usar)

### 5.1 `robots.txt` — permitir explícitamente crawlers de IA 🟡

Hoy `User-agent: *` ya los permite implícitamente, pero declararlos explícitamente es una señal
clara y a prueba de cambios. **Decisión recomendada: PERMITIR** (queremos visibilidad en IA; para un
estudio, ser citado por ChatGPT/Perplexity/Gemini es marketing gratis y reputación). Reemplazar
`public/robots.txt` por:

```
# Buscadores tradicionales y todos los bots
User-agent: *
Allow: /

# Crawlers de motores de IA — permitidos explícitamente para ganar visibilidad/citación
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://grandeyasociados.com.ar/sitemap.xml
```

> Si en algún momento Juan quiere **bloquear** el entrenamiento de modelos por política (sin perder
> el search de IA), la decisión matizada sería: permitir `OAI-SearchBot`/`PerplexityBot`/`ChatGPT-User`
> (búsqueda/citación en vivo) y bloquear `GPTBot`/`Google-Extended`/`Applebot-Extended` (entrenamiento).
> Para un estudio que quiere clientes, **recomiendo permitir todo**: el upside de visibilidad supera.

### 5.2 `llms.txt` — opcional, bajo esfuerzo 🟢
Un `public/llms.txt` con un resumen de la entidad y links a las páginas clave ayuda a algunos
agentes a entender el sitio. Aún es estándar emergente y no lo usan los grandes motores, pero es
barato. Contenido sugerido:

```
# Estudio Contable Grande & Asociados
> Estudio contable en CABA (Av. Corrientes 1257) con +30 años. Contabilidad, impuestos (ARCA),
> liquidación de sueldos, auditoría y servicios societarios (SRL/SA/SAS ante IGJ) para PyMEs,
> comercios y monotributistas en Buenos Aires / AMBA.

## Servicios
- Contabilidad general: https://grandeyasociados.com.ar/servicio/contabilidad-general
- Liquidación de impuestos: https://grandeyasociados.com.ar/servicio/liquidacion-impuestos
- Liquidación de sueldos: https://grandeyasociados.com.ar/servicio/liquidacion-sueldos
- Auditoría: https://grandeyasociados.com.ar/servicio/auditoria
- Societario: https://grandeyasociados.com.ar/servicio/societario

## Contacto
- Teléfono/WhatsApp: +54 11 4384-8924
- Dirección: Av. Corrientes 1257, 3° F, CABA
```

### 5.3 Bing Webmaster Tools — 🔴 para GEO
ChatGPT Search y Copilot se apoyan en el índice de **Bing**. Hoy el sitio probablemente no está
indexado ahí. **Dependencia de Juan:** dar de alta el sitio en Bing Webmaster Tools (gratis), enviar
el sitemap, verificar. Se puede importar la config directamente desde Google Search Console (Bing lo
permite en 2 clics). **Sin esto, el sitio es casi invisible para ChatGPT/Copilot.**

### 5.4 Contenido extraíble (la táctica GEO que más rinde)
Las IAs citan lo que pueden extraer sin ambigüedad. En cada guía y en las FAQs:
- **Respuesta directa en la primera oración** (definición o dato), luego el desarrollo.
- **Listas numeradas** para procesos ("pasos para recategorizar"), **tablas** para comparaciones
  (SRL vs SA vs SAS), **fechas explícitas** ("recategorización julio 2026: del 15/7 al 5/8").
- **Formato Q&A** (ya lo tenés en las FAQs → por eso `FAQPage` es tan valioso acá).
- **Nombrar la entidad** con datos completos al pie de cada guía (autor + estudio + CABA).

---

## 6. Plan de contenido (briefs listos)

Objetivo: capturar demanda informacional y ganar citaciones IA. **Requiere decisión de Juan**:
¿se agrega una sección `/blog` o `/guias` al sitio? Es una ruta nueva prerenderizada (SSG) — spec en
§7. Empezar con **4 artículos** de máximo impacto (los 2 primeros son estacionales y de alto volumen).

Cada brief: keyword objetivo · intención · H1 · estructura · schema · enlace interno.

**Artículo 1 — "Recategorización de Monotributo julio 2026: guía paso a paso" 🔴 (estacional, publicar YA)**
- Keyword: "recategorización monotributo julio 2026 paso a paso" · Intención: informacional urgente.
- H1: `Recategorización de Monotributo julio 2026: guía paso a paso`
- Estructura: qué es y por qué importa → **fechas exactas** (15/7 al 5/8/2026) → qué datos reunir
  (facturación 12 meses, alquileres, energía, superficie) → pasos en el portal ARCA (numerados) →
  qué pasa si no recategorizás (recat. de oficio) → tabla de categorías vigentes → CTA.
- Schema: `Article` + `FAQPage` + `HowTo` (pasos). Autor: Cr. matriculado.
- Enlace interno → `/servicio/liquidacion-impuestos`. **Actualizar cada semestre** (enero/julio).

**Artículo 2 — "¿Cuánto cobra un contador en 2026? Honorarios y qué incluye" 🔴**
- Keyword: "cuánto cobra un contador 2026 / honorarios contador CABA" · Intención: comercial-informacional.
- H1: `¿Cuánto cobra un contador en 2026? Guía de honorarios en CABA`
- Estructura: de qué depende el honorario → honorarios sugeridos CPCECABA por tarea (monotributo,
  RI, sueldos por empleado, balance, constitución de sociedad) → qué incluye un abono mensual → CTA.
- Schema: `Article` + `FAQPage`. Enlace interno → todos los servicios. Alta captación + genera confianza por transparencia.

**Artículo 3 — "SAS, SRL o SA: cuál conviene en 2026 (costos y comparación)" 🟡**
- Keyword: "SAS vs SRL vs SA cuál conviene" · Intención: informacional pre-transaccional.
- H1: `SAS, SRL o SA: qué sociedad te conviene en 2026`
- Estructura: **tabla comparativa** (socios mínimos, capital, costos constitución, obligaciones
  anuales, responsabilidad) → cuándo elegir cada una → costos orientativos IGJ 2026 → CTA.
- Schema: `Article` + `FAQPage`. Enlace interno → `/servicio/societario`. Muy citable por IA (tabla).

**Artículo 4 — "Calendario de vencimientos impositivos ARCA 2026" 🟡 (imán de tráfico recurrente)**
- Keyword: "vencimientos ARCA 2026 / calendario impositivo 2026" · Intención: informacional recurrente.
- H1: `Calendario de vencimientos impositivos 2026 (ARCA)`
- Estructura: tabla mensual de vencimientos (monotributo, IVA, Ganancias, IIBB, cargas sociales) →
  cómo no perderse un vencimiento → CTA "delegá tus vencimientos en nosotros".
- Schema: `Article`. Enlace interno → `/servicio/liquidacion-impuestos`. Tráfico todo el año.

**Backlog siguiente (cuando los 4 estén):** "Monotributo vs Responsable Inscripto: qué conviene",
"Cómo constituir una SRL ante IGJ paso a paso", "Qué libros contables son obligatorios",
"Qué es la planificación fiscal y cómo te ahorra impuestos".

> **Cadencia realista:** 2 artículos/mes es sostenible y suficiente para empezar a ver tracción en
> 3–4 meses. Calidad > cantidad (E-E-A-T). El contenido lo puede redactar el `escriba` con revisión
> técnica de un socio, o Juan con brief.

---

## 7. Specs para `ing-frontend` (implementar en un `/bullet`)

Todo esto es cambio de código; dejar specs claras para el bullet. Ninguno rompe el SSG.

1. **`FAQPage` schema** (🔴, ~1h): agregar `faqPageJsonLd()` en `src/seo.js` y sumarlo al array de
   `servicioJsonLd()` con `.filter(Boolean)`. Ver §4.1. Validar en Rich Results Test.
2. **Enriquecer `AccountingService`** (🟡, ~30min): sumar `priceRange`, `areaServed`, `hasMap`,
   `knowsLanguage`, `sameAs` ampliado. Ver §4.2. **No** agregar `aggregateRating` sin reseñas reales.
3. **Titles/descriptions con keyword local** (🟡, ~1h): agregar campos opcionales `seoTitle` y
   `seoDescription` por servicio en `contenido.js`; en `servicioSeo()`, usarlos si existen (fallback
   al patrón actual). Actualizar `homeSeo`. Ver §3.
4. **`robots.txt` para IA** (🟡, ~15min): reemplazar `public/robots.txt` por el de §5.1.
5. **`llms.txt`** (🟢, ~15min): crear `public/llms.txt` (§5.2). Verificar que Vite lo copie al build.
6. **Copy: ARCA + SAS + señal local** (🟡, ~1h): en `contenido.js`, reemplazar "AFIP" por "ARCA
   (ex-AFIP)"; agregar SAS al servicio societario (descripción, incluye, 1 FAQ); sumar párrafo local
   a la home. Actualizar `keywords` en `index.html`.
7. **Sección `/guias` (o `/blog`)** (🔴 pero mayor, decisión de Juan): ruta nueva prerenderizada.
   - Nueva ruta `/guias` (índice) + `/guias/{slug}` (artículo) en `src/routes.jsx` con
     `getStaticPaths` para que el SSG prerenderice cada artículo.
   - Contenido en `src/data/guias.js` (mismo patrón que `contenido.js`): slug, título, meta, autor,
     fecha, cuerpo (bloques), FAQs.
   - `seo.js`: helpers `guiaSeo()` y `guiaJsonLd()` (`Article`/`BlogPosting` + `FAQPage` + `HowTo`
     donde aplique), con `author` (Cr. + matrícula) y `datePublished`/`dateModified`.
   - Agregar las URLs de guías al `sitemap.xml` (o generarlo desde los datos en el build).
   - Enlace en Navbar/Footer a `/guias`.
   - **Gate obligatorio** antes de "hecho": `npm run build` + `npm run preview` y confirmar que cada
     `/guias/{slug}` sirve su `<title>`, contenido y JSON-LD en el HTML. (i18n no aplica: sitio es-AR.)

**CWV / performance:** si tras sumar contenido/imágenes de guías PageSpeed baja, coordinar con
`optimizador-performance` (mismo patrón WebP/lazy-load/width-height ya usado). No anticipo problemas.

---

## 8. Local SEO — plan de Google Business Profile (MÁXIMA PRIORIDAD 🔴)

Esto es lo que **más rápido** trae clientes y **casi todo depende de Juan** (verificaciones).

### 8.1 Crear/reclamar y verificar el perfil — depende de Juan
1. Ir a business.google.com y **crear/reclamar** "Estudio Contable Grande & Asociados".
2. **Verificación** (Google manda código por **correo postal** a Av. Corrientes 1257, o por teléfono/
   video según lo que ofrezca). ⚠️ El correo postal tarda 1–2 semanas → **iniciar YA**, es el
   cuello de botella temporal.

### 8.2 Optimización del perfil (checklist)
- **Categoría principal:** "Asesor fiscal" / "Contador" (elegir la más precisa disponible).
  **Categorías secundarias:** "Servicio de contabilidad", "Asesoría empresarial".
- **NAP idéntico al sitio** (nombre exacto, Av. Corrientes 1257 3° F CABA, +54 11 4384-8924).
  Definir **un solo email** (ver §1.3) y usarlo también acá.
- **Horario:** Lun–Vie 9:00–17:00 (igual al sitio y al JSON-LD).
- **Servicios:** cargar los 5 con descripción (Contabilidad, Impuestos, Sueldos, Auditoría, Societario).
- **Zona de servicio:** CABA + AMBA.
- **Sitio web:** https://grandeyasociados.com.ar
- **Fotos:** fachada del edificio, recepción, equipo (Cr. Grande y Cr. Wacs), logo. Min. 5–8. Las
  fotos reales de fachada ayudan a la verificación y al ranking local. (El `director-arte` puede
  preparar assets consistentes si hace falta.)
- **Atributos:** "se identifica como…", accesibilidad, idiomas (español).

### 8.3 Reseñas — depende de Juan (proceso continuo)
- Pedir reseñas a **clientes actuales satisfechos** (el estudio tiene 30 años → hay base). Mandar el
  link corto de reseña por WhatsApp/mail tras cerrar un trámite.
- **Meta inicial:** 10 reseñas reales en 60 días. **Responder todas** (señal de actividad).
- ❌ **Nunca** reseñas falsas ni incentivadas con pago — penalización y riesgo reputacional.
- Cuando haya reseñas reales, recién ahí sumar `aggregateRating` al JSON-LD (§4.2).

### 8.4 Google Posts — depende de Juan (ligero, recurrente)
Publicar 1–2 posts/mes en GBP: recordatorios de vencimientos, "recategorización de monotributo abre
el 15/7", novedades ARCA. Reusar los artículos del blog. Mantiene el perfil "vivo" (señal de ranking).

### 8.5 Citations / directorios argentinos — depende de Juan (NAP consistente)
Dar de alta el estudio con **NAP idéntico** en:
- **CPCECABA** (Consejo Profesional de Ciencias Económicas de CABA) — directorio de matriculados;
  máxima autoridad sectorial, muy valorada por Google **y por las IAs**.
- **Google Maps** (queda con el GBP), **Bing Places**, **Apple Business Connect** (Maps de Apple/Siri).
- Guías comerciales locales: PáginasAmarillas.com.ar, Guía Clarín, Cylex, directorios de PyMEs.
- LinkedIn de empresa (ya existe) — completar 100% con dirección y web.
- ⚠️ **Consistencia absoluta de NAP** en todos: cualquier variación (email distinto, "3°F" vs "3 F")
  diluye la señal. Definir el NAP canónico y copiar-pegar.

---

## 9. Autoridad / off-page (sostenido, 🟡–🟢)

- **Backlinks de calidad, white-hat:** perfil CPCECABA, cámaras (ej. cámara de comercio del barrio),
  menciones en notas de medios/blogs del sector (aportar como fuente experta). Nada de PBNs ni links
  comprados.
- **LinkedIn de los socios**: publicar los artículos del blog → tráfico + señal de autoría E-E-A-T.
- **Guest posts / colaboraciones** en portales PyME argentinos con link al sitio.
- **Consistencia de entidad** (mismos datos everywhere) → refuerza knowledge graph para Google y IAs.

---

## 10. KPIs y cadencia de medición

**Herramientas (todas gratis salvo aclaración):**
- **Google Search Console** (ya conectado) — cobertura, queries, posición, CTR, rich results, CWV.
- **GA4** — tráfico orgánico, páginas de entrada, conversiones (clicks a WhatsApp/mail/tel).
- **Bing Webmaster Tools** — indexación en Bing (importa para IA). **Alta pendiente (Juan).**
- **Google Business Profile Insights** — búsquedas, llamadas, clics a cómo llegar, vistas.
- **PageSpeed Insights** — CWV en campo y lab (correr mensual). **Dependencia de Juan.**
- **Sondeo manual de answer-engines** — preguntar en ChatGPT/Perplexity/Gemini por marca y categoría.

| KPI | Fuente | Baseline (hoy) | Cadencia | Meta 3–6 meses |
|---|---|---|---|---|
| Impresiones orgánicas | Search Console | ~0 (sitio nuevo) | Semanal | Crecimiento sostenido |
| Clicks + CTR orgánico | Search Console | ~0 | Semanal | CTR >2% en queries locales |
| Posición media (keywords locales) | Search Console | — | Quincenal | Top 10 en "[servicio] CABA" |
| Rich results (FAQ) válidos | Search Console / Rich Results Test | 0 | Post-deploy y mensual | 5 servicios con FAQ válido |
| Core Web Vitals | PageSpeed / Search Console | No medido | Mensual | Todo en verde |
| Tráfico orgánico | GA4 | ~0 | Mensual | Tendencia ascendente |
| Conversiones (WhatsApp/mail/tel) | GA4 (eventos) | — | Mensual | Definir baseline y crecer |
| **GBP: llamadas + "cómo llegar" + vistas** | GBP Insights | 0 (sin perfil) | **Semanal** | Perfil activo con tracción |
| **Reseñas Google** | GBP | 0 | Mensual | 10 en 60 días, luego +2/mes |
| Indexación en Bing | Bing WMT | No indexado | Mensual | 6 páginas indexadas |
| **Citaciones en answer-engines** | Sondeo manual | **0** (ni marca ni categoría) | Mensual | Aparecer en ≥1 consulta de categoría |

**Baseline GEO documentado (2026-07-09):** el estudio no aparece en Google ni en answer-engines para
consultas de marca ("Grande y Asociados Corrientes 1257") ni de categoría ("estudio contable CABA",
"mejor estudio contable PyMEs"). Competidores citados: Piacentini, ALWA, del Amo, Giuliani, Lugones,
Canudas, Bertora Brown, Sterba. **Cualquier aparición futura es progreso medible desde cero.**

---

## 11. Qué depende de Juan (resumen accionable)

| Acción | Prioridad | Esfuerzo | Nota |
|---|---|---|---|
| Crear/verificar **Google Business Profile** (correo postal → iniciar YA) | 🔴 | Medio | Verificación tarda 1–2 semanas |
| Definir **un solo email** canónico (unificar NAP) | 🔴 | Bajo | `grandeyasoc` vs `grandeyasociados` |
| Alta en **Bing Webmaster Tools** + enviar sitemap (importar de GSC) | 🔴 | Bajo | Clave para ChatGPT/Copilot |
| Pedir **reseñas** a clientes (link por WhatsApp) | 🔴 | Bajo continuo | 10 en 60 días |
| Alta en **CPCECABA** y directorios con NAP idéntico | 🟡 | Medio | Autoridad sectorial |
| Decidir sección **/guias** en el sitio y aprobar los 4 briefs | 🔴 | Decisión | Habilita todo el contenido |
| Aportar **fotos reales** (fachada, equipo) para GBP | 🟡 | Bajo | Ayuda verificación + ranking |
| Publicar **Google Posts** 1–2/mes | 🟢 | Bajo continuo | Reusar artículos |
| Correr **PageSpeed Insights** mensual | 🟢 | Bajo | Gratis |

**¿Vale la pena una SaaS paga (Ahrefs/Semrush)?** Todavía **no**. Con el sitio recién arrancando, las
herramientas gratis alcanzan: Search Console + GA4 + Bing WMT + GBP Insights cubren medición;
**AlsoAsked / AnswerThePublic / Google Keyword Planner** (gratis) cubren ideas de keywords. Considerar
**Ahrefs Webmaster Tools (free)** para ver backlinks propios. Recién cuando haya volumen de contenido
y quieras análisis de competencia/backlinks a escala (mes 6+), evaluar **1 mes de Semrush o Ahrefs**
puntual (no suscripción permanente) para una auditoría profunda. No gastar antes: no hay qué medir aún.

---

## 12. Roadmap sugerido (secuencia)

- **Semana 1–2 (quick wins + arranque local):** GBP creado y verificación iniciada · unificar email ·
  Bing WMT · `bullet` con `FAQPage` + `AccountingService` enriquecido + robots IA + llms.txt + ARCA/SAS.
- **Semana 3–4:** titles/descriptions locales · Artículo 1 (recategorización, estacional) publicado ·
  primeras reseñas pedidas · citations CPCECABA + directorios.
- **Mes 2:** sección `/guias` en producción · Artículos 2 y 3 · Google Posts arrancan.
- **Mes 3–4:** Artículo 4 + backlog · seguir reseñas · primer sondeo GEO de control · medir CWV.
- **Mes 5–6:** evaluar tracción en Search Console/GBP · decidir si vale una SaaS puntual · escalar
  contenido a 2/mes sostenido.

---

*Fin del plan. Solo white-hat. Sin promesas de ranking. Base técnica ya sólida; el trabajo es
negocio + contenido + autoridad, en ese orden de urgencia.*
