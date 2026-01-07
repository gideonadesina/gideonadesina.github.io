import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <SocialRail />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}
