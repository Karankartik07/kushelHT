"use client"
import React, { useState, useEffect } from "react";
import './delhisec.css';

function DelhiSec12() {
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
          <h3 className="primary-heading">Need Scalable, Custom E-Commerce Development Services for your Business Model?</h3>
          <h6 className="secondary-heading">Kushel Digi Solutions provides customized ecommerce solutions that grow with you and give you long-lasting results, whether you're just starting or operating a big business.</h6>
          {/* <h5>Business models, we deliver for</h5> */}
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
          <p>Our ecommerce development services assist B2C businesses build online shops that load quickly, work well on mobile devices, have easy navigation, safe payments, and a good chance of turning visitors into customers.</p>
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
          <p>We make ecommerce websites for B2B organizations that make it easier for customers to purchase by adding features like bulk ordering, bespoke pricing, and ERP connections.</p>
        <a href="#form-section">
          <button className="button-b2" onClick={() => scrollToForm()}>DEVELOP B2B ECOMMERCE</button>
          </a>
        </div>
      </div>

      <div id="multi-vendors" className="contttent-wrapper">
        <div className="ecom-content">
          <h3 className={activeSection === "multi-vendors" ? "underline" : ""}>Marketplace with Multiple Vendors</h3>
          <p>With our bespoke ecommerce development, you may start your marketplace with vendor dashboards, commission monitoring, product approval, and safe administration of many sellers.</p>
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
          <p>As a top ecommerce development firm, we help D2C companies connect with consumers directly by creating online stores that are tailored to each customer, can grow with the business, and are designed to get people to buy.</p>
          <a href="#form-section" onClick={() => scrollToForm()}> <button className="button-b2">DEVELOP D2C ECOMMERCE</button> </a>
        </div>
      </div>
    </section>
  );
}

export default DelhiSec12;