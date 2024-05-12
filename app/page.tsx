import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#FEFAF6]">
      <Navbar />
      <Hero />
      <Skills />
      <Process />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
