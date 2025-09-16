"use client";
import React from "react";
import Image from "next/image";
import "./noidabanner3.css";

const NoidaBanner3 = () => {
  return (
    <section className="ecommerce-section">
      <div className="ecommerce-content">
        <div className="ecommerce-text">
          <p className="section-tag">
            Kushel Digi Solutions: Leading E-Commerce Web Development Redefiners
          </p>
          <h5 className="h5-tag">
            Want to Grow Your Business with a Powerful{" "}
            <span className="highlight">Ecommerce Website?</span>
          </h5>
          <p className="paragraph">
            Establishing an online presence is no longer a choice; it has become
            a necessity. Smarter selling and growth for brands are only possible
            through effective ecommerce websites, provided they are designed
            well. Therefore, at <strong>Kushel Digi Solutions</strong> , we take pride and
            guarantee ease of use on every ecommerce website that we design. To
            justify being a top ecommerce development agency in Noida, we design
            mobile-friendly, easy-to-use, fast, secure and easy navigation
            ecommerce websites.
          </p>
          <p className="paragraph">
            Unlike competitors, we go above and beyond by delivering complete digital solutions aimed not just at engagement but at optimizing revenue outcomes too.

We equip you not only with an ecommerce store specially built for you but also with full-fledged web development services helpful in conquering the ecommerce battle. Join hands today with Kushel Digi Solutions – a leading ecommerce website development company in Noida – and watch consistent growth in your presence online.

          </p>
          <div className="btn-group">
            <button className="btn-pri btn-primary">
              Request a Free Quote
            </button>
            <button className="btn-pri btn-outline">Schedule a Demo</button>
          </div>
        </div>
        <div className="ecommerce-image">
          <Image
            src="https://res.cloudinary.com/dknrega1a/image/upload/v1750758201/1732600813399_m7eud1.png"
            alt="Ecommerce Visual"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default NoidaBanner3;
