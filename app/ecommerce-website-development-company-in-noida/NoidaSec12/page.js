"use client";
import React, { useState, useEffect } from "react";
import "./londonsec.css";

function NoidaSec12() {
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
            Need Custom E-Commerce Solutions That Grow With You?
          </h3>
          <h6 className="secondary-heading">
            As a trusted ecommerce website development company in Noida, we at
            Kushel Digi Solutions build flexible, high-performance online stores
            capable of growing your business, whether a startup or an
            enterprise.
          </h6>
          <h5>Business Models We Support</h5>
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
            Your online store will be simple to use and will interact with your
            customers on a different level. With our ecommerce development
            services, your customers can navigate through the store with ease
            using secure payments for any transaction while enjoying effortless
            shopping throughout the entire process.
          </p>
          <a href="#form-section">
            <button className="button-b2" onClick={() => scrollToForm()}>
              DEVELOP B2C ECOMMERCE
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
            We design highly functional B2B ecommerce platforms and multi-vendor
            ecommerce websites in Noida, equipped with advanced capabilities
            like bulk purchasing, specialized price schemes, and sophisticated
            account control, which simplify transactions between businesses,
            streamline operations, and boost productivity.
          </p>
          <a href="#form-section">
            <button className="button-b2" onClick={() => scrollToForm()}>
              DEVELOP B2B ECOMMERCE
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
            Now it is easy to set up your internet marketplace as we build
            custom multi-vendor ecommerce systems where numerous merchants can
            sign up, upload their merchandise, and trade everything under your
            brand.
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
            Through high-converting ecommerce websites built for brands, dealing
            DTC model helps in building middle-man-free relations with
            consumers, strengthening brand allegiance, making direct interaction
            seamless, turning shoppers into loyal customers boosting profits.
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

export default NoidaSec12;
