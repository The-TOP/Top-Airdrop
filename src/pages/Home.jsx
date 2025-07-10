import React, { useContext, useEffect, useState } from "react";
import Hero from "../component/Ui/Hero";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { connected, connecting } = useWallet();
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const {ondashboard} = useContext(DataContext)
  console.log(ondashboard);
  
  

  useEffect(() => {
    if (connected && !ondashboard) {
      navigate("/dashboard");
    } else {
      setChecking(false); // show home content if not connected
    }
  }, [connected]);
/* 
  if (checking || connecting) {
    return (
      <div className="h-screen bg-[#0a0a0f] flex items-center justify-center text-white text-lg">
        Checking wallet...
      </div>
    );
  } */

    return (
      <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        <Hero />
      </main>
    );
  
};

export default Home;
