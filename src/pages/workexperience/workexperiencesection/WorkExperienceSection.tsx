// import React from 'react'
import { Link } from 'react-router-dom';
import './workexperience.css'
import WorkExperienceCONT from '../../../components/workexperiences/WorkExperienceCONT';
import data from './workexp.json'

const WorkExperienceSection = () => {
  return (
    <>
        <div className='section' id="WES-mainCONT">
            <h1 className='PageSectionH1'>
                WORK EXPERIENCE
            </h1>

            <div id="WES-expereriencesCONT">
                
                {
                    data.workexp.map((job, index) =>
                        <WorkExperienceCONT key={index} logo_lnk={job.logo_link} alt={job.alt} position_ttl={job.position_title} lctn={job.location} />)
                }


                
            </div>
            <Link className='link' to="/workexperience">Click to see more of my Work Experience</Link>
        </div>
    </>
  )
}

export default WorkExperienceSection
