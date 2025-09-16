"use client";

import { useState } from "react";
import "./denmarkcustombenfit.css";

const benefits = [
  {
    title: "Tailored For Every Customer",
    minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165898/Mask_group_1_ljmxuo.png",
    description:
      "Allows total control of catering content with product recommendations as well as guiding users through various flows based on prior interactions and behaviors. Every visit is curated, driving stronger engagement and more sales for the brand.",
  },
  {
    title: "Improved Sales Metrics",
    minWid3: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164426/Mask_group_17_sim4ot.png",
    description:
      "Elevated clear CTAs with specifically crafted funnels boost frictionless sales by showing visitors specially designed pathways that they can't resist turning into loyal customers.",
  },
  {
    title: "Mobile Responsive Design",
minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_18_qwtqbo.png",
    description:
      "The market is driven by mobile-first users, thus having a fully responsive custom ecommerce ensures effortless, smooth browsing and easy checkout across any sized screen and device.",
  },
  {
    title: "Advanced Analytics",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764185/Mask_group_19_lxvran.png",

    description:
      "Track behaviors including purchases, established sales funnels, and even abandoned carts. The ability to monitor all activities of the deepest systems means custom setups integrate powerful analytics, making marketing smarter.",
  },
  {
    title: "Faster Load Times",

    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_20_ygsgyv.png",
    description:
      "With everything, speed serves as one of the key factors in an ecommerce business. Slow websites equate to higher bounce rates along with lower Google ranking, which is something every user wishes to avoid. Fewer page translations will mean to smoother, engaging, seamless experience for users, defying industry norms while boosting conversion rates.",
  },
  {
    title: "Secure Payment Gateways",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166690/Mask_group_11_toqlcg.png",
    description:
      "Integrate numerous reputable payment options with advanced security encryption for ecommerce websites. With us, you can rest assured knowing that your online store is compliant with industry standards and your customers' data is secure.",
  },
  {
    title: "Easy Checkout Process",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_22_yyaiul.png",
    description:
      "Ensuring a straightforward checkout process reduces abandonment rates. We offer streamlined guest checkouts and one-click payments as part of our swift buying process, which maintains the highest standards of security.",
  },
  {
    title: "Third-Party Integrations",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_23_bn1ywe.png",
    description:
      "Connect CRMs, inventory management systems, shipping APIs, and marketing software with ease. A tailored ecommerce website seamlessly integrates into your business framework, optimizing processes and minimizing manual input tasks alongside boosting productivity.",
  },
  {
    title: "Long-Term Cost Efficiency",
    minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753190069/Mask_group_19_fx51tw.png",
    description:
      "Avoid paying monthly fees for templates or plugins. While custom ecommerce development may seem like a heavier initial investment, it ultimately proves more cost-effective due to reduced maintenance needs and improved scalability from increased traffic over time.",
  },
];

export default function BelgiumCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
          Why Custom Ecommerce Websites Drive More Engaging Results
        </h2>
        <p className="custom-benefits-subtext">
          Tailored ecommerce websites help in standing out from the competition.
          Custom websites help in delivering tailored shopping experiences,
          boost functionality and great user experience. In this growing market,
          custom websites can also grow along with the brand to improve sales
          and engagement.
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
              <li
                key={index}
                className={`custom-benefits-item ${
                  index === activeIndex ? "active" : ""
                }      ${item.minWid ? "extclassMinWid" : ""} ${
                  item.minWid3 ? "minWid3" : ""
                } ${item.minWid1 ? "minWid1" : ""}
                }`}
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
