"use client";

import { useRef, useState, useEffect } from "react";
import Logo from "../small/Logo";
import Button from "../small/Button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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

        <ul className="md:flex lg:gap-10 gap-7 text-main-color hidden">
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

        <div className="hidden md:block">
          <Button name={"Let's Talk"} link={"#contact"} />
        </div>

        <button
          className="fixed right-8 md:hidden z-40"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? (
            <IoClose className="w-6 h-6 " />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {toggle && (
          <nav
            ref={navbarRef}
            className={`text-black w-full sectionPadding ${
              !toggle ? "hidden" : "absolute"
            }`}
          >
            <div className="fixed right-0 top-0 bg-light-color w-[50%] h-[100vh] pt-[6rem] text-center shadow-2xl">
              <ul className="text-main-color">
                <li className="hover:text-main-color mb-2">
                  <a href="#" onClick={(e) => scrollToSection("home", e)}>
                    Home
                  </a>
                </li>
                <li className="hover:text-main-color mb-2">
                  <a href="#" onClick={(e) => scrollToSection("process", e)}>
                    Process
                  </a>
                </li>
                <li className="hover:text-main-color mb-2">
                  <a href="#" onClick={(e) => scrollToSection("work", e)}>
                    Work
                  </a>
                </li>
                <li className="hover:text-main-color mb-2">
                  <a href="#" onClick={(e) => scrollToSection("about", e)}>
                    About
                  </a>
                </li>
                <li className="hover:text-main-color mb-4">
                  <a href="#" onClick={(e) => scrollToSection("contact", e)}>
                    Contact
                  </a>
                </li>
              </ul>

              <div>
                <Button name={"Let's Talk"} link={"#contact"} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
