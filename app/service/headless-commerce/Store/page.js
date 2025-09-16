"use client"
import React from 'react';
import './store.css';

const EshkaFeatures = () => {
  return (
    <section className="eshka-section">
      <div className="eshka-container">
        {/* Heading */}
      
        <h2>...and here's why you should opt for a headless storefront:</h2>

        {/* Features Row */}
        <div className="eshka-features-row">
          {/* Feature 1 */}
          <div className="eshka-feature-box">
            <div className="eshka-feature-icon">
              <img
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743790373/Total-website-control-Icon_1_s4t7ns.png"
                alt="Total website control icon"
              />
            </div>
            <h3>Total website control</h3>
            <p>
              Create unique, personalized customer journeys without worrying 
              about limitations on the front- or back-end side.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="eshka-feature-box">
            <div className="eshka-feature-icon">
              <img
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743790373/Total-website-control-Icon_1_s4t7ns.png"
                alt="Freedom from the IT icon"
              />
            </div>
            <h3>Freedom from the IT</h3>
            <p>
              Forget about back-end issues affecting front-end with a decoupled 
              architecture of a headless commerce software.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="eshka-feature-box">
            <div className="eshka-feature-icon">
              <img
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743790373/Total-website-control-Icon_1_s4t7ns.png"
                alt="Omnichannel strategy icon"
              />
            </div>
            <h3>Omnichannel strategy</h3>
            <p>
              Profit from the headless REST APIs by seamlessly integrating 
              countless sales &amp; marketing channels for higher ROI.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="eshka-cta-wrapper">
          <button className="eshka-start-button">START YOUR PROJECT</button>
        </div>
      </div>
    </section>
  );
};

export default EshkaFeatures;
