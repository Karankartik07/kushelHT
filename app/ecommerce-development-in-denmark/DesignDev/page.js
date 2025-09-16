"use client";
import React, { useState } from "react";
import "./design.css";

const designData = {
  paragraph: `At Kushel Digi Solutions, we have been in the business for more than 15 years and have created a simplified and successful design approach that captures every important aspect from the wireframe stage to the final delivery. `,
  columns: [
    {
      title: "UX Research",
      items: [
        "   PRODUCT PLANNING",
        "MARKET & AUDIENCE ANALYSIS",
        " CREATIVE CONCEPTS",
      ],
    },
    {
      title: "UX DESIGN",
      items: [
        "INTERACTIVE PROTOTYPING",
        "INCORPORATING FEEDBACK",
        "DETAILED WIREFRAMING",
      ],
    },
    {
      title: "UI DESIGN",
      items: [
        "INSPIRING MOODBOARDS",
        "CREATIVE DEVELOPMENT",
        "REFINED VISUAL DESIGN",
      ],
    },
    {
      title: "SEAMLESS DELIVERY",
      items: ["POST-LAUNCH SUPPORT"],
    },
  ],
};

const developmentData = {
  paragraph: `At Kushel Digi Solutions, we focus on quality and clear architecture in our development process, which ensures that the code can always be scaled. During testing and continuous maintenance, we use the finest procedures in the industry. `,
  columns: [
    {
      title: "ARCHITECTURE",
      items: ["Code Structure", "API Integration", " Security Checks"],
    },
    {
      title: "DEVELOPMENT",
      items: ["Frontend ", "Backend ", "Database"],
    },
    {
      title: "QUALITY TEST",
      items: ["Code Check", "Function Test", "Bug Fix"],
    },
    {
      title: "Launch & Growth",
      items: [" CI/CD", "Monitoring", "Post Launch Support"],
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
