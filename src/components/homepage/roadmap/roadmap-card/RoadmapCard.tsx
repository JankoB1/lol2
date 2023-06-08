import React, { useState } from 'react';
import { RoadmapCardDT } from '../../../../Types';

import './RoadmapCard.css';

interface Props {
    index: number;
    roadmapCard: RoadmapCardDT;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

function RoadmapCard({ index, roadmapCard, activeIndex, setActiveIndex }: Props) {

    const handleMouseOver = () => {
        setActiveIndex(index);
    };

    const className = `roadmap-card ${activeIndex === index ? 'active' : ''}`;

    return (
        <div onMouseOver={handleMouseOver} className={className}>
            <div className="roadmap-card-inner">
                <div className="roadmap-card-header">
                    <p>
                        {index + 1} - {roadmapCard.title}
                    </p>
                </div>
                <div className="roadmap-image">
                    <img src={roadmapCard.imageUrl} alt="roadmap-featured" />
                </div>
                <div className="roadmap-desc">
                    <p>{roadmapCard.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default RoadmapCard;
