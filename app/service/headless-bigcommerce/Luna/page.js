"use client"
import React from "react";
import "./luna.css";
import Link from "next/link";
const Luna = () => {
  return (
    <section className="Big-headless-intro">
      <div className="Big-headless-intro-container">
        <div className="Big-headless-intro-image">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1745609720/What-is-Headless-BigCommerce-2_1_trmwqy.png" alt="Headless Commerce" />
        </div>
        <div className="Big-headless-intro-text">
          <p className="Big-headless-intro-subheading">Certified BigCommerce Agency</p>
          <h3>What Is Headless BigCommerce?
          </h3>
          <p className="Big-headless-intro-description">
          Headless BigCommerce is an advanced ecommerce configuration in which the front-end (what visitors see) is isolated from the back-end (where you enter products, orders, etc.). Its flexible design enables you to utilize contemporary technologies such as React.js, Next.js, or Vue.js to develop lightning-fast, highly customizable storefronts, Unlike conventional ecommerce sites where style and functionality are closely interdependent, headless commerce provides you with unlimited creative liberty, quicker loading speeds, smooth integrations, and an omnichannel ready-for-the-future solution.
          </p>
          <div className="big-btn"> 
  <Link href="/contact-us" className="Big-headless-intro-button">
    Contact Us <span className="butterr">→</span>
  </Link>
</div>
         
        </div>
      </div>
    </section>
  );
};

export default Luna;
