"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function RaleighStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1755856055/coding_1_ssl8nd.png",
      // sub: "eCommerce",
      title: "Web Development Company in Raleigh",
      discp:
        "We create websites that reflect your brand, attract the right audience, and drive more business success online.",
      className: "card-blue",
      route: "/raleigh/web-development-company-raleigh",
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
          <h4>Why Choose Us for Web Development in Raleigh?</h4>
          <p>
            Your online presence must be more than a virtual place. It must
            serve as an instrument that expresses credibleness, relates to the
            customer and that boosts sales. At Kushel Digi Solutions, we are
            dealing with custom development to suit your business. We can design
            it to be a modern storefront, or to be fast-moving or to have a
            security checkout process. Our responsive, SEO-friendly and
            competitive in the market websites are developed using our expertise
            based in Raleigh.
          </p>
        </section>
      </section>
    </>
  );
}
