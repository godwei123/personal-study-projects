import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dtsPlugin from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dtsPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./examples', import.meta.url)),
      '~': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: 'packages/index.ts',
      name: 'vue-chatui',
      fileName: (format) => `vue-chatui.${format}.js`
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
