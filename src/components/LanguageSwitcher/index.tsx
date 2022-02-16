import { useTranslation } from 'react-i18next'

import br from '../../assets/br.svg'
import fr from '../../assets/fr.svg'
import us from '../../assets/us.svg'

import './styles.css'

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br,
  },
  {
    name: "Français",
    value: "fr",
    flag: fr,
  },
  {
    name: "English",
    value: "en",
    flag: us,
  },
]

function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const handleChnngeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  }

  return (
    <div className='language-switcher'>
      <span>{t('selectYourLanguage')}</span>

      {languageOptions.map(({ flag, name, value }) => (
        <button key={value} onClick={() => handleChnngeLanguage(value)}>
          <img src={flag} alt={name} />
          <span
            style={{
              fontWeight: i18n.language === value ? "bold": "normal",
              textDecoration: i18n.language === value ? "underline" : "none",
            }}
          >
            {name}
          </span>
        </button>
      ))}
    </div>
  )
}

export { LanguageSwitcher }
