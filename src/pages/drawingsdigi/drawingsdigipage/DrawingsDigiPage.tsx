// import React from 'react'
import ScrollToTop from '../../../ScrollToTop'
import Footer from '../../footer/Footer'
import TopBar from '../../topbar/TopBar'
import './drawingsdigipage.css'
import data from './drawingsdigi.json'
import DigiDrawing from '../../../components/drawingsdigipage/DigiDrawing'

const DrawingsDigiPage = () => {
  return (
    <>
        <TopBar />
        <ScrollToTop />
        <div id="TopBar-BG"></div>
        <div className="PAGE">
          <div className='mainCONT' id="DDP-mainCONT">
            <h1 className="PAGE-TITLE">
              Digital Arts
            </h1>
            <div className="drawingsdigi-mainCONT" id="drawingsdigi-mainCONT">
                <div className="drawingsdigi-drawingsCONT" id="drawingsdigi-drawingsCONT">
                    {
                        data.digi.map((drawing, index) =>
                            <DigiDrawing key={index}
                            name={drawing.alt}
                            link={drawing.src}
                            medium={drawing.medium}
                            size={drawing.size}
                            />
                        )
                    }
                </div>
            </div>

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

export default DrawingsDigiPage
