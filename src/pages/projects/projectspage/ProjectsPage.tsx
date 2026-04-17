// import React from 'react'
import Footer from '../../footer/Footer'
import TopBar from '../../topbar/TopBar'
import './projectspage.css'

const ProjectsPage = () => {
  return (
    <>
        <TopBar />
        <div id="TopBar-BG"></div>
        <div className="PAGE">
          <div className='mainCONT' id="PRJTPG-mainCONT">
            <h1 className="PAGE-TITLE">
              Projects
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

export default ProjectsPage
