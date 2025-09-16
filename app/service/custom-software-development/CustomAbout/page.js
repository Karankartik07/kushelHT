"use client";
import React, { useState } from "react";
import "./customabout.css";

const tabs = [
  {
    title: "Use Cases for Custom Software Development",
    content: [
      {
        heading: "Off-the-Shelf Customization",
        text: "Custom software development serves a wide array of use cases, catering to specific business needs and processes that off-the-shelf software can’t address. It includes creating bespoke CRM systems to manage customer relationships uniquely tailored to a business’s workflow, developing specialized e-commerce platforms that support a company’s specific sales model, or designing unique data analysis tools that align with an organization’s data strategy.",
      },
      {
        heading: "Tailored Business Intelligence Tools",
        text: "Other use cases involve automating business processes through custom ERP systems, developing mobile apps that offer unique customer experiences, or creating IoT applications that manage smart devices in innovative ways. These custom solutions can drive efficiency, enhance customer satisfaction, and provide strategic advantage, making them indispensable tools for businesses seeking to optimize their operations and offer unique value propositions.",
      },
    ],
  },
  {
    title: "The Necessity of Custom Software Development",
    content: [
      {
        heading: "Keeping Up with the Competition",
        text: "Custom software enables companies to differentiate themselves in the market. Unlike off-the-shelf solutions, custom applications align directly with business goals, allowing for better performance, enhanced productivity, and improved user satisfaction.",
      },
      {
        text: "Other use cases involve automating business processes through custom ERP systems, developing mobile apps that offer unique customer experiences, or creating IoT applications that manage smart devices in innovative ways. These custom solutions can drive efficiency, enhance customer satisfaction, and provide strategic advantage, making them indispensable tools for businesses seeking to optimize their operations and offer unique value propositions.",
      },
    ],
  },
  {
    title: "Who Needs Custom Software Development",
    content: [
      {
        heading: "Starts & Enterprise Alike",
        text: "Startups and scaling companies often require custom software to handle their unique processes and customer demands. Tailored systems can adapt to business evolution and offer long-term cost efficiency.",
      },
      { 
        text: "Other use cases involve automating business processes through custom ERP systems, developing mobile apps that offer unique customer experiences, or creating IoT applications that manage smart devices in innovative ways. These custom solutions can drive efficiency, enhance customer satisfaction, and provide strategic advantage, making them indispensable tools for businesses seeking to optimize their operations and offer unique value propositions.",
      },
    ],
  },
];

const CustomAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="insights-section">
      <h2 className="main-heading">Things to Know About Custom Software Development</h2>
      <p className="customsub-heading">
        Tackling a custom software development project is no small task. Should you be looking for a better starting point, we suggest checking out these quick insights below!
      </p>
      <div className="insight-container">
        <div className="left-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="right-content">
          {tabs[activeIndex].content.map((item, i) => (
            <div key={i} className="content-block">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomAbout;
