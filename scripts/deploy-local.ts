import { ethers, deployments } from "hardhat";
import hre = require("hardhat");
import { getAddresses } from "../src/addresses";

async function main() {
  const [newManager, manager, , arrakisTreasury] = await ethers.getSigners();

  await deployments.fixture();

  const addresses = getAddresses(hre.network.name);

  const arrakisTreasuryAddr = await arrakisTreasury.getAddress();
  const newManagerAddr = await newManager.getAddress();
  const managerAddr = await manager.getAddress();

  console.log(arrakisTreasuryAddr, newManagerAddr, managerAddr, addresses);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
