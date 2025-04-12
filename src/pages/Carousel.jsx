import React, { useState } from "react";
import "./styles/carousel.css";
import { sizesZ, sizesX, time } from "../utils/Constants";

export default function Carousel() {
  const totalNumber = 12;
  const [perspectiveZ, setPerspectiveZ] = useState(sizesZ[2]);
  const [perspectiveX, setPerspectiveX] = useState(sizesX[0]);
  const [animationTime, setAnimationTime] = useState(time[1]);

  const changePerspectiveZ = () => {
    const currentIndex = sizesZ.findIndex((size) => size === perspectiveZ);
    const nextIndex = (currentIndex + 1) % sizesZ.length;
    setPerspectiveZ(sizesZ[nextIndex]);
  };

  const changePerspectiveX = () => {
    const currentIndex = sizesX.findIndex((size) => size === perspectiveX);
    const nextIndex = (currentIndex + 1) % sizesX.length;
    setPerspectiveX(sizesX[nextIndex]);
  };

  const changeAnimationTime = () => {
    const currentIndex = time.findIndex((t) => t === animationTime);
    const nextIndex = (currentIndex + 1) % time.length;
    setAnimationTime(time[nextIndex]);
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-title-container">
          <span className="carousel-title">Chinese Zodiac</span>
          <div className="carousel-button-container">
            <button className="carousel-button" onClick={changePerspectiveZ}>
              Perspective
            </button>
            <button className="carousel-button" onClick={changePerspectiveX}>
              Change X
            </button>
            <button className="carousel-button" onClick={changeAnimationTime}>
              Speed
            </button>
          </div>
        </div>

        <div
          className="carousel-slider"
          style={{
            "--item-total": totalNumber,
            "--perspectiveZ": perspectiveZ,
            "--perspectiveX": perspectiveX,
            "--animationTime": animationTime,
          }}
        >
          <div className="carousel-item" style={{ "--item-position": 1 }}>
            <img src="images/carousel/RatPainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 2 }}>
            <img src="images/carousel/OxPainting.webp" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 3 }}>
            <img src="images/carousel/TigerPainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 4 }}>
            <img src="images/carousel/RabbitPainting.webp" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 5 }}>
            <img src="images/carousel/DragonPainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 6 }}>
            <img src="images/carousel/SnakePainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 7 }}>
            <img src="images/carousel/HorsePainting.webp" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 8 }}>
            <img src="images/carousel/SheepPainting.png" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 9 }}>
            <img src="images/carousel/MonkeyPainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 10 }}>
            <img src="images/carousel/RoosterPainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 11 }}>
            <img src="images/carousel/DogPainting.jpg" alt="" />
          </div>
          <div className="carousel-item" style={{ "--item-position": 12 }}>
            <img src="images/carousel/PigPainting.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
