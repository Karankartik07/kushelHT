"use client"
import React from "react";
import {
  MdWeb,
  MdOutlineCompareArrows,
  MdOutlineReportProblem,
  MdOutlineQueryStats,
  MdAttachMoney,
} from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "./discover.css";

const features = [
  {
    icon: <MdWeb />,
    title: "Custom Headless Commerce Development",
    description:
      "We give solutions for custom Headless Commerce Development which are specifically designed to match your particular requirements and goals of business. We ensure every step from the planning to smooth implementation.",
  },
  {
    icon: <MdOutlineCompareArrows />,
    title: "API Integration & Management",
    description:
      "API management are the real important aspect of headless commerce. We connect your backend effortlessly and seamlessly with frontends, CRMs, payment gateways, shipping providers and also marketing tools.",
  },
  {
    icon: <MdOutlineReportProblem />,
    title: "Custom Frontend Development",
    description:
      "We use and inculcate modern frontend technologies like React.js, Vue.js, and Next.js. It provides more responsive, engaging user interfaces which are also of high in performance. These frameworks ensure fast load times and optimized user journeys on every possible device.",
  },
  {
    icon: <MdOutlineQueryStats />,
    title: "Omnichannel Experience ",
    description:
      "Looking from websites and mobile apps to kiosks and smart devices, we create consistent, on-brand experiences across every customer touchpoint. It particularly ensures users get a unified journey no matter where they shop.",
  },
  {
    icon: <MdAttachMoney />,
    title: "Migration to Headless",
    description:
      "Transform and Elevate your existing monolithic platform (like Magento, WooCommerce or Shopify) to a headless BigCommerce setup immediately and smoothly. Our team of experts always ensures secure data transfer, minimal downtime, and enhanced flexibility after the migration.",
  },
];

const OrangeThriveSection = () => {
  return (
    <section className="orange-thrive-section">
      <div className="orange-banner-bg" />

      <div className="orange-thrive-card">
        <div className="orange-thrive-subtitle">Our services</div>
        <h2 className="orange-thrive-title">
        Design Develop Grow with Kushel Digi Solutions

        </h2>
        {/* <p className="orange-thrive-desc">
          We understand the unique challenges of running an e-commerce
          business. Whether you’re building a new eCommerce store, migrating
          platforms, or looking to drive more sales, we provide tailored
          solutions to meet your goals.
        </p> */}
      </div>

      {features.map((item, index) => (
        <div key={index} className="orange-thrive-feature">
          <div className="orange-thrive-feature-icon">{item.icon}</div>
          <div className="orange-thrive-feature-texts">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="orange-thrive-arrow">
            <FaArrowRight />
          </div>
        </div>
      ))}
    </section>
  );
};

export default OrangeThriveSection;
