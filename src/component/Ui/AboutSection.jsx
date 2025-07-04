import React from "react";
import Tokenimg from "../../img/tokenimg.png";
import Tokenball from "../../img/tokenball.png";

const AboutSection = () => {
  return (
    <div>
      <div className=" bg-black/30 border w-full border-white/35 rounded-br-4xl  md:rounded-br-[100px] border-b-white/10 rounded-tl-4xl md:rounded-tl-[100px] mx-auto max-w-7xl pt-6 md:pt-10">
        <div className=" flex max-w-md mx-auto px-6 py-3">
          <h3 className="text-sm text-center capitalize tracking-wide bg-black text-white font-bold mb-4 md:mb-8 rounded-full  p-3 py-3 shadow-inner shadow-green-600  md:text-lg mx-auto ">
            TOP Token Airdrop
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 p-4 sm:px-6 px-8 max-w-6xl mx-auto">
          <div className="flex-2 flex items-center justify-center relative px-4">
            <img src={Tokenimg} alt="" className="w-50  md:w-60 " />
            <img
              src={Tokenball}
              alt=""
              className="w-16 absolute -top-3 left-0 "
            />
            <img
              src={Tokenball}
              alt=""
              className="w-8 absolute bottom-10 left-0  "
            />
          </div>

          <div className="max-w-2xl mb-8 p-4 border border-white/30 rounded-br-4xl md:rounded-br-[50px] rounded-tl-4xl md:rounded-tl-[50px] space-y-4 flex-3">
            <h1 className="  text-xs md:text-sm leading-7 mb-8">
              TOP (The Open Protocol) is more than just another token — it's a
              revolutionary hybrid trading infrastructure designed to merge the
              best of both worlds: the speed and liquidity of centralized
              exchanges (CEXs) with the security and transparency of
              decentralized protocols (DEXs).
              <p className="my-2">
                The TOP Airdrop rewards early supporters and welcomes a global
                community built on trust, innovation, and transparency.
              </p>
            </h1>

            <p className="text-sm text-center capitalize tracking-wide text-white font-semibold mb-4 md:mb-8 rounded-full  p-2 py-1 shadow-inner shadow-green-600 sm:w-60 mx-auto ">
              About TOP Token
            </p>
          </div>
        </div>
      </div>
      {/* //// why join ///// */}
      <div className="max-w-7xl mx-auto text-center bg-black/70 py-6 md:pt-10">
        <div className="max-w-lg  flex flex-col items-center mx-auto px-6 py-3 text-center ">
          <h3 className="text-sm capitalize  font-bold tracking-wide  mb-8 rounded-full  p-2 px-4 py-3 shadow-inner shadow-green-600 md:text-lg mx-auto ">
            Why You Should Join Us
          </h3>
          <h2 className="text-md  md:text-lg font-bold text-white mb-3">
            Be among the first to earn $TOP
          </h2>
          <p className=" text-xs md:text-sm px-4 mb-12">
            Get rewarded for joining early, with zero risk and full access to
            the future of crypto trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
