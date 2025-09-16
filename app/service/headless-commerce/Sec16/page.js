"use client"
import React from "react";
import "./sec16.css"; 

const SamsungSection = () => {
  return (
    <div className="samsung-container">
      <div className="samsung-wrapper">
        {/* Left Side Text */}
        <div className="samsung-text">
          <h2 className="samsung-heading">
            Decouple your frontend<br /> from the backend and<br /> scale faster
          </h2>
          <p className="samsung-description">
            Update your frontend without affecting the backend and vice versa.
            This flexibility accelerates development cycles and improves maintainability.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="samsung-image-box">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744040498/decouple_1_bfohph.svg"
            alt="Before and After Diagram"
            className="samsung-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SamsungSection;
