"use client"
import React from 'react';
import './telephon.css';
import { FaCheck } from 'react-icons/fa'; 

const Telephonic = () => {
  return (
    <section className="telephonics-section">
      
      <div className="telephonics-content">
        <h2 className="telephonics-title">
        Go BigCommerce Headless with Kushel Digi Solutions 


        </h2>

        <ul className="telephonics-list">
          <li className="telephonics-list-item">
            <span className="telephonics-icon"><FaCheck /></span>
            <div className="telephonics-text">
              <h3 className="telephonics-subtitle">Certified BigCommerce Partner
              </h3>
              <p className="telephonics-description">
              As an official Certified BigCommerce Partner, we provide platform-approved credibility, best practices, and proven success in implementing headless commerce solutions.
              Choosing us means getting  access to BigCommerce’s latest tools and innovations. 


              </p>
            </div>
          </li>
          <li className="telephonics-list-item">
            <span className="telephonics-icon"><FaCheck /></span>
            <div className="telephonics-text">
              <h3 className="telephonics-subtitle">Expertise You Can Trust
              </h3>
              <p className="telephonics-description">
              With more than 8 years of experience in BigCommerce development, our team is technically capable to help you leverage headless commerce. We guide you from design to deployment to unlock the full potential of your ecommerce business.
              </p>
            </div>
          </li>
          <li className="telephonics-list-item">
            <span className="telephonics-icon"><FaCheck /></span>
            <div className="telephonics-text">
              <h3 className="telephonics-subtitle">Seamless Integrations 

              </h3>
              <p className="telephonics-description">
              We excel in creating robust, scalable solutions that integrate seamlessly with your current tech stack. It doesn't matter whether it’s CMS, CRMs, or third-party platforms, our API-first approach guarantees smooth data flow and future-ready scalability. 
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="telephonics-image-wrapper">
        <img
          className="telephonics-image"
          src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1745652863/rajat-badhu_2_vtdqcr.png"
          alt="Integration Visual"
        />
      </div>
    
    </section>
  );
};

export default Telephonic;
