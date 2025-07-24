import React, { useContext, useEffect, useState } from "react";
import miniLogo from "../../img/miniLogo.png";
import user from "../../img/Pprofile.png";
import { useWallet } from "@solana/wallet-adapter-react";
import myWalletContext from "../../context/WalletContext1";
import DataContext from "../../context/DataContext";

const Dashheader = ({ xstyle }) => {
  const wallet = useWallet().publicKey.toString();
  const { handleUserBalance, handlePlatformStats, handleUserTasks, handleSocialTask } =
    useContext(myWalletContext);

  const { userBalance, setUserbalance, setUserReferral,setUserTask } =
    useContext(DataContext);
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const result = await handleUserBalance();
        const referral = await handlePlatformStats();
        const task = await handleUserTasks();
        const humanReadable = result.toNumber() / 100000;
        const completedCount = task.filter(task => task).length;
        
        setUserbalance(humanReadable);
        setUserTask(completedCount);
        setUserReferral(referral.totalReferrals);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div
      className={`flex rounded-bl-xl bg-white/10 justify-between gap-3 items-center px-4 py-3 ${xstyle}`}
    >
      <div className="flex justify-center items-center gap-2">
        <img
          src={miniLogo}
          className="w-5"
          alt="top"
          onClick={()=> {handleSocialTask(1, "delight")}}
        />
        <p className="text-xs"> {userBalance} </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <img src={user} className="w-5" alt="top" />
        <p className="text-xs">
          {wallet
            ? `${wallet.slice(0, 5)}....${wallet.slice(-4)}`
            : "xxxxx....xxxx"}
        </p>
      </div>
    </div>
  );
};

export default Dashheader;
