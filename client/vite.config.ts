import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// Proxy target (your backend server)
const API_TARGET = "http://localhost:8000";

// Clean and scalable Vite config
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    proxy: {
      "/list-questions": {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      },
      "/list-revisions": {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      },
      "/add-questions": {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      },
      // Add more routes here if needed
    },
  },
});
