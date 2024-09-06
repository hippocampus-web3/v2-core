/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "hardhat";
import hre = require("hardhat");
import {
  IUniswapV3Factory,
  IUniswapV3Pool,
  ArrakisV2,
  ArrakisV2Factory,
  ArrakisV2Resolver,
} from "../typechain";
import { getAddresses } from "../src/addresses";

async function main() {
  console.log("hre.network.name", hre.network.name);

  const addresses = getAddresses(hre.network.name);

  console.log("addresses", addresses);

  const [user] = await ethers.getSigners();
  const userAddr = await user.getAddress();

  const uniswapV3Factory = (await ethers.getContractAt(
    "IUniswapV3Factory",
    addresses.UniswapV3Factory,
    user
  )) as IUniswapV3Factory;

  const uniswapV3Pool = (await ethers.getContractAt(
    "IUniswapV3Pool",
    await uniswapV3Factory.getPool(
      addresses.USDC,
      "0x6b9bb36519538e0C073894E964E90172E1c0B41F",
      10000
    ),
    user
  )) as IUniswapV3Pool;

  console.log('uniswapV3Pool', uniswapV3Pool.address)

  const arrakisV2Resolver = (await ethers.getContract(
    "ArrakisV2Resolver"
  )) as ArrakisV2Resolver;

  const slot0 = await uniswapV3Pool.slot0();
  const tickSpacing = await uniswapV3Pool.tickSpacing();

  const lowerTick = slot0.tick - (slot0.tick % tickSpacing) - tickSpacing;
  const upperTick = slot0.tick - (slot0.tick % tickSpacing) + 2 * tickSpacing;

  // For initialization.
  const res = await arrakisV2Resolver.getAmountsForLiquidity(
    slot0.sqrtPriceX96,
    lowerTick,
    upperTick,
    ethers.utils.parseUnits("1", 18)
  );

  const arrakisV2Factory = (await ethers.getContract(
    "ArrakisV2Factory",
    user
  )) as ArrakisV2Factory;

  const tx = await arrakisV2Factory.deployVault(
    {
      feeTiers: [10000],
      token0: "0x6b9bb36519538e0C073894E964E90172E1c0B41F",
      token1: addresses.USDC,
      owner: userAddr,
      init0: res.amount0,
      init1: res.amount1,
      manager: userAddr,
      routers: [],
    },
    true
  );

  const rc = await tx.wait();
  const event = rc?.events?.find(
    (event: any) => event.event === "VaultCreated"
  );
  // eslint-disable-next-line no-unsafe-optional-chaining
  const result = event?.args;

  const vaultV2 = (await ethers.getContractAt(
    "ArrakisV2",
    result?.vault,
    user
  )) as ArrakisV2;

  console.log("vaultV2.name()", await vaultV2.name());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
