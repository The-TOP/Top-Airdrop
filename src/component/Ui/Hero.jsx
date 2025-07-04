import React from "react";
import HeaderNav from "./HeaderNav";
import HeroMain from "./HeroMain";
import WhyJoin from "./WhyJoin";
import ParticipationGuide from "./ParticipationGuide";
import FooterSection from "./FooterSection";

const Hero = () => {
  return (
    <section className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
      <HeaderNav />
      <HeroMain />
      <WhyJoin />
      <ParticipationGuide />
      <FooterSection />
    </section>
  );
};

export default Hero;
