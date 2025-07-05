import React from "react";
import mainLogo from "../../img/MainLogo.png";
import footbg1 from "../../img/footbg1.png";
import footbg2 from "../../img/footbg2.png";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer
      className=" text-white px-4 sm:px-8 md:px- py-6 md:py-12 relative  "
      style={{ backgroundImage: `url(${footbg1})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}
    >
      <div
        className="border border-white/20 rounded-br-4xl md:rounded-br-[100px] border-t-0 rounded-tl-4xl md:rounded-tl-[100px] px-4 sm:px-8 md:px-16 md:py-12 py-2 max-w-7xl mx-auto"
        style={{ backgroundImage: `url(${footbg2})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"  }}
      >
        {/* Top Call-to-Action */}
        <div className="bg-radial from-green-400 to-green-900 text-black p-6 md:mt-4 mt-14 sm:p-10 rounded-2xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className=" font-medium max-w-md">
              Get rewarded for joining early, with zero risk and full access to
              the future of crypto trading.
            </h3>
          </div>

          <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Connect Wallet
            </motion.button>

            <div className="flex items-center gap-6 text-sm text-white/70">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-black flex items-center gap-2 font-semibold"
              >
                <span>Claim Now </span>
                <span className="rounded-full p-1.5 bg-black text-green-500">
                  <FiArrowUpRight />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
        {/* Bottom Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-b-4 border-dashed border-white/10 py-10">
          {/* Left Logo + Nav */}

          <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between md:items-center w-full gap-4">
            <img src={mainLogo} alt="logo" className="w-35" />

            <div className="flex flex-col md:flex-row  items-center gap-4 md:gap-8 text-sm text-white/70">
              <div className="flex items-center gap-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
                <a href="#" className="hover:text-white transition">
                  White Paper
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/70">
                <a
                  href="#"
                  className="text-green-400 flex items-center gap-2 font-semibold"
                >
                  <span>Claim Now </span>{" "}
                  <span className="rounded-full p-1.5 bg-black text-green-500">
                    <FiArrowUpRight />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Social Icons */}
            <div className="flex gap-4 text-white/70">
              <Link to={"#"}>
                <FaFacebookF className="hover:text-white" />
              </Link>
              <Link to={"#"}>
                <FaTwitter className="hover:text-white" />
              </Link>
              <Link to={"#"}>
                <FaInstagram className="hover:text-white" />
              </Link>
              <Link to={"#"}>
                <FaLinkedinIn className="hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Legal */}
        <div className="mt-10 flex flex-col md:flex-row items center md:justify-between  text-center text-xs text-white/40">
          <p>&copy; Copyright 2025, All Rights Reserved</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
