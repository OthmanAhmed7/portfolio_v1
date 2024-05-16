"use client";

import React from "react";
import Image from "next/image";
import { projectInfo } from "@/app/constants/data";
import { IoMdEye } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { MotionDiv } from "../motions/MotionDiv";
import { useInView } from "react-intersection-observer";

const WorkCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col gap-14 justify-center items-center"
    >
      {projectInfo.map((info) => (
        <MotionDiv
          key={info.id}
          initial={
            info.id % 2 === 0
              ? { x: -1000, opacity: 0 }
              : { x: 1000, opacity: 0 }
          }
          animate={inView && { x: 0, opacity: 1 }}
          transition={{
            delay: info.id * 0.25,
            ease: "easeInOut",
            duration: 0.8,
          }}
          className="flex lg:flex-row flex-col justify-between items-center shadow-xl bg-dark-color rounded-lg p-4 h-fit px-14 xl:w-[65rem] lg:w-[55rem] md:w-[40rem] w-[30rem] zigzag"
        >
          <div className="lg:w-[50%] w-full mb-7">
            <h1 className="text-3xl font-semibold text-main-color">
              {info.header}
            </h1>

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

          <div className="lg:w-[50%] w-full">
            <Image
              width={300}
              height={300}
              src={info.image}
              alt={info.header}
              className="rounded-md"
            />
          </div>
        </MotionDiv>
      ))}
    </section>
  );
};

export default WorkCard;
