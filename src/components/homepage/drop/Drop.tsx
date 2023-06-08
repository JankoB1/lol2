import React, { useRef, useState } from 'react';
import Button from "../../button/Button";
import DropCard from './drop-card/DropCard';

import { DropCardDT, ButtonDT } from '../../../Types';

import './Drop.css';
import button from "../../button/Button";
import { useIsVisible } from "../../../utils/Utils";

interface Props {
    buttons: ButtonDT[],
    dropCards: DropCardDT[]
}

function Drop({ buttons, dropCards }: Props) {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const [filteredDropCards, setFilteredDropCards] = useState(dropCards);
    const [localButtons, setLocalButtons] = useState(buttons);

    const filterByCategory = (category: string) => {
        const filteredCards = dropCards.filter((dropCard) => {
            return dropCard.category === category || category === 'All Categories' || category === 'Special Purpose';
        });

        const updatedButtons = localButtons.map((button) => {
            if (button.text === category) {
                return { ...button, isActive: true };
            } else {
                return { ...button, isActive: false }
            }
        });

        setLocalButtons(updatedButtons);
        setFilteredDropCards(filteredCards);
    };

    return (
        <section id="drop" className={isVisible ? 'fade-in-visible show' : 'fade-in-visible'} ref={ref}>
            <div className="drop-inner">
                <h2>Drop 01</h2>
                <div className="drop-categories">
                    {localButtons.map((button, i) => (
                        <div key={i} className="drop-category-btn-wrapper">
                            <Button button={button} onClick={() => filterByCategory(button.text)} />
                        </div>
                    ))}
                </div>
                <div className="drop-categories-cards">
                    <div className="drop-single-category-cards row">
                        {filteredDropCards.map((item, i) => (
                            <DropCard key={i} dropCard={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Drop;