import React, { useContext } from "react";
import { BsClockHistory } from "react-icons/bs";
import countImg from "../../img/countdown.png";
import DataContext from "../../context/DataContext";

const DistributionCountdown = () => {

  const {days, hours, minutes } = useContext(DataContext)
  
  return (
    <div className=" text-white p-4 rounded-xl shadow-md h-full">
      <div className="bg-white/2 p-2 rounded-t-2xl my-1">
        <h3 className="text-lg font-semibold mb-2">Distribution Countdown</h3>
        <p className="text-sm text-zinc-400 py-1">
          Stay updated on ₮Top Token distribution
        </p>
      </div>
      <h4 className="text-sm text-zinc-400 my-2 py-3 px-2 bg-white/5 rounded-b-lg">
        Airdrop Timer
      </h4>
      <div className="flex flex-col items-start justify-center md:items-start bg-white/2 p-4 rounded-lg text-center">
        <div className="flex flex-col justify-center items-center mx-auto">
          <img src={countImg} alt="count down" className="w-20 -ms-16  " />
          <div className="text-lg my-1 font-bold border border-white/50 p-4 rounded-tr-2xl rounded-bl-2xl space-x-2 rotate-30  -translate-y-2">
            <div className="tracking-widest">{days} D</div>
            <p className="text-sm">:</p>
            <div className="tracking-widest">{hours} H</div>
            <p className="text-sm">:</p>
            <div className="text-green-500 tracking-widest">{minutes} M</div>{" "}
            <p className="text-xs  text-center mt-2 text-zinc-400 font-normal">
              Period:
            </p>
            <p className="text-xs text-center font-normal text-zinc-400">
              180 Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionCountdown;
