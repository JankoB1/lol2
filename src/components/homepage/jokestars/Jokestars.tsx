import React, {useRef} from 'react';
import Jokestar from "./jokestar/Jokestar";

import './Jokestars.css';

import hbo from '../../../assets/images/hbo-tv.png';
import cc from '../../../assets/images/comedy-central-tv.png';
import mtv from '../../../assets/images/mtv-tv.png';
import tru from '../../../assets/images/tru-tv.png';
import showTime from '../../../assets/images/showtime-tv.png';
import fx from '../../../assets/images/fx-tv.png';
import abc from '../../../assets/images/abc-tv.png';
import improv from '../../../assets/images/improv-tv.png';
import axs from '../../../assets/images/axs-tv.png';
import jokestarP1 from '../../../assets/images/j1.png';
import jokestarP2 from '../../../assets/images/j2.png';
import jokestarP3 from '../../../assets/images/j3.png';
import jokestarP4 from '../../../assets/images/j4.png';
import {useIsVisible} from "../../../utils/Utils";

function Jokestars() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    return (
        <section id="jokestars" className={isVisible? 'fade-in-visible show': 'fade-in-visible'} ref={ref}>
            <div className="jokestars-header">
                <h2>Jokestars</h2>
                <p>Meet the Jokestars! Our growing in-house team of comedians, actors and epic joke writers.</p>
                <p>Our jokestars have worked on Emmy Award Winning shows across networks including HBO, Comedy Central, ABC, MTV, truTV, Showtime, FX, BET,  Adult Swim and FOX, with special feature appearances at comedy staples such as The Laugh Factory, Hollywood Improv, AXS Gotham Comedy Live and many more.</p>
            </div>
            <div className="tv-appearances">
                <h3>TV & Live appearances</h3>
                <div className="tv-logos">
                    <img src={hbo} alt="hbo-tv"/>
                    <img src={cc} alt="comedy-central-tv"/>
                    <img src={mtv} alt="mtv-tv"/>
                    <img src={tru} alt="tru-tv"/>
                    <img src={showTime} alt="showtime-tv"/>
                    <img src={fx} alt="fx-tv"/>
                    <img src={abc} alt="abc-tv"/>
                    <img src={improv} alt="improv-tv"/>
                    <img src={axs} alt="axs-tv"/>
                </div>
                <div className="jokestars">
                    <div className="row jokestars-row">
                        <Jokestar imageUrl={jokestarP1} linkUrl={"#"} name={"Norman Towns"} desc={"Norman Towns is an actor, comedian, writer and producer."} />
                        <Jokestar imageUrl={jokestarP2} linkUrl={"#"} name={"Ksenia"} desc={"Mark is afrequent face at the World Famous Comedy Store, The Laugh Factory and The Hollywood Improv."} />
                        <Jokestar imageUrl={jokestarP4} linkUrl={"#"} name={"Clayton Farris"} desc={"Clayton Farris is an actor, comedian and content creator with over 500 million views across all platforms."} />
                        <Jokestar imageUrl={jokestarP3} linkUrl={"#"} name={"Mark Serrittella"} desc={"Ksenia is a Recording Artist, Comedian, Actress, and Popular Influencer..."} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Jokestars;