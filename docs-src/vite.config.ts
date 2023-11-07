import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/unipoints/',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
