import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegArrowAltCircleLeft, FaTimes, FaWallet } from "react-icons/fa";

const HomeModal = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] flex justify-center items-center z-50"
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
              onClick={onClose}
              className="absolute top-4 right-4 shadow shadow-white/40 p-1 rounded text-white/60 hover:text-white transition"
            >
              <FaTimes />
            </button>

            <div className="text-center p-2 flex flex-col gap-1 items-center justify-center space-y-5">
              <div className=" w-full border-dashed border-white/20  border-b-2 mt-2">
               
              </div>
               <FaWallet size={50} className={" text-green-600 font-bold"} />
              <div className=" flex flex-col gap-4">
                <h2 className="text-white text-xl">Connect Wallet</h2>
                <p className="text-white/60 text-xs flex w-65 gap-2 items-center justify-center">
                  kindly Connect Wallet to view Dashboard
                </p>
                <p className="text-white/60 text-xs flex w-65 -mt-4 gap-2 items-center justify-center">
                  Use connect button on Header
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center mb-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="  text-green-400 py-2 px-6 rounded-full flex gap-1 items-center text-lg font-semibold"
              >
                <FaRegArrowAltCircleLeft /> Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeModal;
