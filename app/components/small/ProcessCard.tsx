"use client";

import React from "react";
import { ProcessInfo } from "@/app/constants/data";
import Image from "next/image";
import { MotionDiv } from "../motions/MotionDiv";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const ProcessCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 mt-10 place-items-center"
    >
      {ProcessInfo.map((info) => (
        <div key={info.id}>
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate={inView && "visible"}
            transition={{
              delay: info.id * 0.25,
              ease: "easeInOut",
              duration: 0.8,
            }}
            viewport={{ amount: 0 }}
            className="flex flex-col gap-3 xl:w-[14.5rem] md:w-[18rem] sm:w-[20rem] h-[20rem] md:h-[22rem] shadow-lg p-5 rounded-lg shadow-slate-300 hover:scale-105"
          >
            <Image
              width={60}
              height={60}
              src={info.icon}
              alt={info.header}
              className="bg-main-color p-2 rounded-md text-white"
            />

            <h1 className="font-semibold md:text-lg sm:text-2xl">
              {info.header}
            </h1>

            <p className="text-slate-500 text-lg">{info.body}</p>
          </MotionDiv>
        </div>
      ))}
    </section>
  );
};

export default ProcessCard;
