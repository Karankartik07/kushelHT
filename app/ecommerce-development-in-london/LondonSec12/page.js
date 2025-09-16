"use client"
import React, { useState, useEffect } from "react";
import './londonsec.css';

function LondonSec12() {
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
      behavior: "smooth"
    });
  };
 
  const scrollToForm = () => {
    const formElement = document.getElementById("form-section");
    if (formElement) {
      const yOffset = -50; 
      const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section className="sec---abc">
      <div className="headdd-div">
        <div className="heaaader-content">
          <h3 className="primary-heading">Looking for Custom E-Commerce Solutions That Scale?</h3>
          <h6 className="secondary-heading">Whether you're launching your first product or managing a global firm, our tailored ecommerce systems are designed to scale alongside your goals. At KushelDigi, we craft smooth, high-speed online stores that deliver measurable results and sustain growth over time.</h6>
          <h5>Business models, we deliver for</h5>
        </div>
        <div className="linkss">
          <ul>
            <li onClick={() => scrollToSection("b2c")} className={activeSection === "b2c" ? "active" : ""}>B2C</li>
            <li onClick={() => scrollToSection("b2b")} className={activeSection === "b2b" ? "active" : ""}>B2B</li>
            <li onClick={() => scrollToSection("multi-vendors")} className={activeSection === "multi-vendors" ? "active" : ""}>Multi Vendors</li>
            <li onClick={() => scrollToSection("d2c")} className={activeSection === "d2c" ? "active" : ""}>D2C</li>
          </ul>
        </div>
        <hr className="hrEcommm" />
      </div>

      <div id="b2c" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "b2c" ? "underline" : ""}>B2C</h3>
          <p>Reach everyday shoppers with clean, flexible, and mobile-ready stores. Our B2C sites emphasize fast load times, high engagement, and clear paths from booking to browsing.</p>
         <a  className="ext-btn-b2b" href="#form-section">
         <button className="button-b2" onClick={() => scrollToForm()}>DEVELOP B2C ECOMMERCE</button>
         </a>
        </div>
        <div className="imgg">
          <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744005444/indrpal-images-5_zvtdky.png" alt="B2C" />
        </div>
      </div>

      <div id="b2b" className="contttent-wrapper">
        <div className="imgg-2nd">
          <img src="https://res.cloudinary.com/dgif730br/image/upload/v1743686387/asit-sir-4_xa7bco.jpg" alt="B2B" />
        </div>
        <div className="ecom-content">
          <h3 className={activeSection === "b2b" ? "underline" : ""}>B2B</h3>
          <p>Wholesale and bulk-selling outfits face distinct challenges, and we know it. Our B2B tools streamline bulk pricing, specialized catalogs, and account-specific ordering, so fashion distributors and retailers complete orders quickly and with less fuss.</p>
        <a  className="ext-btn-b2b" href="#form-section">
          <button className="button-b2" onClick={() => scrollToForm()}>DEVELOP B2B ECOMMERCE</button>
          </a>
        </div>
      </div>

      <div id="multi-vendors" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "multi-vendors" ? "underline" : ""}>Multi Vendors</h3>
          <p>Want to host several sellers under one roof? We create **multi-vendor marketplaces** that bundle centralized control, safe onboarding, and simple shopping, making them ideal for healthcare goods or medical supplies.</p>
          <a  className="ext-btn-b2b" href="#form-section">
          <button className="button-b2" onClick={() => scrollToForm()}>DEVELOP MULTI-VENDOR ECOMMERCE</button>
          </a>
        </div>
        <div className="imgg">
          <img src="https://res.cloudinary.com/dgif730br/image/upload/v1743686387/asit-sir-1_xchvkj.jpg" alt="Multi Vendors" />
        </div>
      </div>

      <div id="d2c" className="contttent-wrapper">
        <div className="imgg-2nd">
          <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210327/t1_ueq82s.webp" alt="D2C" />
        </div>
        <div className="ecom-content">
          <h3 className={activeSection === "d2c" ? "underline" : ""}>D2C </h3>
          <p>Help your brand talk straight to customers and slice through the middleman. Our D2C platforms power tailored shopping journeys, loyalty rewards, and secure checkouts that inspire trust and boost earnings.</p>
          <a  className="ext-btn-b2b" href="#form-section" onClick={() => scrollToForm()}> <button className="button-b2">DEVELOP D2C ECOMMERCE</button> </a>
        </div>
      </div>
    </section>
  );
}

export default LondonSec12;