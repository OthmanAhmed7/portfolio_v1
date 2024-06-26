"use client";

import React from "react";
import Form from "../small/Form";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { MotionDiv } from "../motions/MotionDiv";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      id="contact"
      className="max-w-[1024px] mx-auto flex flex-col mt-10 sectionPadding overflow-hidden"
    >
      <h1 className="header highlight">Contact Me</h1>

      <div ref={ref} className="flex flex-col md:flex-row gap-3">
        <MotionDiv
          initial={{ x: -300, opacity: 0 }}
          animate={inView && { x: 0, opacity: 50 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <Form />
        </MotionDiv>

        <MotionDiv
          initial={{ x: 300, opacity: 0 }}
          animate={inView && { x: 0, opacity: 50 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="mt-5 flex flex-col gap-4"
        >
          <div className="flex gap-2 items-center">
            <FaPhoneAlt /> +201011889502
          </div>

          <div className="flex gap-2 items-center">
            <TfiEmail /> othmanahmed258@gmail.com
          </div>

          <div>
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
      </div>
    </section>
  );
};

export default Contact;
