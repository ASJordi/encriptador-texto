import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/encriptador-texto/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})