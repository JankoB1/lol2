import React, { Fragment, useState, useEffect } from "react"
import { Button, Col, Row, Modal, ModalBody } from "reactstrap"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { mintNFT } from "../../utils/Interact";
import WinterCheckout from "../../components/Mint/WinterCheckout";
import ConnectWallet from "../../components/ConnectWallet";
import nft1 from "../../assets/images/nft_1.png";
import nft2 from "../../assets/images/nft_2.png";
import nft3 from "../../assets/images/nft_3.png";
import { useWeb3React } from '@web3-react/core'
import { useAlert } from "react-alert";
import Web3 from "web3"
import { ethers, providers } from "ethers"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { isActiveSale, GetWhitelisted } from "../../helper";
import { Minus, MinusSquare, PlusSquare } from "react-feather";

declare const window: any

require('dotenv').config()

const WINTER_PRODUCTION = process.env.REACT_APP_WINTER_ENVIRONMENT
const WINTER_PROJECT_ID = process.env.REACT_APP_WINTER_PROJECT_ID

const BannerSection = () => {

    const alert = useAlert()
    const { active, account } = useWeb3React()
    let provider = localStorage.getItem('provider')

    const RpcHttpUrl: any = process.env.REACT_APP_RPC_HTTP_URL;

    const web3 = new Web3(new Web3.providers.HttpProvider(RpcHttpUrl));

    const [payModalOpen, setPayModalOpen] = useState(false);
    const [tierModalOpen, setTierModalOpen] = useState(false)
    const [countModalOpen, setCountModalOpen] = useState(false);
    const [fullModalOpen, setFullModalOpen] = useState(false);
    const [showWinter, setShowWinter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [typeSelected, setTypeSelected] = useState(null);
    const [count, setCount] = useState(1);
    const [tier, setTier] = useState('SILVER');

    useEffect(() => {
        if (active && account && typeSelected !== null) {
            getAssetData(typeSelected)
            setIsOpen(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, account])

    const getAssetData = (type: any) => {

        if (type === 'wallet' && !active && account === undefined && provider === null) {
            setPayModalOpen(!payModalOpen)
            setIsOpen(true)
            return false
        }

        setTypeSelected(type)

        if (type === 'card') {
            creditCardMint() // CARD
        } else if (type === 'wallet') {
            setCountModalOpen(!countModalOpen)
        }
        setPayModalOpen(!payModalOpen)
    }

    const creditCardMint = async () => {
        setShowWinter(!showWinter)
        setTypeSelected(null)
    }

    let providerrs: any = null

    const handleProvider = async () => {

        const walletConnectProvider = new WalletConnectProvider({
            infuraId: process.env.REACT_APP_INFURA_ID, // Required
            qrcode: true
        })
        await walletConnectProvider.enable()
        providerrs = new providers.Web3Provider(walletConnectProvider)
    }

    const walletMint = async () => {

        setCountModalOpen(!countModalOpen)

        if (account) {

            if (window.ethereum) {
                providerrs = new ethers.providers.Web3Provider(window.ethereum)
            } else {
                handleProvider()
            }

            const chainId = await providerrs.send('eth_chainId')

            if (chainId !== '0x1') {
                const hexChainId = ethers.utils.hexValue(1)

                try {
                    await providerrs.send('wallet_switchEthereumChain', [{ chainId: hexChainId }])
                } catch (switchError: any) {
                    if (switchError.code === 4902) {
                        console.log("This network is not available in your metamask, please add it")
                    }
                    console.log("Failed to switch to the network")
                }
                return false
            }

            const whitelist: any = await GetWhitelisted(account);

            if (whitelist) {

                var proofArr = [...whitelist.body];

                if (!whitelist.status) {
                    alert.error("Mint is not available now!");
                    return false
                }

                if (whitelist.saleType === '1' && proofArr.length === 0) {
                    alert.error("You are not in the whitelist please wait for the public sale");
                    return false
                }

                const response = await mintNFT(count, whitelist.body, tier)

                if (response && response.success === true) {
                    alert.info("In Progress", { timeout: 0 })
                    const interval = setInterval(() => {
                        web3.eth.getTransactionReceipt(response.hash, (err, res) => {
                            if (res) {
                                clearInterval(interval)
                                alert.removeAll()
                                if (res.status === true) {
                                    alert.success("Successful!", { timeout: 5000 })
                                } else {
                                    alert.error("Failed!", { timeout: 5000 })
                                }
                            }
                        });
                    }, 4000);

                    setTypeSelected(null)
                    setIsOpen(false)
                } else {
                    alert.removeAll()
                    alert.error("Failed!", { timeout: 5000 })
                }

            }
        }

        setCountModalOpen(!countModalOpen)

    }

    const handleTier = (type: any) => {
        setTier(type)
        setTierModalOpen(!tierModalOpen)
        setPayModalOpen(!payModalOpen)
    }

    return (
        <Fragment>

            <span className="lol-btn active d-block" style={{ cursor: "pointer" }} onClick={() => setTierModalOpen(!tierModalOpen)}> Mint Now</span>
            <Modal className="wallets-modal" isOpen={tierModalOpen} toggle={() => setTierModalOpen(!tierModalOpen)} size="xl" >
                <ModalBody className="mt-30 mb-30">
                    <div className="closeButton" onClick={() => setTierModalOpen(!tierModalOpen)}><AiOutlineCloseCircle size={30} color="white" className='pointer' /></div>
                    <Row className="mt-3">
                        <Col md='12'>
                            <h3 className="appie-title text-white text-center pt-2">Select Tier</h3>
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-4">
                                    <div
                                        className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <img src={nft2} className='w-75' alt="nft-image" />
                                        <h4 className="appie-title text-white pt-3">SIGNATURE</h4>
                                        <div className='py-3'>
                                            <button className='lol-btn active' type='submit' onClick={() => handleTier(1)}>SELECT</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div
                                        className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <img src={nft3} className='w-75' alt="nft-image" />
                                        <h4 className="appie-title text-white pt-3">SILVER</h4>
                                        <div className='py-3'>
                                            <button className='lol-btn active' type='submit' onClick={() => handleTier(2)}>SELECT</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div
                                        className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <img src={nft1} className='w-75' alt="nft-image" />
                                        <h4 className="appie-title text-white pt-3">GOLD</h4>
                                        <div className='py-3'>
                                            <button className='lol-btn active' type='submit' onClick={() => handleTier(3)}>SELECT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>

            <Modal className="wallets-modal" isOpen={payModalOpen} toggle={() => setPayModalOpen(!payModalOpen)} size="md" >
                <ModalBody className="mt-30 mb-30">
                    <div className="closeButton" onClick={() => setPayModalOpen(!payModalOpen)}><AiOutlineCloseCircle size={30} color="white" className='pointer' /></div>
                    <Row className="mt-3">
                        <Col md='12'>
                            <div className='px-2 py-4 text-center'>
                                <div className='wallet-wrapper text-center'>
                                    {/* <div className='d-flex align-items-center justify-content-center lol-btn'>
                                        <img src={require(`../../assets/images/credit-card.png`).default} width={50} className='img-fluid' alt="" />
                                        <div className='wallet-name text-uppercase' onClick={() => { getAssetData('card') }} style={{ cursor: "pointer" }}>Mint with Credit Card</div>
                                    </div> */}
                                    <div className=' d-flex align-items-center justify-content-center lol-btn mt-4'>
                                        <img src={require(`../../assets/images/metamask-icon.png`).default} width={50} className='img-fluid' alt="" />
                                        <div className='wallet-name text-uppercase' onClick={() => { getAssetData('wallet') }} style={{ cursor: "pointer" }}>Mint with Wallet</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>

            <Modal className="wallets-modal" isOpen={countModalOpen} toggle={() => setCountModalOpen(!countModalOpen)} size="md" >
                <ModalBody className="mt-30 mb-30">
                    <div className="closeButton pb-5" onClick={() => setCountModalOpen(!countModalOpen)}><AiOutlineCloseCircle size={30} color="white" className='pointer' /></div>
                    <Row className="mt-3">
                        <Col md='12'>
                            <div className='px-2 py-4 text-center'>
                                <h4 className="text-white appie-title mb-2">How many would you like to mint?</h4>
                                <div className="d-flex align-items-center justify-content-center text-center mb-3">
                                    <div className="cursor-pointer text-white" onClick={() => { setCount((n) => n > 1 ? n - 1 : 1); }}><MinusSquare size={35} /></div>
                                    <input className="input-count form-control" placeholder={'Count'} min={1} max={10} value={count} />
                                    <div className="cursor-pointer text-white" onClick={() => { setCount((n) => n < 10 ? n + 1 : 10); }}><PlusSquare size={35} /></div>
                                </div>

                                <div className='wallet-item d-flex align-items-center justify-content-center wal-button mt-4'>
                                    <div className='lol-btn active py-3 ml-0' onClick={() => { walletMint() }} style={{ cursor: "pointer" }}>SUBMIT</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>

            {/* <Modal className="wallets-modal-full wallets-modal" centered isOpen={fullModalOpen} size="lg" >
                <ModalBody className="mt-30 mb-30 d-flex">
                    <Row className="mt-3 d-flex align-items-center justify-content-center">
                        <Col md='12'>
                            <p className="px-3 text-white">Hi Guys, sadly our mint is delayed until tomorrow (May 16th 2023) due to high Ethereum network traffic and gas fees. Our public sale will go live at 6pm EST. Please check back in tomorrow.</p>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal> */}

            <WinterCheckout
                projectId={WINTER_PROJECT_ID}
                showModal={showWinter}
                production={WINTER_PRODUCTION === 'production'}
                onClose={() => { setShowWinter(false) }}
                extraMintParams={{ "tier": tier }}
            />

            <ConnectWallet setIsOpen={setIsOpen} isOpen={isOpen} />
        </Fragment >
    )
}
export default BannerSection