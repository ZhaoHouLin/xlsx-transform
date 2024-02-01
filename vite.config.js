import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import path from 'node:path'

import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }, css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/style.styl')}"`
      }
    }
  },
  // base: process.env.VITE_BASE_PATH,
  build: {
    chunkSizeWarningLimit: 1500
  }
})
