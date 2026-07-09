import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  // Prerender estático (SSG). Cada ruta se genera como carpeta/index.html
  // para servir URLs limpias (/servicio/{id}) en Vercel.
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'minify',
  },
})
