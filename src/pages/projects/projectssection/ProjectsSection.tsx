// import React from 'react'
import { Link } from 'react-router-dom';

import './projectssection.css'

const ProjectsSection = () => {
  return (
    <>
        <div className='section' id="PS-mainCONT">
            <h1 className='PageSectionH1'>
                PROJECTS
            </h1>

            <div id="PS-projectsCONT">
                <div className="PS-prjct">
                    {/* <div className="PS-prjctIMG"></div> */}
                    <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776393768/logo_r6ultf.jpg" className="PS-prjctIMG" alt="SMILE logo" />
                    <div className="PS-prjcttxtsCONT">
                        <h3 className="PS-prjctNAME">
                            Smart Machine Internet Litter Exchange (SMILE)
                        </h3>
                    </div>
                </div>

                <div className="PS-prjct">
                    {/* <div className="PS-prjctIMG"></div> */}
                    <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776394085/magnifyingglass_lzbvzy.png" className="PS-prjctIMG" alt="The-Tector logo" />
                    <div className="PS-prjcttxtsCONT">
                        <h3 className="PS-prjctNAME">
                            Data Scraping & Web Developer – The Unknown
                        </h3>
                    </div>
                </div>
            
            <Link className='link' to="/projects">Click me to see more Projects</Link>
            
            </div>
        </div>
    </>
  )
}

export default ProjectsSection
