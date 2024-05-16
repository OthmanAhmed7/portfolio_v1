import React from "react";
import WorkCard from "../small/WorkCard";

const Work = () => {
  return (
    <section
      id="work"
      className="sectionPadding flex flex-col max-w-[1024px] mx-auto"
    >
      <h1 className="header">
        Featured <span className="highlight">Projects</span>
      </h1>

      <div>
        <WorkCard />
      </div>
    </section>
  );
};

export default Work;
