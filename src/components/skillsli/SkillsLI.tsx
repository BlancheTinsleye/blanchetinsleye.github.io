// import React from 'react'

import useTilt from "../../hooks/useTiltLI";


interface SkillsProps {
    skill: string;
}

const SkillsLI = ({ skill }: SkillsProps) => {
  const tiltRef = useTilt({ max: 8, speed: 1000, reverse: true });

  return (
    
        <li ref={tiltRef} className="SS-list-group1-item">{skill}</li>
  )
}

export default SkillsLI