import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainRouter } from './router/MainRouter'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>

  </React.StrictMode>,
)
