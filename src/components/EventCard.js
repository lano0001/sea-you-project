import React from "react";
import "./EventCard.css";

const EventCard = ({ image, title }) => {
  return (
    <div className="event-card">
      <div
        className="event-card-image"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={title}
      ></div>
      <h3 className="event-card-title">{title}</h3>
    </div>
  );
};

export default EventCard;
