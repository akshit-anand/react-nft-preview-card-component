import React from "react";
import Avatar from "../../images/image-avatar.png";

const CardFooter = (props) => {
  return (
    <div>
      <div className="card-footer">
        <img src={Avatar} alt="avatar" className="avatar" />
        <div className="creator-text">
          Creation of <span>{props.cardData.creator}</span>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
