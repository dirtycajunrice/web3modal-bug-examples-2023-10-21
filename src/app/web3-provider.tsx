"use client";
import { wagmiChains } from "@/data/chains";
import { EIP6963Connector, walletConnectProvider } from "@web3modal/wagmi";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { PropsWithChildren } from "react";
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const projectId = process.env.WALLETCONNECT_PROJECT_ID || process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

const { chains, publicClient } = configureChains(
  [ ...wagmiChains ],
  [
    walletConnectProvider({ projectId }),
    jsonRpcProvider({
      rpc: (chain: Chain) => (
        { http: chain.rpcUrls.default.http[0] }
      ),
    }),
    publicProvider(),
  ],
);

const metadata = {
  name: "Web3Modal Bug Example",
  description: "Web3Modal Bug Example",
  url: "https://web3modal.com",
  icons: [ "https://avatars.githubusercontent.com/u/37784886" ],
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } }),
  ],
  publicClient,
});

const chainImages = {
  288: "https://avatars.githubusercontent.com/u/99369982?s=200&v=4",
  1101: "https://avatars.githubusercontent.com/u/67473911?s=200&v=4",
  8453: "https://pbs.twimg.com/profile_images/1632431836096782338/W-9qsu1e_400x400.jpg",
  53935: "https://pbs.twimg.com/profile_images/1532742743079936001/EWIURnQ3_400x400.png",
};

// Default token... so it does nothing.
// const tokenImages = {
//   JEWEL: "https://static.debank.com/image/dfk_token/logo_url/dfk/09b4ee0e9d0695201fcc7e912ac31595.png",
// };

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, chainImages });

const Web3Provider = ({ children }: PropsWithChildren) => {

  return (
    <WagmiConfig config={wagmiConfig}>
      <div className="flex flex-col h-screen">{children}</div>
    </WagmiConfig>
  );
};

export default Web3Provider;
