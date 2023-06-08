import React from 'react';
import HomepageHero from '../../components/homepage/homepage-hero/HomepageHero';
import Jokestars from '../../components/homepage/jokestars/Jokestars';
import Drop from '../../components/homepage/drop/Drop';
import nft1 from "../../assets/images/nft_1.png";
import nft2 from "../../assets/images/nft_2.png";
import nft3 from "../../assets/images/nft_3.png";
import thumb from "../../assets/images/thumb.png";

import Vote from "../../components/homepage/vote/Vote";
import JokeRanking from "../../components/homepage/joke-ranking/JokeRanking";
import Benefits from "../../components/homepage/benefits/Benefits";
import Roadmap from "../../components/homepage/roadmap/Roadmap";
import Community from "../../components/homepage/community/Community";
import Mint from "../../components/Mint/index"
function Homepage() {

    const dropCards = [
        {
            imageUrl: nft1,
            time: '1h : 35m : 01s',
            thumbUrl: thumb,
            name: 'James Smith',
            nickname: '@jamessmith',
            ethPrice: '420. 99',
            category: 'Gold'
        },
        {
            imageUrl: nft2,
            time: '1h : 35m : 01s',
            thumbUrl: thumb,
            name: 'James Smith',
            nickname: '@jamessmith',
            ethPrice: '420. 99',
            category: 'Signature'
        },
        {
            imageUrl: nft3,
            time: '1h : 35m : 01s',
            thumbUrl: thumb,
            name: 'James Smith',
            nickname: '@jamessmith',
            ethPrice: '420. 99',
            category: 'Silver'
        }
    ];

    const buttons = [
        {
            text: 'All Categories',
            url: '#',
            isActive: true,
            isLink: false,
        },
        {
            text: 'Signature',
            url: '#',
            isActive: false,
            isLink: false,
        },
        {
            text: 'Silver',
            url: '#',
            isActive: false,
            isLink: false,
        },
        {
            text: 'Gold',
            url: '#',
            isActive: false,
            isLink: false,
        },
        {
            text: 'Special Purpose',
            url: '#',
            isActive: false,
            isLink: false,
        },
    ]

    return (
        <>
            <HomepageHero />
            <Jokestars />
            <Drop dropCards={dropCards} buttons={buttons} />
            <Vote />
            <JokeRanking />
            <Benefits />
            <Roadmap />
            <Community />
        </>
    );
}

export default Homepage;