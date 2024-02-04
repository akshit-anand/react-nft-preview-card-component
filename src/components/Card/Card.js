import React from "react";
import "./Card.css";
import CardFooter from "../CardFooter/CardFooter";
import Image from "../CardImage/CardImage";
import TextDescription from "../TextDescription/TextDescription";

const Card = (props) => {
  return (
    <div className="card-container">
      <Image />
      <TextDescription cardData={props.cardData} />
      <hr />
      <CardFooter cardData={props.cardData} />
    </div>
  );
};

export default Card;
