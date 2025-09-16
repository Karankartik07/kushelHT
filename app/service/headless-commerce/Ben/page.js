"use client"
import React from "react";
import "./ben.css"; 

const BenSection = () => {
  return (
    <section className="ben-section">
    <div className="ben-content">
      <h2>
        E-Commerce is going <span className="ben-highlight">headless...</span>
      </h2>
      <div className="ben-icons">
        <div className="ben-icon">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743786453/Adobe-Commerce-Cloud-Partner-Logo_id4d55.png" alt="Adobe Commerce Cloud" />
        
        </div>
        <div className="ben-icon">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743786452/BigCommerce-Partner-Logo_vquwfe.png" alt="BigCommerce" />
    
        </div>
        <div className="ben-icon">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743786788/Shopify-Partner-Logo_spo8e0.png" alt="Shopify" />
       
        </div>
        <div className="ben-icon">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743786453/Sales-Force-Partner-Logo_c3ixm6.png" alt="Salesforce" />
     
        </div>
        <div className="ben-icon">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743786453/Commerce-Tools-Partner-Logo_ue9yau.png" alt="Commercetools" />
        
        </div>
      </div>
    </div>
  </section>
  );
};

export default BenSection;
