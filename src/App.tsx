import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Main/Main'
import BlogPage from './pages/Blog/BlogPage'
import ArticlePage from './pages/Article/ArticlePage'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/blog/1">Article</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
