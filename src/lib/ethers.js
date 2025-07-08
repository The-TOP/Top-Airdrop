// src/lib/ethers.js
import { ethers } from "ethers";

const getProvider = () => {
  if (window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  } else {
    throw new Error("No wallet found");
  }
};

const getSigner = async () => {
  const provider = getProvider();
  return (await provider).getSigner();
};

export { getProvider, getSigner };