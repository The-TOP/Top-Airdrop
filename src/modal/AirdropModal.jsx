import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegArrowAltCircleLeft, FaTimes, FaWallet } from "react-icons/fa";
import miniLogo from "../img/miniLogo.png";
import congrats from "../img/congratsAirdrop.png";

const AirdropModal = ({ isOpen, onClose, setClaimed, status }) => {
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
            className="bg-black/90 w-full max-w-md md:max-w-xl rounded-xl border border-white/10 shadow-2xl relative p-6 mx-4"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                      onClose(false), setStep(1);
                    }}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              <FaTimes />
            </button>

            {/* Step Content */}
            {step === 1 && (
              <div className="text-center p-2 flex flex-col gap-3 items-center justify-center space-y-5">
                <div className=" border-dashed border-white/10 border-b-2">
                  <h2 className="text-base text-start md:text-lg font-semibold text-white">
                    Welcome Airdrop
                  </h2>

                  <p className="text-white/80 text-xs mt-1 pb-2">
                    Get started by connecting your preferred wallet below
                  </p>
                </div>
                <div className=" flex flex-col gap-3">
                  <h2 className="text-base text-start md:text-lg font-semibold  text-white">
                    Welcome Airdrop
                  </h2>
                  <img
                    src={miniLogo}
                    alt="Airdrop"
                    className="w-24 md:w-32 mx-auto"
                  />
                  <div>
                    <h2 className="text-white font font-semibold text-2xl">
                      + 50 000
                    </h2>
                    <h2 className="text-green-400 text-xs">$TOP Token</h2>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <p className="text-white/60 text-sm flex gap-2 items-center justify-center">
                    <FaWallet /> Receive reward directly into your wallet
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setClaimed();
                      setTimeout(() => {
                        nextStep();
                      }, 10000);
                    }}
                    className="bg-black hover:bg-green-500/30 border border-green-400 text-white py-2 px-6 rounded-full text-sm"
                  >
                    Claim Now
                  </motion.button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="text-center p-2 flex flex-col gap-2 items-center justify-center space-y-5">
                <div className=" border-dashed border-b-2">
                  <h2 className="text-base text-start md:text-lg font-semibold text-white">
                    Welcome Airdrop
                  </h2>

                  <p className="text-white/80 text-xs mt-1 pb-2">
                    Get started by connecting your preferred wallet below
                  </p>
                </div>
                <div className=" flex flex-col gap-6">
                  <img
                    src={congrats}
                    alt="Airdrop"
                    className="w-34 md:w-45 mx-auto "
                  />
                  <div>
                    <h2 className="text-white font font-semibold text-xs">
                      + 50 000{" "}
                      <span className="text-green-400"> $TOP Token</span>
                    </h2>
                    <h2 className="text-white text-2xl">Congratulations</h2>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <p className="text-white/60 text-sm flex gap-2 items-center justify-center">
                    You have Successfully claim 50 000 $TOP
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onClose(false), setStep(1);
                    }}
                    className="  text-green-400 py-2 px-6 rounded-full flex gap-1 items-center text-sm font-semibold"
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

export default AirdropModal;
