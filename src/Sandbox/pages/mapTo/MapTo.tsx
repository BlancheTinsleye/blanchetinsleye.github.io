import { useEffect } from 'react';
import './style.css';

import { initDraggables } from './script.js';

const MapTo = () => {

  useEffect(() => {
    initDraggables();
  }, []);

  return (
    <>
      {/* <h1>Hello</h1> */}

      <div className="large centered grid square-grid" id='maptoCont'>
        <div className="square draggable"></div>
        <div className="circle draggable"></div>
      </div>
    </>
  );
};

export default MapTo;