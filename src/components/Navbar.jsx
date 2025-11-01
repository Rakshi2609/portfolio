import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

const navItems = [
  { label: 'About', hash: '#about', to: '/#about' },
  { label: 'Projects', hash: '#projects', to: '/#projects' },
  { label: 'Skills', hash: '#skills', to: '/#skills' },
  { label: 'Experience', hash: '#experience', to: '/#experience' },
  { label: 'Contact', hash: '#contact', to: '/#contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollOrNavigate = useCallback((to) => {
    if (location.pathname !== '/') {
      navigate(to)
    } else {
      const id = to.split('#')[1]
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, navigate])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-neon-purple hover:text-neon-blue transition-colors">RG</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollOrNavigate(item.to)}
              className="text-slate-300 hover:text-white focus-visible:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Simple mobile menu can be added later */}
        </div>
      </div>
    </header>
  )
}
