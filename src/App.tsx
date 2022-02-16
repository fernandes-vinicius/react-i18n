import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from './components/LanguageSwitcher'

import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSwitcher />
        <h1>{t("welcome")}</h1>
        <h2>{t("whereYouCan")}</h2>
      </header>
    </div>
  )
}

export default App
