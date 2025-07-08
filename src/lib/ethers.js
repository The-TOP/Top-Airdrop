// src/lib/ethers.js
import { ethers } from "ethers";

const getProvider = async () => {
  if (window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  } else {
    throw new Error("No wallet found");
  }
};


const getSigner = async () => {
  const provider = await getProvider();
  return await provider.getSigner();
};

export { getProvider, getSigner };