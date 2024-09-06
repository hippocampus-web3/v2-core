/* eslint-disable @typescript-eslint/naming-convention */
export interface Addresses {
  UniswapV3Factory: string;
  SwapRouter: string;
  WETH: string;
  WMATIC: string;
  USDC: string;
  WEWE?: string;
  ArrakisV2Implementation: string;
  ArrakisV2Beacon: string;
  ArrakisV2Factory: string;
  ArrakisV2Helper: string;
  ArrakisV2Resolver: string;
}

export const getAddresses = (network: string): Addresses => {
  switch (network) {
    case "localhost":
      return {
        UniswapV3Factory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
        SwapRouter: "0x2626664c2603336E57B271c5C0b26F421741e481",
        WETH: "0x4200000000000000000000000000000000000006",
        WEWE: "0x6b9bb36519538e0C073894E964E90172E1c0B41F",
        WMATIC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "hardhat":
      return {
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        WETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        WEWE: "0x6b9bb36519538e0C073894E964E90172E1c0B41F",
        WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        ArrakisV2Implementation: "0xcDcfC7BA941ABe3BdAA541aDEC5D24C867F3f816",
        ArrakisV2Beacon: "0xC8C2FD7cB1EF6c9aB35B2Bf5cD594523A10C2C1C",
        ArrakisV2Factory: "0xC1C9c9a09B314cfEFC39BF4EE9460c4c33aCD070",
        ArrakisV2Helper: "0xc00a268Fbcbb00a72bfc8CD0FE7CfE26dad3BEd8",
        ArrakisV2Resolver: "0x29e07cEFDAABDaCA2AD956adbC3110eB2268C0E8",
      };
    case "mainnet":
      return {
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        WMATIC: "",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "gnosis":
      return {
        UniswapV3Factory: "0xe32F7dD7e3f098D518ff19A22d5f028e076489B1",
        SwapRouter: "0xc6D25285D5C5b62b7ca26D6092751A145D50e9Be",
        WETH: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
        WMATIC: "",
        USDC: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "polygon":
      return {
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        WETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "optimism":
      return {
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        WETH: "0x4200000000000000000000000000000000000006",
        WMATIC: "",
        USDC: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "arbitrum":
      return {
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        WMATIC: "",
        USDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "binance":
      return {
        UniswapV3Factory: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
        SwapRouter: "",
        WETH: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        WMATIC: "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "goerli":
      return {
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        WETH: "",
        WMATIC: "",
        USDC: "",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "base":
      return {
        UniswapV3Factory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
        SwapRouter: "0x2626664c2603336E57B271c5C0b26F421741e481",
        WETH: "",
        WMATIC: "",
        USDC: "",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    case "sepolia":
      return {
        UniswapV3Factory: "0x0227628f3F023bb0B980b67D528571c95c6DaC1c",
        SwapRouter: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
        WETH: "",
        WMATIC: "",
        USDC: "",
        ArrakisV2Implementation: "0x7F346F1eB7a65fF83f51B3FD76dCc70979e6DF38",
        ArrakisV2Beacon: "0x1D91F6D917ec51dE53A5789c34fFF777a58759B6",
        ArrakisV2Factory: "0xECb8Ffcb2369EF188A082a662F496126f66c8288",
        ArrakisV2Helper: "0x89E4bE1F999E3a58D16096FBe405Fc2a1d7F07D6",
        ArrakisV2Resolver: "0x535C5fDf31477f799366DF6E4899a12A801cC7b8",
      };
    default:
      throw new Error(`No addresses for Network: ${network}`);
  }
};
