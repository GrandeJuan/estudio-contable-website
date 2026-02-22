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
- Hash routing manual (sin React Router)
- Sin backend, sin base de datos

---

## Reglas importantes al trabajar en este proyecto

1. **Todo el contenido está en `src/data/contenido.js`** — si hay que cambiar textos, servicios, contacto o equipo, ese es el único lugar.

2. **No instalar librerías innecesarias** — el proyecto es intencionalmente simple y liviano.

3. **No cambiar el sistema de routing hash** (`#/servicio/{id}`) sin consultar, ya que es necesario para que funcione correctamente en Vercel con Vite.

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
App.jsx → lee la URL hash y decide qué renderizar
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

| Variable | Hex |
|----------|-----|
| Azul Marino (principal) | `#1B2A4A` |
| Dorado (acento) | `#D4A843` |
| Gris claro (fondos) | `#F9FAFB` |
| Blanco | `#FFFFFF` |

---

## Qué NO hacer en este proyecto

- ❌ No agregar backend o API routes (esto es solo frontend estático)
- ❌ No migrar a Next.js (el portal de clientes futuro será Next.js, no este)
- ❌ No agregar autenticación ni base de datos
- ❌ No romper el build de Vite — siempre verificar con `npm run build` antes de commitear
