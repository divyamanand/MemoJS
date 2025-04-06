import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/list-questions': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/list-revisions': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/add-questions': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
