import React from "react";
import PriceTime from "../PriceTime/PriceTime";

const TextDescription = (props) => {
  return (
    <div>
      <div className="text-description">
        <h3>{props.cardData.title}</h3>
        <p>{props.cardData.desc}</p>
        <PriceTime cardData={props.cardData} />
      </div>
    </div>
  );
};

export default TextDescription;
