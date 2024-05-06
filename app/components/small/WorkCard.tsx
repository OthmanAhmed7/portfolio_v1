import React from "react";
import Image from "next/image";
import { projectInfo } from "@/app/constants/data";
import { IoMdEye } from "react-icons/io";
import { GrGithub } from "react-icons/gr";

const WorkCard = () => {
  return (
    <section className="flex flex-col gap-14 mt-10 rev justify-center items-center">
      {projectInfo.map((info) => (
        <div
          key={info.id}
          className="flex justify-between items-center shadow-md rounded-lg p-4 h-[15rem] px-14 w-[65rem] zigzag"
        >
          <div className="w-[50%]">
            <h1 className="text-3xl font-semibold">{info.header}</h1>

            <div className="flex gap-3 mt-2">
              <div className="bg-slate-200 py-[2px] px-2 rounded-md">
                {info.usedTech[0]}
              </div>
              <div className="bg-slate-200 py-[2px] px-2 rounded-md">
                {info.usedTech[1]}
              </div>
              <div className="bg-slate-200 py-[2px] px-2 rounded-md">
                {info.usedTech[2]}
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <button className="py-1 px-4 bg-main-color rounded-md">
                <a
                  href={info.vercel}
                  target="_blank"
                  className="flex items-center gap-1 text-white"
                >
                  <IoMdEye />
                  Live
                </a>
              </button>
              <button className="py-1 px-4 bg-main-color rounded-md">
                <a
                  href={info.github}
                  target="_blank"
                  className="flex items-center gap-1 text-white"
                >
                  <GrGithub />
                  GitHub
                </a>
              </button>
            </div>
          </div>

          <div className="w-[50%]">
            <Image
              width={300}
              height={150}
              src={info.image}
              alt={info.header}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkCard;
