import React from "react";
import { BsClockHistory } from "react-icons/bs";

const DistributionCountdown = () => {
  return (
    <div className="bg-zinc-900 text-white p-4 rounded-xl shadow-md h-full">
      <h3 className="text-lg font-semibold mb-2">Distribution Countdown</h3>
      <p className="text-sm text-zinc-400 mb-4">
        Stay updated on ₮Top Token distribution
      </p>

      <div className="flex flex-col items-center bg-zinc-800 p-4 rounded-xl text-center">
        <BsClockHistory className="text-green-400 text-4xl mb-2" />
        <h4 className="text-sm text-zinc-400 mb-1">Airdrop Timer</h4>
        <div className="text-2xl font-bold space-x-2">
          <span>56D</span>
          <span>18H</span>
          <span>23M</span>
        </div>
        <p className="text-xs mt-2 text-green-500">Next Period: 180 Days</p>
      </div>
    </div>
  );
};

export default DistributionCountdown;
