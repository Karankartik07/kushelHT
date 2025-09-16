"use client"
import React, { useState, useEffect } from "react";
import './Banner11.css';

function Banner12() {
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
          <h3 className="primary-heading">Expert Ecommerce Solutions for Modern Businesses</h3>
          <h6 className="secondary-heading">Doesn’t matter whether you're a small business or a large enterprise, our custom ecommerce solutions are designed to grow with you. We believe in delivering seamless, high-performing online stores that drive results.</h6>
          <h5>Business Models We Deliver For</h5>
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
          <p>Our experts at Kushel Digi have long years of experience in designing ecommerce solutions suited for wholesale, bulk ordering, and corporate transactions. We optimize B2B sales channels for higher efficiency.</p>
         <a className="ext-btn-b2b" href="#form-section">
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
          <p>Kushel Digi has expertise to deliver engaging, scalable, and user-friendly ecommerce solutions that connect businesses with end customers. Our team is committed to help brands grow their online presence and boost sales.</p>
        <a className="ext-btn-b2b" href="#form-section">
          <button className="button-b2" onClick={() => scrollToForm()}>DEVELOP B2B ECOMMERCE</button>
          </a>
        </div>
      </div>

      <div id="multi-vendors" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "multi-vendors" ? "underline" : ""}>Multi Vendors</h3>
          <p>We have delivered various marketplace solutions that allow multiple sellers to showcase and sell their products on a single platform. We ensure smooth vendor management, secure transactions, and excellent shopping experience for customers.</p>
          <a className="ext-btn-b2b" href="#form-section">
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
          <p>We have been helping brands to establish a direct connection with consumers by removing intermediaries. We create personalized ecommerce experiences to enhance brand loyalty and maximize profit.</p>
          <a className="ext-btn-b2b" href="#form-section" onClick={() => scrollToForm()}> <button className="button-b2">DEVELOP D2C ECOMMERCE</button> </a>
        </div>
      </div>
    </section>
  );
}

export default Banner12;