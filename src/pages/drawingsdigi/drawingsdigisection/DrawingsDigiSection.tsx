// import React from 'react'
import './drawingsdigisection.css'
import { Link } from 'react-router-dom'
import data from './digiprev.json'
import DrawingsDIgiIMG from '../../../components/drawingsdigisection/DrawingsDIgiIMG'

const DrawingsDigiSection = () => {
  return (
    <>
        <div className='section' id="DDS-mainCONT">
            <h1 className='PageSectionH1'>
                DIGITAL ARTS
            </h1>

            <div className="Drawings-prevCONT">
                {/* {data.trad.map((gesture, index) =>
                <DrawingsTradIMG key={index} link={gesture.src} name={gesture.alt} />
                )}*/}

                <div className="Drawings-row">
                    {
                        data.digi.slice(0, 3).map((gesture, index) =>
                            <DrawingsDIgiIMG key={index} link={gesture.src} name={gesture.alt} />
                        )
                    }
                </div>

                <div className="Drawings-row">
                    {
                        data.digi.slice(0, 3).map((gesture, index) =>
                            <DrawingsDIgiIMG key={index} link={gesture.src} name={gesture.alt} />
                        )
                    }
                </div>

                
            </div>
            <Link className='link' to="/drawingsdigi">Click to see more of my Drawings (Digital)</Link>

        </div>
    </>
  )
}

export default DrawingsDigiSection
