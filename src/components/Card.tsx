import React from "react";
import CARD_LIST from "../json/cards.json";

const Card = () => {
    return (
        <img src={CARD_LIST[0].path} alt={CARD_LIST[0].name} className="card" />
    );
};

export default Card;
