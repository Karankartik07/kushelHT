"use client";

import { useState } from "react";
import "./custombenfit.css";

const benefits = [
  {
    title: "Unique Brand Identity",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164433/Mask_group_11_y6hica.png",
    description:
      "Custom ecommerce websites help in standing ahead from competitors by the uniqueness of your website. Customized designs speak about your brand identity, goals and features built just for you..",
  },
  {
    title: " Better User Experience",
     minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166696/Mask_group_7_o2vovv.png",
    description:
      "Creating mobile-friendly websites, adding smart search filters, and listing products in an accurate manner help create a seamless shopping experience.",
  },
  {
    title: "Scalability for Future Growth",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166691/Mask_group_10_xgchne.png",
    description:
      "Your ecommerce store grows as you grow. Add additional features, product lines, or integrations without starting again.",
  },
  {
    title: "Integrations with Additional Services",
    minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164904/Mask_group_aczusy.png",
    description:
      " We link third-party systems, such as shipping firms, CRMs, marketing platforms, and payment gateways, to improve customer experiences and business operations.",
  },
  {
    title: "Higher Safety Standards",
    minWid: "true",
 
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166690/Mask_group_11_toqlcg.png",
    description:
      " Custom websites that suit your company are created using advanced security procedures.   It fosters confidence and safeguards customer information..",
  },
  {
    title: "Improved SEO Outcomes",
    minWid: "true",

    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164429/Mask_group_15_pb1t7y.png",
    description:
      " We adhere to SEO best practices, which include using meta tags and keywords.   Custom websites score higher in Google SERP since they are simpler to optimize.",
  },
  {
    title: "Easy Checkout Procedure",
    minWid: "true",
  
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_22_yyaiul.png",
    description:
      " When customers can check out fast and simply, they have a positive experience and are more likely to return.",
  },
  {
    title: "Cost Efficiency",
   minWid: "true",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753190069/Mask_group_19_fx51tw.png",
    description:
      "Designing a custom website may take more cost, but it pays back long term. As it is designed completely to meet your business needs, it attracts real customers and generates more sales.",
  },
  {
    title: "Mobile Friendly",
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753166694/Mask_group_8_iisgs5.png",
    description:
      "Connect with your clients wherever they may be. Our completely responsive bespoke websites provide a seamless, quick, and easy-to-use purchasing experience across all screen sizes, including smartphones and tablets.",
  },
];

export default function CustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          What Are the Benefits of Having a Custom <br /> E-Commerce Website?
        </h2>
        <p className="custom-benefits-subtext">
          Craft a fully customized online shop that fits your brand goals and
          customers. You will get great control, flexibility, and development
          potential.{" "}
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
