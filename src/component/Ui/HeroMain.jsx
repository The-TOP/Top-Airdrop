import React from "react";
import heroTop from "../../img/heroTop.png";
import heroDown from "../../img/heroDown.png";
import Tokenimg from "../../img/tokenimg.png";
import Tokenball from "../../img/tokenball.png";
import ball1 from "../../img/ball1.png";
import ball2 from "../../img/ball2.png";
import heroMain from "../../img/heroMain.png";
import contactball from "../../img/contactball.png";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegClock,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram, FaSquareYoutube } from "react-icons/fa6";
import { useWallet } from "@solana/wallet-adapter-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationData from "../../assets/animation.json";
import Lottie from "lottie-react";

const HeroMain = () => {
  const { connected } = useWallet();

  return (
    <div className="text-center">
      {/* //// Top ///// */}

      <div
        className=""
        style={{
          backgroundImage: `url(${heroTop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* //// claim  ///// */}
        <div className="max-w-7xl mx-auto text-center px-3 py-6 md:pt-10 relative">
          <div className="max-w-3xl  mt-4 md:mt-2 flex flex-col items-center mx-auto px-6 py-3 text-center ">
            <h2 className="text-3xl px-4 max-w-sm md:text-4xl md:leading-12 font-bold  tracking-wide text-white mb-8">
              Claim Free $TOP Tokens
            </h2>
            <div className="md:border w-full border-white/20 rounded-br-4xl  md:rounded-br-[70px] border-b-white/10 rounded-tl-4xl md:rounded-tl-[70px] md:p-8 md:pt-14 ">
              <p className=" text-base  px-4 mb-2">
                -Join the airdrop and become an early part of The Open Protocol
                revolution.
              </p>
              <p className=" text-xs text-white/50 md:text-sm px-4 mb-2">
                Experience the speed of centralized exchanges and the trust of
                decentralized protocols — all in one powerful platform.
              </p>

              <div className="flex  justify-center items-center gap-6 mt-10 mb-6">
                {!connected && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className=" border border-green-500 text-white px-3 py-2 rounded-full text-sm font-medium"
                  >
                    Connect Wallet
                  </motion.button>
                )}

                <div className="flex items-center gap-6 text-sm  z-20">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-green-400 cursor-pointer flex items-center gap-2 font-semibold"
                  >
                    <span>Claim Now </span>
                    <span className="rounded-full p-1 border-green-400 border bg-black text-green-500">
                      <FiArrowUpRight />
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src={ball1}
            alt="ball"
            className=" w-8 absolute top-8 md:top-1/6 left-1/5"
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: [0.2, 1.2], opacity: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{ once: true }}
          />
          <motion.img
            src={ball1}
            alt="ball"
            className=" w-6 absolute top-1/2 right-4 md:right-1/6 "
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: [0.2, 1.2], opacity: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.4,
              ease: "linear",
            }}
            viewport={{ once: true }}
          />
          <motion.img
            src={ball2}
            alt="ball"
            className=" hidden md:block w-12 absolute top-2/3 left-4 md:left-1/7  "
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: [0.2, 1.2], opacity: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.3,
              ease: "linear",
            }}
            viewport={{ once: true }}
          />
        </div>

        {/* //// imgSocial time ///// */}

        <div className="mx-auto max-w-7xl -mt-10 md:mt-0 md:px-12  md:pb-0 ">
          <div className="flex flex-col md:flex-row h-80 items-center md:items-start gap-1">
            {/*   contact */}

            <div className="md:flex-2 flex mt-4 justify-center  md:items-center items-start gap-3">
              <div className="flex flex-col items-center justify-center gap-1 mt-4">
                <div className="flex gap-4 text-white/70">
                  <Link
                    target="_blank"
                    to={" https://www.facebook.com/share/1BGLMMAAQN/"}
                  >
                    <FaFacebookF className="hover:text-white" />
                  </Link>
                  <Link target="_blank" to={"#"}>
                    <FaTwitter className="hover:text-white" />
                  </Link>
                  <Link
                    target="_blank"
                    to={
                      " https://www.instagram.com/thetopxchange?igsh=YndwaHNjcjRpM21p"
                    }
                  >
                    <FaInstagram className="hover:text-white" />
                  </Link>
                  <Link
                    target="_blank"
                    to={"https://youtube.com/@topxchange?feature=shared"}
                  >
                    <FaSquareYoutube className="hover:text-white" />
                  </Link>
                </div>
                <p className="text-sm">@top_protocol</p>
              </div>
              {/* Right Social Icons */}

              <div className="hidden md:block">
                <img
                  src={contactball}
                  alt=" contact us"
                  className="w-2/5 h-auto mt-2 "
                />
              </div>
            </div>

            {/*  image */}
            <div className="flex-3 hidden md:flex justify-center  items-center  ">
              
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                 className="scale-120 -mt-28 "
              />
             {/*  <DotLottieReact
                src="https://lottie.host/98a67277-2f13-459c-b371-7a18eb6e0149/C3sz1rV4ez.lottie"
                loop
                autoplay
                className="scale-250 "
              /> */}
            </div>

            {/* time */}
            <div className=" mt-6 md:flex-2 flex flex-col items-center justify-center md:justify-start md:items-start font-semibold text-white md:mt-2 p-3 md:p-0 bg-black/50 sm:bg-black/0 rounded-2xl ">
              <p className=" flex items-center justify-center gap-2">
                <span className="text-green-500">
                  <FaRegClock className="w-8 text-2xl" />
                </span>
                <span className="">Distribution Countdown </span>
              </p>
              <p className="mt-3 md:border  md:bg-black/30 border-white/30 rounded-br-4xl  md:rounded-br-[30px] border-b-white/10 rounded-tl-4xl md:rounded-tl-[30px] text-2xl md:text-3xl text-white font-semibold p-3 ">
                5D : 18H <span className="text-green-500">: 14M</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //// Down ///// */}

      <div
        className=" flex flex-col w-full px-3  md:px-8 items-end justify-center gap-6 md:gap-12"
        style={{
          backgroundImage: `url(${heroDown})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* //// Top Token ///// */}

        <div className=" bg-black/30 border w-full border-white/35 rounded-br-4xl  md:rounded-br-[100px] border-b-white/10 rounded-tl-4xl md:rounded-tl-[100px] mx-auto max-w-7xl pt-6 md:pt-10">
          <div className=" flex max-w-md mx-auto px-6 py-3">
            <h3 className="text-sm text-center capitalize tracking-wide bg-black text-white font-bold mb-4 md:mb-8 rounded-full  p-3 py-3 shadow-inner shadow-green-600  md:text-lg mx-auto ">
              TOP Token Airdrop
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-4 sm:px-6 px-8 max-w-6xl mx-auto">
            <div className="flex-2 flex items-center justify-center relative px-4">
              <img src={Tokenimg} alt="" className="w-50  md:w-60 " />
              <motion.img
                src={Tokenball}
                alt="token"
                className="w-16 absolute -top-3 left-0 "
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{ scale: [0.2, 1.2], opacity: 1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2,
                  ease: "linear",
                }}
                viewport={{ once: true }}
              />
              <motion.img
                src={Tokenball}
                alt="token"
                className="w-8 absolute bottom-10 left-0  "
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{ scale: [0.2, 1.2], opacity: 1 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2,
                  ease: "linear",
                }}
                viewport={{ once: true }}
              />
            </div>

            <div className="max-w-2xl mb-8 p-4 border border-white/30 rounded-br-4xl md:rounded-br-[50px] rounded-tl-4xl md:rounded-tl-[50px] space-y-4 flex-3">
              <h1 className="  text-xs md:text-sm leading-7 mb-8">
                TOP (The Open Protocol) is more than just another token — it's a
                revolutionary hybrid trading infrastructure designed to merge
                the best of both worlds: the speed and liquidity of centralized
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
    </div>
  );
};

export default HeroMain;
