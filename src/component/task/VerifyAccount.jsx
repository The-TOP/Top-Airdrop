import { motion } from "framer-motion";
import React from "react";

const VerifyAccount = ({
  title,
  setUserEmail,
  buttonDisabled,
  onButtonClick,
  Icon,
  buttonLabel,
  borderstyle,
  userEmail,
}) => {
  return (
    <div className={` overflow-x-auto my-1 bg-white/4 p-3 ${borderstyle}`}>
      <label htmlFor="verifyaccount" className="text-sm mb-1 text-white/40">
        {title}
      </label>
      <div className="flex  max-w-3xl items-center text-xs gap-3 ">
        <input
          type="email"
          placeholder={
            buttonDisabled ? userEmail : "Link your email to your account"
          }
          name="verifyaccount"
          id="verifyaccount"
          value={userEmail}
          /* disabled={buttonDisabled} */
          onChange={(e) => setUserEmail(e.target.value)}
          required
          className="w-full max-w-xl placeholder:text-xs bg-black/60 flex items-center px-4 py-3 justify-between border-white/20 border rounded-tl-xl rounded-br-xl  text-white    pl-4 pr-20 focus:outline-none focus:border-green-400/40"
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-3  rounded-full text-xs border ${
            buttonDisabled
              ? "bg-white/10 border-white/30 text-white/30 py-1 cursor-not-allowed"
              : "border-green-500/40  bg-black/70 text-white hover:bg-white/10"
          }`}
          disabled={buttonDisabled}
          onClick={onButtonClick}
        >
          {buttonDisabled ? (
            "Done"
          ) : (
            <p className="flex gap-1 items-center justify-center p-1">
              {Icon && <Icon className="text-white/50" />}{" "}
              <span className=""> {buttonLabel}</span>
            </p>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default VerifyAccount;
