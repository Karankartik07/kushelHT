"use client";
import React from "react";
import "./noidastats.css";
import Link from "next/link";

export default function DelhiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      // sub: "eCommerce",
      title: "E-Commerce Development Company in Delhi",
      discp:
        "We make custom e-commerce sites that are easy for people to use and help your business grow by getting more customers and more online sales.",
      className: "card-blue",
      route: "/delhi/ecommerce-development-company-in-delhi",
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
      // sub: "BigCommerce",
      title: "BigCommerce Development Company in Delhi",
      discp:
        "You can customize BigCommerce solutions to meet the needs of your business. These solutions are built to help you sell more online and grow faster.",
      className: "card-yellow",
      route: "/delhi/bigcommerce-development-company-in-delhi",
    },
    // {
    //     icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
    //     // sub: "Shopify",
    //     title: "Shopify Development in Noida",
    //     discp:
    //         "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
    //     className: "card-green center-item-noida ",
    //     route: "/shopify-development-company-in-delhi",
    // },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-noida">
          {stats.map((stat, index) => (
            <Link href={`${stat.route}`} key={index} className={`stat-card-noida ${stat.className}`}>
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
          <h4>How Do We Specialize in E-Commerce Development Services?</h4>
          <p>
            In today's digital world, a great e-commerce website is no longer a
            luxury; it's a need. An online shop may help you get more consumers
            and expand quicker, whether you're a little company or a well-known
            brand. That's when Kushel Digi Solutions comes in. We don't simply
            make websites; we help your business develop online. We can create
            unique web storefronts for your company using platforms like
            Shopify, WooCommerce, and BigCommerce. We want our website to be
            easy to use, load quickly, have a safe checkout, and make buying
            easy. Kushel Digi gives you more than just a website; it gives you a
            robust e-commerce solution that can help your company grow.
          </p>
        </section>
      </section>
    </>
  );
}
