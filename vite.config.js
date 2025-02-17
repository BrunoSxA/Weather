import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    port: 8080,
    open: true
  },
  preview: {
    open: true
  },
  root: './src', // Ruta del proyecto
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './src/index.html', // Aquí debes especificar la ubicación de tu archivo index.html
    } // Directorio de salida
  },
})
