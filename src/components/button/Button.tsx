import React from "react";
import {ButtonDT} from "../../Types";

import './Button.css';

interface Props {
    button: ButtonDT,
    onClick?: () => void
}

function Button({ button, onClick }: Props) {
    let classes = button.isActive? 'lol-btn active': 'lol-btn';

    if(button.isLink) {
        return <a onClick={onClick} className={classes} href={button.url}>{button.text}</a>
    }
    return (
        <button onClick={onClick} data-drop-category={button.text} className={classes}>{button.text}</button>
    );
}

export default Button;