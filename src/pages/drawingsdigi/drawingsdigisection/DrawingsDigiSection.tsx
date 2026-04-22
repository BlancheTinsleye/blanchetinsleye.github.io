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
                {data.digi.map((gesture, index) =>
                <DrawingsDIgiIMG key={index} link={gesture.src} name={gesture.alt} />
                )}
            </div>
                <Link className='link' to="/drawingsdigi">Click to see more of my Drawings (Digital)</Link>

        </div>
    </>
  )
}

export default DrawingsDigiSection
