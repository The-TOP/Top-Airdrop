import React, { useContext, useEffect, useState } from "react";
import miniLogo from "../../img/miniLogo.png";
import user from "../../img/Pprofile.png";
import { useWallet } from "@solana/wallet-adapter-react";
import myWalletContext from "../../context/WalletContext1";
import DataContext from "../../context/DataContext";

const Dashheader = ({ xstyle }) => {
  const check = useWallet();
  const { publicKey } = useWallet();
  const wallet = publicKey ? publicKey.toString() : null;

  const formatNumber = (num) => {
    return num.toString().padStart(3, "0");
  };

  const {
    handleUserBalance,
    handlePlatformStats,
    handleUserTasks,
    handleWithdrawStats,
    handleFetchUserAccount,
    getCompleteReferralInfo,
  } = useContext(myWalletContext);

  const {
    userBalance,
    setUserbalance,
    setUserReferral,
    setUserTask,
    refresh,
    setwithdrawStats,
    setReferralStats,
  } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handleUserBalance();
        const referral = await handleFetchUserAccount();
        const task = await handleUserTasks();
        const withdrawstats = await handleWithdrawStats();
        const refferalstats = await getCompleteReferralInfo();
        const humanReadable = result.toNumber() / 1e9;
        const completedCount = task.filter((task) => task).length;
        //const account = await handleFetchUserAccount();

        setUserbalance(humanReadable);
        setUserTask(completedCount);
        setUserReferral(referral.referralsCount);
        setwithdrawStats(withdrawstats);
        setReferralStats(refferalstats);
      } catch (error) {
        console.error("Error fetching  Data:", error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <div
      className={`flex rounded-bl-xl bg-white/10 justify-between gap-3 items-center px-4 py-3 ${xstyle}`}
    >
      <div className="flex justify-center items-center gap-2">
        <img
          /*  onClick={() => {
            getCompleteReferralInfo();
          }} */
          src={miniLogo}
          className="w-5"
          alt="top"
        />
        <p className="text-xs">{formatNumber(userBalance)} </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <img
          /*  onClick={() => {
            handleWithdrawStats();
          }} */
          src={user}
          className="w-5"
          alt="top"
        />
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
