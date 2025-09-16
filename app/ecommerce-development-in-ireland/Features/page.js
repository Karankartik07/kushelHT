"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png",
    title: "Custom E-Commerce Design",
    description:
      "We create custom ecommerce websites tailored to your brand's needs and wants. Our expert team understands the target audience and brand approach, then accordingly designs custom websites to boost conversions.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png",
    title: "Mobile Responsive Design",
    description:
      "We craft mobile-responsive ecommerce stores that work flawless across all devices, including mobile phones and tablets, ensuring a seamless user experience, leading to an increase in conversion rates.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166691/Mask_group_10_xgchne.png",
    title: "Third Party Integration",
    description:
      "As a leading ecommerce development company in Ireland, we integrate the latest high-end third-party tools and software so that the website works smoothly, ensuring returning customers. ",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164431/Mask_group_13_pgy2ad.png",
    title: "Scalable & Customizable Websites",
    description:
      "We understand that every online store grows as the company grows to stay ahead in the competitive market, so we design highly scalable ecommerce stores where you can add products, categories and many more. ",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162297/Mask_group_3_bb84xd.png",
    title: "Advanced Filtering and Search Option",
           border:"true",
    description:
      "We add advance filtering and search options- category filter, product filter and search bar, ensuring easy access to products and boosting conversion.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Post-Launch Support",
    description:
      "We provide after-launch support where we act as a backbone for your website and take care of every technical issue, like bug fixes, software updates and new features added, so that you focus on your business goals.",
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
