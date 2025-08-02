import { useWallet } from "@solana/wallet-adapter-react";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [ondashboard, setOndashboard] = useState(false);
  const [userTask, setUserTask] = useState("000");
  const [userBalance, setUserbalance] = useState("00000");
  const [userReferral, setUserReferral] = useState("000");
  const [homeModal, setHomeModal] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [withdrawStats, setwithdrawStats] = useState("");
  const connected = useWallet().connected;
  const handleDashBordNav = () => {
    if (!connected) {
      setHomeModal(true);
    } else if (connected) {
      navigate("/dashboard");
    }
  };
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const targetDate = new Date("2025-08-13T00:00:00Z");

  return (
    <DataContext.Provider
      value={{
        ondashboard,
        setOndashboard,
        isCountdownComplete,
        setIsCountdownComplete,
        targetDate,
        homeModal,
        setHomeModal,
        handleDashBordNav,
        userBalance,
        setUserbalance,
        userReferral,
        setUserReferral,
        userTask,
        setUserTask,
        refresh,
        setRefresh,
        withdrawStats,
        setwithdrawStats,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
