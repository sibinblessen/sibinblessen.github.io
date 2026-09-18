import './App.css';
import React from 'react';

import LandingPage from './components/landing-page/LandingPage';
import { getInitialLanguage, LANGUAGE_STORAGE_KEY, translations } from './i18n';

export const THEME_STORAGE_KEY = 'portfolio-theme';

const isTheme = (value) => value === 'dark' || value === 'light';

const getInitialTheme = () => {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(storedTheme)) {
      return storedTheme;
    }
  } catch (error) {
  }

  return 'dark';
};

function App() {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const [language, setLanguage] = React.useState(getInitialLanguage);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
    }

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'light' ? '#f7fafc' : '#08090a');
    }
  }, [theme]);

  React.useEffect(() => {
    const content = translations[language].metadata.description;
    document.documentElement.lang = language;
    document.title = translations[language].metadata.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', content);
    }

    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (openGraphDescription) {
      openGraphDescription.setAttribute('content', content);
    }

    const openGraphLocale = document.querySelector('meta[property="og:locale"]');
    if (openGraphLocale) {
      openGraphLocale.setAttribute('content', translations[language].metadata.locale);
    }

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage === 'en' || nextLanguage === 'da') {
      setLanguage(nextLanguage);
    }
  };

  return (
    <LandingPage
      language={language}
      onLanguageChange={changeLanguage}
      theme={theme}
      onThemeToggle={toggleTheme}
    />
  );
}


export default App;
