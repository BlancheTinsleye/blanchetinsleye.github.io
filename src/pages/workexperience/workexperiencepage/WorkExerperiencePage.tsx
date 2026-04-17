// import React from 'react'
import Footer from '../../footer/Footer'
import TopBar from '../../topbar/TopBar'
import './workexperiencepage.css'

// import React from 'react'

const WorkExerperiencePage = () => {
    return (
      <>
        <TopBar />
        <div id="TopBar-BG"></div>
        <div className="PAGE">
          <div className='mainCONT' id="WEP-mainCONT">
            <h1 className="PAGE-TITLE">
              Work Experience
            </h1>
            <p className="page-note">
              This portfolio is currently a work in progress. I’m actively improving and adding new projects... Check back soon for updates.
            </p>

          </div>
        </div>  
        
        {/* img */}

        <Footer />
      </>
    )
}

export default WorkExerperiencePage
