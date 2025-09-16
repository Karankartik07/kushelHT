"use client"
import React, { useState } from "react";
import "./Section9.css";
import { GoEye, GoGoal } from "react-icons/go";

const Section9 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(card === activeCard ? null : card);
  };

  return (
    <section className="visionMContain">
        <div className="vision-mission-container">
      <div
        className={`cardVision ${activeCard === "vision" ? "active" : ""}`}
        onClick={() => handleCardClick("vision")}
      >
        <div className={`icon-boxMission ${activeCard === "vision" ? "active-icon" : ""}`}>
          <span className="iconMission">
          <GoEye/>
          </span>
        </div>
        <h3 className="titleMission">Our Vision</h3>
        <p className="textViMission">
        To become a trusted global partner in digital expansion by creating bespoke eCommerce solutions that drive innovation, produce results, and improve user experiences for businesses of all sizes.
        </p>
      </div>

      <div
        className={`cardVision ${activeCard === "mission" ? "active" : ""}`}
        onClick={() => handleCardClick("mission")}
      >
        <div className={`icon-boxMission ${activeCard === "mission" ? "active-icon" : ""}`}>
          <span className="iconMission">
          <GoGoal/>
          </span>
        </div>
        <h3 className="titleMission">Our Mission</h3>
        <p className="textViMission">
        To design custom, high-performance eCommerce sites that meet our customer’s objectives by integrating design, development, and strategy to deliver measurable growth and long-term success.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Section9;
