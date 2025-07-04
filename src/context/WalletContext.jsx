import React, { createContext, useContext, useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [solanaAvailable, setSolanaAvailable] = useState(false);

  const connectWallet = async () => {
    try {
      const { solana } = window;
      if (solana && solana.isPhantom) {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
      }
    } catch (err) {
      console.error("Wallet connection error:", err);
    }
  };

  const disconnectWallet = async () => {
    try {
      const { solana } = window;
      if (solana && solana.isConnected) {
        await solana.disconnect();
        setWalletAddress(null);
      }
    } catch (err) {
      console.error("Wallet disconnection error:", err);
    }
  };

  useEffect(() => {
    const { solana } = window;
    if (solana && solana.isPhantom) {
      setSolanaAvailable(true);

      solana.on("connect", () => {
        setWalletAddress(solana.publicKey.toString());
      });

      solana.on("disconnect", () => {
        setWalletAddress(null);
      });

      solana.connect({ onlyIfTrusted: true }).catch(() => {});
    }
  }, []);

  return (
    <WalletContext.Provider
      value={{ walletAddress, connectWallet, disconnectWallet, solanaAvailable }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
