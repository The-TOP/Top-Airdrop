import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import App from "./App.jsx";

import { clusterApiUrl } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  WalletConnectWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Buffer polyfill
import { Buffer } from "buffer";
globalThis.Buffer = Buffer;

function Providers() {
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new WalletConnectWalletAdapter({
        network, // Important: Match devnet/testnet/mainnet
        options: {
          relayUrl: "wss://relay.walletconnect.com", // default
          projectId: "0a9465478a4c94c3db311c7fa6e22479", // Replace with your WalletConnect Project ID if needed
          metadata: {
            name: "Top Token",
            description: "Allow Top Token Transactions ",
            url: "https://topair.netlify.app",
            icons: ["https://topair.netlify.app/miniLogo.png", "https://topair.netlify.app/tokenimg.png"],
          },
        },
      }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);






/* import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import App from "./App.jsx";
import { clusterApiUrl } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Buffer polyfill
 import { Buffer } from "buffer";
globalThis.Buffer = Buffer; 

function Providers() {
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
); */