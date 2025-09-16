"use client"
import React from 'react';
import './ContactFooter.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

const DevPartnerSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contactForm');
    if (formSection) {
      const yOffset = -174; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <section className="dev-partner-section">
    <div className="devPartnerDiv">

    <div className="dev-partner-container">
        <h3 className="dev-partner-heading">
        Looking for an Expert eCommerce Partner?


        </h3>
      
       <p className="dev-partner-subtext">
       Kushel Digi Solutions is here for you to deliver your dream project and that's too with an affordable cost.
        </p>
        </div>
        <div className="dev-partner">
        <button className="dev-partner-button" onClick={scrollToForm}>
         Book A Call <FaLongArrowAltRight/>     
        </button>
     
      </div>
    </div>
    </section>
  );
};

export default DevPartnerSection;