"use client";
import React from "react";
import "./dubaistats.css";
import Link from "next/link";

export default function DubaiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      // sub: "eCommerce",
      title: "E-Commerce Website Development Dubai",
      discp:
        "Get ecommerce options in Dubai that are made just for your business. Make it easy for people to remember your online business, buy more, and have a better experience.",
      className: "card-blue",
      route: "/dubai/ecommerce-website-development-dubai",
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1755856055/coding_2_lmrkvr.png",
      // sub: "BigCommerce",
      title: "Website Design Company in Dubai",
      discp:
        "You can customize Website solutions to meet the needs of your business. These solutions are built to help you sell more online and grow faster.",
      className: "card-yellow",
      route: "/dubai/website-design-company-in-dubai",
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
      // sub: "Shopify",
      title: "Shopify Web Development Services Dubai",
      discp:
        "It might help your business grow and make more sales if you pick the right Dubai Shopify software company. We can help your company grow by giving you quick, adaptable, and SEO-friendly options.",
      className: "card-green center-item-noida ",
      route: "/dubai/shopify-web-development-services-dubai",
    },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-dubai">
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
          <h4>Expert E-Commerce Development can Transform your Brand</h4>
          <p>
            The skilled engineers we work with make ecommerce sites and Shopify
            shops. As your business starts up or grows, we can help you make an
            online store that looks great, is simple to use, and makes more
            sales. It's quick, safe, easy to scale, good for SEO, and flexible,
            so they can adapt to your business. We only want to help you do well
            online by making custom Shopify shops and ecommerce sites for your
            business. Not a single extra or time-waster. The internet company
            only wants to succeed. The skilled ecommerce development services we
            offer in Dubai will make your brand stand out.
          </p>
        </section>
      </section>
    </>
  );
}
