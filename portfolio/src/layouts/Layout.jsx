import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
const Layout = () => {
  return (
    <div className="bg-slate-800 flex flex-col ">
      <Navbar />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
