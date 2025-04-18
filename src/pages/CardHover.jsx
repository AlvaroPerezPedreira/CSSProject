import React from "react";
import "./styles/cardhover.css";

export default function CardHover() {
  return (
    <div className="cardHover-page">
      <div className="cardHover-title-container">
        <span className="cardHover-title">Card hover animation</span>
      </div>
      <div className="cardHover-list">
        <div className="cardHover-item">
          <img src="images/carousel/RatPainting.jpg" alt="" />
        </div>
        <div className="cardHover-item">
          <img src="images/carousel/OxPainting.webp" alt="" />
        </div>
        <div className="cardHover-item">
          <img src="images/carousel/TigerPainting.jpg" alt="" />
        </div>
        <div className="cardHover-item">
          <img src="images/carousel/RabbitPainting.webp" alt="" />
        </div>
        <div className="cardHover-item">
          <img src="images/carousel/DragonPainting.jpg" alt="" />
        </div>
        <div className="cardHover-item">
          <img src="images/carousel/SnakePainting.jpg" alt="" />
        </div>
        <div className="cardHover-item hidden-mobile hidden-tablet">
          <img src="images/carousel/HorsePainting.webp" alt="" />
        </div>
        <div className="cardHover-item hidden-mobile hidden-tablet">
          <img src="images/carousel/SheepPainting.png" alt="" />
        </div>
        <div className="cardHover-item hidden-mobile hidden-tablet">
          <img src="images/carousel/MonkeyPainting.jpg" alt="" />
        </div>
        <div className="cardHover-item hidden-mobile hidden-tablet">
          <img src="images/carousel/RoosterPainting.jpg" alt="" />
        </div>
        <div className="cardHover-item hidden-mobile">
          <img src="images/carousel/DogPainting.jpg" alt="" />
        </div>
        <div className="cardHover-item hidden-mobile">
          <img src="images/carousel/PigPainting.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
