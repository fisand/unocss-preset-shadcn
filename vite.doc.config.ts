import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'docs',
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [react(), Unocss(), mdx({})],
})