import React from "react";
import CARD_LIST from "../json/cards.json";

const Card = () => {
    return (
        <ul>
            {CARD_LIST.map((card) => {
                return (
                    <li>
                        <img src={card.path} alt={card.name} />
                    </li>
                );
            })}
        </ul>
    );
};

export default Card;
