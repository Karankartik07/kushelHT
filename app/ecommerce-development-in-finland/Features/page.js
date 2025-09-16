"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161373/Mask_group_2_gnsaxz.png",
    title: "Secure Payment Integration",
    description:
      "To ensure safe transaction processing, we integrate reliable payment options, Stripe, PayPal, and Klarna.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png",
    title: "Mobile Responsive Design",
    description:
      "Cell phones and tablets are indispensable for daily use; hence, ecommerce websites are designed to be mobile responsive to enhance user experience.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164906/Mask_group-3_ilvyt2.png",
    title: "Easy-to-Use Admin Panel ",
    description:
      " No technical know-how or coding skills are required. Product, order, and content management is effortless with a click.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    title: "SEO Optimized Structure ",
    description:
      "As an ecommerce development company in Finland, we build websites with proper SEO so that your websites can rank from day one.  ",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162956/Mask_group_6_ifgr88.png",
    title: "Fast Loading Speed",
      border:"true",
    description:
      "We improve customer experience by fast loading speed. This is achieved through optimizing image and script sizes, bug fixing and hosting, compressing CSS, and clearing the cache.  ",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164915/Mask_group-8_dquxu7.png",
    title: "Advanced Search and Filters  ",
    description:
      "Our ecommerce development company in Finland includes smart filtering and search tools, making it easy for users to find exactly what they’re looking for in seconds.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">What Features Do We Offer as a Trusted E-Commerce Development Company in Finland?</h2>
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
