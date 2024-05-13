import React from "react";
import Form from "../small/Form";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1024px] mx-auto flex flex-col mt-10 sectionPadding"
    >
      <h1 className="header highlight">Contact Me</h1>

      <div className="flex">
        <Form />

        <div className="mt-5 flex flex-col gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
