import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n/config'

function Navbar() {
  const { t } = useTranslation()

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en'

    i18n.changeLanguage(newLanguage)

    localStorage.setItem('language', newLanguage)
  }

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
              {t('navigation.about')}
            </a>

            <a href="#skills" className="transition hover:text-white">
              {t('navigation.skills')}
            </a>

            <a href="#projects" className="transition hover:text-white">
              {t('navigation.projects')}
            </a>

            <a href="#experience" className="transition hover:text-white">
              {t('navigation.experience')}
            </a>

            <a href="#contact" className="transition hover:text-white">
              {t('navigation.contact')}
            </a>

            <button
              type="button"
              onClick={changeLanguage}
              className="rounded-md border border-slate-700 px-3 py-1.5 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
              aria-label="Change language"
            >
              {i18n.language === 'en' ? '🇲🇽 ES' : '🇺🇸 EN'}
            </button>
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
              {t('navigation.about')}
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              {t('navigation.skills')}
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              {t('navigation.projects')}
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              {t('navigation.experience')}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-slate-400 transition hover:text-white"
            >
              {t('navigation.contact')}
            </a>

            <button
              type="button"
              onClick={changeLanguage}
              className="self-start rounded-md border border-slate-700 px-3 py-1.5 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              {i18n.language === 'en' ? '🇲🇽 ES' : '🇺🇸 EN'}
            </button>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar