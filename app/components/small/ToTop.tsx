"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const handelHidden = () => {
      const arrowPosition = window.scrollY;
      const scrollThreshold = window.innerHeight;
      setHidden(scrollThreshold > arrowPosition);
    };

    window.addEventListener("scroll", handelHidden);

    return () => {
      window.removeEventListener("scroll", handelHidden);
    };
  }, []);
  return (
    <section
      className={`${hidden ? "hidden" : ""} fixed right-[10rem] mr-8 bottom-24`}
    >
      <button className="p-3 bg-main-color text-white rounded-md">
        <a href="#home">
          <FaArrowUp className="w-6 h-6" />
        </a>
      </button>
    </section>
  );
};

export default ToTop;
