import About from "../about/About";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Education from "../education/Education";
import PersonalProfile from "../personal-profile/PersonalProfile";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation-bar/NavigationBar";
import StructuredData from "../StructuredData";
import { translations } from '../../i18n';

import "./LandingPage.css";

function LandingPage({ language, onLanguageChange, theme, onThemeToggle }) {
  const content = translations[language];

  return (
    <div className="LandingPage">
      <StructuredData language={language} />
      <NavigationBar
        language={language}
        onLanguageChange={onLanguageChange}
        theme={theme}
        onThemeToggle={onThemeToggle}
      />
      <main>
        <About language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Education language={language} />
        <PersonalProfile language={language} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

export default LandingPage;