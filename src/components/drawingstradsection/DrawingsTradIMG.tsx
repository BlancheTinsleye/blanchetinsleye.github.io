// import React from 'react'

interface DrawingsTradPrevProps {
    link : string;
    name : string;
}

const DrawingsTradIMG = ({ link, name }: DrawingsTradPrevProps) => {
  return (
    <>
      <img src={link} alt={name} className="drwng" />
    </>
  )
}

export default DrawingsTradIMG
