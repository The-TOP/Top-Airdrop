import React from "react";
import part1 from "../../img/participation.png"
import bullet from "../../img/bullet.png"

const steps = [
  "Connect your wallet",
  "Complete onboarding",
  "Invite your friends",
  "Earn and claim rewards",
];

const ParticipationGuide = () => { 
  return (
    <div className="bg-black/40 py-12 px-6">
      <div className=" bg-black/45 border border-white/20 rounded-br-4xl md:rounded-br-[100px] border-b-0 rounded-tl-4xl md:rounded-tl-[100px] mx-auto max-w-7xl pt-10">

        <div className="max-w-md flex mx-auto px-6 py-3">
          <h3 className="text-sm flex items-center justify-center text-center capitalize tracking-wide text-white font-bold mb-4 md:mb-8 rounded-full  px-4 py-3 shadow-inner shadow-green-600 sm:w-60 mx-auto md:text-lg  ">
            Participation Guide
          </h3> 
        </div>

        <div className="flex flex-col sm:flex-row gap-6 p-4 sm:px-6 px-8 max-w-4xl mx-auto">
          <div className="max-w-xl  space-y-4 flex-1">
            <h2 className="text-l sm:text-xl md:text-2xl font-semibold text-white mb-3">
             Airdrop Participation Guide
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm  mb-8">
             Track your progress and claim your tokens directly to your wallet.
            </p>
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
              
                <img src={bullet} alt=" list" className="w-8" />
                <p className="text-gray-300 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex-1 px-6 md:px-4 my-8 md:my-1 md:mt-4 lg:mt-1 md:flex flex-col items-center justify-center ">
            <img src={part1}alt="" className="w-full scale-125 md:scale-100 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipationGuide;
