// src/context/Web3Context.jsx
import React, { createContext, useState, useEffect } from "react";
import { getProvider, getSigner } from "../lib/ethers";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = await getProvider();
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
    } catch (err) {
      console.error("Wallet connection failed", err);
      alert("wallet not found, install wallet");
    }
  };
  const disconnectWallet = () => {
    setAddress(null);
  };

  return (
    <Web3Context.Provider value={{ address, connectWallet, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
