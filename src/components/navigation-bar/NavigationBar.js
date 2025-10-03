import React, { useState } from 'react';
import './NavigationBar.css';
import logoSvg from './logo.svg';

import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo-container">
          <img src={logoSvg} alt="Sibin Blessen Portfolio - Senior Software Engineer Logo" className="logo-svg" loading="eager" width="40" height="40" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-action-container desktop-nav">
          <ul className="page-link-container">
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('about')} 
                className="page-link-text"
                type="button"
              >
                About
              </button>
            </li>
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('experience')} 
                className="page-link-text"
                type="button"
              >
                Experience
              </button>
            </li>
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('skills')} 
                className="page-link-text"
                type="button"
              >
                Skills
              </button>
            </li>
            <li className="page-link">
              <button 
                onClick={() => handleScrollToSection('work')} 
                className="page-link-text"
                type="button"
              >
                Projects
              </button>
            </li>
          </ul>
          <div className="resume-button-container">
            <Link to="/resume" className="resume-button">Resume</Link>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
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
                  About
                </button>
              </li>
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('experience')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  Experience
                </button>
              </li>
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('skills')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  Skills
                </button>
              </li>
              <li className="mobile-page-link">
                <button 
                  onClick={() => handleScrollToSection('work')} 
                  className="mobile-page-link-text"
                  type="button"
                >
                  Projects
                </button>
              </li>
            </ul>
            <div className="mobile-resume-button-container">
              <Link 
                to="/resume" 
                className="mobile-resume-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;