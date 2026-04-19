// import React from 'react'
import ScrollToTop from "../../../ScrollToTop";
import Footer from "../../footer/Footer";
import TopBar from "../../topbar/TopBar";
import "./workexperiencepage.css";

// import React from 'react'

const WorkExerperiencePage = () => {
  return (
    <>
      <TopBar />
      <ScrollToTop />
      <div id="TopBar-BG"></div>
      <div className="PAGE">
        <div className="mainCONT" id="WEP-mainCONT">
          <h1 className="PAGE-TITLE">Work Experience</h1>

          <div className="workexp-1stworkCONT" id="workexp-1stworkCONT">
            <div className="workexp-1stworkp1CONT" id="workexp-1stworkp1CONT">
              <h3 className="workexp-1stworkTXT" id="workexp-1stworkTXT">
                ■ Marketing Intern (OJT)
              </h3>
              <p className="workexp-1stworkp1TXT" id="workexp-1stworkp1TXT">
                8Con Academy l 933 ABZ Building Brgy. Calvario MacArthur Highway
                Meycauayan, Bulacan, 3020
              </p>
            </div>
            <div id="WEP-1stworkCONT">
              {/* <div className="workexp-1stworkp2CONT" id="workexp-1stworkp2CONT">
                <img
                  className="WEP-IMG"
                  src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776507446/canva_a5mcb9.png"
                  alt="Canva"
                />
                <ul className="workexp-1stworkp1UL" id="workexp-1stworkp1UL">
                  <li>Used Canva to prepare visual and written content.</li>
                </ul>
              </div> */}

              <div className="workexp-1stworkp3CONT" id="workexp-1stworkp3CONT">
                <img
                  className="WEP-IMG"
                  src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776507034/fyi_epqcyd.png"
                  alt="FYI img"
                />
                <ul className="workexp-1stworkp2UL" id="workexp-1stworkp2UL">
                  <li>
                    Assisted in creating FYIs and public-facing materials to
                    help the company reach its target audience.
                  </li>
                </ul>

              </div>

              <div className="workexp-1stworkp4CONT" id="workexp-1stworkp4CONT">

                <ul className="workexp-1stworkp3UL" id="workexp-1stworkp3UL">
                  <li>
                    Edited workshop photos and integrated them into marketing
                    templates for social media posts.
                  </li>
                </ul>
                <img
                  className="WEP-IMG"
                  src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776507383/camera_abdike.png"
                  alt="camera img"
                />
              </div>

              <div className="workexp-1stworkp5CONT" id="workexp-1stworkp5CONT">
                <img
                  className="WEP-IMG"
                  src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776507205/forex_xm26u4.png"
                  alt="Forex"
                />
                <ul className="workexp-1stworkp5UL" id="workexp-1stworkp5UL">
                  <li>
                    Created and published visual content (including memes
                    related to Forex) to drive engagement on Facebook.
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <p className="page-note">
            This portfolio is currently a work in progress. I’m actively
            improving and adding new projects... Check back soon for updates.
          </p>
        </div>
      </div>

      {/* img */}

      <Footer />
    </>
  );
};

export default WorkExerperiencePage;
