import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import AudioBooks from './pages/AudioBooks'
import AudioBookDetail from './pages/AudioBookDetail'
import NoPage from './pages/NoPage'
import LoadingSpinner from './pages/Loading'
import './index.css'
import "./i18n"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/libros" element={<Books />} />
            <Route path="/libros/:id" element={<BookDetail />} />
            <Route path="/audiolibros" element={<AudioBooks />} />
            <Route path="/audiolibros/:id" element={<AudioBookDetail />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/404_not_found" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
