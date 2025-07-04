import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Withdraw = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-3xl mx-auto p-3 md:p-6 pb-10 text-white"
    >
      <h1 className="text-xl md:text-2xl font-bold mb-2">Withdrawal</h1>
      <p className="text-sm text-gray-400 mb-6">
        Easily transfer your earned $TOP tokens from the platform to your personal wallet.
        Withdrawals are fast, secure, and fully on-chain.
      </p>

      {/* Section Box */}
      <div className="bg-[#111111] rounded-xl p-6 shadow-md border border-gray-800">
        <h2 className="text-lg font-semibold mb-4">Withdrawal</h2>
        <p className="text-sm text-gray-400 mb-4">
          The Withdrawal section allows you to securely transfer your earned $TOP tokens from the platform
          to your personal wallet. Withdraw your assets at your convenience.
        </p>

        {/* Input */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-300">Amount:</label>
          <div className="relative">
            <input
              type="number"
              placeholder="Enter Amount"
              className="w-full bg-black text-white border border-gray-700 rounded-lg py-3 px-4 pl-4 pr-20 focus:outline-none focus:border-green-400"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-600 px-3 py-1 text-xs font-bold rounded-full text-black">
              $TOP
            </span>
          </div>
          <div className="text-xs text-green-500 mt-1">Balance: 9,999.999 MIX</div>
        </div>

        {/* Transaction Info */}
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Transaction Type:</span>
            <span className="font-medium text-white">Withdrawal</span>
          </div>
          <div className="flex justify-between">
            <span>Minimum Withdrawal Amount:</span>
            <span className="text-white">10 $TOP</span>
          </div>
          <div className="flex justify-between">
            <span>Transaction Fee:</span>
            <span className="text-white">0.00064 $TOP</span>
          </div>
          <div className="flex justify-between">
            <span>Wallet Connected:</span>
            <span className="text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Cxab39...9e1c5
            </span>
          </div>
          <div className="flex justify-between border-t border-gray-700 pt-3 mt-4">
            <span>Fee:</span>
            <span className="text-green-400">≈ 0.00004265 SOL</span>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="mt-8 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto transition duration-200">
            Proceed <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Withdraw;
