import React from "react";
import SkillIcon from "../small/SkillIcon";

const Skills = () => {
  return (
    <div className="sectionPadding flex flex-col max-w-[1024px] mx-auto">
      <h1 className="header highlight">My Skills</h1>

      <div>
        <SkillIcon />
      </div>
    </div>
  );
};

export default Skills;
