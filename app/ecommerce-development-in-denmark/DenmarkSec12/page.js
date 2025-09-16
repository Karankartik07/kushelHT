"use client"
import React, { useState, useEffect } from "react";
import './denmarksec.css';

function DenmarkSec12() {
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
          <h3 className="primary-heading">Do you Need Custom E-Commerce Solutions that can grow with you?</h3>
          <h6 className="secondary-heading">We at Kushel Digi Solutions are ready to help, whether you're starting a new website or moving an existing one. Everything is handled with ease by our knowledgeable staff. Prepare to scale and provide tangible outcomes.</h6>
          <h5>Business Models We Specialise In</h5>
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
          <p>We build user-friendly, quick, and seamless shopfronts that make it simple to engage with your clients. Our third-party integration and customised design provide a flawless client experience.</p>
         <a href="#form-section">
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
          <p>We streamline complicated product listings, bulk ordering, and bespoke pricing to assist your distributors, suppliers, and companies so that they may easily and fuss-free fulfil their requests.</p>
        <a href="#form-section">
          <button className="button-b2" onClick={() => scrollToForm()}>DEVELOP B2B ECOMMERCE</button>
          </a>
        </div>
      </div>

      <div id="multi-vendors" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "multi-vendors" ? "underline" : ""}>Multi Vendors</h3>
          <p>Do you want to create a website similar to Etsy or Amazon? We are available to you. We make easy shopping, secure onboarding, and centralised control.</p>
          <a href="#form-section">
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
          <p>Eliminate the intermediary, sell to clients directly, and establish your brand. Real conversions are generated by our skilled team's fast, conversion-optimised D2C shops.</p>
          <a href="#form-section" onClick={() => scrollToForm()}> <button className="button-b2">DEVELOP D2C ECOMMERCE</button> </a>
        </div>
      </div>
    </section>
  );
}

export default DenmarkSec12;