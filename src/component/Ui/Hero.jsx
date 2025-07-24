import React, { useContext } from "react";
import HeaderNav from "./HeaderNav";
import HeroMain from "./HeroMain";
import WhyJoin from "./WhyJoin";
import ParticipationGuide from "./ParticipationGuide";
import FooterSection from "./FooterSection";
import HomeModal from "../../modal/HomeModal";
import   DataContext  from "../../context/DataContext";

const Hero = () => {
   const { homeModal, setHomeModal  } = useContext(DataContext);

  return (
    <section className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
      <HeaderNav />
      <HeroMain />
      <WhyJoin />
      <ParticipationGuide />
      <FooterSection />
      <HomeModal isOpen={homeModal} onClose={()=>{ setHomeModal(false)}}  />
    </section>
  );
};

export default Hero;
