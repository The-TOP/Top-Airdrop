import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { WalletContextProvider } from "./context/WalletContext1";
import { useEffect } from "react";




const App = () => {

useEffect(() => {
  const referrer = new URLSearchParams(window.location.search).get("ref");
  if (referrer) {
    localStorage.setItem("referrer", referrer);
  }
}, []);

  return (
    <WalletContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WalletContextProvider>
  );
};

export default App;
