import React, {useRef} from 'react';

import './Jokestar.css';

import arrowRight from '../../../../assets/images/arrow-right.png';
import {useIsVisible} from "../../../../utils/Utils";

interface Props {
    imageUrl: string,
    linkUrl: string,
    name: string,
    desc: string
}

function Jokestar({ imageUrl, linkUrl, name, desc }: Props) {
    return (
        <div className="jokestar col-md-3">
            <div className="jokestar-inner">
                <img src={imageUrl} alt="jokestar-person" className="jokestar-image"/>
                <div className="jokestar-cta">
                    <a href={linkUrl} className="jokestar-cta-link">
                        <h5>{name}</h5>
                        <p>{desc}</p>
                        <img src={arrowRight} alt="arrow-right" className="arrow-right"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Jokestar;