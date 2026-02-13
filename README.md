# Estudio Contable Grande & Asociados - Website

Sitio web institucional para el estudio contable, desarrollado con React, Vite y Tailwind CSS.

## 🚀 Características

- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (mobile, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Páginas individuales de servicios con detalles completos
- ✅ FAQs expandibles
- ✅ Integración con WhatsApp, Email y Redes Sociales
- ✅ Mapa de Google Maps integrado
- ✅ SEO optimizado
- ✅ Código limpio y bien organizado

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org)
- **npm** (viene con Node.js)

## 🛠️ Instalación

1. **Navegar al directorio del proyecto**
```bash
cd estudio-contable-website
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
El sitio estará disponible en: `http://localhost:5173`

## 📁 Estructura del Proyecto

```
estudio-contable-website/
├── public/
│   └── images/
│       └── equipo/          # Fotos del equipo (agregar aquí)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Hero.jsx         # Sección hero/inicio
│   │   ├── SobreNosotros.jsx
│   │   ├── Servicios.jsx    # Grid de servicios
│   │   ├── ServicioDetalle.jsx  # Página individual de servicio
│   │   ├── Equipo.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── contenido.js     # ARCHIVO CENTRALIZADO DE CONTENIDO
│   ├── App.jsx              # Componente principal con routing
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✏️ Personalización del Contenido

**TODO el contenido del sitio** se encuentra en un solo archivo: `src/data/contenido.js`

Para personalizar el sitio:

1. Abrir `src/data/contenido.js`
2. Editar los textos, servicios, miembros del equipo, etc.
3. Guardar el archivo
4. Los cambios se reflejarán automáticamente (hot reload)

### Secciones que puedes personalizar:

- ✅ Datos generales del estudio (nombre, teléfono, email, dirección)
- ✅ Slogan y descripción
- ✅ Textos de "Sobre Nosotros"
- ✅ Valores del estudio
- ✅ Servicios (nombre, descripción, detalles, FAQs)
- ✅ Miembros del equipo
- ✅ Información de contacto
- ✅ Redes sociales

## 🖼️ Agregar Imágenes

### Fotos del Equipo
1. Coloca las fotos en: `public/images/equipo/`
2. Nombrarlas: `persona-1.jpg`, `persona-2.jpg`, etc.
3. Actualizar las rutas en `src/data/contenido.js` si es necesario

**Recomendaciones:**
- Fotos cuadradas (400x400px idealmente)
- Formato JPG o PNG
- Fondo profesional o uniforme
- Buena iluminación

## 🎨 Colores del Sitio

El sitio usa una paleta de colores profesional:

- **Azul Marino** (#1B2A4A) - Color principal
- **Dorado/Ámbar** (#D4A843) - Color de acento
- **Gris Claro** (#F9FAFB) - Fondos alternos
- **Blanco** (#FFFFFF) - Fondos principales

Para cambiar los colores, buscar y reemplazar los valores hex en los componentes.

## 🌐 Navegación

El sitio tiene dos tipos de vistas:

### Vista Principal (Home)
- Hero
- Sobre Nosotros
- Servicios (grid con cards)
- Equipo
- Contacto

### Vistas de Servicios Individuales
Cada servicio tiene su propia página con:
- Descripción detallada
- Lista de servicios incluidos
- Preguntas frecuentes (FAQs)
- Sidebar con call-to-action
- Links a otros servicios

**Navegación:**
- Desde el grid de servicios → Click en cualquier card
- URL: `#/servicio/{id-del-servicio}`
- Botón "Volver al inicio" para regresar

## 📱 Responsive Design

El sitio está optimizado para:

- 📱 **Mobile** (< 768px)
- 💻 **Tablet** (768px - 1024px)
- 🖥️ **Desktop** (> 1024px)

Prueba el diseño responsive usando las DevTools del navegador (F12 → icono de dispositivo móvil)

## 🚀 Build para Producción

1. **Generar build optimizado**
```bash
npm run build
```

2. Los archivos optimizados quedarán en la carpeta `dist/`

3. **Vista previa del build**
```bash
npm run preview
```

## 🌍 Deploy / Hosting

### Opciones Recomendadas (todas gratuitas):

#### 1. Vercel (Más Fácil)
1. Crear cuenta en [vercel.com](https://vercel.com)
2. Conectar con GitHub
3. Importar el repositorio
4. Deploy automático ✅

#### 2. Netlify
1. Crear cuenta en [netlify.com](https://netlify.com)
2. Arrastrar la carpeta `dist/` a Netlify
3. Deploy ✅

#### 3. GitHub Pages
1. Instalar gh-pages: `npm install -D gh-pages`
2. Agregar scripts en package.json:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
3. Ejecutar: `npm run deploy`

## 🔗 Funcionalidades de Contacto

El sitio incluye integraciones con:

### WhatsApp
- Botón directo que abre WhatsApp Web/App
- Formato: `https://wa.me/5411XXXXXXXX`

### Email
- Links `mailto:` que abren el cliente de email
- Subject pre-configurado para consultas de servicios

### Mapa
- Google Maps embebido
- Muestra la ubicación del estudio
- Permite abrir en Google Maps para direcciones

## 🎯 SEO

El sitio incluye:

- ✅ Meta tags optimizados
- ✅ Open Graph para redes sociales
- ✅ Estructura semántica HTML5
- ✅ URLs amigables (hash-based routing)
- ✅ Títulos descriptivos
- ✅ Alt text en imágenes (cuando se agreguen)

## 📞 Soporte

Para cualquier duda sobre el código o personalización:

- Revisar los comentarios en `src/data/contenido.js`
- Cada componente tiene comentarios explicativos
- La estructura es modular y fácil de modificar

## 📝 Licencia

Este proyecto fue desarrollado específicamente para Estudio Contable Grande & Asociados.

---

**Desarrollado con ❤️ usando React + Vite + Tailwind CSS**
