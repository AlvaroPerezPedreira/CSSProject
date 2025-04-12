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

  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <span onClick={Home}>CSS Project</span>
      </div>
      <div className="navbar-links">
        <span onClick={Carousel} className="navbar-link">
          3D Carousel
        </span>
        <span onClick={Carousel} className="navbar-link">
          Example
        </span>
      </div>
    </div>
  );
}
