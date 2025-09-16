"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png",
    title: "Mobile-Responsive Design",
    description:
      "We offer mobile-responsive website design that works well on all devices, including smartphones and tablets. It helps in a better user experience.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161373/Mask_group_2_gnsaxz.png",
    title: "Secure Payment Integration",
    description:
      "We integrate third-party gateways like Razorpay, Stripe, and PayPal to achieve fast, secure and flexible checkouts. It helps in building customer trust and reducing cart abandonment.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164137/Mask_group_10_yjdrbn.png",
    title: " User-Friendly Admin Panel",
    description:
      "No technical expertise is needed to handle orders, items, and inventory with ease, thanks to an intuitive dashboard. You maintain control at all times.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_4_ow3m5y.png",
    title: "SEO & Speed Optimisation",
    description:
      "We design fast-loading websites and implement SEO best practices to ensure the website opens fast with less fuss, and SEO helps in ranking online stores from the launch day itself. ",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162558/Mask_group_5_uiwfvr.png",
    title: "Filters and Advanced Search",
        border:"true",
    description:
      "We provide consumers sorting options, filters based on categories, and smart search filters to assist them in finding the goods they want. It helps with higher conversion rates.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Post-Launch Support",
    description:
      "After the launch, our main job starts. We keep an eye on bugs, performance problems, and other technical concerns so you can focus on your business goals.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">What Are the Key Features of Our E-Commerce Websites?</h2>
      <div className="featuresstop1-grid">
        {features.map((item, index) => (
          <div key={index} className={`featuresstop1-box ${item.border? "border-box":""}`}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
