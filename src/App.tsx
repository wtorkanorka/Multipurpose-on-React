import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Main/Main'
import BlogPage from './pages/Blog/BlogPage'
import ArticlePage from './pages/Article/ArticlePage'
import Home from './pages/Home/Home'
import { ThemeContext } from './ThemeContext'
function App() {
  const [theme, setTheme] = useState('auto')
  const [searchForTagState, setSearchForTagState] = useState('')
  const [searchState, setSearchState] = useState('')
  const changeTheme = () => {
    if (theme == 'auto') {
      setTheme('light')
    } else if (theme == 'light') {
      setTheme('dark')
    } else if (theme == 'dark') {
      setTheme('auto')
    }
  }
  const searchForTag = (e: string) => {
    setSearchForTagState(e)
  }
  const changeSearchState = (e: string) => {
    setSearchState(e)
  }
  return (
    <>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/blog/1">Article</Link>
        </li>
      </ul>

      <ThemeContext.Provider
        value={{
          theme,
          toggle: changeTheme,
          searchState,
          toggleSearch: changeSearchState,
          searchForTagState,
          toggleTags: searchForTag,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
