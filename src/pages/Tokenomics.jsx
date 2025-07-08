import React from "react";
import RoadMap from "../component/tokenomics/RoadMap";
import roadmap1 from "../img/roadmap1.png";
import roadmap2 from "../img/roadmap2.png";
import roadmap3 from "../img/roadmap3.png";
import roadmap4 from "../img/roadmap4.png";

const Tokenomics = () => {
  const roadMapPics = [roadmap1, roadmap2, roadmap3, roadmap4];
  /*  const roadmapData = [
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
 */
  return (
    <div className=" text-white p-3 pb-10 md:p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/2 mt-3 mb-1 p-2 py-1 rounded-t-2xl ">
          <h2 className=" text-white font-stretch-condensed text-xl font-semibold tracking-widest mb-3">
            Tokenomics
          </h2>
          <p className="text-zinc-400 text-sm mb-2">
            $TOP token is designed to fuel The Open Protocol ecosystem by
            powering trading, governance, staking, and rewards.
          </p>
        </div>
        <p className="text-zinc-400 rounded-b-lg bg-white/5 py-1 px-2 text-sm mb-2">
          Roadmap
        </p>

        <div className="text-center flex my-6 ">
          <h3 className=" capitalize tracking-wide bg-black  rounded-full p-1 px-6 md:px-8 md:py-2 shadow-inner shadow-green-600 mx-auto text-white text-center text-md md:text-lg mb-3 mt-1  md:mt-8   ">
            Roadmap
          </h3>
        </div>

        <p className="text-zinc-400 text-sm mb-10 text-center max-w-4xl mx-auto px-2">
          With deflationary mechanics like token burns via the Extract function,
          and real utility across trading, lending, and governance, $TOP is
          built for sustained value and ecosystem impact.
        </p>

        {/* Roadmap phases */}
        <div className="flex flex-wrap gap-6 justify-center">
          {roadMapPics.map((phase, index) => (
            <RoadMap key={index} data={phase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
