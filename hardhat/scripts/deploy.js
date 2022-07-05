const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});
const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants");

async function main(){
    // Addresses of the whitelist contarct that deployed
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    // URL from where we can extract the metadata for a Crypto Dev NFT
    const metadataURL = METADATA_URL;
    /*
    A ContractFactory in ethers.js is an abastraction used to deploy new smart contract so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
    */
   const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

   //deploy the contract 
   const deployedCryptoDevsContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);

   //print the address of the deployed contract
   console.log("Crypto Devs Contract Address: ", deployedCryptoDevsContract.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
});
