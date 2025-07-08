// src/lib/contract.js
import { ethers } from "ethers";
import { getSigner } from "./ethers";
import ABI from "./YourContractABI.json";

const CONTRACT_ADDRESS = "0xYourContractAddress";

export const getContractInstance = async () => {
  const signer = await getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};

// Example: Call read/write functions
export const readValue = async () => {
  const contract = await getContractInstance();
  return contract.readFunction(); // read function
};

export const writeValue = async (param) => {
  const contract = await getContractInstance();
  const tx = await contract.writeFunction(param); // write function
  await tx.wait(); // wait for confirmation
  return tx;
};