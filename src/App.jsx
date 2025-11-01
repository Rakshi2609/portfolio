import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import ScrollToTopButton from './components/ScrollToTopButton'
import SplashCursor from './components/SplashCursor'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'

// import Cursor from './components/cursor'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function App() {
  const location = useLocation()
  // Force dark theme once on mount (no on-screen toggle)
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_left,rgba(122,92,255,.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(43,217,254,.12),transparent_40%)]">
      {/* <Cursor/> */}
      <SplashCursor />
      <Navbar />
      <main className="flex-1 container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.25 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
