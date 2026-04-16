// import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

const TopBar = () => {
  return (
    <>
        <div id="TopBar-mainCONT">
            <Link to="/home">AA GALERIA</Link>
            <p id='note'>
              Note: This portfolio is currently under construction. Please check back later for updates!
            </p>
            <span className="material-symbols-outlined">menu</span>
        </div>
    </>
  )
}

export default TopBar
