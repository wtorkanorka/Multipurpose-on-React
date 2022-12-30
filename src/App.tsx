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
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const [globalTheme, setGlobalTheme] = useState<boolean>(mql.matches)
  const [stateInvertColor, setStateInvertColor] = useState<number>(0)

  const changeTheme = () => {
    if (theme == 'auto') {
      if (mql.matches) {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
        setTheme('light')
      } else {
        document.body.classList.add('dark-mode')
        document.body.classList.remove('light-mode')
        setTheme('dark')
      }
    } else if (theme == 'light') {
      setTheme('dark')
    } else if (theme == 'dark') {
      setTheme('light')
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
      <ThemeContext.Provider
        value={{
          windowsThemeIsDark: globalTheme,
          theme,
          toggle: changeTheme,
          searchState,
          toggleSearch: changeSearchState,
          searchForTagState,
          toggleTags: searchForTag,
          stateInvertColor,
          setStateInvertColor,
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
