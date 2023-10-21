import {
  arbitrum,
  avalanche,
  base,
  boba,
  bsc,
  dfk,
  mainnet,
  optimism,
  polygon,
  polygonZkEvm,
} from "wagmi/chains";

const standardChains = [ mainnet, arbitrum, base, optimism, bsc, polygon, polygonZkEvm, boba, dfk ] as const;
const overriddenChains = [
  {
    ...avalanche,
    contracts: {
      ...avalanche.contracts,
      ensUniversalResolver: {
        address: "0x40b0dc99681db9703939bd62d76f4d448ab0fde5",
      },
    },
  },
] as const;

export const wagmiChains = [ ...standardChains, ...overriddenChains ] as const;
