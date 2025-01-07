import React from "react";
import "./ArticleCard.css";

const ActionCard = ({}) => {
  return (
    <div className="article-card">
      <img
        src="https://via.placeholder.com/400x200" // Replace with the real image URL
        alt="Article"
        className="article-image"
      />
      <div className="article-content">
        <h2>Article card</h2>
        <p>
          Lorem ipsum dolor
          <br />
          lorem ipsum dolor
          <br />
          lorem ipsum dolor
        </p>
      </div>
    </div>
  );
};

export default ActionCard;
