import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="card-page">
      <div className="card-title-container">
        <span className="card-title">3D Cards</span>
      </div>
      <div className="card-container">
        <div className="card-container1">
          <div className="card-background1"></div>
          <div className="card-item1"></div>
        </div>
        <div className="card-container2">
          <div className="card-background2"></div>
          <div className="card-item2"></div>
        </div>
      </div>
    </div>
  );
}
