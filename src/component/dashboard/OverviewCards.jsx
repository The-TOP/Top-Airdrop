import React from "react";
import { motion } from "framer-motion";
import { FaCoins, FaUserFriends, FaTasks, FaDownload } from "react-icons/fa";

const cards = [
  { icon: <FaCoins />, label: "Token Balance", value: "5 035 353" },
  { icon: <FaUserFriends />, label: "Total Referral", value: "024" },
  { icon: <FaTasks />, label: "Total Activities", value: "016" },
  { icon: <FaDownload />, label: "Total Extract", value: "088" },
];

const OverviewCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
    {cards.map((card, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.03 }}
        className="bg-black/60 text-white p-4 rounded-tl-4xl rounded-br-3xl border-b-4 border-green-500 shadow-md space-y-2 justify-center items-center flex-col gap-3 flex "
      >
        <p className="text-sm text-zinc-400">{card.label}</p>
        <div className="text-3xl text-green-400">{card.icon}</div>

        <h3 className="text-2xl font-bold">{card.value}</h3>
      </motion.div>
    ))}
  </div>
);

export default OverviewCards;
