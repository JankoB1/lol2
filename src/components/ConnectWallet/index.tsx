import React, { useEffect } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap'
/* wallet imports */
import { useWeb3React } from '@web3-react/core'
import connectors from "../../helper/WalletConnector"
import activateInjectedProvider from "../../helper/WalletHelp"
import { AiOutlineCloseCircle } from "react-icons/ai"

import IconOne from '../../assets/images/icon-1.png';
import IconThree from '../../assets/images/icon-3.png';


function ConnectWallet({ isOpen, setIsOpen }: any) {
    
    const { account, activate, active } = useWeb3React();

    const connectWallet = (walletName: any) => {

        localStorage.setItem('provider', walletName)
        if (walletName === 'injected') {
            activateInjectedProvider('injected')
            activate(connectors.injected)
        } else if (walletName === 'walletConnect') {
            activate(connectors.walletConnect);
        } else if (walletName === 'coinbaseWallet') {
            activate(connectors.coinbaseWallet)
        }
    }

    useEffect(() => {
        if (active && account) {
            setIsOpen(false)
        }
    }, [active, account])

    return (
        <>
            <Modal className='wallets-modal' isOpen={isOpen} toggle={() => setIsOpen(false)} size="md" >
                <ModalBody className='mt-30 mb-30'>
                    <div className="closeButton float-right" onClick={() => setIsOpen(false)}><AiOutlineCloseCircle size={30} className='pointer' /></div>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 d-none d-lg-block">
                            <div
                                className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon pb-2">
                                    <img src={IconOne} alt="" className='wallet-img' />
                                </div>
                                <h4 className="appie-title text-white pt-1">Metamask</h4>
                                <div className='py-3'>
                                    <button className='lol-btn active' type='submit' onClick={() => connectWallet('injected')}>Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon pb-2">
                                    <img src={IconThree} alt="" className='wallet-img' />
                                </div>
                                <div>
                                    <h4 className="appie-title text-white pt-3">WalletConnect</h4>
                                </div>

                                <div className='py-3'>
                                    <button className='lol-btn active' type='submit' onClick={() => connectWallet('walletConnect')}>Select</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </ModalBody>
            </Modal>
        </>
    );
}

export default ConnectWallet;
