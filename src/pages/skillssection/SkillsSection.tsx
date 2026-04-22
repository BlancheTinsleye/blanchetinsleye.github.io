// import React from 'react'
import './skillsection.css'
import data from './skills.json'
import SkillsLI from '../../components/skillsli/SkillsLI'

const SkillsSection = () => {
  return (
    <>
        <div className='section' id="SS-mainCONT">
          <h1 className='PageSectionH1'>
            SKILLS
          </h1>

          <div id="SS-skills">j
            <ul className="SS-list-group1">
              <h2>
                Programming / Web Development
              </h2>
              {data.skills['Group-1'].map((skill, index) =>
              <SkillsLI key={index} skill={skill} />)}
            </ul>

            <ul className="SS-list-group2">
              <h2>
                Design & Creative Tools
              </h2>
              {data.skills['Group-2'].map((skill, index) =>
              <SkillsLI key={index} skill={skill} />)}
              {/* <li className="SS-list-group2-item"></li> */}

            </ul>
          </div>

        </div>
    </>
  )
}

export default SkillsSection
