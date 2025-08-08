import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

const Extract = () => {
  return (
    <div className="h-full flex flex-col bg-white/10 justify-center items-center">
      <div className=" text-white w-4/5 h-4/6 mt-20 md:mt-4">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Extract;

// mean extract page bellow , to be used when the function is implemented

/* import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaGem } from "react-icons/fa6";
import top from "../img/miniLogo.png";
import ExtractModal from "../modal/ExtractModal";

const Extract = () => {
  const navigate = useNavigate();

  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState("USDT");
  const [toToken, setToToken] = useState("$TOP");
  const [OpenExtractModal, setOpenExtractModal] = useState(false);

  const handleProceed = () => {
    setOpenExtractModal(true);
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
      className=" p-3 md:p-6 pb-10  min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white/2 mt-3 mb-1 p-2 py-1 rounded-t-2xl ">
        <h2 className=" text-white font-stretch-condensed text-xl font-semibold tracking-widest mb-3">
          Extract
        </h2>
        <p className="text-zinc-400 text-sm mb-2">
          Got unused or worthless tokens sitting in your wallet? You can swap
          those dead tokens for $TOP.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row  gap-4 ">
        <div className="flex-1   rounded-xl shadow-md">
          // Left Section 

          <p className="text-zinc-400 rounded-b-lg bg-white/5 py-1 px-2 text-sm mb-2">
            Cross Swap
          </p>
          <div className="mb-4 p-1">
            <div className="flex items center my-2 justify-between text-xs">
              <label
                htmlFor="fromAmount"
                className="text-zinc-400 text-sm block mb-2"
              >
                From: _ _
              </label>
              <label htmlFor="from" className=" text-white hidden">
                select
              </label>
              <select
                name="from"
                id="from"
                className=" text-white bg-black/40 capitalize"
                onChange={(e) => setFromToken(e.target.value)}
              >
              //   map available option 
                <option value="" className="bg-black/40 capitalize ">
                  Select Token
                </option>
                <option value="USD" className="uppercase">
                  USD
                </option>
                <option value="SOL" className="uppercase">
                  SOL
                </option>
                <option value="TON" className="uppercase">
                  TON
                </option>
              </select>
            </div>
            <div className="bg-black/60  flex items-center px-4 py-3 justify-between border-white/20 border rounded-tl-xl rounded-br-xl">
              <input
                type="number"
                id="fromAmount"
                name="fromAmount"
                placeholder="Enter Amount"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none w-full"
              />
              <div className="flex items-center gap-2 text-white font-medium text-xs ">
                <div className="flex gap-1 justify-center items-center p-1 px-2 rounded-2xl bg-white/20">
                  <span className="text-blue-400">
                    <FaGem />
                  </span>
                  <span className="">{fromToken}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 text-xs items-center mt-2  ">
              <p className=" text-zinc-400 ">Balance: 0.00 </p>
              <button className=" text-green-400"> MAX</button>
            </div>
          </div>

          <div className="flex justify-center my-3 text-white/50  ">
            <FaArrowDown className="md:w-10 w-6" />
          </div>

          <div className="mb-4 p-1">
            <div className="flex items center my-2 justify-between text-xs">
              <label
                htmlFor="fromAmount"
                className="text-zinc-400 text-sm block mb-2"
              >
                To: _ _
              </label>
              <label htmlFor="To" className=" text-white hidden">
                select
              </label>
              <select
                name="toAmount"
                id="To"
                className=" text-white bg-black/40 capitalize"
                onChange={(e) => setToToken(e.target.value)}
              >
             //   map available option 
                <option value="" className="bg-black/40 capitalize ">
                  Select Token
                </option>
                <option value="TOP" className="uppercase">
                  $TOP
                </option>
                <option value="USD" className="uppercase">
                  USD
                </option>
                <option value="SOL" className="uppercase">
                  SOL
                </option>
                <option value="TON" className="uppercase">
                  TON
                </option>
              </select>
            </div>
            <div className="bg-black/60 mb-6  flex items-center px-4 py-3 justify-between border-white/20 border rounded-tl-xl rounded-br-xl">
              <input
                type="number"
                placeholder="Enter Amount"
                name="toAmount"
                id="toAmount"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="bg-transparent text-white placeholder-zinc-500  text-sm focus:outline-none w-full"
              />
              <div className="flex items-center gap-2 text-white font-medium text-xs ">
                <div className="flex gap-1 justify-center items-center p-1 px-4 rounded-2xl bg-white/20">
                  <img src={top} alt="top token" className=" w-4" />
                  <span className="">{toToken}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-zinc-400 mb-1">
            <p className=" flex  pe-4 justify-between items-center p-1">
              Transaction Type: <span className="text-white">Extraction</span>
            </p>
            <p className="mt-1 flex  pe-4 justify-between items-center p-1">
              Transaction Fee:
              <span className=""> 0.00004286</span>
            </p>
            <p className="mt-1 flex  pe-4 justify-between items-center p-1">
              Wallet Connected:
              <span className="ml-1">Cxa99...8a1c5</span>
            </p>
          </div>

          <div className="mt-6  mx-auto">
            <button
              onClick={handleProceed}
              className="flex mx-auto justify-center items-center bg-black/60  border-green-500 border  hover:bg-white/5 hover:text-green-500 text-white py-2 px-10 rounded-full text-sm  text-center font-semibold transition"
            >
              Proceed
            </button>
          </div>
        </div>
       //  Right Section 
        <div className="w-full lg:max-w-sm ">
          <p className="text-zinc-400 rounded-b-lg bg-white/5 py-1 px-2 text-sm mb-2 hidden lg:block">
            Swap Breakdown
          </p>
          <div className=" lg:p-6 pt-8 lg;pt-6 rounded-b-lg shadow-md">
            <h3 className=" capitalize tracking-wide bg-black  rounded-full p-1 px-2 md:p-3 md:py-3 shadow-inner shadow-green-600 mx-auto text-white text-center text-md md:text-lg mb-4 mt-1 ">
              Burn Mechanism
            </h3>
            <p className="p-1  text-zinc-400 text-sm mb-6 leading-6">
              When you use the Extract function to trade in your dead or
              inactive tokens for $TOP, those old tokens don’t get recycled —
              they’re permanently burned. The equivalent value of your desired
              token/asset is transferred instantly to your wallet.
            </p>
            <div className="space-y-3 text-xs text-zinc-300">
              <h3 className="flex items-center text-lg tracking-wide gap-2 ">
                {" "}
                <FaInfoCircle className="text-green-400" />
                Extract Gains
              </h3>
              <div className="flex items-center gap-2 rounded-3xl bg-white/8 py-2 ps-4">
                <FaCheckCircle className="text-green-400" />
                Trash into Treasure
              </div>
              <div className="flex items-center gap-2 rounded-3xl bg-white/8 py-2 ps-4">
                <FaCheckCircle className="text-green-400" />
                Declutter Wallet
              </div>
              <div className="flex items-center gap-2 rounded-3xl bg-white/8 py-2 ps-4">
                <FaCheckCircle className="text-green-400" />
                Value Recovery
              </div>
              <div className="flex items-center gap-2 rounded-3xl bg-white/8 py-2 ps-4">
                <FaCheckCircle className="text-green-400" />
                No Trading Required
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExtractModal
        isOpen={OpenExtractModal}
        onClose={setOpenExtractModal}
        fromAmount={fromAmount}
        toAmount={toAmount}
        fromToken={fromAmount}
        toToken={toToken}
      />
    </motion.div>
  );
};

export default Extract;

 */
