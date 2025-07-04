import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Extract = () => {
  const navigate = useNavigate();

  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState("USDT");
  const [toToken, setToToken] = useState("tTOP");

  const handleProceed = () => {
    console.log("Extract Transaction Details:", {
      fromAmount,
      fromToken,
      toAmount,
      toToken,
      wallet: "Cxa99...8a1c5",
      fee: "0.00004286 SOL",
    });
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row p-3 md:p-6 pb-10 gap-6  min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left Section */}
      <div className="flex-1 bg-zinc-900 p-6 rounded-xl shadow-md">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
          Extract
        </h2>
        <p className="text-zinc-400 text-sm mb-6">
          Got unused or worthless tokens sitting in your wallet? You can swap
          those dead tokens for tTOP.
        </p>

        <div className="mb-4">
          <label className="text-zinc-400 text-sm block mb-2">From:</label>
          <div className="bg-zinc-800 rounded-lg flex items-center px-4 py-3 justify-between">
            <input
              type="number"
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent text-white placeholder-zinc-500 focus:outline-none w-full"
            />
            <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
              <span>{fromToken}</span>
              <button className="text-xs border border-zinc-700 rounded px-2 py-0.5 hover:bg-zinc-700">
                Select Token
              </button>
            </div>
          </div>
          <p className="text-xs text-green-400 mt-1">Balance: 0.00 MAX</p>
        </div>

        <div className="flex justify-center my-3 text-zinc-500">
          <FaArrowDown size={20} />
        </div>

        <div className="mb-6">
          <label className="text-zinc-400 text-sm block mb-2">To:</label>
          <div className="bg-zinc-800 rounded-lg flex items-center px-4 py-3 justify-between">
            <input
              type="number"
              placeholder="Enter Amount"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="bg-transparent text-white placeholder-zinc-500 focus:outline-none w-full"
            />
            <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
              <span>{toToken}</span>
              <button className="text-xs border border-zinc-700 rounded px-2 py-0.5 hover:bg-zinc-700">
                Select Token
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-zinc-400 mb-1">
          <p>Transaction Type: <span className="text-white">Extraction</span></p>
          <p>Transaction Fee: <span className="text-purple-400">◎ 0.00004286</span></p>
          <p className="mt-1">Wallet Connected: 
            <span className="ml-1 text-orange-300">Cxa99...8a1c5</span>
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleProceed}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full text-sm font-semibold transition"
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:max-w-sm bg-zinc-900 p-6 rounded-xl shadow-md">
        <h3 className="text-white text-lg mb-4">Burn Mechanism</h3>
        <p className="text-zinc-400 text-sm mb-6">
          When you use the Extract function to trade in your dead or inactive tokens for tTOP, those old tokens don’t get recycled — they’re permanently burned. The equivalent value of your desired token/asset is transferred instantly to your wallet.
        </p>

        <div className="space-y-3 text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            Trash into Treasure
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            Declutter Wallet
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            Value Recovery
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            No Trading Required
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Extract;
