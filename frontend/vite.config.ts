// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← this plugin does everything

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ← enables Tailwind automatically
  ],
  server: {
    host: true,   // helps with localhost / network access
    port: 5173,
  },
})