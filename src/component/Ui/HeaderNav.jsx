import React, { useContext } from "react";
import { FaHome, FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mainLogo from "../../img/MainLogo.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import DataContext from "../../context/DataContext";
import { useWallet } from "@solana/wallet-adapter-react";

const HeaderNav = () => {
  /*  const { handleDashBordNav } = useContext(DataContext) */
  const connected = useWallet().connected;

  return (
    <header className="flex w-full absolute t-o items-center justify-between px-6 md:px-16 py-3 md:py-5 border-b border-gray-800 bg-black/30 backdrop-blur md:gap-8 z-20">
      <div className="lg:flex-1">
        <Link to={"/"} className="">
          <img src={mainLogo} alt="logo" className=" w-25 sm:w-30" />
        </Link>

        {/* //// MOBILE NavLink //// */}

        <div className="md:hidden flex  items-center justify-between gap-2 mt-2 text-sm p-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? " text-green-500 " : "hover:text-green-400"
            }
          >
            <FaHome className="w-8" />
          </NavLink>

          <NavLink
            onClick={() => {
              if (!connected) {
                setHomeModal(true);
              } else if (connected) {
                navigate("/dashboard");
              }
            }}
            className={({ isActive }) =>
              isActive ? " text-green-500 " : "hover:text-green-400 text-white"
            }
          >
            <FaUserAlt className="w-8 text-white" />
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
      <div className="lg:flex flex-2 justify-center">
        <nav className="hidden md:flex  items-center justify-center space-x-8 lg:gap-10 xl:gap-20 text-sm px-4 lg:px-8  py-2 rounded-full bg-white/10">
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
            onClick={() => {
              if (!connected) {
                setHomeModal(true);
              } else if (connected) {
                navigate("/dashboard");
              }
            }}
            className="text-green-400 flex items-center gap-2 font-semibold flex-nowrap hover:text-white"
          >
            <span className="text-nowrap text-sm">Claim Now </span>
            <span className="rounded-full p-1 border-white border bg-black text-green-500">
              <FiArrowUpRight />
            </span>
          </NavLink>
        </nav>
      </div>

      <div className="rounded-full text-green-400 md:flex flex-col lg:flex-1 justify-end  items-end ">
        <WalletMultiButton />
      </div>
    </header>
  );
};

export default HeaderNav;
