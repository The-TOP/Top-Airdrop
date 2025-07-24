import React, { useContext } from "react";
import HeaderNav from "../component/Ui/HeaderNav";
import AboutSection from "../component/Ui/AboutSection";
import FooterSection from "../component/Ui/FooterSection";

import HomeModal from "../modal/HomeModal";
import DataContext from "../context/DataContext";

const About = () => {
   const { homeModal, setHomeModal  } = useContext(DataContext);
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <HeaderNav />
      <AboutSection />
      <FooterSection />
        <HomeModal isOpen={homeModal} onClose={()=>{ setHomeModal(false)}}  />
    </main>
  );
};

export default About;
