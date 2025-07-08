// src/context/Web3Context.jsx
import React, { createContext, useState, useEffect } from "react";
import { getProvider, getSigner } from "../lib/ethers";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [address, setAddress] = useState(null);
  //auto connect if onces connected

  useEffect(() => {
    const stored = localStorage.getItem("wallet_address");
    if (stored) setAddress(stored);
  }, []);

  //connect wallet
  const connectWallet = async () => {
    try {
      const provider = await getProvider();
      const accounts = await provider.send("eth_requestAccounts", []);
      const userAddress = accounts[0];
      setAddress(userAddress);
      localStorage.setItem("wallet_address", userAddress);
    } catch (err) {
      console.error("Wallet connection failed", err);
      alert("wallet not found, install wallet");
    }
  };

  //disconnect wallet
  const disconnectWallet = () => {
    setAddress(null);
  };

  return (
    <Web3Context.Provider value={{ address, connectWallet, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
