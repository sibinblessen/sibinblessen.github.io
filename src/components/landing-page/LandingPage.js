import About from "../about/About";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Education from "../education/Education";
import PersonalProfile from "../personal-profile/PersonalProfile";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation-bar/NavigationBar";

import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LandingPage">
      <NavigationBar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <PersonalProfile />
      <Footer />
    </div>
  );
}

export default LandingPage;