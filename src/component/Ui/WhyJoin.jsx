import React from "react";
import { motion } from "framer-motion";
import { FaGift, FaBullseye, FaChartLine, FaShieldAlt } from "react-icons/fa";
import icon from "../../img/whyIcon.png"


const features = [
  {
    icon: <FaGift className="text-green-400 text-3xl" />,
    title: "Free $TOP Tokens",
    desc: "Jump in early to claim free $TOP tokens—your entry into the future of crypto freedom.",
  },
  {
    icon: <FaBullseye className="text-green-400 text-3xl" />,
    title: "Limited Opportunity",
    desc: "The window is limited. The sooner you start, the higher your earning potential. Get in while it’s fresh.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-3xl" />,
    title: "High Potential Upside",
    desc: "As an early adopter, your tokens could gain significant value as adoption grows.",
  },
  {
    icon: <FaShieldAlt className="text-green-400 text-3xl" />,
    title: "Transparent Movement",
    desc: "$TOP is built with transparency in mind—everything is traceable, fair, and fully decentralized.",
  },
];

const WhyJoin = () => {
  return (
    <>
    
      <section className="bg-black/40 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2  px-6 max-w-xs sm:max-w-lg lg:grid-cols-4 gap-6 lg:max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/70 flex flex-col items-center justify-center gap-3 pb-16 md:pb-12  border border-zinc-700 rounded-xl p-6 text-center hover:shadow-lg text-white/60 hover:text-white  hover:border-white/30 transition-all duration-300"
              >
                <div className="mb-4"><img src={icon} alt="icon" className="w-10 md:w-12 py-2" /></div>
                <h4 className=" md:text-md font-semibold mb-2">{f.title}</h4>
                <p className="text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJoin;
