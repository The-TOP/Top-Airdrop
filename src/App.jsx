import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {  Web3Provider } from "./context/Web3Context";
import AppRoutes from "./routes/AppRoutes";
Web3Provider

const App = () => {
  return (
      <Web3Provider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Web3Provider>
  )
}

export default App
