import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

import Header from './layouts/Header.mdx'
import SideBar from './layouts/SideBar.mdx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex">
        <SideBar />
        <div className='markdown-body overflow-auto flex-1 py-4 px-8'>{useRoutes(routes)}</div>
      </main>
    </div>
  )
}
