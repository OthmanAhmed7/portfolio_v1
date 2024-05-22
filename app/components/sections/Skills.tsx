import React from "react";
import SkillIcon from "../small/SkillIcon";

const Skills = () => {
  return (
    <div className="sectionPadding flex flex-col max-w-[1024px] mx-auto">
      <h1 className="header highlight">My Skills</h1>

      <p className="mx-auto mt-[-27px]">
        Some Technologies That I&rsquo;ve used!
      </p>

      <div>
        <SkillIcon />
      </div>
    </div>
  );
};

export default Skills;
