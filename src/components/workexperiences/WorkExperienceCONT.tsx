// import React from 'react'

interface WorkExpProps {
  logo_lnk: string;
  position_ttl: string;
  lctn: string;
  alt: string;
}

const WorkExperienceCONT = ({
  logo_lnk,
  position_ttl,
  lctn,
  alt,
}: WorkExpProps) => {
  return (
    <>
      <div className="WES-exp">
        <img
          src={logo_lnk}
          className="WES-img"
          alt={alt}
        />
        <div className="WES-workttlTXT">
          <h3>{position_ttl}</h3>
          <div className="WES-worklocCONT">
            <p className="WES-worklocTXT">
              {lctn}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceCONT;
