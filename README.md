# Estudio Contable Grande & Asociados — Landing Page

Sitio web institucional del estudio contable. Desarrollado con React + Vite + Tailwind CSS. Deployado en Vercel.

**URL en producción:** https://estudio-contable-website.vercel.app  
**Repositorio:** https://github.com/GrandeJuan/estudio-contable-website  
**Estado:** ✅ En producción — pendiente conectar dominio propio (NIC.ar)

---

## Stack Técnico

- **Framework:** React 18
- **Bundler:** Vite
- **Estilos:** Tailwind CSS
- **Routing:** Hash-based (`#/servicio/{id}`)
- **Deploy:** Vercel (conectado a GitHub, auto-deploy en cada push)
- **Dominio:** Por conectar desde NIC.ar → Vercel

---

## Estructura del Proyecto

```
estudio-contable-website/
├── public/
│   └── images/
│       └── equipo/              # Fotos del equipo ✅
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SobreNosotros.jsx
│   │   ├── Servicios.jsx        # Grid de cards de servicios
│   │   ├── ServicioDetalle.jsx  # Página individual por servicio
│   │   ├── Equipo.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── contenido.js         # ⭐ FUENTE ÚNICA DE CONTENIDO
│   ├── App.jsx                  # Componente raíz + routing
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Regla de oro
**Todo el contenido editable está en `src/data/contenido.js`**. Para cambiar textos, servicios, datos de contacto, equipo o redes sociales, ese es el único archivo que hay que tocar.

---

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor de desarrollo → localhost:5173
npm run build     # Build de producción → carpeta dist/
npm run preview   # Vista previa del build
```

---

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Marino | `#1B2A4A` | Color principal |
| Dorado/Ámbar | `#D4A843` | Acento |
| Gris Claro | `#F9FAFB` | Fondos alternos |
| Blanco | `#FFFFFF` | Fondos principales |

---

## Funcionalidades

- [x] Diseño responsive (mobile, tablet, desktop)
- [x] Navegación suave entre secciones
- [x] Páginas individuales por servicio con FAQs
- [x] Integración WhatsApp y Email
- [x] Google Maps con dirección real
- [x] Fotos reales del equipo
- [x] Datos de contacto reales (teléfono, email, WhatsApp, dirección)
- [x] Textos y servicios aprobados
- [x] SEO básico con meta tags y Open Graph

---

## Pendientes (Landing)

- [ ] Conectar dominio propio desde NIC.ar
- [ ] Agregar logo del estudio en la sección Hero

---

## Relación con el Portal de Clientes

Esta landing page es **independiente** del portal de clientes que se desarrollará en el futuro.

| | Landing (este proyecto) | Portal de Clientes (futuro) |
|---|---|---|
| Repo | `estudio-contable-website` | `estudio-contable-portal` (nuevo) |
| Stack | React + Vite | Next.js |
| Deploy | Vercel | Vercel |
| URL | `www.dominio.com.ar` | `app.dominio.com.ar` |
| Base de datos | No | Supabase |
| Auth | No | Supabase Auth |

El portal se desarrollará en un repositorio separado y vivirá en un subdominio (`app.`), sin tocar este proyecto.
