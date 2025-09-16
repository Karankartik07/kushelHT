'use client';
import React from 'react';
import './ctadelhi.css';
import { HiArrowSmallRight } from "react-icons/hi2";


const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-heading">Let’s Build Something Exceptional Together</h2>
        </div>
        <div className="cta-right">
          <button className="cta-button">
          Get Your Free Quote Today<span className="arrow"><HiArrowSmallRight /></span>
          </button>
        </div>
      </div>
      <hr className="cta-divider" />
      <p className="cta-subtitle">
      Your online success starts here. Connect with us and let’s create an ecommerce experience that sets your brand apart
      </p>
    </section>
  );
};

export default CallToAction;
