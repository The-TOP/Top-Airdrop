import React from "react";
import HeaderNav from "../component/Ui/HeaderNav";
import AboutSection from "../component/Ui/AboutSection";
import WhyJoin from "../component/Ui/WhyJoin";
import FooterSection from "../component/Ui/FooterSection";

const About = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <HeaderNav />
      <AboutSection />
      <FooterSection />
    </main>
  );
};

export default About;
