import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import {
   PhantomWalletAdapter, 
  SolflareWalletAdapter,
  /* BackpackWalletAdapter, */
} from "@solana/wallet-adapter-wallets";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

export const WalletContextProvider = ({ children }) => {
  const network = "devnet"; // or "mainnet-beta", "testnet"
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
       new PhantomWalletAdapter(), 
      new SolflareWalletAdapter(),
     /*  new BackpackWalletAdapter(), */
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
