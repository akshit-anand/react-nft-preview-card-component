import React from "react";
import IconEth from "../../images/icon-ethereum.svg";
import IconClock from "../../images/icon-clock.svg";

const PriceTime = (props) => {
  return (
    <div>
      <div className="price__time">
        <div className="price">
          <img src={IconEth} alt="ethereum-icon" className="eth-icon" />
          <span>{props.cardData.price}</span>
        </div>
        <div className="time">
          <img src={IconClock} alt="Clock Icon" className="clock-icon" />
          <span>{props.cardData.time}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceTime;
