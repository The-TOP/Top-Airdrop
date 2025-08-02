import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegArrowAltCircleLeft, FaTimes } from "react-icons/fa";
import withdraw from "../img/withdrawtoken.png";
import top from "../img/miniLogo.png";

const WithdrawModal = ({ isOpen, onClose, withdrawAmount, onWithdraw }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="bg-black/90 w-full max-w-md  rounded-xl border border-white/10 shadow-2xl relative p-3 mx-4"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                onClose(false);
                setStep(1);
              }}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              <FaTimes />
            </button>

            {/* Step Content */}
            {step === 1 && (
              <div className=" w-full p-2 flex flex-col gap-1 justify-center ">
                <div className=" border-dashed border-white/10 border-b-2">
                  <h2 className="text-base text-start md:text-lg font-semibold text-white">
                    Token Withdrawal
                  </h2>

                  <p className="text-white text-xs mt-1 pb-2">
                    Withdrawals are fast, secure, and fully on-chain
                  </p>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className="flex flex-col items-center justify-center mt-8">
                    <h2 className="text-base text-start md:text-lg font-semibold  text-white">
                      Confirm Withdrawal
                    </h2>
                    <p className="text-white text-xs mt-1 pb-2">
                      You have triggered a withdrawal order
                    </p>
                  </div>

                  <div className=" flex flex-col ">
                    <p className="text-zinc-400 text-xs text-start block mb-2 px-1">
                      Amount:__
                    </p>
                    <div className="bg-black/60 mb-6  flex items-center px-4 py-3 justify-between border-white/20 border rounded-tl-xl rounded-br-xl">
                      <p className="text-white text-xs"> {withdrawAmount}</p>
                      <div className="flex items-center gap-2 text-white font-medium text-xs ">
                        <div className="flex gap-1 justify-center items-center p-1 px-4 rounded-2xl bg-white/20">
                          <img src={top} alt="top token" className=" w-4" />
                          <span className="">{"Top"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <p className="text-white/60 text-xs flex gap-2 items-center justify-center">
                    Withdrawal will be made directly into your personal wallet.
                  </p>
                  <p className="text-white/60 text-xs flex gap-2 items-center justify-center">
                    Fee = 0.00004286 SOL
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={
                      () => {
                        onWithdraw();
                        nextStep();
                      }
                      // Trigger wallet connection here
                    }
                    className="bg-black hover:bg-green-500/30 border border-green-400 text-white py-2 px-6 rounded-full text-sm"
                  >
                    Confirm
                  </motion.button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="text-center p-2 flex flex-col gap-1 items-center justify-center space-y-5">
                <div className=" border-dashed border-white/20  border-b-2 mt-2">
                  <h2 className="text-base  md:text-xl text-center font-semibold text-white">
                    Token Withdrawal
                  </h2>

                  <p className="text-white/80 text-xs mt-1 pb-2">
                    Withdrawals are fast, secure, and fully on-chain
                  </p>
                </div>
                <div className=" flex flex-col gap-6">
                  <img
                    src={withdraw}
                    alt=" Extraction Successful"
                    className="w-40 md:w-55 mx-auto "
                  />
                  <div>
                    <h2 className="text-white text-xl">
                      Withdrawal Successful
                    </h2>
                    <p className="text-white/60 text-xs flex w-65 gap-2 items-center justify-center">
                      Your withdrawal has been processed successfully
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center mb-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onClose(false);
                      setStep(1);
                    }}
                    className="  text-green-400 py-2 px-6 rounded-full flex gap-1 items-center text-lg font-semibold"
                  >
                    <FaRegArrowAltCircleLeft /> Back
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WithdrawModal;
