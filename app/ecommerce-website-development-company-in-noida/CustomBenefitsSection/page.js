"use client";

import { useState } from "react";
import "./custombenfit.css";

const benefits = [
  {
    title: "Unique Brand Identity",
     minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164433/Mask_group_11_y6hica.png",
    description:
      "Capture attention by standing out from other players with unforgettable designs tailor-made to showcase the identity of best-representing businesses.",
  },
  {
    title: "Scale As You Grow",
     minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753189068/Mask_group_16_hx1ord.png",
    description:
      "Focused growth strategies can easily be achieved on websites that are built from scratch as they offer limitless potential, high speed, uncompromised performance, and effortless addition of features and products, along with integration processes.",
  },
  {
    title: "Improved Experience For Users",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166696/Mask_group_7_o2vovv.png",
    description:
      "Every piece involved in shopping online is done while automating interactions, engaging, enjoyable, and seamless for customers, ensuring complete user satisfaction.",
  },
  {
    title: "Capable Advanced SEO",
     minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    description:
      "Reaching new heights becomes possible because these websites are strategically structured, adding businesses, enabling better rankings through increasing visibility, and reaching wider customers organically.",
  },
  {
    title: "Quicker Load Time",
     minWid1: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_20_ygsgyv.png",
    description:
      "Having fewer plugins reduces the need for redundant features, which increases loading speed and responsiveness. As a result, the website performs better in retaining visitors as well.",
  },
  {
    title: "Complete Automation",
     minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165894/Mask_group_2_movu3z.png",
    description:
      "All automation services, such as CRMs, ERPs, payment gateways, and shipping tools, can be integrated without limitations or restrictions.",
  },
  {
    title: "Unlimited Control & Flexibility",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866642/Mask_group_21_ngoush.png",
    description:
      "Restrictive design templates that came with limited add-ons are a thing of the past. Users can now modify custom-designed websites without barriers or iterations needing constant changes after they're made to deal with blockages.",
  },
  {
    title: "Better Security",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164430/Mask_group_14_lojkfa.png",
    description:
      " With custom development, you can implement the latest security protocols to protect customer data, ensuring a safe and trusted shopping environment.",
  },
  {
    title: "Tailored Features & Functionality",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753863535/Mask_group_7_esraei.png",
    description:
      "From advanced filters to custom payment options, your website is built with the exact tools your business and customers need.",
  },
];

export default function CustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          Why Custom E-Commerce Websites Are Ideal for Your Business?
        </h2>
        <p className="custom-benefits-subtext">
          Make your brand stand out and get noticed with a custom-tailored
          ecommerce solution from the ecommerce website development company in
          Noida. It supports brand objectives and provides a vision of customer
          experience.{" "}
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
               <li
                key={index}
                className={`custom-benefits-item ${
                  index === activeIndex ? "active" : ""
                }      ${item.minWid ? "extclassMinWid" : ""} ${item.exminWid ? "exminWidclas" : ""} ${item.minWid1 ? "minWid1" : ""} ${item.exminWid2 ? "exminWid2" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="custom-benefits-dot" />
                {item.title}
              </li>
            ))}
          </ul>

          <div className="custom-benefits-content">
            {benefits[activeIndex].description && (
              <div className="custom-benefits-card">
                <div className="custom-benefits-icon">
                  <img
                    src={benefits[activeIndex].icon}
                    alt={benefits[activeIndex].title}
                    className="custom-benefits-img"
                  />
                </div>
                <h3>{benefits[activeIndex].title}</h3>
                <p>{benefits[activeIndex].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
