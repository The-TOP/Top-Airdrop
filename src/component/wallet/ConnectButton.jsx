import React from "react";
import { useWallet } from "../../context/WalletProvider";
import { FaWallet } from "react-icons/fa";

const ConnectButton = () => {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();

  return (
    <button
      onClick={walletAddress ? disconnectWallet : connectWallet}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
    >
      <FaWallet />
      {walletAddress ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
    </button>
  );
};

export default ConnectButton;
