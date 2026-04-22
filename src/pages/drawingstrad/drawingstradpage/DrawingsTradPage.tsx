// import React from 'react'
import Footer from '../../footer/Footer'
import TopBar from '../../topbar/TopBar'
import './drawingstradpage.css'
import data from './drawingstrad.json'
import TradDrawing from '../../../components/drawingstradpage/TradDrawing'

const DrawingsTradPage = () => {
  return (
    <>
      <TopBar />
        <div id="TopBar-BG"></div>
        <div className="PAGE">
          <div className='mainCONT' id="DTP-mainCONT">
            <h1 className="PAGE-TITLE">
              Traditional Arts
            </h1>

            <div className="drawingstrad-mainCONT" id="drawingstrad-mainCONT">
                <p id="drawingstrad-noteTXT">NOTE: don't steal my work!</p>
                <div id="drawingstrad-drawingsCONT" className="drawingstrad-drawingsCONT">
                    {data.trad.map((drawing, index) =>
                        <TradDrawing key={index} link={drawing.src} name={drawing.alt} size={drawing.size} medium={drawing.medium} />
                    )}
                    {/* <div className="drawingstrad-drawing">
                        <img src='' alt='' className="drawingstrad-IMG" />
                        <div className="drawingstrad-txtCONT">
                            <h3 className="drawingstrad-title">Drawing Title</h3>
                            <p className="drawingstrad-size">a4</p>
                            <p className="drawingstrad-medium">Vellum board</p>
                        </div>
                    </div> */}
                    {/* <div className="drawingstrad-drawing">
                        <img  className="drawingstrad-IMG" />
                        <div className="drawingstrad-txtCONT">
                            <h3 className="drawingstrad-title">Drawing Title</h3>
                            <p className="drawingstrad-size">a4</p>
                            <p className="drawingstrad-medium">Vellum board</p>
                        </div>
                    </div> */}
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

export default DrawingsTradPage
