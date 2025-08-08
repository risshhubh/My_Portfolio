import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/My_Portfolio/', // 🔹 Repo name for GitHub Pages
  plugins: [
    react(),
    tailwindcss()
  ],
})
