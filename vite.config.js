import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // ensure correct paths for production
  build: {
    outDir: 'dist', // production build folder
    assetsDir: 'assets', // folder for JS/CSS/images
  },
})
