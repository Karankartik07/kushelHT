"use client";
import React, { useState, useEffect } from "react";
import "./denmarksec.css";

function BelgiumSec12() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".contttent-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -22% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("form-section");
    if (formElement) {
      const yOffset = -50;
      const y =
        formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section className="sec---abc">
      <div className="headdd-div">
        <div className="heaaader-content">
          <h3 className="primary-heading">
            Ecommerce Web Development For Every Business Model
          </h3>
          <h6 className="secondary-heading">
            We develop high-performance, scalable ecommerce websites that
            accommodate any business model for selling to customers or managing
            suppliers. Gain access to technology tailored to your goals. .
          </h6>
          <h5>Business Models We Specialise In</h5>
        </div>
        <div className="linkss">
          <ul>
            <li
              onClick={() => scrollToSection("b2c")}
              className={activeSection === "b2c" ? "active" : ""}
            >
              B2C
            </li>
            <li
              onClick={() => scrollToSection("b2b")}
              className={activeSection === "b2b" ? "active" : ""}
            >
              B2B
            </li>
            <li
              onClick={() => scrollToSection("multi-vendors")}
              className={activeSection === "multi-vendors" ? "active" : ""}
            >
              Multi Vendors
            </li>
            <li
              onClick={() => scrollToSection("d2c")}
              className={activeSection === "d2c" ? "active" : ""}
            >
              D2C
            </li>
          </ul>
        </div>
        <hr className="hrEcommm" />
      </div>

      <div id="b2c" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "b2c" ? "underline" : ""}>B2C</h3>
          <p>
            End-users can shop directly via streamlined shopping interfaces and
            automated backend systems for better engagement and satisfaction
            during product utilization and purchase. All steps are enhanced by
            us, ensuring higher customer satisfaction alongside conversions.
          </p>
          <a href="#form-section">
            <button className="button-b2" onClick={() => scrollToForm()}>
              Launch your B2C store now
            </button>
          </a>
        </div>
        <div className="imgg">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744005444/indrpal-images-5_zvtdky.png"
            alt="B2C"
          />
        </div>
      </div>

      <div id="b2b" className="contttent-wrapper">
        <div className="imgg-2nd">
          <img
            src="https://res.cloudinary.com/dgif730br/image/upload/v1743686387/asit-sir-4_xa7bco.jpg"
            alt="B2B"
          />
        </div>
        <div className="ecom-content">
          <h3 className={activeSection === "b2b" ? "underline" : ""}>B2B</h3>
          <p>
            Optimize the dealing funnel while enhancing operational efficiency
            through bulk order streamlining, tiered pricing management, and
            automated backend dealer portal support with DaaS built to enhance
            your operations. Robust B2B ecommerce is at your service.
          </p>
          <a href="#form-section">
            <button className="button-b2" onClick={() => scrollToForm()}>
              Launch your B2B store now
            </button>
          </a>
        </div>
      </div>

      <div id="multi-vendors" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "multi-vendors" ? "underline" : ""}>
            Multi Vendors
          </h3>
          <p>
            Design a controlled-admin ecology from which sellers can register,
            list items, and make sales while guaranteeing ecosystem-wide
            security. In essence, design the Amazon-style marketplace you have
            always envisioned, allowing multiple vendors.
          </p>
          <a href="#form-section">
            <button className="button-b2" onClick={() => scrollToForm()}>
              DEVELOP MULTI-VENDOR ECOMMERCE
            </button>
          </a>
        </div>
        <div className="imgg">
          <img
            src="https://res.cloudinary.com/dgif730br/image/upload/v1743686387/asit-sir-1_xchvkj.jpg"
            alt="Multi Vendors"
          />
        </div>
      </div>

      <div id="d2c" className="contttent-wrapper">
        <div className="imgg-2nd">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210327/t1_ueq82s.webp"
            alt="D2C"
          />
        </div>
        <div className="ecom-content">
          <h3 className={activeSection === "d2c" ? "underline" : ""}>D2C </h3>
          <p>
            Shape seamless relationships with clients via D2C sleek websites,
            controlling every detail from subscriptions to storytelling on
            reaching them, whilst boosting connection without mediators for
            conversion.
          </p>
          <a href="#form-section" onClick={() => scrollToForm()}>
            {" "}
            <button className="button-b2">DEVELOP D2C ECOMMERCE</button>{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default BelgiumSec12;
