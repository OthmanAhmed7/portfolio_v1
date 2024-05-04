import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Process />
      <Skills />
    </div>
  );
}
