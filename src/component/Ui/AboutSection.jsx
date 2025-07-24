import React from "react";
import { motion } from "framer-motion";
import icon from "../../img/whyIcon.png";
import Tokenimg from "../../img/tokenimg.png";
import Tokenball from "../../img/tokenball.png";

const features = [
  {
    icon: <img src={icon} alt="icon" className="w-10 md:w-12 py-2" />,
    title: "Free $TOP Tokens",
    desc: "Jump in early to claim free $TOP tokens—your entry into the future of crypto freedom.",
  },
  {
    icon: <img src={icon} alt="icon" className="w-10 md:w-12 py-2" />,
    title: "Limited Opportunity",
    desc: "The window is limited. The sooner you start, the higher your earning potential. Get in while it’s fresh.",
  },
  {
    icon: <img src={icon} alt="icon" className="w-10 md:w-12 py-2" />,
    title: "High Potential Upside",
    desc: "As an early adopter, your tokens could gain significant value as adoption grows.",
  },
  {
    icon: <img src={icon} alt="icon" className="w-10 md:w-12 py-2" />,
    title: "Transparent Movement",
    desc: "$TOP is built with transparency in mind—everything is traceable, fair, and fully decentralized.",
  },
];

const AboutSection = () => {
  return (
    <div className="  mt-35  sm:mt-40 md:mt-45 ">
      {/* about top */}
      <div className="p-3 md:p-8">
        <div className="bg-black/30 border w-full border-white/25 rounded-br-4xl md:rounded-br-[100px] border-b-white/10 rounded-tl-4xl md:rounded-tl-[100px] mx-auto max-w-7xl pt-6 md:pt-10">
          <div className="flex max-w-md mx-auto px-6 py-3">
            <h3 className="text-sm text-center capitalize tracking-wide bg-black text-white font-bold mb-4 md:mb-8 rounded-full p-3 py-3 shadow-inner shadow-green-600 md:text-lg mx-auto">
              TOP Token Airdrop
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-4 sm:px-6 px-8 max-w-6xl mx-auto">
            {/* Animated Token Image */}
            <div className="flex-2 flex items-center justify-center relative px-4">
              <motion.img
                src={Tokenimg}
                alt="token"
                className="w-50 md:w-60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
              />

              {/* Token balls with rotateX animation */}
              <motion.img
                src={Tokenball}
                alt="token ball"
                className="w-16 absolute -top-3 left-0 hover:scale-110 transition-transform duration-300"
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
                src={Tokenball}
                alt="token ball"
                className="w-8 absolute bottom-10 left-0 hover:scale-110 transition-transform duration-300"
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
            </div>

            <div className="max-w-2xl mb-8 p-4 border border-white/30 rounded-br-4xl md:rounded-br-[50px] rounded-tl-4xl md:rounded-tl-[50px] space-y-4 flex-3">
              <h1 className="text-xs md:text-sm leading-7 mb-8">
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

              <p className="text-sm text-center capitalize tracking-wide text-white font-semibold mb-4 md:mb-8 rounded-full p-2 py-1 shadow-inner shadow-green-600 sm:w-60 mx-auto">
                About TOP Token
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //// why join ///// */}
      <div className="max-w-7xl mx-auto text-center py-6 md:pt-10">
        <div className="max-w-lg flex flex-col items-center mx-auto px-6 py-3 text-center">
          <h3 className="text-sm capitalize font-bold tracking-wide mb-8 rounded-full p-2 px-4 py-3 shadow-inner shadow-green-600 md:text-lg mx-auto">
            Why You Should Join Us
          </h3>
          <h2 className="text-md md:text-lg font-bold text-white mb-3">
            Be among the first to earn $TOP
          </h2>
          <p className="text-xs md:text-sm px-4 mb-12">
            Get rewarded for joining early, with zero risk and full access to
            the future of crypto trading.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <section className="text-white px-6 py-16 md:pt-4 ">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-6 max-w-xs sm:max-w-lg lg:grid-cols-4 gap-6 lg:max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black/70 flex flex-col items-center justify-center gap-3 pb-16 md:pb-12 border border-zinc-700 rounded-xl p-6 text-center hover:shadow-lg text-white/60  md:text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0.7,  }}
                  whileInView={{ scale: [0.7, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                    ease: "linear",
                  }}
                  className="mb-4"
                >
                  {f.icon}
                </motion.div>
                <h4 className="md:text-md font-semibold mb-2">{f.title}</h4>
                <p className="text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
