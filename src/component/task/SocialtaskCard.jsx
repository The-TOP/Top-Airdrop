import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const SocialtaskCard = ({
  textcolor,
  title,
  description,
  img,
  buttonDisabled,
  onButtonClick,
  Icon,
  buttonLabel,
  borderstyle,
  trackLoading,
}) => {
  return (
    <div className={` overflow-x-auto bg-white/4 my-1 p-3 ${borderstyle}`}>
      <h3 className="text-sm pb-1 text-white/40">{title}</h3>
      <div className="flex  max-w-6xl items-center text-xs gap-3 ">
        <div
          className={`flex-1 flex items-center border bg-black/60 border-white/20 p-2 rounded-tl-xl rounded-br-xl gap-2 max-w-xl overflow-x-auto  ${textcolor} `}
        >
          {img && <img src={img} alt="" className="w-6" />}
          <p className="">{description}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-3 capitalize rounded-full text-xs border ${
            buttonDisabled
              ? "bg-white/10 text-white/30 border-white/30 py-1 cursor-not-allowed"
              : "border-green-500/40  bg-black/70 text-white hover:bg-white/10"
          }`}
          disabled={buttonDisabled}
          onClick={onButtonClick}
        >
          {buttonDisabled ? (
            "Done"
          ) : trackLoading ? (
            <div className="flex gap-1 items-center justify-center p-1">
              <span className=""> Load..</span>{" "}
              <FaSyncAlt className="text-green-500 animate-spin" />
            </div>
          ) : (
            <div className="flex gap-1 items-center justify-center p-1">
              <LuCircleArrowOutUpRight className="text-white/50" />
              <span className=""> {buttonLabel}</span>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default SocialtaskCard;
