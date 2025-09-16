"use client";
import React, { useState } from "react";
import "./custombenefits.css";

const contentData = [
  {
    title: "Functionality tailored to your needs",
    text: "Bespoke solutions are designed and developed to meet your unique needs, contexts, and goals, from the feature set to the interface, user flows, security, and integrations. As a result, this gives you unparalleled flexibility in designing the solution.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749624005/Custom-Software-Development-Reap-the-benefits-Functionality-tailored_shqtwo.jpg", // Replace with your actual image path
  },
  {
    title: "Lower TCO in the long run",
    text: "Custom software provides long-term cost efficiency by eliminating unnecessary features and licensing fees, reducing operational overhead.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749624005/Custom-Software-Development-Reap-the-benefits-Functionality-tailored_shqtwo.jpg",
  },
  {
    title: "Unbound innovation potential",
    text: "Unlock limitless possibilities tailored to your vision, enabling unique features that set your solution apart from the competition.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749624005/Custom-Software-Development-Reap-the-benefits-Functionality-tailored_shqtwo.jpg",
  },
  {
    title: "Advanced security",
    text: "Tailored solutions integrate specific security protocols based on your business logic, reducing vulnerabilities found in off-the-shelf products.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749624005/Custom-Software-Development-Reap-the-benefits-Functionality-tailored_shqtwo.jpg",
  },
  {
    title: "Total compliance",
    text: "Ensure full regulatory compliance through custom development designed to meet specific legal and industry standards.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749624005/Custom-Software-Development-Reap-the-benefits-Functionality-tailored_shqtwo.jpg",
  },
  {
    title: "Seamless integration",
    text: "Custom solutions are built to fit perfectly with your existing workflows and third-party systems, ensuring smooth operations.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749624005/Custom-Software-Development-Reap-the-benefits-Functionality-tailored_shqtwo.jpg",
  },
];

const CustomBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <div className="custom-benefits-section">
      <h2 className="main-heading">
        Reap the benefits of custom software development with <br/> Kushel Digi Solutions
      </h2>

      <div className="benefits-container">
        <div className="benefits-left">
          <div className="benefit-items">
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`benefit-title ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
                {index === activeIndex && <p className="benefit-description">{item.text}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-right">
          <img src={contentData[activeIndex].image} alt="Benefit" />
        </div>
      </div>
    </div>
  );
};

export default CustomBenefits;
