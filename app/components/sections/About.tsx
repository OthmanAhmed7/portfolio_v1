import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col max-w-[1024px] mx-auto">
      <h1 className="header highlight">About Me</h1>

      <div className="flex gap-4 justify-between items-center">
        <div className="text-slate-500 w-[60%]">
          <p>
            As a frontend developer, my passion for crafting immersive digital
            experiences drives me in every project I undertake. I remember the
            excitement of diving into HTML, CSS, and JavaScript, and how each
            discovery fueled my curiosity to explore further. What began as a
            hobby soon became an all-consuming passion, as I realized the
            transformative power of frontend technologies in bringing ideas to
            life on the web.
          </p>
          <p>
            But it&rsquo;s not just about the tools; it&rsquo;s about the
            artistry I bring to my work. React has become my canvas, empowering
            me to build modular, reusable components that breathe life into my
            applications. Next.js seamlessly integrates with React, providing me
            with server-side rendering and routing capabilities that elevate the
            performance and SEO of my projects.
          </p>
          <p>
            Beyond frontend technologies, I&rsquo;ve expanded my horizons to
            include database management with PostgreSQL.
          </p>
          <p>
            For me, frontend development is not just about writing code;
            it&rsquo;s about creating meaningful connections between users and
            technology, enriching lives through the digital experiences I craft.
          </p>
        </div>

        <Image
          width={400}
          height={400}
          src={"/images/Othman.png"}
          alt="my photo"
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default About;
