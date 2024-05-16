import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex max-w-[1024px] mx-auto justify-between pt-4 mb-4 mt-8 px-6 items-center border-t-2">
      <div>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Copyright{" "}
          <span className="flex items-center gap-1">
            <FaRegCopyright /> 2024
          </span>{" "}
          All rights reserved | Othman Ahmed
        </p>
      </div>

      <div>
        <button>
          <a href="https://www.linkedin.com/in/othman-ahmed7/" target="_blank">
            <IoLogoLinkedin className="h-7 w-7 mr-4 text-slate-500" />
          </a>
        </button>

        <button>
          <a href="https://github.com/OthmanAhmed7" target="_blank">
            <BsGithub className="h-7 w-7 text-slate-500" />
          </a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
