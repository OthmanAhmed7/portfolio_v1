import React from "react";
import ProcessCard from "../small/ProcessCard";

const Process = () => {
  return (
    <div className="flex flex-col px-8 py-8 justify-center items-center max-w-[1024px] mx-auto">
      <h1 className="header highlight">my process</h1>

      <ProcessCard />
    </div>
  );
};

export default Process;
