// import React from 'react'
import './skillsection.css'

const SkillsSection = () => {
  return (
    <>
        <div className='section' id="SS-mainCONT">
          <h1 className='PageSectionH1'>
            SKILLS
          </h1>

          <div id="SS-skills">
            <ul className="SS-list-group1">
              <h2>
                Programming / Web Development
              </h2>
              <li className="SS-list-group1-item">Python</li>
              <li className="SS-list-group1-item">Graphic design</li>
              <li className="SS-list-group1-item">HTML</li>
              <li className="SS-list-group1-item">React</li>
              <li className="SS-list-group1-item">TypeScript</li>
              <li className="SS-list-group1-item">UI/UX Interface</li>
              <li className="SS-list-group1-item">Web design</li>
              <li className="SS-list-group1-item">Visual Content Creation</li>
              <li className="SS-list-group1-item">JavaScript</li>
            </ul>

            <ul className="SS-list-group2">
              <h2>
                Design & Creative Tools
              </h2>
              <li className="SS-list-group2-item">Figma</li>
              <li className="SS-list-group2-item">Krita</li>
              <li className="SS-list-group2-item">Aseprite</li>
              {/* <li className="SS-list-group2-item"></li> */}

            </ul>
          </div>

        </div>
    </>
  )
}

export default SkillsSection
