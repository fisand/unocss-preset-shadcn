import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './index.mdx'

import '@unocss/reset/antfu.css'
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
