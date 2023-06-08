import React, { useRef } from 'react';

import arrowRight from '../../../../assets/images/arrow-right.png';
import ethLogo from '../../../../assets/images/eth-logo.png';
import Mint from '../../../Mint'
import './DropCard.css';

import { DropCardDT } from '../../../../Types';
import { useIsVisible } from "../../../../utils/Utils";

interface Props {
    dropCard: DropCardDT
}

function DropCard({ dropCard }: Props) {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    return (
        <div className={isVisible ? 'drop-card col-md-3 fade-in-visible show' : 'drop-card col-md-4 fade-in-visible'} ref={ref}>
            <div className="drop-card-inner">
                <div className="drop-card-img">
                    <img src={dropCard.imageUrl} alt="nft-image" />
                    <p className="drop-card-time">{dropCard.time}</p>
                </div>
                <div className="drop-card-meta">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="drop-card-thumb">
                                <img src={dropCard.thumbUrl} alt="thumb" />
                            </div>
                        </div>
                        <div className="offset-1 col-md-9">
                            <h5>{dropCard.name}</h5>
                            <p>{dropCard.nickname}</p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={ethLogo} alt="" className="eth-logo" />
                        <h6 className="eth-price">{dropCard.ethPrice} ETH</h6>
                    </div>
                    <img src={arrowRight} alt="" className="arrow-right" />
                </div>
            </div>
        </div>
    );
}

export default DropCard;