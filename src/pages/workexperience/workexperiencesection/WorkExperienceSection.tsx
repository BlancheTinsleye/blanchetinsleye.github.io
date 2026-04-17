// import React from 'react'
import { Link } from 'react-router-dom';
import './workexperience.css'

const WorkExperienceSection = () => {
  return (
    <>
        <div className='section' id="WES-mainCONT">
            <h1 className='PageSectionH1'>
                WORK EXPERIENCE
            </h1>

            <div id="WES-expereriencesCONT">
                <div className="WES-exp">
                    <div className="WES-exp">
                        <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776393543/8Con_mfo4la.jpg" className="WES-img" alt="8Con Logo" />
                        <div className="WES-workttlCONT">
                            <div className="WES-workttlTXT">
                                <h3>
                                    Marketing Intern (OJT)
                                </h3>
                            </div>
                        </div>
                        <div className="WES-worklocCONT">
                            <div className="WES-worklocTXT">
                                8Con Academy l 933 ABZ Building Brgy. Calvario MacArthur Highway Meycauayan, Bulacan, 3020
                            </div>
                        </div>
                        <Link className='link' to="/workexperience">Click to see more of my Work Experience</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkExperienceSection
