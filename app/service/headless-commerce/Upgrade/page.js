"use client"
import React from "react";
import "./upgrade.css";

const updates = [
  {
    title: "Frontend Flexibility",
    text1: `Most important advantage of headless commerce is that the frontend and backend are decoupled. It offers greater freedom to design and customize the user interface on various platforms. `,
    text2: [
      "Complete creative freedom for UI/UX design.",
      "Design Custom interfaces for web, mobile, IoT, and more.",
      "Break past backend limitations in design and layout."
    ],
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109760/Group_24_hmi5d8.png"
  },
  {
    title: "Omnichannel Experience",
    text1: `Headless Commerce provides unified and customized experiences at all customer touchpoints through a single backend for your website, mobile applications and even the latest technologies like kiosks and voice assistants.`,
    text2: [
      "Seamless integration for multiple platforms.",
      "Integrated customer experiences across websites, apps, and stores.",
      "Tailor experiences for each device from one system."
    ],
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109761/Group_30_xop3om.png"
  },
  {
    title: "API-Driven Architecture",
    text1: `The API-first approach strategy allows easy integration of third-party services, with the freedom to link your commerce engine to any frontend tooling or external software.`,
    text2: [
      "Easy integration with third-party systems (e.g. payment gateways, CRM).",
      "Scale and adapt your tech stack without limitations.",
      "Faster development cycles with API connectivity."
    ],
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109448/Group_54_wvstw9.png"
  },
  {
    title: " Faster Time-to-Market",
    text1: `As the frontend and backend decouples in headless commerce, it allows your teams to work faster and release updates without disruption. It ultimately speeds up your ability to respond to market changes. `,
    text2: [
      "Faster updates and feature launches.",
      "No need to wait for backend changes to adjust the frontend",
      "Scale rapidly with minimal downtime and reduced dependencies."
    ],
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109852/Group_53_1_or6i8f.png"
  }
];

const UpdateSection = () => {
  return (
    <section className="updatee-section">
      <div className="update-container">

        <div className="headless-intro">
          <h3>What is Headless Development?</h3>
          <p>
            Headless commerce is a modern eCommerce solution that separates the frontend from the backend. The decoupled design makes it easier for developers to build and personalize the customer experience without disrupting the backend systems
          </p>
        </div>

        {updates.map((update, index) => (
          <div
            className={`update-section ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="update-text">
              <h3>{update.title}</h3>
              <p>{update.text1}</p>

              {update.text2?.map((content, i) => (
                <div key={i} className="update-ul">
                 <ul className="ulUpdate">
                 <li>{content}</li>
                 </ul>
                </div>
              ))}

              <p>{update.text3}</p>
            </div>
            <div className="update-image">
              <div className="update-card">
                <img src={update.img} alt="Product" className="product-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpdateSection;
