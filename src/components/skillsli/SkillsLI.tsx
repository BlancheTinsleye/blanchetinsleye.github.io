// import React from 'react'

interface SkillsProps {
    skill: string;
}

const SkillsLI = ({ skill }: SkillsProps) => {
  return (
    
        <li className="SS-list-group1-item">{skill}</li>
  )
}

export default SkillsLI