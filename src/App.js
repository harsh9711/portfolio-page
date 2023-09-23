import { useEffect, useState } from "react";
import DotGroup from "./components/DotGroup";
import Education from "./components/Education";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      else setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-deep-blue app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage} setSelectedPage={setSelectedPage}
          />
        )}

        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
      </div>
      <LineGradient />

      <div className="w-5/6 mx-auto  ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>
      
      <LineGradient />

      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Education />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

      
        <Footer />
   

    </div>
  );
}

export default App;
