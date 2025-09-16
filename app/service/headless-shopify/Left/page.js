"use client"
import React from "react";
import './left.css';

const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: "Multi-Channel Selling",
    description:
      "The system allows effortless integration across social media platforms and marketplaces and mobile solutions together with additional platforms. Your brand will achieve broader reach by delivering smooth consistent interactions at all customer points of interaction."
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: "Secure Payment Processing",
    description:
      `Transactions benefit from full-end encryption security for protection. Shopify headless development provides PCI compliance in addition to robust encryption, which results in safe and reliable checkout processes.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "Unmatchable Performance",
    description:
      `Users get rapid webpage loading speed along with a smooth experience while browsing. Frontend frameworks that receive optimization deliver experiences with superfast response times which makes users stay longer.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: "Integration Capabilities",
    description:
      `Your solution connects automatically to CRMs, ERPs and marketing tools as well as third-party applications. The API-first approach our company uses delivers seamless integrations for our customers.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "Fulfillment Options",
    description:
      `The success of your business depends on delivery solutions and fulfillment approaches, which you can customize according to your operations. Your business can handle all order tasks together with logistics management and distribution flows using one centralized platform.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "Microservice Architecture",
    description:
      `The microservice-based architecture of our structure enables both rapid updates for faster go-to-market implementations and easier debugging and the capability for quick enhancements.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: "PWA (Progressive Web App)",
    description:
      `Deliver app-like experiences via browser. Your store operates quickly while being downloadable and accessible through headless Shopify PWAs, even when your network speed is minimal.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Extreme Flexibility",
    description:
      `Business owners can tailor all components of their store-front UI as well as checkout processes according to their preferences. Using the Headless platform enables you to create designs that blend perfectly with your brand identity and operational model.`
  }
];

export default function ShopifyFeatures() {
  return (
    <section className="sleft-section">
      <h3 className="sleft-title">Features of Shopify Headless eCommerce</h3>
      <p className="sleft-subtitle">
        You can access multiple possibilities through our Shopify Headless eCommerce solutions. Our features have transformed online store creation by offering safe payments alongside unprecedented flexibility which redesigns your building and growth process.
      </p>
      <div className="sleft-grid">
        {features.map((feature, index) => (
          <div key={index} className="sleft-card">
            <div className="sleft-icon">
              <img src={feature.icon} alt={feature.title} className="sleft-icon-img" />
              <h3 className="sleft-card-title">{feature.title}</h3>
            </div>
            <p className="sleft-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
