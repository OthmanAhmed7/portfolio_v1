"use client";

import { useRef, useState, useEffect } from "react";
import Logo from "../small/Logo";
import Button from "../small/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [navHeight, setNavHeight] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 100;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -navHeight;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`text-black w-full sectionPadding fixed bg-[#FEFAF6] ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1024px] flex justify-between mx-auto items-center">
        <Logo />

        <ul className="flex gap-10 text-main-color">
          <li className="hover:text-main-color">
            <a href="#" onClick={(e) => scrollToSection("home", e)}>
              Home
            </a>
          </li>
          <li className="hover:text-main-color">
            <a href="#" onClick={(e) => scrollToSection("process", e)}>
              Process
            </a>
          </li>
          <li className="hover:text-main-color">
            <a href="#" onClick={(e) => scrollToSection("work", e)}>
              Work
            </a>
          </li>
          <li className="hover:text-main-color">
            <a href="#" onClick={(e) => scrollToSection("about", e)}>
              About
            </a>
          </li>
          <li className="hover:text-main-color">
            <a href="#" onClick={(e) => scrollToSection("contact", e)}>
              Contact
            </a>
          </li>
        </ul>

        <Button name={"Let's Talk"} link={"#contact"} />
      </div>
    </nav>
  );
};

export default Navbar;
