"use client";
import React from "react";
import "./whydenmark.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_d9v6rx.png",
    title: "Proven E-Commerce Expertise",
    desc: "At Kushel Digi Solutions, we have decades of experience in crafting custom ecommerce websites that drive more sales, traffic, and long-term growth.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_cexwc2.png",
    title: "Tailored Solutions, No Templates",
    desc: "Because no two businesses share the same DNA, we begin each online-store project with a clean blueprint. By tailoring design, features, and navigation, we craft a shopping experience that moves smoothly and feels distinctly yours.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Full-Service Support",
    desc: "From strategy to development, integrations and post-launch, we provide full-service support. Our expert team handles end-to-end custom ecommerce solutions in-house so that you won't worry about gaps in service.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753163355/Mask_group_7_quwoqn.png",
    title: "Cutting-Edge Tech Stack",
    desc: "We create ecommerce stores using platforms like Shopify, Magento, WooCommerce or headless stacks. It assures fast loading, data protection and scalable for future growth.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162956/Mask_group_6_ifgr88.png",
    title: " Transparent Process",
    desc: "Our work is as transparent as water. We give you timely updates, code reviews and straight feedback at every step, so that you won't get a sudden shock on the launch day.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753163354/Mask_group_8_zkoaet.png",
    title: "Client-Centered Approach ",
    desc: "Because your results drive our reputation, we listen, adapt to fresh insights, and chase solutions that boost revenue while keeping your customers happy.",
  },
];

const WhyChooseDenmark = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-wrapper">
        <h2 className="why-choose-heading">
         Why Should You Choose Kushel Digi Solutions?
        </h2>
        <p className="why-choose-subtext">
          {/* We design and build ecommerce platforms that scale alongside your
          growth and provide industry-leading impact at each level. From
          strategy to support, every aspect is taken care of. */}
        </p>
      </div>

      <div className="why-choose-container">
        <div className="why-choose-left">
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750331416/Group_1171281538_c0mfbg.png"
            alt="why choose kushel digi solutions"
          />
        </div>

        <div className="why-choose-right">
          <div className="why-choose-features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="feature-texts">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDenmark;
