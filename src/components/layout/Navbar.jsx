import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto max-w-5xl">

        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={closeMenu}
            className="font-bold text-white"
          >
            Fernando Bonilla
          </a>

          {/* Desktop menu */}
          <div className="hidden gap-6 text-sm text-slate-400 sm:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-white sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-slate-800 pt-4 sm:hidden">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              Contact
            </a>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar