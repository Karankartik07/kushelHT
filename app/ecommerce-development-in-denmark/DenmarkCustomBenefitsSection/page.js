"use client";

import { useState } from "react";
import "./denmarkcustombenfit.css";

const benefits = [
  {
    title: "Distinct Brand Identity",
    exminWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164433/Mask_group_11_y6hica.png",
    description:
      "A custom ecommerce website is a reflection of your brand's personality, featuring a custom design, layout, and colours that are tailored to your specific needs. This distinguishes you from your competitors and fosters a stronger sense of consumer trust.",
  },
  {
    title: "Improved User Experience",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164137/Mask_group_10_yjdrbn.png",
    description:
      "The store is tailored to the purchasing patterns of your audience, resulting in a seamless navigation, a simple payment process, and an overall pleasurable experience. This, in turn, leads to increased satisfaction and repeat purchases.",
  },
  {
    title: "Features' Flexibility",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_2_r8dqwc.png",
    description:
      "Add the exact features your business requires, such as multi-step checkouts and custom filters, without being constrained by pre-built templates or superfluous features.",
  },
  {
    title: "Scalable as Your Business Expands",
      minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164431/Mask_group_13_pgy2ad.png",
    description:
      " Your website can expand in tandem with your business. Easily incorporate new products, features, or functionalities without necessitating a complete redesign.",
  },
  {
    title: "Improved Security",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164430/Mask_group_14_lojkfa.png",
    description:
      "Experience enhanced security with SSL, payment encryption, and custom security configurations, which ensure the protection of your data and the information of your consumers from potential threats.",
  },
  {
    title: "SEO Optimisation",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    description:
      " Custom websites are constructed with clear code, appropriate meta structures, and schema, which facilitates the crawling and ranking of your store by search engines.",
  },
  {
    title: "Seamless Integrations",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_4_tnqtnw.png",
    description:
      "Integrate your store with a variety of tools, including payment gateways, CRMs, ERPs, and shipping services. Custom development facilitates seamless integration with the systems that you currently employ.",
  },
  {
    title: "Improved Performance",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164426/Mask_group_17_sim4ot.png",
    description:
      "Your website is designed to display swiftly, even in high traffic situations, thereby enhancing the purchasing experience on all devices and reducing abandonment rates.",
  },
  {
    title: "Competitive Advantage",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164425/Mask_group_18_hiy7m5.png",
    description:
      "Custom stores provide you with unique consumer experiences, design, and features that your competitors may not offer, thereby enabling you to maintain a competitive edge in the market.",
  },
];

export default function DenmarkCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
          Why Should You Invest in a Custom E-Commerce Website?
        </h2>
        {/* <p className="custom-benefits-subtext">
          Custom ecommerce development provides your company with complete
          control, enhanced performance, and sustainable growth tailored to your
          requirements.
        </p> */}

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
