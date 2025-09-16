"use client"
import React from 'react';
import './shopify.css';

const BenefitsOfHeadlessShopify = () => {
  return (
    <section className="softyy">
      <div className='softyy1'>
        <div className="softyy-header">
          <h2>Benefits of Headless Shopify</h2>
          <p>
            Ready to future-proof your store? Headless Shopify development merges advanced functionality
            with technical accuracy and high operational speed.
          </p>
        </div>

        <div className="softyy-grid">

          {/* Optimize */}
          <div className="softyy-box">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744963941/Mask_group_69_dm3vsy.png" alt="Optimize" className="softyy-icon" />
            <div className='softyy-box-content'>
              <span>Optimize</span>
              <p>
                Speed matters. Quick loading pages together with quick navigation enhance both search engine
                rankings and conversion rates.
              </p>
            </div>
          </div>

          {/* Simplify */}
          <div className="softyy-box">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744963941/Mask_group_70_m0u4bq.png" alt="Simplify" className="softyy-icon" />
            <div className='softyy-box-content'>
              <span>Simplify</span>
              <p>
                The system reduces costs by making it easier to integrate with external parties, by having fewer
                platform requirements and by maintaining the technology more easily.
              </p>
            </div>
          </div>

          {/* Adapt */}
          <div className="softyy-box">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744963941/Mask_group_71_lkhcie.png" alt="Adapt" className="softyy-icon" />
            <div className='softyy-box-content'>
              <span>Adapt</span>
              <p>
                The system allows you to adapt your product lines and advertising methods instantaneously
                while maintaining backend stability.
              </p>
            </div>
          </div>

          {/* Globalize */}
          <div className="softyy-box">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744963941/Mask_group_72_lyuvbb.png" alt="Globalize" className="softyy-icon" />
            <div className='softyy-box-content'>
              <span>Globalize</span>
              <p>
                Go global with ease. Global scalability is possible because the central hub provides regional
                experience management across different locations.
              </p>
            </div>
          </div>

          {/* Align */}
          <div className="softyy-box">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744963940/Mask_group_73_b0nurm.png" alt="Align" className="softyy-icon" />
            <div className='softyy-box-content'>
              <span>Align</span>
              <p>
                Branding elements should maintain constant consistency and UX standards across all digital
                platforms. This builds trust with customers over time.
              </p>
            </div>
          </div>

          {/* Streamline */}
          <div className="softyy-box">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744963940/Mask_group_74_zfaimy.png" alt="Streamline" className="softyy-icon" />
            <div className='softyy-box-content'>
              <span>Streamline</span>
              <p>
                Advanced analytics and heatmaps alongside BI tools connect automatically so you can obtain
                actionable data that leads to informed decisions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsOfHeadlessShopify;
