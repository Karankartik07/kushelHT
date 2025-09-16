'use client'
import React from "react";
import "./BigBanner7.css";

const Result = () => {
  return (
    <div className="ResultBccom">
      <div className="text-contentBccom">
        <h3 className="subtitleBccom secondary-heading">why bigcommerce</h3>
        <h4 className="titlebccom primary-heading">Easier, Faster & More Profitable with Bigcommerce Solutions </h4>
        <p className="descriptionbbcom">
        Kushel Digi emerged as a trusted partner for creating robust, scalable eCommerce platforms. Bigcommerce enables our expert team to design and develop stores that are both visually stunning and highly functional. 
        </p>
      </div>
      
   
      <div className="features-containerbbcom">
        {/* Image */}
        <div className="image-containerbbcom">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744458338/ChatGPT_Image_Apr_12_2025_04_39_31_PM_1_uomphh.png"
            alt="BigCommerce Features"
            className="feature-imagebbcom"
          />
        </div>
        
        {/* Features */}
        <div className="features-gridbbcom">
          <div className="feature-itembbcom">
            <span className="iconbbcom">
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744030638/Fast-Performance_posja6.png" alt="card"/>
            </span>
            <p>Fast Performance</p>
          </div>
          <div className="feature-itembbcom" id="feature-itembbUnique">
            <span className="iconbbcom">
            {/* <BsGraphUpArrow/> */}
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744030638/scalable-and-secure_xl4qxf.png" alt="card"/>
            </span>
            <p>Scalable with Growth</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744030638/Seamless-Integration_nn18kj.png" alt="card"/>
            </span>
            <p>Seamless Integration</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744030638/Secure-_-Reliable_h5ayt7.png" alt="card"/>
            </span>
            <p>Secure & Reliable</p>
          </div>

          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744030639/user-friendly-interface_vhmicu.png" alt="card"/>
            </span>
            <p>user-friendly interface</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            {/* <FaChalkboardUser/> */}
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744030638/Scalable-with-Growth_tagunp.png" alt="card"/>
            </span>
            <p>scalable and secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
