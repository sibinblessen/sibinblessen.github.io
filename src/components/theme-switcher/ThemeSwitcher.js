import './ThemeSwitcher.css';
import { translations } from '../../i18n';

function ThemeSwitcher({ language, theme, onThemeToggle }) {
  const content = translations[language].themeSwitcher;

  const selectTheme = (nextTheme) => {
    if (nextTheme !== theme) {
      onThemeToggle();
    }
  };

  return (
    <div className="theme-switcher" role="group" aria-label={content.label}>
      <span className="theme-switcher-label">Theme</span>
      <button
        className={`theme-option ${theme === 'dark' ? 'theme-option-active' : ''}`}
        onClick={() => selectTheme('dark')}
        type="button"
        aria-label={content.useDark}
        aria-pressed={theme === 'dark'}
        title={content.useDark}
      >
        <svg className="theme-option-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
        </svg>
      </button>
      <button
        className={`theme-option ${theme === 'light' ? 'theme-option-active' : ''}`}
        onClick={() => selectTheme('light')}
        type="button"
        aria-label={content.useLight}
        aria-pressed={theme === 'light'}
        title={content.useLight}
      >
        <svg className="theme-option-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
    </div>
  );
}

export default ThemeSwitcher;