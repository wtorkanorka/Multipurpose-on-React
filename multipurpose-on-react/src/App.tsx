import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import BlogPage from './pages/Blog/BlogPage'
import ArticlePage from './pages/Article/ArticlePage'
import SecondHome from './pages/SecondHome/SecondHome'
import ContentWrapper from './components/ContentWrapper/ContentWrapper'

function App() {
  return (
    <>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/:1">SecondHome</Link>
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
        <Route path="/:id" element={<SecondHome />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
