import './NavigationBar.css';
import Resume from '../../assets/docs/resume.pdf';

function NavigationBar() {
  return (
    <header class="nav-bar-container">
      <div class="nav-bar">
        <div class="logo-container">
          <h1 class="logo">S</h1>
        </div>
        <div class="nav-action-container">
          <ul class="page-link-container">
            <li class="page-link"><a href="#about" class="page-link-text">About</a></li>
            <li class="page-link"><a href="#experience" class="page-link-text">Experience</a></li>
            <li class="page-link"><a href="#work" class="page-link-text">Work</a></li>
            <li class="page-link"><a href="#contact" class="page-link-text">Contact</a></li>
          </ul>
          <div class="resume-button-container">
            <a href={Resume} target="_blank" rel="noopener noreferrer" class="resume-button">Resume</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;