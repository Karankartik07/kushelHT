"use client";
import React from "react";
import "./noidastats.css";
import Link from "next/link";

export default function IndiaStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      // sub: "eCommerce",
      title: "E-Commerce Development Company in India",
      discp:
        "Get ecommerce solutions tailored to your company's needs. Make it simple for customers to remember your online store, make more purchases, and have a better overall experience.",
      className: "card-blue",
      route: "/india/ecommerce-development-company-in-india",
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
      // sub: "BigCommerce",
      title: "BigCommerce Development Company in India",
      discp:
        "BigCommerce solutions may be tailored to your company's requirements. These solutions are designed to help you expand more quickly and sell more online.",
      className: "card-yellow",
      route: "/india/bigcommerce-development-company-in-india",
    },
    {
        icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
        // sub: "Shopify",
        title: "Shopify Development Company in India",
        discp:
            "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
        className: "card-green center-item-noida ",
        route: "/india/shopify-development-company-in-india",
    },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-india">
          {stats.map((stat, index) => (
            <Link
              href={`${stat.route}`}
              key={index}
              className={`stat-card-noida ${stat.className}`}
            >
              <div className="stat-icon">
                <img src={stat.icon} alt="icon" />
              </div>
              <div className="service-title">
                <span>{stat.title}</span>
                {/* <h3>{stat.title}</h3> */}
              </div>
              <p className="ptag-service">{stat.discp}</p>
              <Link href={`${stat.route}`}>
                {" "}
                <button className="btn-service-visit">Visit More</button>
              </Link>
            </Link>
          ))}
        </section>

        <section className="service-sec2">
          <h4>What Makes Our E-Commerce Development Services Special?</h4>
          <p>
            A strong ecommerce website is now a need rather than a luxury in the
            modern digital environment. Whether you are a small business or a
            well-known brand, an online store may help you attract more
            customers and grow more quickly. Kushel Digi Solutions can help with
            it. We help your company grow online, not just create websites. We
            can use Shopify, WooCommerce, and BigCommerce to build distinctive
            online storefronts for your business. Our website will be simple to
            use, load fast, have a secure checkout process, and facilitate easy
            purchasing. Kushel Digi offers you a comprehensive ecommerce
            solution that can support the expansion of your business, in
            addition to a website.
          </p>
        </section>
      </section>
    </>
  );
}
