// import { Link } from 'react-router-dom';
import "./home.css";
import "../aboutmesection/AboutMeSection";
import AboutMe from "../aboutmesection/AboutMeSection";
import me from "../../assets/me.png";
import drawing from "../../assets/drawing.png";
import TopBar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import SkillsSection from "../skillssection/SkillsSection";
import WorkExperienceSection from "../workexperience/workexperiencesection/WorkExperienceSection";
import ProjectsSection from "../projects/projectssection/ProjectsSection";
import DrawingsTradSection from "../drawingstrad/drawingstradsection/DrawingsTradSection";
import DrawingsDigiSection from "../drawingsdigi/drawingsdigisection/DrawingsDigiSection";
import ScrollToTop from "../../ScrollToTop";

import useTilt from '../../hooks/useTilt'

const Home = () => {
  const tiltRef = useTilt({ max: 8, reverse: true });
 
  return (
    <>
      <TopBar />
      <ScrollToTop />
      <div id="Home">
        {/* <h1>
                    Home
                </h1> */}

        <div id="HomeintroCONT">
          <div className="image-wrapper">
            <img className="img-default" src={drawing} alt="Profile picture" />
            <img className="img-hover" src={me} alt="Alternate profile" />
          </div>
          <div  ref={tiltRef} id="HomeintroTXTCONT">
            <h1 id="HomeintronameTXT">
              MERCADO,
              <br />
              BJ ASHLEY B.
            </h1>
            <p id="HomeintropositionTXT">WEB DEVELOPER | ARTIST</p>
          </div>
        </div>

        <div id="TopBar-BG"></div>

        <AboutMe />

        <SkillsSection />

        <WorkExperienceSection />

        <ProjectsSection />

        <DrawingsTradSection />

        <DrawingsDigiSection />
      </div>

      <Footer />
    </>
  );
};

export default Home;
