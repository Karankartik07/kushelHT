"use client";
import React, { useState } from "react";
import "./design.css";

const designData = {
  paragraph: `At Kushel Digi Solutions, we do not only engage in design; rather, we develop experiences. With over 15 years of experience in the industry, we have developed a streamlined and effective design process where every critical detail is captured from the wireframe stage to the final delivery.`,
  columns: [
    {
      title: "User Experience (UX) Research",
      items: [
      "  PRODUCT STRATEGY",

"MARKET & USER ANALYSIS",

"CREATIVE IDEATION"

      ],
    },
    {
      title: "UX Design & Flow Mapping",
      items: ["PROTOTYPING", "FEEDBACK INTEGRATION", "WIREFRAMING"],
    },
    {
      title: "UI DESIGN",
      items: ["MOODBOARDS", "CONCEPT DEVELOPMENT", "FINAL VISUAL DESIGN"],
    },
    {
      title: "DELIVERY",
      items: ["POST-LAUNCH SUPPORT"],
    },
  ],
};

const developmentData = {
  paragraph: `Our development process emphasizes quality and clean architecture, so the code is always scalable. We observe industry best practices during testing phases and ongoing maintenance tasks.`,
  columns: [
    {
      title: "ARCHITECTURE",
      items: ["Code Architecture", "API Integration", "Security Reviews"],
    },
    {
      title: "DEVELOPMENT",
      items: ["Frontend Dev", "Backend Eng", "Database Manage"],
    },
    {
      title: "QUALITY ASSURANCE",
      items: ["Code Validation", "Function Checks", "Bugs Resolution"],
    },
    {
      title: "LAUNCH & BEYOND",
      items: [
        "CI/CD Integration",
        "Real-Time Monitoring",
        "Post-Launch Support",
      ],
    },
  ],
};

const DesignDevelopment = () => {
  const [active, setActive] = useState("design");
  const current = active === "design" ? designData : developmentData;

  return (
    <section className="ecom-process-section">
      <div className="ecom-process-toggle">
        <span
          className={active === "design" ? "active" : ""}
          onClick={() => setActive("design")}
        >
          DESIGN
        </span>
        <div
          className={`switch ${active === "development" ? "active" : ""}`}
          onClick={() =>
            setActive(active === "design" ? "development" : "design")
          }
        >
          <div
            className={`switch-circle ${
              active === "development" ? "right" : ""
            }`}
          ></div>
        </div>

        <span
          className={active === "development" ? "active" : ""}
          onClick={() => setActive("development")}
        >
          DEVELOPMENT
        </span>
      </div>

      <div className="ecom-process-divider"></div>

      <div className="ecom-process-row">
        <div className="ecom-process-description">{current.paragraph}</div>

        <div className="ecom-process-columns">
          {current.columns.map((col, i) => (
            <div className="ecom-process-column" key={i}>
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignDevelopment;
