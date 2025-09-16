"use client"
import React, { useState } from "react";
import "./more.css";

const principlesData = [
  {
    id: 1,
    title: " Total Design Freedom",
    content:
      "Tired of choosing rigid templates? Headless commerce gives your design and development teams full control  over the user experience on every device and platform.",
  },
  {
    id: 2,
    title: " Seamless Omnichannel Delivery",
    content: "Reach customers on their channel of choice web, mobile, kiosks, voice assistants, and more from a single backend system to provide unified messaging and experience.",
  },
  {
    id: 3,
    title: "Lightning-Fast Performance",
    content: "By leveraging optimized frontend frameworks and decoupled architecture, headless commerce provides accelerated page loads and seamless shopping experiences that drive higher conversions.",
  },
  {
    id: 4,
    title: " Scalable & Flexible Architecture",
    content: "Scale effortlessly as your business grows. With Headless platforms, you dnot need to fully rebuild the platform as these are are built to adapt by letting you add new channels, features, or integrations.",
  },
  {
    id: 5,
    title: "Faster Innovation & Launches",
    content: "Launch new storefronts, updates, or campaigns quickly. With separate frontend/backend workflows, your team can move faster and innovate continuously.",
  },
  {
    id: 6,
    title: "Future-Ready Commerce Solution",
    content: "Be ahead of the curve with a system built for change. It supports latest technologies to ensure you're ready for whatever comes next in eCommerce.",
  },
];

const CorePrinciples = () => {
  const [activeId, setActiveId] = useState(1);

  const togglePrinciple = (id) => {
    setActiveId(id);
  };

  return (
    <section className="core-section" id="core-principles">
    <div className="content-wrapper">
      <div className="text-content" data-aos="fade-right">
        <h3>
          Why <span className="highlight">Headless Commerce?</span>
        </h3>
        <p>
        Headless commerce known for its unmatched flexibility, speed and scalability. It has been greatly helping modern businesses to create seamless, omnichannel experiences and adapt quickly to changing market demands.
        </p>
      </div>

      <div className="principles-list" data-aos="fade-left">
        {principlesData.map((item) => (
          <div
            key={item.id}
            className={`principle-box ${activeId === item.id ? "active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <div className="number-circle">{item.id}</div>
            <div className="principle-text">
              <h3>{item.title}</h3>
              <div className={`principle-content-wrapper ${activeId === item.id ? "expanded" : ""}`}>
                <p className="principle-content">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default CorePrinciples;
