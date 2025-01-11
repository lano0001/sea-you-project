import React from "react";
import EventCard from "./EventCard";
import "./Events.css";
import Wave6 from "./Wave6";

import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="events-container">
      <div className="events-title">
        <h2>Events</h2>
        <img src="Fist.svg"></img>
      </div>
      <div className="events-grid">
        <EventCard
          image={"event1.webp"}
          title={"Event // Trash Pickup at Carcavelos"}
          onAction={() => handleNavigation("/event1")}
        />
        <EventCard
          image={"event2.webp"}
          title={"Event // Planting Trees"}
          onAction={() => handleNavigation("/event2")}
        />
      </div>
      <Wave6 />
    </div>
  );
};

export default Events;
