import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useState, useEffect, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import { darkTheme, lightTheme } from './styles/theme'
import RatToolsPost from './components/Blog/BlogPost'
import CodespaceRdpPost from './components/Blog/CodespaceRdpPost'
import WorkflowRdpPost from './components/Blog/WorkflowRdpPost'
import './App.css'

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <div className="App">
          <AnimatedBackground />
          <Navbar onThemeToggle={toggleTheme} currentTheme={theme} />
          <div className="content-wrapper">
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
                  <Route path="/cv" element={<PageTransition><CV /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
                  <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                  <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                  <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                  <Route path="/blog/rat-tools" element={<PageTransition><RatToolsPost /></PageTransition>} />
                  <Route path="/blog/codespace-rdp" element={<PageTransition><CodespaceRdpPost /></PageTransition>} />
                  <Route path="/blog/workflow-rdp" element={<PageTransition><WorkflowRdpPost /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="/social" element={<PageTransition><Social /></PageTransition>} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
