import React from "react";
import { FaWallet } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import mainLogo from "../../img/MainLogo.png"

const HeaderNav = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-gray-800 bg-black/30 backdrop-blur">
      <img src={mainLogo} alt="logo" className=" w-25 sm:w-30" />
      <nav className="hidden md:flex space-x-8 text-sm px-4 py-2 rounded-full bg-white/10">
        <Link to={"#"} className="hover:text-green-400">
          Home
        </Link>
        <Link to={"/about"} className="hover:text-green-400">
          About
        </Link>
        <Link to={"#"} className="hover:text-green-400">
          Whitepaper
        </Link>
        <Link to={"#"}
          className="text-green-400 flex items-center gap-2 font-semibold flex-nowrap hover:text-white"
        >
          <span className="text-nowrap text-sm">Claim Now </span>
          <span className="rounded-full p-1 border-white border bg-black text-green-500">
            <FiArrowUpRight />
          </span>
        </Link>
      </nav>
      <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-1 rounded-full transition">
        <FaWallet />
        Connect Wallet
      </button>
    </header>
  );
};

export default HeaderNav;
