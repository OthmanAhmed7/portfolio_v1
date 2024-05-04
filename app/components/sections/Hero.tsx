import React from "react";
import Image from "next/image";
import Button from "../small/Button";

const Hero = () => {
  return (
    <section className="px-8 max-w-[1440px] h-[100vh] flex items-center justify-between mx-auto gap-4">
      <div>
        <h1 className="text-7xl uppercase text-black mb-4">
          <span className="text-xl highlight tracking-[.1em]">
            i&apos;m here to
          </span>
          <br /> change <br /> the look & feel <br /> of your website.
        </h1>
        <Button name={"Contact Me"} />
      </div>

      <Image
        src="/images/hero-1.svg"
        alt="my personal photo"
        width={600}
        height={600}
      />
    </section>
  );
};

export default Hero;
