import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import ScrollDots from "./components/ScrollDots";

import Home from "./sections/Home";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <SocialRail />
      <ScrollDots />

      <Home />
      <About />
      <Expertise />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}
