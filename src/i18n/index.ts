import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// translations
import en from './locales/en/en.json'
import fr from './locales/fr/fr.json'
import ptBR from './locales/ptBR/ptBR.json'

i18n.use(initReactI18next).init({
  fallbackLng: "en", // default language
  interpolation: {
    escapeValue: false // ignore xss injection (React already does this)
  },
  resources: { en, fr, ptBR }
})

export default i18n
