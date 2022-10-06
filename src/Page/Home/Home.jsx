import Aos from "aos";
import React from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Masthead from "../../components/Masthead/Masthead";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Footer from "../../layout/Footer/Footer";
import Navbars from "../../layout/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbars />
      <Masthead />
      <About />
      <div data-aos="fade-down">
        <Education />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
