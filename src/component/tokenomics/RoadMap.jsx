import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const RoadMap = ({ phase, title, items, color, bg, data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl p-2 ${bg} text-white  xl:w-[23%] border border-white/5 shadow-md`}
    >
      <img src={data} alt="" className="h-100 " />

     {/*  <div className="text-sm font-medium mb-2 flex items-center gap-2">
        <span className={`text-white bg-${color}-600 px-3 py-1 rounded-full`}>
          {phase}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-zinc-200">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 items-start">
            <FaCheckCircle className={`text-${color}-400 mt-1`} />
            <span>{item}</span>
          </li>
        ))}
      </ul> */}

    </motion.div>
  );
};

export default RoadMap;
