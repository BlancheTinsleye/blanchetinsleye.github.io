// import React from 'react'

import './projectssection.css'

const ProjectsSection = () => {
  return (
    <>
        <div id="PS-mainCONT">
            <h1 className='PageSectionH1'>
                Projects
            </h1>

            <div id="PS-projectsCONT">
                <div className="PS-prjct">
                    <div className="PS-prjctIMG"></div>
                    <div className="PS-prjcttxtsCONT">
                        <h3 className="PS-prjctNAME">
                            Smart Machine Internet Litter Exchange (SMILE)
                        </h3>
                    </div>
                </div>

                <div className="PS-prjct">
                    <div className="PS-prjctIMG"></div>
                    <div className="PS-prjcttxtsCONT">
                        <h3 className="PS-prjctNAME">
                            Data Scraping & Web Developer – The Unknown
                        </h3>
                    </div>
                </div>

            <p id='PS-note'>
                more info will be added soon...
            </p>
            </div>
        </div>
    </>
  )
}

export default ProjectsSection
