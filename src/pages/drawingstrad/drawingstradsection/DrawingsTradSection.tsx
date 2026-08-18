// import React from 'react'
import './drawingstradsection.css'
import { Link } from 'react-router-dom';
import data from './tradprev.json'
import DrawingsTradIMG from '../../../components/drawingstradsection/DrawingsTradIMG';

const DrawingsTradSection = () => {
  return (
    <>
        <div className='section' id="DTS-mainCONT">
            <h1 className='PageSectionH1'>
                TRADITIONAL ART
            </h1>

            <div className="Drawings-prevCONT">
                {/* {data.trad.map((gesture, index) =>
                <DrawingsTradIMG key={index} link={gesture.src} name={gesture.alt} />
                )}*/}

                <div className="Drawings-row">
                    {
                        data.trad.slice(0, 3).map((gesture, index) =>
                            <DrawingsTradIMG key={index} link={gesture.src} name={gesture.alt} />
                        )
                    }
                </div>

                <div className="Drawings-row">
                    {
                        data.trad.slice(0, 3).map((gesture, index) =>
                            <DrawingsTradIMG key={index} link={gesture.src} name={gesture.alt} />
                        )
                    }
                </div>

                
            </div>
            <Link className='link' to="/drawingstrad">Click to see more of my Traditional Drawings</Link>

        </div>
    </>
  )
}

export default DrawingsTradSection
