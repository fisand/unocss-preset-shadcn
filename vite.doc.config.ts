import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import mdx from '@mdx-js/rollup'
import Pages from 'vite-plugin-pages'
import rehypeHighlight from 'rehype-highlight'
import { visit } from 'unist-util-visit'
import { toString } from 'hast-util-to-string'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'docs',
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Unocss(),
    mdx({
      rehypePlugins: [
        rehypeHighlight as any,
        () => {
          return (tree) => {
            visit(tree, 'text', (node, index, parent) => {
              if (node.value.includes('[x]') && parent.tagName === 'li') {
                node.value = node.value.replace('[x]', '')
                parent.children = [
                  {
                    type: 'element',
                    tagName: 'input',
                    properties: {
                      type: 'checkbox',
                      disabled: true,
                      checked: true,
                      className: 'task-list-item-checkbox'
                    }
                  },
                  ...parent.children
                ]
                parent.properties.className = ['task-list-item']
              }
            })
            visit(tree, 'element', (node) => {
              if (['pre'].includes(node.tagName)) {
                const code = node.children.find((child) => child.tagName === 'code')
                const stringContent = toString(code)

                const genCopyBtn = () => {
                  function handleCopy(e) {
                    console.log(e)
                  }

                  return {
                    type: 'element',
                    tagName: 'span',
                    properties: {
                      className: [
                        'shadcn-copy absolute right-4 inline-flex bg-gray-500 w-6 h-6 cursor-pointer i-tabler:copy',
                      ],
                      dataCode: stringContent,
                    },
                  }
                }

                node.properties.className = [...(node.properties.className ?? []), 'relative']
                node.children.unshift(genCopyBtn())
              }
            })
          }
        },
      ],
    }),
    Pages({
      dirs: 'pages',
      extensions: ['mdx', 'tsx', 'jsx', 'ts', 'js'],
      importMode: 'sync',
    }),
  ],
})
