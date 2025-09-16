"use client"
import React from "react";
import "./Section8.css";

const Section8 = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "Kushel Digi Solutions believes that innovation is the driving force behind growth. Our team constantly explores new technologies, tools, and creative ideas to deliver smarter and more effective solutions. Our main focus is to streamline operations, enhance user experience to give your business an extra edge.",
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744262112/innovation_lvddoc.png",
      className: "innovation-creativity",
    },
    {
      title: "Customer First",
      description:
        "At the center of everything we do is our commitment to our clients. We invest time to hear your vision, your challenges, and your business objectives so that we can design solutions that really suit your purposes. For us, your success is paramount, and we ensure to make every effort to establish long-term relationships founded on trust, transparency, and maximum satisfaction.",
    img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744262112/customer-first_jzvy5m.png",
      className: "customer-first",
    },
    {
      title: "Transparency",
      description:
        "We believe in smooth communication and honesty with our customers. From project initiation to delivery, we keep you updated at each step — from providing progress reports, timelines to feedback loops. It is just a transparent and collaborative approach based on mutual understanding.",
      img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744262113/Transprancy_ehexfu.png",
      className: "transparency",
    },
    {
      title: "Quality",
      description:
        "Since the very beginning, we have cherished quality over everything else. That’s why our experts implement stringent QA strategies for every project we work on. From prototype designing to campaign launch, we thrive for optimal performance and maximum precision. This is how we ensure our digital marketing solutions can cater to all your business requirements and future goals.",
      img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744262112/Quality_prwocp.png",
      className: "quality-excellence",
    },
    {
      title: "Teamwork",
      description:
        "We think that wonderful things occur when people unite. Our staff works in a spirit of collaboration, embracing each idea and input. We also collaborate closely with our clients, viewing them as an essential component of the process. In unison, we bring ideas to life and transform your visions into actual outcomes.",
      img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744262112/teammates_w2daml.png",
      className: "collaboration-teamwork",
    },
    {
      title: "Commitment",
      description:
        "We're dedicated  to your project, to your deadlines, and to your success. Our staff is consistent, passionate, and reliable in every task. We don't merely provide services, we establish trust through our commitment and follow-through on every promise we make.",
      img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744262112/commited_vhzoq0.png",
      className: "honest-ethical",
    },
  ];

  return (
  <section className="coreMainConta">
      <div className="core-values-container">
       <p className="corepara">CORE VALUES</p>
      <h3 className="core-values-title">Our Values Define Us</h3>
      <div className="core-values-grid">
        {values.map((value, index) => (
          <div key={index} className={`core-value-card ${value.className}`}>
            <div className="icon-title-wrapper">
              <span className="core-value-icon">
                <img loading="lazy" src={value.img} alt="core-icons"/>
              </span>
              <h3 className="core-value-heading">{value.title}</h3>
             
            </div>
            <p className="core-value-description">{value.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Section8;
