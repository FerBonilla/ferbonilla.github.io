import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import es from './locales/es'

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language')

  if (savedLanguage === 'en' || savedLanguage === 'es') {
    return savedLanguage
  }

  return navigator.language.startsWith('es') ? 'es' : 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n