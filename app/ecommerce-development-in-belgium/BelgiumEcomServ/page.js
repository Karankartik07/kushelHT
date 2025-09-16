"use client";
import React from "react";
import "./belgiumserv.css";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_d9v6rx.png",
    title: "Personalized E-Commerce Websites",
    description:
      "Our team designs a fully cuwtomized ecommerce websites that meets your brand goals and requirements. We don't believe in one size fits all rule, we design personalized websites while making sure customers have the greatest experience.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_3_hwmlft.png",
    title: "Mobile-friendly E-Commerce Websites",
    description:
      "We create mobile-responsive online stores that ensure ga reat user experience and an increase in both sales and engagement.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Services for Building Shopify and WooCommerce",
    description:
      "Shopify and WooCommerce are two amazing platforms for website designing, and our team is an expert in these platforms, providing unique themes, plugins, and a backend interface.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_5_qblh6b.png",
    title: "Adding Payment Gateways",
    description:
      "Adding payment gateways like as Razorpay, Stripe, and PayPal allows users to pay in several currencies, make one-click transactions, and feel more secure, all while simplifying the checkout process.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162297/Mask_group_3_bb84xd.png",
    title: "Enhancements to the Cart and Checkout",
    description:
      "We optimize your checkout process and cart design to increase consumer confidence and reduce cart abandonment. This results in more completed sales and recurring business.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_4_ow3m5y.png",
    title: "SEO for Online Stores",
    description:
      "We design an ecommerce website focusing on SEO best practices. This helps in ranking better on Google. Adding product-related keywords helps in receiving more organic traffic.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Marketplace Development Services",
    description:
      "Thinking about creating your Amazon-style multi-vendor marketplace? We develop robust, scalable online platforms complete with vendor dashboards, order tracking, and commission systems processing services.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162297/Mask_group_4_sw3jfz.png",
    title: "Systems for Managing Inventory and Orders",
    description:
      "Use advanced backend systems to automate processes for tracking inventory, managing orders, processing payments, and handling shipment processing for your online store. You will ensure optimal efficiency while also updating the stocks with accuracy across the entire store of your ecommerce store.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Website Support and Maintenance",
    description:
      "We take care of backup management, updating, performance monitoring, as well as bug fixing, so your ecommerce site is always ready, fast, safe, and friendly to users all day, every day.",
  },
];

const scrollToFormHome = () => {
  const formSection = document.getElementById("form-section");
  if (formSection) {
    const yOffset = -120;
    const y =
      formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const BelgiumEcomServ = () => {
  const navigate = useRouter();

  return (
    <section className="ecom-belgium-section">
      <h3 className="ecom-belgium-title">
        Our Top E-commerce Website Development Services to Boost Online Sales
      </h3>

      <div className="ecom-belgium-grid-wrapper">
        <div className="ecom-belgium-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-belgium-card">
              <div className="ecom-belgium-icon">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="ecom-belgium-icon-img"
                />
                <h3 className="ecom-belgium-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-belgium-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-belgium-buttons">
        <button
          onClick={() => navigate.push("/contact-us")}
          className="ecom-btn primary"
        >
          Book a Call
          {/* Book a Call <HiArrowSmallRight /> */}
        </button>
        {/* <button className="ecom-btn secondary">Request an Audit</button> */}
        <button onClick={scrollToFormHome} className="ecom-btn secondary">
          Request an Audit
        </button>
      </div>
    </section>
  );
};

export default BelgiumEcomServ;
