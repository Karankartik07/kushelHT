'use client';
import React from 'react';
import './ctabelgium.css';
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRouter } from 'next/navigation';


const CallToAction = () => {
    const navigate = useRouter();
  
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-heading">Let’s Create Something Amazing Together!</h2>
        </div>
        <div className="cta-right">
          <button onClick={() => navigate.push('/contact-us')}  className="cta-button">
          Get Your Free Quote Today <span className="arrow"><HiArrowSmallRight /></span>
          </button>
        </div>
      </div>
      <hr className="cta-divider" />
      <p className="cta-subtitle">
     Ready to kickstart your online success? Let’s build an ecommerce experience that makes your brand truly stand out.
      </p>
    </section>
  );
};

export default CallToAction;
