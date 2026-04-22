// import React from 'react'

interface DrawingsTradProps {
    link : string;
    name: string;
    size: string;
    medium: string;

}

const TradDrawing = ({ link, name, size, medium }: DrawingsTradProps) => {
  return (
    <>
        <div className="drawingstrad-drawing">
            <img src={link} alt={name} className="drawingstrad-IMG" />
            <div className="drawingstrad-txtCONT">
                <h3 className="drawingstrad-title">{name}</h3>
                <p className="drawingstrad-size">{size}</p>
                <p className="drawingstrad-medium">{medium}</p>
            </div>
        </div>
    </>
  )
}

export default TradDrawing
