"use client";

import React from "react";
import Image from "next/image";
import "./noidaexpertise.css";

export default function NoidaExpertiseSec() {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-image">
          <Image
            src="https://res.cloudinary.com/dknrega1a/image/upload/v1750772418/full-length-portrait-happy-young-woman-holding-shopping-bags-mobile-phone-isolated_xz1x6y.png"
            alt="Shopper"
            width={500}
            height={600}
            priority
          />
        </div>
        <div className="expertise-content">
          <h3 className="expertise-heading">What Sets Us Apart</h3>
          <h2 className="expertise-subheading">
            Trusted Excellence: Driving E-Commerce Success with Kushel Digi
            Solutions
          </h2>
          <p>
            <strong className="highlight-blue">Customized Solutions:</strong>{" "}
            The well-known Kushel Digi Solutions, an ecommerce website
            development agency in Noida, does not follow a cookie-cutter
            approach. We design custom ecommerce websites tailored for you, your
            audience, and industry standards. Using a user-centric approach that
            scales with your firm ensures we set you up on the path to continual
            online business success.
          </p>
          <p>
            <strong className="highlight-blue">
              Complete Development Support:
            </strong>{" "}
            As a leading ecommerce website development company, we offer fast,
            secure, mobile-friendly, SEO optimized ecommerce websites that grow
            fast.
          </p>
          <p>
            <strong className="highlight-blue"> Sales-Focused Approach:</strong>{" "}
            SEMrush ranked SEO tactics along with design. This gives us an edge
            over other service providers when combined with a beautiful, simple
            design. We are still the best ecommerce website development company
            in Noida, and we're ready to help our clients make more sales online
            by making their websites more visible and bringing more people to
            them. When you use our tools and turn on the marketing features, you
            get a big edge over your competitors.
          </p>
        </div>
      </div>
    </section>
  );
}
