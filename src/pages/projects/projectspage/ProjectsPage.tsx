// import React from 'react'
import ScrollToTop from "../../../ScrollToTop";
import Footer from "../../footer/Footer";
import TopBar from "../../topbar/TopBar";
import "./projectspage.css";

const ProjectsPage = () => {
  return (
    <>
      <TopBar />
      <ScrollToTop />
      <div id="TopBar-BG"></div>
      <div className="PAGE">
        <div className="mainCONT" id="PRJTPG-mainCONT">
          <h1 className="PAGE-TITLE">Projects</h1>
          <div id="prjcts-mainCONT" className="prjcts-mainCONT">
            <div id="prjcts-projectsCONTs" className="prjcts-projectsCONTs">
              <div id="prjcts-project1CONT" className="prjcts-projects">
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1726674120/DISENYO_PILIPINO_fo5arr.png" alt="Disenyo Pilipino Logo" className="prjct-IMG" id="prjct-IMG" />
                <div className="prjcts-TXT">
                  <h3 id="prjcts-1H3">
                    UI/UX Designer & Developer – Disenyo Pilipino{" "}
                  </h3>
                  <ul id="prjcts-1UL">
                    <li>
                      Designed the user interface (UI) using Figma for a clean
                      and user-friendly experience.
                    </li>
                    <li>
                      Helped integrate PHP and MySQL for the backend
                      functionality.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="prjcts-project2CONT" className="prjcts-projects">
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1731632827/the_wall_udcjlk.png" alt="The Wall Logo" className="prjct-IMG" />
                <div className="prjcts-TXT">
                  <h3 id="prjcts-2H3">
                    Database Manager – The Wall - Social Media Platform
                  </h3>
                  <ul id="prjcts-2UL">
                    <li>
                      Assisted in building The Wall, a social media platform.
                    </li>
                    <li>
                      Took charge of the MySQL database, ensuring smooth data
                      storage and retrieval.
                    </li>
                    <li>
                      Responsible for the database and ensure that it was
                      properly structured and functional for user interactions.
                    </li>
                  </ul>
                </div>
                
              </div>
              <div id="prjcts-project3CONT" className="prjcts-projects">
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776393543/8Con_mfo4la.jpg" alt="8Con Logo" className="prjct-IMG" />
                <div className="prjcts-TXT">
                  <h3 id="prjcts-3H3">
                    8Con Easts: Payment Tracker (Web Interface Design &
                    Development)
                  </h3>
                  <ul id="prjcts-3UL">
                    <li>
                      Collaborated with fellow interns to design a Payment
                      Tracker page in Figma, applying UI/UX principles to create
                      a user-friendly, intuitive layout while ensuring
                      consistency with the company’s branding guidelines.
                    </li>
                    <li>
                      Translated Figma mockups into a fully functional Single
                      Page Application (SPA) using HTML and CSS, bridging design
                      and development to deliver an interactive, responsive web
                      interface.
                    </li>
                    <li>
                      Identified and debugged front-end design issues, and
                      enhancing visual accuracy of the application.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="prjcts-project4CONT" className="prjcts-projects">
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776393543/8Con_mfo4la.jpg" alt="8Con Logo" className="prjct-IMG" />
                <div className="prjcts-TXT">
                  <h3 id="prjcts-4H3">
                    Project: Forex Trading Landing Page (GHL Platform)
                  </h3>
                  <ul id="prjcts-4UL">
                    <li>
                      Built and customized a Forex trading promotional page
                      using GoHighLevel (GHL).
                    </li>
                    <li>
                      Designed the page layout based on provided content to
                      align with the company’s marketing goals.
                    </li>
                    <li>
                      Ensured user-friendly navigation and visual consistency
                      with brand guidelines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* img */}

      <Footer />
    </>
  );
};

export default ProjectsPage;
