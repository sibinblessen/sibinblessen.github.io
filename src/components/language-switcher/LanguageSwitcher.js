import './LanguageSwitcher.css';
import { languages, translations } from '../../i18n';

function LanguageSwitcher({ language, onLanguageChange }) {
  const content = translations[language].languageSwitcher;

  return (
    <div className="language-switcher" role="group" aria-label={content.label}>
      <button
        className={`language-option ${language === 'en' ? 'language-option-active' : ''}`}
        onClick={() => onLanguageChange('en')}
        type="button"
        aria-label={content.useEnglish}
        aria-pressed={language === 'en'}
        title={content.useEnglish}
      >
        {languages.en}
      </button>
      <button
        className={`language-option ${language === 'da' ? 'language-option-active' : ''}`}
        onClick={() => onLanguageChange('da')}
        type="button"
        aria-label={content.useDanish}
        aria-pressed={language === 'da'}
        title={content.useDanish}
      >
        {languages.da}
      </button>
    </div>
  );
}

export default LanguageSwitcher;