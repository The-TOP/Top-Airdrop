import React from "react";
import RoadMap from "../component/tokenomics/RoadMap";


const Tokenomics = () => {
 
  const roadmapData = [
    {
      phase: "Phase 1 - Q4 2025",
      title: "Foundation & Core Launch",
      color: "pink",
      bg: "bg-pink-900/20",
      items: [
        "Core Hybrid Crypto Exchange Launch",
        "Official tTOP Token Launch",
        "MVP release of Blockchain Insight Layer (BIL) – real-time analytics + transparency tools",
      ],
    },
    {
      phase: "Phase 2 - Q2 2026",
      title: "Multi-Chain & Institutional Expansion",
      color: "orange",
      bg: "bg-orange-900/20",
      items: [
        "Multi-Chain Compatibility (e.g., Ethereum, Solana, BNB Chain)",
        "Launch of Tokenized Forex Testing",
        "Enhancement of BIL with Advanced Features",
        "Release of BIL Pro for institutional traders & market makers",
      ],
    },
    {
      phase: "Phase 3 - Q1 2027 Onwards",
      title: "Real-World Asset Integration",
      color: "purple",
      bg: "bg-purple-900/20",
      items: [
        "Launch of Tokenized Real-World Assets (RWAs) – real estate, bonds, etc.",
        "Accountable Lending Protocol (transparent, on-chain verification)",
        "Launch of Projects Liquidity Pool – bootstrapping early-stage projects with tTOP",
      ],
    },
    {
      phase: "Phase 4 - Q1 2028 Onwards",
      title: "Infrastructure & Expansion",
      color: "green",
      bg: "bg-green-900/20",
      items: [
        "Integration of Complex Tokenized Derivatives (options, market continuations)",
        "Launch of tTOP Trade Fair & Expo Platform – a global digital event hub for tokenized trading, project showcases, and networking",
      ],
    },
  ];

  return (
    <div className=" text-white p-4 md:p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tokenomics</h2>
        <p className="text-zinc-400 text-sm mb-8">
          $TOP token is designed to fuel The Open Protocol ecosystem by powering trading, governance, staking, and rewards.
        </p>

        <div className="bg-zinc-900 p-3 rounded-lg text-center text-blue-400 text-sm font-medium mb-4 inline-block">
          1154 x 84
        </div>

        <div className="text-center my-6">
          <h3 className="bg-zinc-800 inline-block px-6 py-2 rounded-full text-white text-lg font-semibold">
            Roadmap
          </h3>
        </div>

        <p className="text-zinc-400 text-sm mb-10 text-center">
          With deflationary mechanics like token burns via the Extract Function, and real utility across trading, lending, and governance, $TOP is built for sustained value and ecosystem impact.
        </p>

        {/* Roadmap phases */}
        <div className="flex flex-wrap gap-6 justify-center">
          {roadmapData.map((phase, index) => (
            <RoadMap key={index} {...phase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
