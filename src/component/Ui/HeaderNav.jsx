import React, { useContext } from "react";
import { FaHome, FaInfoCircle, FaUserAlt, FaWallet } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../img/MainLogo.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const HeaderNav = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();

  return (
    <header className="flex items-center justify-between px-6 md:px-16 py-3 md:py-5 border-b border-gray-800 bg-black/30 backdrop-blur">
      <div className="">
        <Link to={"/"}>
          <img src={mainLogo} alt="logo" className=" w-25 sm:w-30" />
        </Link>
        <div className="md:hidden flex items-center justify-between gap-2 my-1 mt-2 text-sm p-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? " text-green-500 " : "hover:text-green-400"
            }
          >
            <FaHome className="w-8" />
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? " text-green-500 " : "hover:text-green-400"
            }
          >
            <FaUserAlt className="w-8" />
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? " text-green-500 " : "hover:text-green-400"
            }
          >
            <FaInfoCircle className="w-8" />
          </NavLink>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm px-4 py-2 rounded-full bg-white/10">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " text-green-500 border-t" : "hover:text-green-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? " text-green-500 border-t" : "hover:text-green-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to={
            "https://github.com/The-TOP/TOPx---A-Hybrid-Ecosystem-for-Intelligent-Trading-/releases/download/Whitepaper/TOPx.-.A.Hybrid.Ecosystem.For.Intelligent.Trading.pdf"
          }
          target="_blank"
          className={({ isActive }) =>
            isActive ? " text-green-500 border-t" : "hover:text-green-400"
          }
        >
          Whitepaper
        </NavLink>

        <NavLink
          to={"/dashboard"}
          className="text-green-400 flex items-center gap-2 font-semibold flex-nowrap hover:text-white"
        >
          <span className="text-nowrap text-sm">Claim Now </span>
          <span className="rounded-full p-1 border-white border bg-black text-green-500">
            <FiArrowUpRight />
          </span>
        </NavLink>
      </nav>

      {/* <button
          onClick={connectWallet} 
        className="flex lg:py-2 text-sm items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-1.5 rounded-full transition"
      >
        <FaWallet />
        Connect Wallet
           {address
          ? `${address.slice(0, 4)}...${address.slice(-4)}`
          : "Connect Wallet"} 
      </button> */}

      <div className="rounded-full text-green-400 ">
        <WalletMultiButton />
      </div>
    </header>
  );
};

export default HeaderNav;

/* 
import { useWallet } from "@solana/wallet-adapter-react";

const CustomConnectButton = () => {
  const { publicKey, connect, disconnect, connected } = useWallet();

  return (
  <div>
    <button
      onClick={connected ? disconnect : connect}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
    >
      {connected ? "Disconnect Wallet" : "Connect Wallet"}
    </button> 
    {connected && (
          <p className="mt-4 text-green-400">
            Connected: {publicKey.toBase58()}
          </p>
        )}
          
        const handleDisconnect = async () => {
    try {
      await disconnect(); // disconnect the wallet
      console.log("Wallet disconnected");
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };</div>
  );



}; */
