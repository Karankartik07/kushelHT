"use client";

import { useState } from "react";
import './custombenfit.css';

const benefits = [
  {
    title: "A Customized Shopping Experience",
    extclassMinWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764190/Mask_group_16_oi6gcy.png",
    description:
      "If you have a custom ecommerce site, you can make product ideas, ads, and deals that are based on what each customer has already done. The result makes shoppers feel like they're part of the business, keeps them interested, makes them happier, and makes them want to come back.",
  },
  {
    title: "Higher Rates of Conversion",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_17_dkxalb.png",
    description:
      "When your store as a whole talks to your customers and the goals you set, buying doesn't feel hard. This style and its clear calls to action (CTAs) and clean tracks from browsing to checking out slowly raise conversion rates.",
  },
  {
    title: "Mobile-Friendly",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_18_qwtqbo.png",
    description:
      "No matter the screen size or layout, your shop will look great on any device, whether it's a smartphone, tablet, or old-school PC. People can switch between devices without having to squint or swipe for a long time thanks to that mobile-first polish. This makes the \"buy it now\" button almost automatic.",
  },
  {
    title: "More Complex Analytics",
      icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764185/Mask_group_19_lxvran.png",
    description:
      "There are built-in reports that show who is shopping, what they're not interested in, and which efforts are making money. You can change stock, make offers, and cut costs faster when you measure live numbers instead of waiting for end-of-month emails.",
  },
  {
    title: "Faster Load Times",

      icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_20_ygsgyv.png",
    description:
      "Custom code stays lean because we only include what adds value. Pages pop open in a blink, frustrating less, bouncing fewer, and nudging search engines to give your brand a higher seat.",
  },
  {
    title: "Secure Payment Gateways",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_21_ynyqfc.png",
    description:
      "We link your store to highly regarded, PCI-safe gateways such as Stripe and PayPal. Shoppers know their card data is protected, so they feel at ease, and that helps you earn their trust.",
  },
  {
    title: "Easy Checkout Process",
    minWid1: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_22_yyaiul.png",
    description:
      "A clear, no-fuss checkout cuts cart drop-offs and leaves buyers happy. Since each step can be tailored, customers breeze through the process, and you keep the sale.",
  },
  {
    title: "Third-Party Integrations",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_23_bn1ywe.png",
    description:
      "Plug your shop into any favorite marketing app, stock tool, CRM, or ERP. Seamless links let you automate routine work, run operations smoothly, and grow without headaches.",
  },
  {
    title: "Long-Term Cost Efficiency",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_24_lyevyw.png",
    description:
      "Custom build-outs may cost more upfront, but they pay you back over time. You dodge endless subscription bills, enjoy full control, and shape a system that scales with your success.",
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
You can get an ecommerce answer by making your online store fit the needs of your business in every way.        </p>

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
