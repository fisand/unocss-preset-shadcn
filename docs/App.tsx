import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

import Header from './layouts/Header.mdx'
import SideBar from './layouts/SideBar.mdx'

const extraClassList = [
  'relative absolute right-4 inline-flex w-6 h-6 bg-gray-500 cursor-pointer i-tabler:checks i-tabler:copy',
]

export default function App() {
  useEffect(() => {
    let timerId: number | undefined = undefined

    async function copyHandler(e: MouseEvent) {
      if (
        e.target &&
        (e.target as Element).tagName.toLowerCase() === 'span' &&
        (e.target as Element).classList.contains('shadcn-copy')
      ) {
        const target = e.target as HTMLSpanElement
        const toggleClass = () => {
          target.classList.toggle('i-tabler:copy')
          target.classList.toggle('i-tabler:checks')
        }

        if (timerId) {
          window.clearTimeout(timerId)
          timerId = undefined
        }

        if (target.dataset.code) {
          await navigator.clipboard.writeText(target.dataset.code)
          toggleClass()

          timerId = window.setTimeout(() => {
            toggleClass()
          }, 2000)
        }
      }

      // open sidebar
      if (
        e.target &&
        (e.target as Element).tagName.toLowerCase() === 'span' &&
        (e.target as Element).classList.contains('i-lucide:panel-left-open')
      ) {
        const aside = document.querySelector('aside')
        aside?.classList.add('!block')
        return
      }

      if (e.target) {
        const aside = document.querySelector('aside')
        aside?.classList.contains('!block') && aside?.classList.remove('!block')
      }
    }
    if (window) {
      window.addEventListener('click', copyHandler)
    }

    return () => window.removeEventListener('click', copyHandler)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex">
        <SideBar />
        <div className="markdown-body overflow-auto flex-1 py-4 px-8">{useRoutes(routes)}</div>
      </main>
    </div>
  )
}
