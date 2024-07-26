import React from "react";
import "./Card.css";

const Card = ({ image, caption }) => {
  return (
    <div className="card">
      <img src={image} alt={caption} className="card-image" />
      <div className="card-caption">{caption}</div>
    </div>
  );
};

export default Card;
