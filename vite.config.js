import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/wp-json": {
        target: "https://devsow.wpengine.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})