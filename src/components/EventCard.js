import React from "react";
import CostomButton from "./ReusableComponents/CustomButton";
import "./EventCard.css";

const EventCard = ({ image, title }) => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="event-card">
      <div
        className="event-card-image"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={title}
      ></div>
      <h3 className="event-card-title">{title}</h3>
      <CostomButton text="Join event" onClick={handleClick} />
    </div>
  );
};

export default EventCard;
