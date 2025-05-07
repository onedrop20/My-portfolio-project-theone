// src/components/FlipCard.js
// src/components/FlipCard.js
import React, { useState } from "react";
import "./FlipCards.css";

const FlipCards = ({ icon, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    console.log("Flip triggered:", !flipped); // Debug
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
      onTouchEnd={handleFlip}
      onMouseEnter={() => console.log("Hover detected")} // Debug
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-title-container">
            <div className="flip-title">
              <span className="flip-icon">{icon}</span>
              <h3>{title}</h3>
            </div>
            <div className="click-hint-container">
              <p className="click-hint">Tap to view details</p>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;