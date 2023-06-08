import React, {useRef} from 'react';
import {VoteCardDT} from "../../../Types";

import './Vote.css';
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'

import voteThumb from '../../../assets/images/vote-thumb.png';
import VoteCard from "./vote-card/VoteCard";
import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {useIsVisible} from "../../../utils/Utils";

function Vote() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const voteCards: VoteCardDT[] = [
        {
            thumbUrl: voteThumb,
            name: 'Darlene Robertson',
            desc: 'Why did the elephant paint its toenails red? So it could hide in a cherry tree',
            button: {
                text: 'Share Now',
                url: '#',
                isActive: false,
                isLink: false
            }
        },
        {
            thumbUrl: voteThumb,
            name: 'Darlene Robertson',
            desc: 'Why did the elephant paint its toenails red? So it could hide in a cherry tree',
            button: {
                text: 'Share Now',
                url: '#',
                isActive: false,
                isLink: false
            }
        },
        {
            thumbUrl: voteThumb,
            name: 'Darlene Robertson',
            desc: 'Why did the elephant paint its toenails red? So it could hide in a cherry tree',
            button: {
                text: 'Share Now',
                url: '#',
                isActive: false,
                isLink: false
            }
        },
        {
            thumbUrl: voteThumb,
            name: 'Darlene Robertson',
            desc: 'Why did the elephant paint its toenails red? So it could hide in a cherry tree',
            button: {
                text: 'Share Now',
                url: '#',
                isActive: false,
                isLink: false
            }
        },
        {
            thumbUrl: voteThumb,
            name: 'Darlene Robertson',
            desc: 'Why did the elephant paint its toenails red? So it could hide in a cherry tree',
            button: {
                text: 'Share Now',
                url: '#',
                isActive: false,
                isLink: false
            }
        },
        {
            thumbUrl: voteThumb,
            name: 'Darlene Robertson',
            desc: 'Why did the elephant paint its toenails red? So it could hide in a cherry tree',
            button: {
                text: 'Share Now',
                url: '#',
                isActive: false,
                isLink: false
            }
        },
    ]

    return (
        <section id="vote" className={isVisible? 'fade-in-visible show': 'fade-in-visible'} ref={ref}>
            <div className="vote-inner">
                <h2>Vote</h2>
                <div className="vote-cards row">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={100}
                        navigation
                        loop={true}
                        breakpoints={{
                            768: {
                                width: window.innerWidth,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {voteCards.map((voteCard, i) => (
                            <SwiperSlide>
                                <div className="single-vote-card">
                                    <VoteCard voteCard={voteCard} key={i} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Vote;