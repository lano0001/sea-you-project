import React from "react";
import EventCard from "./EventCard";
import "./Events.css";

const Events = () => {
  const events = [
    {
      image: "ice.webp",
      title: "Event // Trash Pickup at Carcavelos",
    },
    {
      image: "ice.webp",
      title: "Event // Planting Trees",
    },
  ];

  return (
    <div className="events-container">
      <div className="events-title">
        <h2>Events</h2>
        <img src="Fist.svg"></img>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} image={event.image} title={event.title} />
        ))}
      </div>
    </div>
  );
};

export default Events;
