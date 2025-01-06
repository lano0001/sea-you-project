import React from "react";
import EventCard from "./EventCard";
import "./Events.css";
import Wave6 from "./Wave6";

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
      <Wave6 />
    </div>
  );
};

export default Events;
