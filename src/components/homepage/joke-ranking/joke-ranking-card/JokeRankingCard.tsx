import React, {useRef} from 'react';
import {JokeRankingCardDT} from "../../../../Types";

import './JokeRankingCard.css';
import {useIsVisible} from "../../../../utils/Utils";

interface Props {
    jokeRankingCard: JokeRankingCardDT,
}

function JokeRankingCard({ jokeRankingCard }: Props) {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const mainClass = jokeRankingCard.active? 'joke-ranking-card col-md-6 active': 'joke-ranking-card col-md-6';

    return (
        <div className={isVisible? mainClass + 'fade-in-visible show': mainClass + 'fade-in-visible'} ref={ref}>
            <div className="row">
                <div className="col-md-2">
                    <p className="joke-ranking-num">{jokeRankingCard.num}</p>
                </div>
                <div className="col-md-2">
                    <img src={jokeRankingCard.thumbUrl} alt="joke-ranking-card-thumb"/>
                </div>
                <div className="col-md-8">
                    <h6>{jokeRankingCard.name}</h6>
                    <p>{jokeRankingCard.numOfVotes} Upvotes</p>
                </div>
            </div>
        </div>
    )
}

export default JokeRankingCard;