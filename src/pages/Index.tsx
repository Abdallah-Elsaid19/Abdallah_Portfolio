import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Navbar />

    <ReactFullpage
  scrollingSpeed={900}
  navigation
  navigationPosition="right"
  licenseKey="gplv3-license"
  credits={{ enabled: false }}
  responsiveWidth={1024}
  render={() => (
    <ReactFullpage.Wrapper>
      <div className="section"><Hero /></div>
      <div className="section"><About /></div>
      <div className="section"><Skills /></div>
      <div className="section"><Projects /></div>
      <div className="section"><Experience /></div>
      <div className="section"><Contact /></div>

  
      <div className="section fp-section">
        <Footer />
      </div>
    </ReactFullpage.Wrapper>
  )}
/>


    </>
  );
};

export default Index;
