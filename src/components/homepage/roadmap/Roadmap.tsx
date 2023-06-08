import React, {useRef, useState} from 'react';
import { RoadmapCardDT } from '../../../Types';
import featuredImage from '../../../assets/images/roadmap-card-image.png';
import RoadmapCard from './roadmap-card/RoadmapCard';

import './Roadmap.css';
import {useIsVisible} from "../../../utils/Utils";

function Roadmap() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const roadmapCards: RoadmapCardDT[] = [
        {
            title: 'May 8th 2023 ',
            imageUrl: featuredImage,
            desc: 'Launch Drop 01 - #ItsJustAJoke 52-Card Collectible Series',
        },
        {
            title: 'Jokesters Podcast (Episode 01)',
            imageUrl: featuredImage,
            desc: 'Our exclusive podcast series taped in front of a live audience. Join our comedians as they hangout, share funny stories, play games and crack jokes live in conversation with each other and special guests',
        },
        {
            title: 'Drop 02 - Introducing the LOL Face PFP',
            imageUrl: featuredImage,
            desc: 'Launch Drop 02 - #LOLFace PFP Project release.',
        },
        {
            title: 'Exclusive Merch Store Launch',
            imageUrl: featuredImage,
            desc: '"Your Clothes Are Funny" - Signature Tee/Apparel/Souvenirs',
        },
        {
            title: 'IRL Community Event',
            imageUrl: featuredImage,
            desc: 'Our first ever community event…. Think comedy show meets live music with BBQ, free drinks and special VIP guests!',
        },
        {
            title: 'Top Secret Televised Special ',
            imageUrl: featuredImage,
            desc: 'Join us for our top secret Stand-Up comedy special, filmed live in Hollywood, California in partnership with a very special network! (Details to be revealed)',
        },
        {
            title: 'NFTs Are A Joke - Comedy Album',
            imageUrl: featuredImage,
            desc: 'Comedians + Live Music = something you wanna listen to all day long!',
        },
        {
            title: 'Community Surprise',
            imageUrl: featuredImage,
            desc: 'Wait for it… literally. You don’t want to miss this announcement :-)',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(3);

    return (
        <section id="roadmap" className={isVisible? 'fade-in-visible show': 'fade-in-visible'} ref={ref}>
            <h2>Roadmap</h2>
            <div className="roadmap-inner">
                {roadmapCards.map((roadmapCard, i) => (
                    <RoadmapCard
                        key={i}
                        index={i}
                        roadmapCard={roadmapCard}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </section>
    );
}

export default Roadmap;
