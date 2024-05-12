import React from "react";
import { skillsInfo } from "@/app/constants/data";
import Image from "next/image";

const SkillIcon = () => {
  return (
    <div className="grid grid-cols-7 gap-3 mt-6 place-items-center">
      {skillsInfo.map((info) => (
        <div key={info.id} className="flex flex-col items-center gap-2">
          <div className=" rounded-full shadow-xl w-[5rem] h-[5rem] flex justify-center items-center">
            <Image width={50} height={50} alt={info.name} src={info.icon} />
          </div>
          <p>{info.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillIcon;
