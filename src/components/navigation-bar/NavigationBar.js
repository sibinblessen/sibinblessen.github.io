import React, { useState } from 'react';
import './NavigationBar.css';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import { translations } from '../../i18n';

const resumePdfPath = '/docs/sibin_blessen_resume.pdf';

function NavigationBar({ language, onLanguageChange, theme, onThemeToggle }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const content = translations[language].navigation;

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-bar-container">
      <div className="nav-bar">
        <button
          className="logo-container"
          onClick={handleScrollToTop}
          type="button"
          aria-label={content.backToTop}
        >
          <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40" role="img" aria-label={translations[language].about.logoAlt}>
            <path d="M4 4 L36 4 Q40 4 40 8 L40 36 Q40 40 36 40 L8 40 Q4 40 4 36 L4 4 Z" fill="var(--ink)" />
            <path d="M4 4 L36 4 Q40 4 40 8 L40 36 Q40 40 36 40 L8 40 Q4 40 4 36 L4 4 Z" fill="none" stroke="var(--cyan)" strokeWidth="3" />
            <text x="22" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" textAnchor="middle" fill="var(--cyan)">S</text>
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="nav-action-container desktop-nav">
          <ul className="page-link-container">
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('about')} 
                className="page-link-text"
                type="button"
              >
                {content.about}
              </button>
            </li>
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('experience')} 
                className="page-link-text"
                type="button"
              >
                {content.experience}
              </button>
            </li>
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('skills')} 
                className="page-link-text"
                type="button"
              >
                {content.skills}
              </button>
            </li>
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('work')} 
                className="page-link-text"
                type="button"
              >
                {content.projects}
              </button>
            </li>
          </ul>
          <div className="resume-button-container">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              {content.resume}
            </a>
          </div>
        </div>

        <div className="nav-preferences">
          <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
          <ThemeSwitcher language={language} theme={theme} onThemeToggle={onThemeToggle} />
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label={translations[language].navigation.toggleMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'line1-active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'line2-active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'line3-active' : ''}`}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-page-links">
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('about')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  {content.about}
                </button>
              </li>
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('experience')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  {content.experience}
                </button>
              </li>
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('skills')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  {content.skills}
                </button>
              </li>
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('work')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  {content.projects}
                </button>
              </li>
            </ul>
            <div className="mobile-resume-button-container">
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-resume-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {content.resume}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;