// import { react, usestate } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import '../aboutmesection/AboutMeSection'
import AboutMe from '../aboutmesection/AboutMeSection';

import me from '../../assets/me.png'
import TopBar from '../topbar/TopBar';
import Footer from '../footer/Footer';
import SkillsSection from '../skillssection/SkillsSection';
import WorkExperienceSection from '../workexperience/workexperiencesection/WorkExperienceSection';

const Home = () => {
    return (
        <>
            <TopBar />
            <div id="Home">
                {/* <h1>
                    Home
                </h1> */}

                <div id="HomeintroCONT">
                    <img id="HomeintroIMG" src={me} alt={me} />
                    <div id="HomeintroTXTCONT">
                        <h1 id='HomeintronameTXT'>
                            MERCADO,<br />
                            BJ ASHLEY B.
                        </h1>
                        <p id="HomeintropositionTXT">
                            WEB DEVELOPER | ARTIST
                        </p>
                    </div>
                </div>

                <div id="TopBar-BG"></div>

                <AboutMe />

                <SkillsSection />

                <WorkExperienceSection />

                {/* <Link to="/skills">Skills</Link> */}
                <Link to="/workexperience">Work Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/drawingstrad">Drawings (Traditional)</Link>
                <Link to="/drawingsdigi">Drawings (Digital)</Link>
            </div>

            <Footer />
        </>
    )
}

export default Home;