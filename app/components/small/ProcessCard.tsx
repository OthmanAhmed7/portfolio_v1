import React from "react";
import { ProcessInfo } from "@/app/constants/data";
import Image from "next/image";

const ProcessCard = () => {
  return (
    <section className="grid grid-cols-4 gap-20 mt-10">
      {ProcessInfo.map((info) => (
        <div
          key={info.id}
          className="flex flex-col gap-3 w-[15rem] shadow-lg p-5 rounded-lg shadow-slate-300 hover:scale-105"
        >
          <Image
            width={50}
            height={50}
            src={info.icon}
            alt={info.header}
            className="bg-main-color p-2 rounded-md text-white"
          />

          <h1 className="font-semibold text-lg">{info.header}</h1>

          <p className="text-slate-500">{info.body}</p>
        </div>
      ))}
    </section>
  );
};

export default ProcessCard;
