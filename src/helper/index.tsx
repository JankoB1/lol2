import braveImg from "../assets/images/brave-icon.png"
import coinbaseImg from "../assets/images/coinbase-icon.png"
import metamaskImg from "../assets/images/metamask-icon.png"
import walletImg from "../assets/images/walletconnect-icon.png"
import { getSaleType } from "../utils/Interact"
import { ethers } from 'ethers'
import { MerkleTree } from 'merkletreejs'
import allowlist from "./allowlist.json"

export const truncateAddress = (address: any) => {
    const a: any = String(address)
    if (a && a.length > 5) {
        return `${a.substring(0, 5)}...${a.slice(a.length - 5)}`
    }
    return a
}

export const GetWhitelisted = async (address: any) => {

    let proof: any = [];

    const saleType = await getSaleType()
 
    // Parse params passed to server and get user wallet address
    const userWalletAddress = address;

    if (saleType && saleType === '1') {

        if (allowlist && allowlist[0] && allowlist[0].data.includes(userWalletAddress)) {
            const { keccak256 } = ethers.utils;
            let leaves = allowlist[0].data.map((addr) => keccak256(addr));
            const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
            let hashedAddress = keccak256(userWalletAddress);
            proof = merkleTree.getHexProof(hashedAddress);
        }

        const response = {
            status: true,
            body: proof
        };
        
        return response;

    } else if (saleType && saleType === '2') {

        const response = {
            status: true,
            saleType: saleType,
            body: proof
        };

        return response;

    } else {

        const response = {
            status: false,
            saleType: saleType,
            body: proof
        };

        return response;
    }
}

export const isActiveSale = async () => {

    const saleType = await getSaleType()

    return saleType
}

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const getWalletLogo = (walletName: any) => {
    let wallet = walletName
    if (wallet === null) wallet = localStorage.getItem('provider')
    if (wallet === 'coinbase' || wallet === 'coinbaseWallet') return coinbaseImg
    if (wallet === 'walletconnect' || wallet === 'walletConnect') return walletImg
    if (wallet === 'brave') return braveImg
    return metamaskImg
}