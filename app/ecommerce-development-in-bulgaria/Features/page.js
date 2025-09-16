"use client";
import React from "react";
import "./features.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166694/Mask_group_8_iisgs5.png",
    title: "Mobile-Friendly Design",
    description:
      "We know that the majority of our visitors come from mobile phones; therefore, we make sure that the online store works well on mobile devices.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png",
    title: " Custom Design",
    description:
      "We make custom designs for each online store. Custom layouts show what your company is all about and connect with actual customers.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164430/Mask_group_14_lojkfa.png",
    title: "Secure Payment Gateway Integration",
    description:
      "To develop confidence with our customers, we use gateways that are safe, quick, and allow for several payment methods. It works with UPI, debit cards, credit cards, wallets, and a lot more.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    title: "SEO and Marketing",
    description:
      "We are one of the top ecommerce development companies in Bulgaria. We use SEO best practices to construct websites that start ranking right away and reach actual consumers.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164431/Mask_group_13_pgy2ad.png",
    title: "Scalable Architecture",
    border: "true",
    description:
      "Our architecture may grow with us in the future. As you grow, so does your online shop. Its design, product catalogs, new product add-ons, and so on.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162558/Mask_group_5_uiwfvr.png",
    title: " Filters and Smart Search",
    description:
      "We include clever product search options and filters to make it easy for customers to locate what they want in a second, so they can shop without becoming frustrated.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">
        What Are the Top Features of Our E-commerce Websites?
      </h2>
      <div className="featuresstop1-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className={`featuresstop1-box ${item.border ? "border-box" : ""}`}
          >
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
