import React, { useEffect, useState } from 'react'

import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, Button } from 'reactstrap'

import { useWeb3React } from '@web3-react/core';
import { truncateAddress, getWalletLogo } from "../../helper/index"


const WalletDropdown = () => {
    const { account, deactivate, active } = useWeb3React();
    const [walletLogo, setWalletLogo]: any = useState(null)
    const [walletaccount, setWalletAccount] = useState('')

    useEffect(() => {
        if (active && account) {
            const provider = localStorage.getItem('provider')
            if (provider !== null) {
                setWalletLogo(getWalletLogo(provider))
            } else {
                setTimeout(() => {
                    setWalletLogo(getWalletLogo(provider))
                }, 200);
            }
            setWalletAccount(account)
        }
    }, [active, account])

    const disconnectWallet = () => {
        localStorage.removeItem('wallet');
        localStorage.removeItem('walletconnect');
        localStorage.removeItem('coinbase');
        localStorage.removeItem('metamask');
        localStorage.removeItem('provider');
        deactivate()
    }

    return (
        <>
            {active && account &&
                <div className='mainTopMenu d-flex justify-content-end'>
                    <UncontrolledDropdown className='dropdown-user nav-item'>
                        <DropdownToggle tag='div' className='align-items-center' onClick={e => e.preventDefault()} >

                            <a href="javascript:void(0)" className="lol-btn active d-flex">
                                {walletLogo && walletLogo !== null && <img src={walletLogo} width={25} className='metamask-img mx-2' alt='demo' />}

                                {
                                    (walletaccount && walletaccount !== '') ? <div className='d-flex align-items-center'>
                                        {truncateAddress(walletaccount)}
                                    </div> : <p>No user found</p>
                                }
                            </a>

                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem onClick={disconnectWallet}  >
                                <span className='align-middle'>Disconnect</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            }
        </>
    )
}
export default WalletDropdown