import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import { BrowserRouter } from 'react-router-dom'
//import './reset/reset.css'
import { SWRConfig } from 'swr'
import { fetcher } from './fetcher/fetcher'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
)
