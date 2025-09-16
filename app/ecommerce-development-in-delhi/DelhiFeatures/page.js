"use client";
import React from "react";
import "./delhifeatures.css"; // Assuming you have a CSS file for styles
import {
  FaMobileAlt,
  FaRegUserCircle,
  FaSearch,
  FaLock,
  FaFilter,
  FaExpandAlt,
  FaSearchengin,
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { MdOutlineInventory2 } from "react-icons/md";

const features = [
  {
    title: "Responsive Mobile Design",
    icon: <FaMobileAlt />,
    description:
      "To boost sales, we create completely responsive ecommerce websites that look amazing and work well on all devices.",
    color: "blue",
  },
  {
    title: "SEO Architecture",
    icon: <FaSearchengin />,
    description:
      "As part of our ecommerce development services, we provide search engine optimisation (SEO) to help your online shop get more visitors and be seen more easily.",
    color: "peach",
  },
  {
    title: "Loading at the Speed of Light",
    icon: <FaBoltLightning />,
    description:
      "Customers are happy when websites load quicker. We make sure that all of our online stores load quickly so that customers have a better time and don't leave the site as quickly.",
    color: "white",
  },
  {
    title: "Smart Product Search and Filtering",
    icon: <FaFilter />,
    description:
      "Our ecommerce development agency's smart filters and predictive search make it easy for shoppers to find the items they require.",
    color: "white",
  },
  {
    title: "Integration of a Secure Payment Gateway",
    icon: <FaLock />,
    description:
      "We only use the safest and most reputable payment methods so that your customers may buy with total peace of mind.",
    color: "blue",
  },
  {
    title: "Simple CMS and Inventory Management",
    icon: <MdOutlineInventory2 />,
    description:
      "Our easy-to-use backend makes it easy for busy business owners and non-tech staff to manage items, content, and orders.",
    color: "peach",
  },
];

const DelhiFeatures = () => {
  return (
    <section className="Teaturesstop1-features-wrapper">
      <h2>What Features Make Our E-Commerce Websites Stand Out?</h2>
      <div className="Teaturesstop1-features-grid">
        {features.map((feature, index) => (
          <div
            className={`Teaturesstop1-feature-item ${feature.color}`}
            key={index}
          >
            <div className="Teaturesstop1-icon-box">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="Teaturesstop1-buttons">
        <a className="Teaturesstop1-button primary" href="#">
          Start Your Project
        </a>
        <a className="Teaturesstop1-button secondary" href="#">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default DelhiFeatures;
