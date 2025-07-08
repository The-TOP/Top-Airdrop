import React, { useContext, useEffect } from "react";
import Hero from "../component/Ui/Hero";
import { Web3Context } from "../context/Web3Context";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../api/hook/useBackend";

const Home = () => {
  const { address, connectWallet } = useContext(Web3Context);
  const navigate = useNavigate();

  if (address) {
    getUserData().then(console.log);
    navigate("/dashboard");
  } else {
    console.log("no address found");
  }

  console.log(address);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Hero />
    </main>
  );
};

export default Home;
