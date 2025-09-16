"use client"
import React from "react";
import "./sec14.css";

const SamsungSecondSection = () => {
  return (
    <div className="samsung2-section">
      <div className="samsung2-wrapper">
        {/* Left Image */}
        <div className="samsung2-image-box">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744045612/keep_your_backend_1_lyomzy.svg"
            alt="Backend Integration Illustration"
            className="samsung2-image"
          />
        </div>

        {/* Right Content */}
        <div className="samsung2-content">
          <h2 className="samsung2-title">
            Replace frontend, keep<br /> your backend investment
          </h2>
          <p className="samsung2-description">
            Modernize without replatforming and benefit from the stability of your
            backend platform and the best-of-breed composable tools, without compromises.
            Bet on higher reliability, improved performance, and seamless customer
            experience when it matters most.
          </p>
          {/* <button className="samsung2-button">Check all integrations</button> */}
        </div>
      </div>
    </div>
  );
};

export default SamsungSecondSection;
