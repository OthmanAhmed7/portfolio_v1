import React from "react";
import Logo from "../small/Logo";
import Button from "../small/Button";

const Navbar = () => {
  return (
    <nav className="text-black w-full px-8 py-2 fixed bg-white">
      <div className="max-w-[1440px] flex justify-between mx-auto items-center">
        <Logo />

        <ul className="flex gap-10">
          <li className="hover:text-main-color">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#">Process</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#">Work</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#">About</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#">Contact</a>
          </li>
        </ul>

        <Button name={"Let's Talk"} />
      </div>
    </nav>
  );
};

export default Navbar;
