import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { WalletContextProvider } from "./context/WalletContextProvider";
const App = () => {
  return (
    <WalletContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WalletContextProvider>
  );
};

export default App;
