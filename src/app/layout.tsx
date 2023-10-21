import Web3Provider from "@/app/web3-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  applicationName: "DCR's Web3Modal Issue Reference",
  title: "WalletConnect Web3Modal Issue Reference",
  description: "4 Issues stopping us from using WalletConnect in production",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body><Web3Provider>{children}</Web3Provider></body>
    </html>
  );
}
