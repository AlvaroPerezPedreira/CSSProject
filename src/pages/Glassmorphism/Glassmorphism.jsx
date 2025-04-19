import React from "react";
import "./glassmorphism.css";

export default function Glassmorphism() {
  return (
    <div className="glassM-page">
      <div className="glassM-loginContainer">
        <div className="glassM-loginTitle">
          <span>Glassmorphism</span>
        </div>
        <div className="glassM-loginInputs">
          <input type="text" name="email" placeholder="Your email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </div>
        <div className="glassM-loginFooter">
          <span>
            This is a non-functional login form created purely for CSS styling
            practice
          </span>
        </div>
      </div>
    </div>
  );
}
