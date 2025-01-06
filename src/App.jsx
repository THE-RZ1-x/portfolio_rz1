import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AnimatedBackground from './components/Background/AnimatedBackground'
import CV from './components/CV/CV'
import Social from './components/Social/Social'
import { darkTheme, lightTheme } from './styles/theme'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <div className="App">
          <AnimatedBackground />
          <div className="content-wrapper">
            <Navbar onThemeToggle={toggleTheme} currentTheme={theme} />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/social" element={<Social />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
