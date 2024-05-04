import React from "react";
import { skillsInfo } from "@/app/constants/data";
import Image from "next/image";

const SkillIcon = () => {
  return (
    <div className="grid grid-cols-7 gap-3 mt-8 place-items-center">
      {skillsInfo.map((info) => (
        <div
          key={info.id}
          className=" rounded-full shadow-md w-[6rem] h-[6rem] flex justify-center items-center"
        >
          <Image width={60} height={60} alt={info.name} src={info.icon} />
        </div>
      ))}
    </div>
  );
};

export default SkillIcon;
