"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function LakeStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      // sub: "eCommerce",
      title: "E-commerce Development Company in Salt Lake City",
      discp:
        "We build custom e-commerce stores that are simple to use and help your Salt Lake City business grow by attracting more customers and boosting online sales.",
      className: "card-blue",
      route: "/salt-lake-city/ecommerce-development-in-salt-lake-city",
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
          <h4>How Do We Specialize in Ecommerce Development Services?</h4>
          <p>
            The business environment in e-commerce has now become highly
            digital, and a powerful entity is not merely a nice-to-have
            viewpoint. Success in business cannot happen without it. Regardless
            of the scale and character of a business, whether a small local one
            or a well-established Salt Lake City-based brand, an online store
            allows for finding more people and expanding more quickly. That's
            where Kushel Digi comes in. We don't just build websites. We help
            your business thrive online.
          </p>
          <p>
            We design your own online stores using the leading shopping
            platforms such as Shopify, BigCommerce, Magenta, and WooCommerce.
            Our strength lies in creating easily accessible websites designed to
            load fast, provide secure payment gateways, and ensure that shopping
            with your customers is a pleasing experience. Kushel Digi gives you
            more than just a website. We provide you with a complete e-commerce
            solution that helps your Salt Lake City business succeed and scale.
          </p>
        </section>
      </section>
    </>
  );
}
