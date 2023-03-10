import React from "react";
import Navbar from "./Navbar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Home from "../components/Home";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Layout;
