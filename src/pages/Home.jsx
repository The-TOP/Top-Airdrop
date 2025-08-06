import React, { useContext, useEffect, useState } from "react";
import Hero from "../component/Ui/Hero";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import DataContext from "../context/DataContext";
import myWalletContext from "../context/WalletContext1";

const Home = () => {
  const { connected, publicKey } = useWallet();
  /* const address = publicKey?.toString(); */
  const navigate = useNavigate();
  const { handleRegisterUser } = useContext(myWalletContext);
  const { ondashboard } = useContext(DataContext);

  useEffect(() => {
    if (connected && !ondashboard) {
      navigate("/dashboard");
    }
  }, [connected]);
  /* console.log(address); */

  useEffect(() => {
    if (connected) {
      const referral = localStorage.getItem("referrer");
      if (referral) {
        console.log(referral);
        console.log( typeof referral);
       
        
       handleRegisterUser(referral);
       // localStorage.removeItem("referrer"); 

      } else {
        handleRegisterUser();
      }
    }
  }, [connected, publicKey]);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Hero />
    </main>
  );
};

export default Home;
