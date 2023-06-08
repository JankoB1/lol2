import React from 'react';

import './VoteCard.css';

import like from '../../../../assets/images/like.png';
import dislike from '../../../../assets/images/dislike.png';
import Button from "../../../button/Button";
import { VoteCardDT } from "../../../../Types";

interface Props {
    voteCard: VoteCardDT
}

function VoteCard({ voteCard }: Props) {

    return (
        <div className="vote-card">
            <div className="vote-card-inner">
                <div className="vote-thumb">
                    <img src={voteCard.thumbUrl} alt="vote-thumb"/>
                </div>
                <div className="vote-card-meta">
                    <h5 className="vote-card-name">{voteCard.name}</h5>
                    <p className="vote-card-desc">{voteCard.desc}</p>
                </div>
                <div className="vote-thumbs">
                    <img src={like} alt="" className="like"/>
                    <img src={dislike} alt="" className="dislike"/>
                </div>
                <Button button={voteCard.button} />
            </div>
        </div>
    );
}

export default VoteCard;