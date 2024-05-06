import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Process />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
