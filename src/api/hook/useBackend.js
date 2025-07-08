import API from "../index";

// src/hooks/useBackend.js
API
export const getUserData = async () => {
  const res = await API.get("/user/profile");
  return res.data;
};

export const submitData = async (payload) => {
  const res = await API.post("/action", payload);
  return res.data;
};