"use client"
import React from "react";
import "./diff.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const MoniterHeadlessCommerce = () => {
  const traditionalImg =
    "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743857570/Traditional-CMSs-Picture_kkee1n.png";
  const headlessImg =
    "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743857571/Headless-eCommerce-platform-Picture_qoklsz.png";

  return (
    <section className="moniter-commerce-section">
      <h3 className="moniter-commerce-title">
        Feel the difference with the power of <span>headless commerce.</span>
      </h3>

      <div className="moniter-comparison-container">
        {/* Traditional Commerce */}
        <div className="moniter-comparison-box">
          <div className="moniter-comparison-header moniter-traditional">
            Traditional Commerce
          </div>
          <img
            src={traditionalImg}
            alt="Traditional Commerce"
            className="moniter-comparison-image"
          />
          <ul className="moniter-comparison-list">
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              Decoupled Frontend & Backend


            </li>
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              High Customization & Flexibility

            </li>
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              Faster Time-to-Market

            </li>
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              Omnichannel Ready
              </li>
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              Enhanced Personalization
            </li>
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              API-Driven Architecture
            </li>
            <li>
              <span className="moniter-icon moniter-icon-red">
                <FaTimes />
              </span>{" "}
              Scalable & Future-Proof


            </li>
          </ul>
        </div>

        {/* Headless Commerce */}
        <div className="moniter-comparison-box">
          <div className="moniter-comparison-header moniter-headless">
            Headless Commerce 
          </div>
          <img
            src={headlessImg}
            alt="Headless Commerce"
            className="moniter-comparison-image"
          />
          <ul className="moniter-comparison-list">
            <li>
              <span className="moniter-icon moniter-icon-green">
                <FaCheck />
              </span>{" "}
              Database & server hosting required
            </li>
            <li>
              <span className="moniter-icon moniter-icon-green">
                <FaCheck />
              </span>{" "}
              Unlimited customization potential
            </li>
            <li>
              <span className="moniter-icon moniter-icon-green">
                <FaCheck />
              </span>{" "}
              Device-agnostic & omnichannel
            </li>
            <li>
              <span className="moniter-icon moniter-icon-green">
                <FaCheck />
              </span>{" "}
              Inspires no-code customization
            </li>
            <li>
              <span className="moniter-icon moniter-icon-green">
                <FaCheck />
              </span>{" "}
              Highly scalable thanks to APIs
            </li>
            <li>
              <span className="moniter-icon moniter-icon-green">
                <FaCheck />
              </span>{" "}
              API-based, no hosting needed
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoniterHeadlessCommerce;
