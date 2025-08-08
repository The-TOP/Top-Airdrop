import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import top from "../img/miniLogo.png";
import solana from "../img/solana.png";
import WithdrawModal from "../modal/WithdrawModal";
import profile from "../img/Pprofile.png";
import { useWallet } from "@solana/wallet-adapter-react";
import DataContext from "../context/DataContext";
import myWalletContext from "../context/WalletContext1";

const Withdraw = () => {
  const [withdraw, setWithdraw] = useState("");
  const [platformEnd, setPlatformEnd] = useState(false);
  const [openWithdrawModal, setopenWithdrawModal] = useState(false);
  const { publicKey, connected } = useWallet();
  const userwallet = useWallet();
  const address = publicKey.toString();
  const { userBalance, setRefresh, isCountdownComplete } =
    useContext(DataContext);
  const { handleWithdrawTokens, handlePlatformStats } =
    useContext(myWalletContext);
  const withdrawAmount = Number(withdraw);
  console.log(isCountdownComplete);

  const handleWithdraw = () => {
    setopenWithdrawModal(true);
    console.log("withdraw Transaction Details:", {
      withdraw,
      wallet: address,
      fee: "0.00004286 SOL",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handlePlatformStats();
        setPlatformEnd(result.isEnded);
        console.log(result.isEnded);
      } catch (error) {
        console.error("Error fetching platform endDate:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" p-3 md:p-6 pb-10 text-white"
    >
      <div className="bg-white/2 mt-3 mb-1 p-2 pt-3 py-1 rounded-t-2xl ">
        <h2 className=" text-white font-stretch-condensed text-lg md:text-xl font-semibold tracking-wide mb-3">
          Withdrawal
        </h2>
        <p className="text-zinc-400 text-sm mb-2">
          Easily transfer your earned $TOP tokens from the platform to your
          personal wallet. Withdrawals are fast, secure, and fully on-chain.
        </p>
      </div>
      <h2 className="text-zinc-400 rounded-b-lg   px-2 text-sm font-semibold my-2 py-2 bg-white/5">
        Withdrawal
      </h2>

      {/* Section Box */}
      <div className="bg-white/2 rounded-xl p-3 md:p-6 shadow-md border border-white/5">
        <p className="text-sm text-gray-400 mb-4">
          The Withdrawal section allows you to securely transfer your earned
          $TOP tokens from the platform to your personal wallet. Withdraw your
          assets at your convenience.
        </p>

        {/* Input */}
        <div className="mb-6">
          <label
            htmlFor="withdraw"
            className="block mb-2 text-sm text-gray-300"
          >
            Amount:_ _
          </label>
          <div className="relative">
            <input
              type="number"
              placeholder="Enter Amount"
              name="withdraw"
              id="withdraw"
              value={withdraw}
              onChange={(e) => setWithdraw(e.target.value)}
              className="w-full placeholder:text-xs bg-black/60 mb-6  text-sm flex items-center px-4 py-3 justify-between border-white/20 border rounded-tl-xl rounded-br-xl  text-white  pl-4 pr-20 focus:outline-none focus:border-green-400/40"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2  px-3 py-1 text-xs font-bold rounded-full text-black">
              <div className="flex gap-1 justify-center items-center p-1 px-2 rounded-2xl bg-white/20">
                <img src={top} alt="top token" className=" w-4" />
                <span className="">{"$TOP"}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-xs items-center mt-2  ">
            <p className=" text-zinc-400 ">{userBalance.toString()} </p>
            <button
              onClick={() => setWithdraw(userBalance)}
              className="cursor-pointer text-green-400"
            >
              MAX
            </button>
          </div>
        </div>

        {/* Transaction Info */}
        <div className="space-y-3 text-xs text-gray-300">
          <div className="flex justify-between">
            <span>Transaction Type:</span>
            <span className="font-medium text-white">Withdrawal</span>
          </div>
          <div className="flex justify-between">
            <span>Minimum Withdrawal Amount:</span>
            <span className="text-white">1 $TOP</span>
          </div>
          <div className="flex justify-between">
            <span>Transaction Fee:</span>
            <span className="text-white">0.00064 </span>
          </div>
          <div className="flex justify-between">
            <span>Wallet Connected:</span>
            <span className="text-white flex items-center gap-2">
              <img
                src={profile}
                alt="user"
                className="w-4 h-4 rounded-full bg-green-400 animate-pulse"
              />
              {connected
                ? address.slice(0, 7) + "...." + address.slice(-4)
                : "xxxxx...xxx"}
            </span>
          </div>
          <div className="flex justify-between border-t border-gray-700 pt-3 mt-4">
            <span>Fee:</span>
            <div className="text-green-400 flex gap-0.5 items-center">
              <img
                src={solana}
                alt="network"
                className="w-4 h-4 rounded-full bg-green-400 animate-pulse"
              />{" "}
              0.00004265 SOL
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="mt-8 text-center">
          <button
            disabled={!isCountdownComplete && !platformEnd}
            onClick={handleWithdraw}
            className={`flex mx-auto justify-center items-center   border-green-500 border  hover:bg-white/5 hover:text-green-500 text-white py-2 px-10 rounded-full text-sm  text-center font-semibold transition ${
              !platformEnd ? " bg-white/10 text-white/30 border-white/30 py-1 cursor-not-allowed" : "bg-black/60"
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
      <WithdrawModal
        isOpen={openWithdrawModal}
        onClose={setopenWithdrawModal}
        onWithdraw={async () => {
          const withdawtoken = await handleWithdrawTokens(
            userwallet,
            withdrawAmount
          );
          withdawtoken && setRefresh((prev) => prev + 1);
        }}
        withdrawAmount={withdraw} // to display on screen
      />
    </motion.div>
  );
};

export default Withdraw;
