"use client"
import React from 'react';
import './omi.css';

const StorefrontSection = () => {
  return (
    <section className="storefront-section">
      <div className="storefront-container">
        
        {/* Left Column with Single Image */}
        <div className="storefront-left">
          <img
            className="storefront-image"
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743788144/collage-code-headless-product-card-vercel_1_qt3ton.png"
            alt="Product Card Collage"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="storefront-right">
          <h3>Launch Modern & Future-ready store with our Headless Commerce Solutions </h3>
          <p>
          Step into the next era of digital commerce with our advanced headless solutions which are designed for speed, flexibility and performance. Our team at Kushel Digi Solutions decouples your frontend from the backend and empower you to create excellent user experiences across web, mobile, and emerging channels and all this too by maintaining centralized control. It doesn't matter whether you're growing with your brand, expanding across platforms or optimizing for performance, our headless commerce approach gives you the freedom to build and grow without any limitations.

          </p>
        </div>
      </div>
    </section>
  );
};

export default StorefrontSection;
