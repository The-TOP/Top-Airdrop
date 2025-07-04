import React from 'react'
import {BrowserRouter} from "react-router-dom";
import { WalletProvider } from "./context/WalletContext";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
      <WalletProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WalletProvider>
  )
}

export default App
