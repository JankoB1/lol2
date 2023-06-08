import React from 'react';

import './Footer.css';

import logo from '../../assets/images/lol-logo.svg';
import fb from '../../assets/images/fb.svg';
import discord from '../../assets/images/discord.svg';
import ig from '../../assets/images/ig.svg';
import twitter from '../../assets/images/twitter.svg';

function Footer() {
    return (
        <footer>
            <div className="main-area">
                <div className="footer-logo">
                    <img src={logo} alt="lol-logo"/>
                </div>
                <ul className="sections">
                    {/* <li><a href="#jokestars">Jokestars</a></li>
                    <li><a href="#drop">Drop 01</a></li>
                    <li><a href="#vote">Vote</a></li>
                    <li><a href="#roadmap">Roadmap</a></li> */}
                    <li><a href="#community">Community</a></li>
                </ul>
                <div className="socials">
                    <ul>
                        {/* <li><a href="#"><img src={fb} alt="facebook"/></a></li> */}
                        <li><a href="https://discord.gg/laughoutlabs" target='_blank'><img src={discord} alt="discord"/></a></li>
                        <li><a href="https://instagram.com/nftsareajoke" target='_blank'><img src={ig} alt="ig"/></a></li>
                        <li><a href="https://twitter.com/laughoutlabs" target='_blank'><img src={twitter} alt="twitter"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="row copyright">
                <p>2023 Copyright ©  |  All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;