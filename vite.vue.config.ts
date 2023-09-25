import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  root: resolve(__dirname, './vue-shadcn'),
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './vue-shadcn')}/`,
    },
  },
  plugins: [
    vue(),
    Unocss({
      shortcuts: [
        {
          'animate-accordion-up': 'accordion-up',
          'animate-accordion-down': 'accordion-down',
        },
      ],
      include: [/\.ts/, /\.vue$/, /\.vue\?vue/],
    }),
  ],
})
