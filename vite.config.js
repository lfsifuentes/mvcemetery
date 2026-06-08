import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        donate: resolve(__dirname, 'donate/index.html'),
        map: resolve(__dirname, 'map/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
})