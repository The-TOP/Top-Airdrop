import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import emailimg from "../img/emailverify.png";

const EmailModal = ({ isOpen, onClose, setClaimed, email, setMail }) => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState(["", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (code[index]) {
        // Clear current value
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        // Move to previous input and clear it
        const prevInput = document.getElementById(`code-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
          const newCode = [...code];
          newCode[index - 1] = "";
          setCode(newCode);
        }
      }
    }
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log(email);
    setStep(2);
    // Trigger parent logic
  };

  const handleSubmit = () => {
    if (code.join("").length === 5) {
      setClaimed((prev) => ({
        ...prev,
        account: true,
      }));
      setStep(3);
    }
  };
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0a0a0a] w-full max-w-md rounded-xl p-6 relative border border-white/10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <button
              className="absolute top-4 right-4 text-white/50 hover:text-white"
              onClick={() => {
                onClose(false);
              }}
            >
              <IoClose size={22} />
            </button>

            {step === 1 && (
              <div className="flex flex-col  gap-3">
                <div className=" border-dashed border-white/10 border-b-2 w-full">
                  <h2 className="text-base text-start md:text-lg font-semibold text-white">
                    Account Verification
                  </h2>
                  <p className="text-white text-start text-xs mt-1 pb-2">
                    Secure your account and stay updated by adding your email.
                  </p>
                </div>

                <div className="flex flex-col gap-3 py-6">
                  <h2 className="text-2xl font-semibold text-white">Add Your Email</h2>

                  <div className="flex  flex-col  gap-3">
                    <label htmlFor="confirmMail" className="text-white/50">
                      Enter Email
                    </label>
                    <input
                      type="email"
                      id="confirmMail"
                      name="confirmMail"
                      placeholder={email}
                      value={email}
                      onChange={(e) => setMail(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 outline-none text-sm placeholder:text-white/40 text-white font-medium focus:ring-0"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleProceed}
                    className="bg-black hover:bg-green-500/30 border border-green-400 text-white py-2 px-6 rounded-full text-sm"
                  >
                    Proceed
                  </motion.button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col text-center justify-center items-center gap-3">
                <div className=" border-dashed border-white/10 border-b-2 w-full">
                  <h2 className="text-base text-start md:text-lg font-semibold text-white">
                    Account Verification
                  </h2>
                  <p className="text-white/80 text-start text-xs mt-1 pb-2">
                    Secure your account and stay updated by adding your email.
                  </p>
                </div>

                <div className="flex flex-col gap-3 py-6">
                  <h2 className="text-lg text-white">Verify Your Email</h2>
                  <h4 className="text-xs text-white">
                    Enter Verification Code
                  </h4>

                  <div className="flex justify-center gap-3">
                    {code.map((val, i) => (
                      <input
                        key={i}
                        id={`code-${i}`}
                        maxLength={1}
                        value={val}
                        onChange={(e) => handleChange(e.target.value, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        className="w-10 h-12 text-center text-lg rounded-md bg-black border border-white/20 text-white outline-none focus:ring-2 ring-green-500"
                      />
                    ))}
                  </div>
                </div>

                <div className="text-xs text-white/50 mb-6">
                  <p>
                    A 5-digit security code has been sent to your email. Please
                    enter the code.
                  </p>
                  <p>
                    Didn’t get code?{" "}
                    <span className="text-green-500 underline hover:text-green-400 cursor-pointer">
                      Resend
                    </span>
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="bg-black hover:bg-green-500/30 border border-green-400 text-white py-2 px-6 rounded-full text-sm"
                >
                  Verify
                </motion.button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center items-center flex flex-col py-4 gap-4">
                <h4 className="text-white text-2xl font-semibold mt-4">
                  Account Verification Successful
                </h4>
                <img
                  src={emailimg}
                  alt="verified"
                  className="mx-auto my-4 w-20"
                />
                <h3 className="text-white font-semibold text-lg mb-2">
                  +10,000 <span className="text-green-400">$TOP Token</span>
                </h3>
                <p className="text-white/60 text-xs mb-6">
                  You have successfully claimed 10 000 $TOP
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose(false);
                  }}
                  className="  text-green-400 py-2 px-6 rounded-full flex gap-1 items-center text-sm font-semibold"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
