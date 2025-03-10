import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Páginas
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/404_not_found" element={<NoPage />} />
        </Route>      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
