import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core';
import Button from '../button/Button';
import logoImage from '../../assets/images/lol-logo.svg'
import './Header.css';
import { ButtonDT } from "../../Types";
import { isMobile } from "../../helper";
import WalletDropdown from "../ConnectWallet/WalletDropdown";
import connectors from "../../helper/WalletConnector"
import activateInjectedProvider from "../../helper/WalletHelp"
import ConnectWallet from "../ConnectWallet";
declare const window: any

function Header() {

    const { account, active, activate }: any = useWeb3React();
    const [isOpen, setIsOpen]: any = useState(false);

    useEffect(() => {
        const provider = localStorage.getItem("provider");
        if (provider) {
            if (provider === 'injected') {
                if (!isMobile() && !window.ethereum) {
                    window.open('https://metamask.io/download/', '_blank');
                } else {
                    activateInjectedProvider('MetaMask');
                    activate(connectors.injected);
                }
            } else activate(connectors[provider]);
        }

    }, []);

    const button: ButtonDT = {
        text: 'Connect Wallet',
        url: '#',
        isActive: true,
        isLink: true
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className="logo-img" src={logoImage} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#jokestars">Jokestars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#drop">Drop 01</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#vote">Vote</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#roadmap">Roadmap</a>
                            </li>
                            <li className="nav-item ml-lg-2">
                                <a className="nav-link" href="/#community">Community</a>
                            </li>
                            <li className="nav-item ml-lg-2">
                                {(!active) &&
                                    <Button button={button} onClick={() => setIsOpen(!isOpen)} />
                                }
                                {active && account && <>
                                    <WalletDropdown />
                                </>}
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <ConnectWallet setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    );
}

export default Header;