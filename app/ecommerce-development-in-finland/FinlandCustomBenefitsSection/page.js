"use client";

import { useState } from "react";
import "./finlandcustombenfit.css";

const benefits = [
  {
    title: "Distinct Brand Recognition ",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166699/Mask_group_5_s345yo.png",
    description:
      "Your custom website shows your business’s colors, logos, and brand voice, which assists you with evergreen variability and highlights differentiated value in contrast to competitors who use templates. ",
  },
  {
    title: "Custom Features and Layouts  ",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166697/Mask_group_6_mjtfwx.png",
    description:
      "Get precisely what your store needs with custom-made filters, advanced search, multi-language support, or anything else. Unlike other stores, you won’t be constrained by rigid templates or unnecessary features.  ",
  },
  {
    title: "Enhanced User Experience ",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166696/Mask_group_7_o2vovv.png",
    description:
      "Customer relationship management systems integrated directly alongside your store provide your users with easy navigation based on their buying behavior, fast loading, and smooth checkout, which boosts repeat purchases.  ",
  },
  {
    title: "Optimized For Mobile ",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166694/Mask_group_8_iisgs5.png",
    description:
      "The majority of shoppers use phones; therefore, your store needs to be mobile-first, designed to load fast and look awesome on every screen.  ",
  },
  {
    title: "Enhanced SEO Results ",
      minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    description:
      " Custom-built websites have clean code, proper design, and smart meta tags, which build a higher ranking on the SEO graph and work towards winning the clients' custom websites are made for.  ",
  },
  {
    title: "Endless Custom Integrations",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164428/Mask_group_16_u7gqfj.png",
    description:
      "Businesses running on custom websites can effortlessly streamline workflows with third-party systems such as CRM, ERP, shipping and marketing apps, hence optimally speeding up business operations.",
  },
  {
    title: "Scalable for Future Growth",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166691/Mask_group_10_xgchne.png",
    description:
      "Your website can develop alongside your business. It is now possible to expand with the inclusion of new features, product categories, or user roles without the requirement of a complete redesign.",
  },
  {
    title: "Stronger Security & Control ",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166690/Mask_group_11_toqlcg.png",
    description:
      "Custom development provides complete control over the custom security layers, updates, and data processing safeguards, ensuring the safety of sensitive business and customer information.  ",
  },
  {
    title: "Competitive Advantage ",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166689/Mask_group_12_f3svpi.png",
    description:
      "A custom store provides an edge in highly competitive markets. Propel your brand with a website tailored specifically for your business, distinct from imitations based on generic templates.",
  },
];

export default function FinlandCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
          Why Should You Choose a Custom E-Commerce Website?
        </h2>
        <p className="custom-benefits-subtext">
          A custom-built store puts your brand, features, and customer
          experience into full focus, fully tailored to help you meet your
          objectives and differentiate yourself from competitors.{" "}
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
