import React, {useRef} from 'react';
import Button from "../../button/Button";
import {ButtonDT} from "../../../Types";
import Mint from '../../Mint'

import './Community.css';

import animals from '../../../assets/images/animals.png';
import net from '../../../assets/images/net.png';
import {useIsVisible} from "../../../utils/Utils";

function Community() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const button: ButtonDT = {
        text: 'Join the Waitlist',
        url: '#',
        isActive: true,
        isLink: true
    };

    return (
        <section id="community" className={isVisible? 'fade-in-visible show': 'fade-in-visible'} ref={ref}>
            <div className="community-inner">
                <h2>Community</h2>
                <p>We believe that comedy is a powerful tool for bringing people together and promoting kindness and understanding. That's why we're building a community of like-minded, kind-spirited people who all share a common interest in comedy. Whether you're a comedian, a fan of comedy, or just someone who loves to laugh, our community is the perfect place for you.</p>
                <Mint />
                <img src={animals} alt="animals"/>
            </div>
            <img src={net} alt="net-bg" className="net-bg"/>
        </section>
    );
}

export default Community;