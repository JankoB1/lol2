import React, { useState } from 'react';
import Mint from '../../Mint'
import './HomepageHero.css';

import panda from '../../../assets/images/panda.png';
import lolBadge from '../../../assets/images/lol-badge.png';
import sign from '../../../assets/images/sign.svg';
import lolCookie from '../../../assets/images/lol-cookie.png';
import giraffe from '../../../assets/images/giraffe.png';

function HomepageHero() {
    const [loaded, setLoaded] = useState(false);

    return (
        <section
            id="home-hero"
            className={loaded ? 'fade-in' : ''}
            onLoad={() => setLoaded(true)}
        >
            <div className="home-hero-wrapper">
                <div className="home-hero-inner">
                    <div className="row first-row">
                        <div className="col-md-11">
                            <h1>"NFTs ARE A JOKE"</h1>
                        </div>
                        <div className="col-md-3 home-hero-right-col">
                            <img
                                src={giraffe}
                                alt="giraffe"
                                className={loaded ? 'giraffe-mobile fade-in' : 'giraffe-mobile'}
                            />
                            <img
                                src={panda}
                                className={loaded ? 'panda fade-in' : 'panda'}
                                alt="panda"
                            />
                            <img
                                src={lolBadge}
                                alt="lol-badge"
                                className={loaded ? 'lol-badge fade-in' : 'lol-badge'}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>is the first-ever<br></br> comedy joke card<br></br> collection!</h2>
                            <div className="row">
                                <div className="col-md-7">
                                    <p>Our mission is simple: to bring laughter and humor to the web3 community while making a positive impact in the world.</p>
                                </div>
                                <div className="col-md-2">
                                    <img src={sign} alt="signature" className="signature" />
                                </div>
                            </div>
                            <div className="row button-cookie-row">
                                <Mint />
                                <img src={lolCookie} alt="lol-cookie" />
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <p>Our joke card collection features hilarious one-liners, witty puns, and clever jokes that will have you rolling on the floor. But that's not all, we're also dedicated to giving back to important causes and a portion of the proceeds from our ‘Special Purpose’ cards will be donated to charities and organizations that support causes such as mental health, environmental conservation and social justice.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img
                                src={giraffe}
                                className={loaded ? 'giraffe fade-in' : 'giraffe'}
                                alt="giraffe" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomepageHero;