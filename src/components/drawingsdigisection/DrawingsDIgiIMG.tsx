// import React from 'react'

interface DrawingsDigiPrevProps {
    link : string;
    name : string;
}

const DrawingsDIgiIMG = ({ link, name }: DrawingsDigiPrevProps) => {
  return (
    <img src={link} alt={name} className="drwng" />
  )
}

export default DrawingsDIgiIMG
