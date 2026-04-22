// import React from 'react'

interface DrawingsDigiProps {
    link : string;
    name: string;
    size: string;
    medium: string;

}

const DigiDrawing = ({ link, name, size, medium }: DrawingsDigiProps) => {
  return (
    <>
        <div className="drawingsdigi-drawing">
            <img alt={name + " Hand Gesture"} src={link} className="drawingsdigi-IMG" />
            <div className="drawingsdigi-txtCONT">
                <h3 className="drawingsdigi-title">{name}</h3>
                <p className="drawingsdigi-size">size: {size}</p>
                <p className="drawingsdigi-medium">{medium}</p>
            </div>
        </div>
    </>
  )
}

export default DigiDrawing
