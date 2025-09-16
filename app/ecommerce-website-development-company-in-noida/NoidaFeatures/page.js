"use client";
import React from "react";
import "./features.css"; // Assuming you have a CSS file for styles
import {
  FaMobileAlt,
  FaRegUserCircle,
  FaSearch,
  FaLock,
  FaFilter,
  FaExpandAlt,
} from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdProductionQuantityLimits } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";

const features = [
  {
    title: "Custom Designs",
    icon: <MdOutlineDashboardCustomize />,
    description:
      "We customize ecommerce sites according to your needs and ensure they match your brand’s vibe. We don’t use pre-made templates. It helps in making your online store look unique and professional.",
    color: "blue",
  },
  {
    title: "Mobile-Optimized for All Devices",
    icon: <FaMobileAlt />,
    description:
      "We know most shoppers are mobile users, so we ensure the ecommerce website is mobile-friendly and works smoothly on all devices, which keeps customers engaged and leads to more conversions.",
    color: "peach",
  },
  {
    title: "Secure Payment Gateway Integration",
    icon: <FaLock />,
    description:
      "As a leading ecommerce development company in Noida, we believe in integrating trusted, encrypted payment options so your customers can shop with confidence.",
    color: "white",
  },
  {
    title: "SEO-Friendly Structure",
    icon: <FaSearch />,
    description:
      "Our ecommerce sites start earning from day one. We ensure the sites are built with clean code and best SEO practices. It drives more organic traffic and reaches the right audience.",
    color: "white",
  },
  {
    title: "Easy Product & Inventory Management",
    icon: <MdProductionQuantityLimits />,
    description:
      "We make adding or removing products, maintaining stock levels, and tracking the existing stocks very easy with just a few clicks.",
    color: "blue",
  },
  {
    title: "Performance Optimized",
    icon: <GrOptimize />,
    description:
      "As a leading ecommerce agency in Noida, we understand that speed matters. We optimize images, CSS files, scripts, and code to ensure the ecommerce site loads quickly and runs efficiently.",
    color: "peach",
  },
];

const NoidaFeatures = () => {
  return (
    <section className="Teaturesstop1-features-wrapper">
      <h2>Features Of Our E–commerce Websites</h2>
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

export default NoidaFeatures;
