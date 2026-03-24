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
- [x] SEO básico (meta tags, Open Graph)
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

---

## 📋 Pendiente
- [ ] Terminar configuración del servicio de Email (Email Services)
- [ ] Configurar línea de WhatsApp Business
- [ ] Conectar dominio propio (NIC.ar → Vercel)
  - Agregar registro CNAME `www` → `cname.vercel-dns.com`
  - Agregar registro A `@` → `76.76.21.21`

---

## 🔮 Futuro (fuera de scope de este proyecto)

- Portal de clientes → proyecto separado (`estudio-contable-portal`)
  - Next.js + Supabase
  - Autenticación de usuarios
  - Subida de documentos
  - Panel del contador y panel del cliente
  - URL: `app.dominio.com.ar`

---

## Decisiones técnicas tomadas

| Decisión | Motivo |
|----------|--------|
| Vite en lugar de Next.js | Proyecto estático simple, sin necesidad de SSR |
| Hash routing en lugar de React Router | Funciona sin configuración especial en Vercel con Vite |
| Contenido centralizado en `contenido.js` | Facilita ediciones sin tocar componentes |
| Vercel como hosting | Deploy automático desde GitHub, gratuito, sin configuración |
