"use client";

import { useState } from "react";
import "./delhicustombenfit.css";

const benefits = [
  {
    title: "100% Tailored to Your Business",
    minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753863467/Mask_group_11_aieztx.png",
    description:
      "Custom ecommerce websites are well suited to your brand, goals, and consumer journey. No pre-made templates are used.",
  },
  {
    title: "Adaptable for Future Expansion",
    minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753863467/Mask_group_10_t0nvjj.png",
    description:
      "Our ecommerce development services ensure that your website evolves with your business, accommodating more users, products, and traffic over time.",
  },
  {
    title: "An Intuitive Interface",
    exminWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753863467/Mask_group_9_hvmtqm.png",
    description:
      "We create user-friendly online shops that engage clients, hence reducing bounce rates.",
  },
  {
    title: "Enhanced Security Features",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164430/Mask_group_14_lojkfa.png",
    description:
      "Custom ecommerce platforms provide the utmost security to safeguard customer data and ensure secure transactions.",
  },
  {
    title: "Accelerated Loading Speeds",
    minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162557/Mask_group_6_cnmwbw.png",
    description:
      "To enhance client satisfaction and improve SEO rankings, our ecommerce development business ensures that all processes are executed with utmost efficiency.",
  },
  {
    title: "Adaptability in Integration",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_6_mcojgf.png",
    description:
      "Payment gateways, analytics, CRMs, and ERPs may be effortlessly interconnected via fully customizable options.",
  },
  {
    title: "Mobile-First Design",
    exminWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_3_hwmlft.png",
    description:
      "We create mobile-responsive ecommerce sites that ensure more engagement and conversions.",
  },
  {
    title: "SEO-Optimized Structure",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_4_ow3m5y.png",
    description:
      "We use SEO best practices like Mega tags, Alt tags, and so on that ensure targeting real customers.",
  },
  {
    title: "Absolute Control and Ownership",
    extclassMinWid5: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753863535/Mask_group_7_esraei.png",
    description:
      "Custom ecommerce websites provide complete authority over the code, functionalities, and content of your website.",
  },
];

export default function DelhiCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
          Why Invest in a Custom E-Commerce Website for Your Business?
        </h2>
        <p className="custom-benefits-subtext">
          Custom ecommerce development provides your company with complete
          control, enhanced performance, and sustainable growth tailored to your
          requirements.
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
              <li
                key={index}
                className={`custom-benefits-item ${
                  index === activeIndex ? "active" : ""
                }      ${item.minWid ? "extclassMinWid" : ""} ${
                  item.exminWid ? "exminWidclas" : ""
                } ${item.minWid1 ? "minWid1" : ""} ${
                  item.extclassMinWid5 ? "extclassMinWid5" : ""
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
