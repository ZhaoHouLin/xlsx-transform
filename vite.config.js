import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import express from 'vite-plugin-express'

import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), express({
    // the server files export a middleware as default
    // this config can be a glob
    middlewareFiles: './server',
  }),],
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
  // build: {
  //   manifest: true,
  //   rollupOptions: {
  //     input: './src/server/main.js',
  //   },
  // },
})
