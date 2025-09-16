"use client";

import React from "react";
import Image from "next/image";
import "./ecomintro.css";

const services = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164905/Mask_group-2_ohpmkb.png",
    title: "E-Commerce Consulting",
    description:
      "We help businesses in suggesting the right platform, software and other tools for better performance.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Custom E-Commerce Development",
    description:
      "Our specialty is building bespoke ecommerce websites with expandable functionality and a distinctive appearance.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Platform-Based E-Commerce Development",
    description:
      "We use well-known systems like WooCommerce, Shopify, and Magento to create ecommerce websites.  Based on the objectives of the business, we select the appropriate platform.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png",
    title: "E-Commerce Website Design ",
    description:
      "Our designers produce visually appealing and user-friendly designs that entice clients and encourage sales.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164904/Mask_group_aczusy.png",
    title: "E-Commerce Integrations",
    description:
      "We have no trouble integrating your business with well-known ERPs, payment processors, and shipping solutions.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164910/Mask_group-6_kvrolq.png",
    title: "E-Commerce Migration",
    description:
      "Our main goal is to make sure that your current store's move to a new ecommerce platform is safe and seamless.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/customer-satisfaction-icon_1_ywdfop.png",
    title: "E-Commerce Audit",
    description:
      "We provide thorough site audits to enhance the website's usability, SEO, speed, and general quality.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "E-Commerce Support & Maintenance",
    description:
      "Our staff makes sure your business is constantly operating well by adding new features, upgrading it, and resolving problems.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "UX/UI Optimization",
    description:
      "We concentrate on creating clear layouts and user-friendly interfaces to enhance the user experience and promote repeat business from our customers.",
  },
];

export default function EcomServiceNoida() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h5 className="services-title">
          What Services Does Our E-Commerce Development Company Offer?
        </h5>
        <p className="services-subtext">
          As a prominent ecommerce development company in Noida, Kushel Digi
          Solutions helps small or large businesses to stand and grow in this
          competitive world.
        </p>

        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-left">
              <Image
                className="service-icon"
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
              <h3 className="service-title">{service.title}</h3>
            </div>
            <div className="service-right">
              <p className="service-description">{service.description}</p>
              <div className="service-buttons">
                <button className="btn-pri btn-primary">
                  Request a Free Quote
                </button>
                <button className="btn-pri btn-outline">Schedule a Demo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
