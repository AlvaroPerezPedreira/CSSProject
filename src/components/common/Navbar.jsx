import React from "react";
import "./styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  const Carousel = () => {
    navigate("/3d-carousel");
  };

  const Card = () => {
    navigate("/3d-card");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <span onClick={Home}>CSS Project</span>
      </div>
      <div className="navbar-links">
        <span onClick={Carousel} className="navbar-link">
          3D Carousel
        </span>
        <span onClick={Card} className="navbar-link">
          3D Card
        </span>
      </div>
    </div>
  );
}
