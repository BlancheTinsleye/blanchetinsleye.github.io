// import React from 'react'
import './drawingstradsection.css'
import { Link } from 'react-router-dom';

const DrawingsTradSection = () => {
  return (
    <>
        <div className='section' id="DTS-mainCONT">
            <h1 className='PageSectionH1'>
                TRADITIONAL ARTS
            </h1>

            <div className="Drawings-prevCONT">
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1724324944/kape_painting_dnzcnm.jpg" alt="Coffee Art" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1724445423/BGYO_emd1tb.jpg" alt="Pablo" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1725653648/c4f2db0bc50a1541927b66aab34a5292_mjkt1x.jpg" alt="Ashley" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1725653648/cf83efc439f8892f8b87af64c458e676_chyubn.jpg" alt="Judd" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1725653649/4c3205a4478942d4958fb97ecd0c3986_co7p7p.jpg" alt="Kai" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1725653649/198a4cce23b53c56040392367f57cf70_e4oqqt.jpg" alt="Nick" className="drwng" />

            
            </div>
            <Link className='link' to="/drawingstrad">Click to see more of my Traditional Drawings</Link>

        </div>
    </>
  )
}

export default DrawingsTradSection
