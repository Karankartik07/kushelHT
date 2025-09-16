"use client";
import React from "react";
import "./whyireland.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    title: "SEO Optimized",
    desc: "Our team of SEO experts assists you in staying ahead of the competition.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Platform-Based Development",
    desc: "Our ecommerce expertise allows us to develop across platforms on Magento, WooCommerce and Shopify.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165893/Mask_group_4_r87vhk.png",
    title: "Real Results",
    desc: "With over decades of experience, we drive real results, no fluff.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Post-Launch support",
    desc: "We provide post-launch support- fix bugs, check for mobile responsiveness and software updates.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164431/Mask_group_13_pgy2ad.png",
    title: "Third Party Integration",
    desc: "We integrate third-party tools and software, providing secure, clear, fast and easy-to-use ecommerce websites.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164426/Mask_group_17_sim4ot.png",
    title: "Highly Scalable",
    desc: "As a leading ecommerce development company in Ireland, we design websites that grow along with the business. ",
  },
];

const WhyChooseIreland = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-wrapper">
        <h2 className="why-choose-heading">
          What Makes Kushel Digi Solutions the Right Choice for You?
        </h2>
        <p className="why-choose-subtext">
          We create and construct ecommerce platforms that grow with you and
          have a significant influence on the market at every stage. Everything
          is covered, from strategy to assistance.{" "}
        </p>
      </div>

      <div className="why-choose-container">
        <div className="why-choose-left">
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750331416/Group_1171281538_c0mfbg.png"
            alt="why choose kushel digi solutions"
          />
        </div>

        <div className="why-choose-right">
          <div className="why-choose-features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="feature-texts">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIreland;
