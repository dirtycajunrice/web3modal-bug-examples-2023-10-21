import { CodeBlock } from "@/app/code-block";
import { Buttons } from "@/app/web3-components";
import Link from "next/link";

const snippit = `// Path: next.config.js
const nextConfig = {
  webpack: (config) => {
    config.externals.push(
      "pino-pretty",
      "lokijs",
      "encoding"
    );
  return config;
}`
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-4 px-8 sm:p-24">
      <Buttons />
      <h1 className="text-2xl">WalletConnect Web3Modal Issue Reference</h1>
      <h2 className="text-xl">Bug Examples</h2>
      <ul className="list-disc">
        <li>
          <div className="flex flex-col">
            <span>Custom chain images do not propagate to the current chain button when opening the modal</span>
            <span>
              GitHub Issue:
              <Link
                href="https://github.com/WalletConnect/web3modal/issues/1403"
                target="_blank"
                className="pl-1 underline text-blue-500"
              >
                WalletConnect/web3modal Issue #1403
              </Link>
            </span>
            <span>Reproduction Steps:</span>
            <ul className="list-decimal ml-6">
              <li>Click the chain button</li>
              <li>Observe the visible custom chain image</li>
              <li>Switch to DFK Chain by clicking it</li>
              <li>Close the modal</li>
              <li>Click the account button</li>
              <li>Observe the missing custom chain image</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="flex flex-col">
            <span>Custom chains do not expose a way to set a custom token image for the native gas token</span>
            <span>
              GitHub Issue:
              <Link
                href="https://github.com/WalletConnect/web3modal/issues/1404"
                target="_blank"
                className="pl-1 underline text-blue-500"
              >
                WalletConnect/web3modal Issue #1404
              </Link>
            </span>
            <span>Reproduction Steps:</span>
            <ul className="list-decimal ml-6">
              <li>Click the chain button</li>
              <li>Switch to DFK Chain by clicking it</li>
              <li>Close the modal</li>
              <li>Observe the missing native token image in the account button</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="flex flex-col">
            <span>Alternate ENS name resolution is completely ignored if you have an ENS identity</span>
            <span>
              GitHub Issue:
              <Link
                href="https://github.com/WalletConnect/web3modal/issues/1405"
                target="_blank"
                className="pl-1 underline text-blue-500"
              >
                WalletConnect/web3modal Issue #1405
              </Link>
            </span>
            <span>Reproduction Steps:</span>
            <ul className="list-decimal ml-6">
              <li>
                <span>Obtain and set a primary ens name on</span>
                <Link href="https://ens.domains/" target="_blank" className="underline pl-1 text-blue-300">
                  ENS Domains
                </Link>
              </li>
              <li>
                <span>Obtain and set a primary ens name on</span>
                <Link href="https://avvy.domains/" target="_blank" className="underline pl-1 text-blue-300">
                  Avvy Domains
                </Link>
              </li>
              <li>Click the chain button</li>
              <li>Switch to Avalanche chain by clicking it</li>
              <li>Close the modal</li>
              <li>Observe the profile name in the account button not respecting the chain ensResolver</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="flex flex-col">
            <span>Next.js webpack errors because of missing documentation</span>
            <span>
              GitHub Issue:
              <Link
                href="https://github.com/WalletConnect/web3modal/issues/1406"
                target="_blank"
                className="pl-1 underline text-blue-500"
              >
                WalletConnect/web3modal Issue #1406
              </Link>
            </span>
            <span className="max-w-2xl">
              Web3Modal uses 3 libraries that cause repeated and annoying webpack errors in Next.js. This is resolvable
              by adding this snippet of code to the documentation for Next.js users:
            </span>
            <div>
              <CodeBlock
                text={snippit}
              />
            </div>

          </div>
        </li>
      </ul>
    </main>
  )
}
