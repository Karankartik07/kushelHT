"use client"
import React from 'react';
import './partner.css';

const Partner = () => {
  return (
    <section className="partnerss">
      <div className="partnerss-wrapper">
        
    
        <div className="partnerss-left">
          <div className="partnerss-heading">
            <h2>
              <span className="highlight">Certified BigCommerce Partner
              </span>  Bigger Results. <br />
              
            </h2>
          </div>

          <div className="partnerss-description">
            <p>
            As a Certified BigCommerce Partner, Kushel Digi Solutions contributes proven expertise, strategic knowledge, and results-oriented approach to each ecommerce project. Our certification is more than a badge- it's a commitment to quality, innovation, and in-depth technical expertise. From seamless integrations to bespoke storefronts built on headless architecture, we utilize the entire capability of BigCommerce to develop scalable, high-performance ecommerce solutions aligned with your business objectives. Partner with us and experience ecommerce excellence, supported by staff that's formally certified and ardently dedicated to your success.

            </p>
           
            {/* <p>
              We are not just a vendor; we are a dedicated BigCommerce headless company investing in your success. Our approach spans from initial idea validation and requirement gathering to necessary maintenance once your store goes live or scales.
            </p> */}
          </div>
        </div>

  
  
        <div className="partnerss-right">
          <div className="partnerss-image-wrapper">
            <img
              src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1745659389/certified-image_go19jz.png"
              alt="Certified BigCommerce Partner"
              className="partnerss-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partner;
