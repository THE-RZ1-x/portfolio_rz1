import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AnimatedBackground from './components/Background/AnimatedBackground'
import CV from './components/CV/CV';
import Social from './components/Social/Social';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <Navbar />
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
    </Router>
  )
}

export default App
