// import React from 'react'
import './aboutmesection.css';

const AboutMe = () => {
  return (
    <>
        <div id="AMS-mainCONT">
            <h1 className='PageSectionH1'>
                About Me
            </h1>

            <div id="AMS-txtsCONT">
              <p id="AMS-txtL1">
                Hi! I am Bj Ashley B. Mercado and I have strong interest in frontend development and building responsive web interfaces. I have experience working with HTML, CSS, and JavaScript to implement designs and connect frontend pages with backend APIs.
              </p>

              <div id="AMS-L2CONT">
                <div className="AMS-designBOX"></div>
                <div id="AMS-txtL2CONT">
                  <div className="AMS-img"></div>

                  <p id="AMS-txtL2">
                    Through my projects, I have also worked with technologies such as Node.js, Express, and MongoDB, while contributing to tasks like data scraping and debugging integrations.
                  </p>
                </div>
              </div>

              <div id="AMS-L3CONT">
                <div className="AMS-designBOX"></div>
                <div id="AMS-txtL3CONT">
                  <div className="AMS-img"></div>

                  <p id="AMS-txtL3">
                    I also enjoy using Python for data processing and problem solving, This allow me to have a good foundation when jumping from one language to another.
                  </p>
                </div>
              </div>

              <p id="AMS-txtL4">
                These experiences have helped me develop the ability to turn ideas and designs into functional web experiences while continuously improving my development skills through hands-on projects.
              </p>
            </div>
        </div>
    </>
  )
}

export default AboutMe
