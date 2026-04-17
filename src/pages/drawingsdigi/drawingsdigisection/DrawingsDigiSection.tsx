// import React from 'react'
import './drawingsdigisection.css'
import { Link } from 'react-router-dom'

const DrawingsDigiSection = () => {
  return (
    <>
        <div className='section' id="DDS-mainCONT">
            <h1 className='PageSectionH1'>
                DIGITAL ARTS
            </h1>

            <div className="Drawings-prevCONT">
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776386019/excel_activation_ykf5iz.png" alt="Excel Activation" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776386016/word_activator_z1iiwl.png" alt="Word Activator" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776386014/unused_gesture_2_a1aytq.png" alt="Unused Gesture 2" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776386013/scroll_fiiz8c.png" alt="Scroll" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776386012/print_dlpbqn.png" alt="Print" className="drwng" />
                <img src="https://res.cloudinary.com/damtc4g0q/image/upload/v1776386008/home_stwqbo.png" alt="Home" className="drwng" />

            
            </div>
                <Link className='link' to="/drawingsdigi">Drawings (Digital)</Link>

        </div>
    </>
  )
}

export default DrawingsDigiSection
