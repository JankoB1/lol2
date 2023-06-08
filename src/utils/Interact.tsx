import { ethers, providers } from "ethers"
import WalletConnectProvider from "@walletconnect/web3-provider"
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('./contract-abi.json')
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
declare const window: any

export const mintNFT = async (count: any, proof: any, tier: any) => {

  let provider: any = null

  const handleProvider = async () => {

    const walletConnectProvider = new WalletConnectProvider({
      infuraId: process.env.REACT_APP_INFURA_ID, // Required
      qrcode: true
    })
    await walletConnectProvider.enable()
    provider = new providers.Web3Provider(walletConnectProvider)
  }

  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum)
  } else {
    handleProvider()
  }

  const signer = provider.getSigner()
  const address = await signer.getAddress()

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  const price = await window.contract.methods.getCurrentPrice(tier).call();

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress,
    from: address,
    value: `0x${web3.utils.toBN(price * count).toString(16)}`,
    gas: web3.utils.toHex(500000),
    gasLimit: web3.utils.toWei((price * count).toString(), "ether"),
    data: window.contract.methods.mint(count, proof, tier, address).encodeABI()
  }

  try {
    const hash = await provider.send('eth_sendTransaction', [transactionParameters])

    if (hash) {
      return {
        success: true,
        hash: hash,
        status: "Check out your transaction on Etherscan: " + hash
      }
    }
  } catch (error: any) {
    return {
      success: false,
      status: error.message
    }
  }
}

export const getSaleType = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  const finish: any = await window.contract.methods.saleType().call();
  return finish
}
