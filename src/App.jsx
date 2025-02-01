import React, { useState } from "react";
import Hero from "./components/hero";
import SkillsSection from "./components/skills";
import Header from "./components/header";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import bgImage from "./assets/bgimage.jpg";
import About from "./components/about";
import Footer from "./components/footer";



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        // backgroundImage: `url(${bgImage})`,
        backgroundColor: isDarkMode ? "#121212" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
      }}
    >
      {/* Main Content */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <SkillsSection isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />


    </div>
  );
};

export default App;
