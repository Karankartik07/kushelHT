"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function CarolinaStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1755856055/coding_1_ssl8nd.png",
      // sub: "eCommerce",
      title: "Web Development Company in North Carolina",
      discp:
        "We build custom websites that bring your ideas to life and help your business grow with more reach and more sales online.",
      className: "card-blue",
      route: "/north-carolina/web-development-company-in-north-carolina",
    },
    // {
    //   icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
    //   // sub: "BigCommerce",
    //   title: "BigCommerce Development Company in Dubai",
    //   discp:
    //     "You can customize BigCommerce solutions to meet the needs of your business. These solutions are built to help you sell more online and grow faster.",
    //   className: "card-yellow",
    //   route: "/dubai/bigcommerce-website-development-dubai",
    // },
    // {
    //     icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
    //     // sub: "Shopify",
    //     title: "Shopify Development in Dubai",
    //     discp:
    //         "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
    //     className: "card-green center-item-noida ",
    //     route: "/dubai/shopify-web-development-services-dubai",
    // },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-dhabi">
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
              <p className="ptag-service-dhabi">{stat.discp}</p>
              <Link href={`${stat.route}`}>
                {" "}
                <button className="btn-service-visit">Visit More</button>
              </Link>
            </Link>
          ))}
        </section>

        <section className="service-sec2">
          <h4>Why Choose Our Web Development Services in North Carolina?</h4>
          <p>
            Customers are frequently just starting to perceive your business by
            the time they visit your site. We are doing this as a result of
            paying attention to designing solutions that are fast, attractive,
            and easy to use. We do not simply create websites in Kushel Digi
            Solutions, but we design online platforms that enable your brand to
            shine. Starting with eCommerce stores, we incorporate the most
            up-to-date tools and technology to provide secure, responsive, and
            user-friendly websites for businesses. We aim to deliver a site that
            is practical and sustainable.
          </p>
        </section>
      </section>
    </>
  );
}
