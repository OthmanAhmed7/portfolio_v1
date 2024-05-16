"use client";

import React from "react";
import Image from "next/image";
import Button from "../small/Button";
import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import ToTop from "../small/ToTop";
import { MotionDiv } from "../motions/MotionDiv";

const Hero = () => {
  return (
    <section
      id="home"
      className="px-8 max-w-[1024px] h-[100vh] flex flex-col lg:flex-row items-center justify-between mx-auto gap-4 sectionPadding"
    >
      <MotionDiv
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 50 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mt-24 lg:mt-0"
      >
        <h1 className="text-5xl uppercase text-black mb-4">
          <span className="text-xl highlight tracking-[.1em] inline-block mb-2">
            i&apos;m here to
          </span>
          <br /> change <br /> the look & feel <br /> of your website.
        </h1>
        <Button name={"Contact Me"} link="#contact" />

        <div className="mt-4 text-main-color">
          <button>
            <a
              href="https://www.linkedin.com/in/othman-ahmed7/"
              target="_blank"
            >
              <IoLogoLinkedin className="h-7 w-7 mr-4" />
            </a>
          </button>

          <button>
            <a href="https://github.com/OthmanAhmed7" target="_blank">
              <BsGithub className="h-7 w-7" />
            </a>
          </button>
        </div>
      </MotionDiv>

      <MotionDiv
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 50 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Image
          src="/images/me.jpg"
          alt="my personal photo"
          width={400}
          height={400}
          className="heroAnimate"
        />
      </MotionDiv>

      <ToTop />
    </section>
  );
};

export default Hero;
