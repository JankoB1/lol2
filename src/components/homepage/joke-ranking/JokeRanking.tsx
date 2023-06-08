import React from 'react';
import {JokeRankingCardDT} from "../../../Types";

import './JokeRanking.css';

import thumbUrl from '../../../assets/images/vote-thumb.png';
import JokeRankingCard from "./joke-ranking-card/JokeRankingCard";

import jokeRankingVisual from '../../../assets/images/joke-ranking-visual.png';

function JokeRanking() {

    const jokeRankingCards: JokeRankingCardDT[] = [
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: true
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
        {
            thumbUrl: thumbUrl,
            name: 'Darrell Steward',
            numOfVotes: 20000,
            num: '01',
            active: false
        },
    ]

    return (
        <section id="joke-ranking">
            <div className="joke-ranking-inner">
                <h2>Joke Ranking</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row joke-ranking-cards-row">
                            {jokeRankingCards.map((jokeRankingCard, i) => (
                                <JokeRankingCard jokeRankingCard={jokeRankingCard} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={jokeRankingVisual} alt="joke-ranking-visual" className="joke-ranking-visual"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JokeRanking;