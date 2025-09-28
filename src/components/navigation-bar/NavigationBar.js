import './NavigationBar.css';
import logoSvg from './logo.svg';

import { Link } from 'react-router-dom';

function NavigationBar() {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo-container">
          <img src={logoSvg} alt="Sibin Blessen Logo" className="logo-svg" />
        </div>
        <div className="nav-action-container">
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
      </div>
    </header>
  );
}

export default NavigationBar;