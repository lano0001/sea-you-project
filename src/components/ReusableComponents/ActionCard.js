import React from "react";
import "./ActionCard.css";

const ActionCard = ({ image, title, description, buttonText, onAction }) => {
  return (
    <div className="action-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
        aria-label="Card image"
      ></div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onAction}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
