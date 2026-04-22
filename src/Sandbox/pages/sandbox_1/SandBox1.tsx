import SkillsLI from "../../components/SkillsLI";
import data from "./skills.json"

const SandBox1_skills = () => {
  return (
    <>
      <h2>Programming / Web Development</h2>
      <ul>
        {/* <SkillsLI skill="Python" /> */}
        {data.skills.map((skill, index) =>
          <SkillsLI key={index} skill={skill} />
        )}
      </ul>
    </>
  );
};

export default SandBox1_skills;