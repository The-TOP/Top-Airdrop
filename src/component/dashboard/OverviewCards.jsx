import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaCoins, FaUserFriends, FaTasks, FaDownload } from "react-icons/fa";
import DataContext from "../../context/DataContext";

const OverviewCards = () => {
  const { userBalance, userReferral, userTask } = useContext(DataContext);

  
  const formatNumber = (num) => {
  return num.toString().padStart(3, "0");
};


  const cards = [
    { icon: <FaCoins />, label: "Token Balance", value: userBalance },
    { icon: <FaUserFriends />, label: "Total Referral", value: userReferral },
    { icon: <FaTasks />, label: "Total Activities", value: userTask},
    { icon: <FaDownload />, label: "Total Extract", value: "000" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          className="bg-black/60 text-white p-4 rounded-tl-4xl rounded-br-3xl border-b-4 border-green-500 shadow-md space-y-2 justify-center items-center flex-col gap-3 flex "
        >
          <p className="text-sm text-zinc-400">{card.label}</p>
          <div className="text-3xl text-green-400">{card.icon}</div>

          <h3 className="text-2xl font-bold">{formatNumber(card.value)}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
