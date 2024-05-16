"use client";

import React from "react";
import { skillsInfo } from "@/app/constants/data";
import Image from "next/image";
import { MotionDiv } from "../motions/MotionDiv";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SkillIcon = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-3 mt-6 place-items-center">
      {skillsInfo.map((info) => (
        <div key={info.id} ref={ref}>
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              delay: info.id * 0.25,
              ease: "easeInOut",
              duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div className=" rounded-full shadow-xl w-[5rem] h-[5rem] flex justify-center items-center">
              <Image width={50} height={50} alt={info.name} src={info.icon} />
            </div>
            <p>{info.name}</p>
          </MotionDiv>
        </div>
      ))}
    </div>
  );
};

export default SkillIcon;
