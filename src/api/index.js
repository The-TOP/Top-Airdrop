// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://your-api-url.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add wallet auth (if needed)
API.interceptors.request.use((config) => {
  const address = localStorage.getItem("wallet_address");
  if (address) {
    config.headers["x-wallet-address"] = address;
  }
  return config;
});

export default API;