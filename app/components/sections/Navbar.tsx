import React from "react";
import Logo from "../small/Logo";
import Button from "../small/Button";

const Navbar = () => {
  return (
    <nav className="text-black w-full sectionPadding fixed bg-[#FEFAF6]">
      <div className="max-w-[1024px] flex justify-between mx-auto items-center">
        <Logo />

        <ul className="flex gap-10 text-main-color">
          <li className="hover:text-main-color">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#process">Process</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#work">Work</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <Button name={"Let's Talk"} link={"#contact"} />
      </div>
    </nav>
  );
};

export default Navbar;
