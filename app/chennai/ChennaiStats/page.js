"use client";
import React from "react";
import "./chennaistats.css";
import Link from "next/link";

export default function ChennaiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      title: "eCommerce Development in Chennai",
      discp:
        "We craft e-commerce portals that resonate with the contemporary audience in Chennai. Our <strong>eCommerce Development in Chennai</strong> transforms your business idea into a fully functional online store, from concept to deployment.",
      className: "card-blue",
      route: "/chennai/ecommerce-development-company-in-chennai",
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
      title: "Bigcommerce Development in Chennai",
      discp:
        "Unleash BigCommerce with solutions that are tailored to meet diverse Chennai markets. With intelligent design and scalable integrations, we build stores that grow with your business.",
      className: "card-yellow",
      route: "/chennai/bigcommerce-development-company-in-chennai",
    },

    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1755856055/coding_1_ssl8nd.png",

      title: "Web Development Company in Chennai",
      discp:
        "We create powerful websites that connect with the modern audience in Chennai. Our web development services turn your vision into a fully functional, responsive, and user-friendly website, from planning to launch.",
      className: "card-green center-item-noida ",
      route: "/chennai/web-development-company-in-chennai",
    },
  ];

  return (
    <section className="main-stats-sec">
      <h2 className="service-heading">Our Services</h2>
      <section className="stats-section-chennai">
        {stats.map((stat, index) =>
          stat.route ? (
            <Link
              href={stat.route}
              key={index}
              className={`stat-card-noida ${stat.className}`}
            >
              <div className="stat-icon">
                <img src={stat.icon} alt="icon" />
              </div>
              <div className="service-title">
                <span>{stat.title}</span>
              </div>
              <p
                className="ptag-service"
                dangerouslySetInnerHTML={{ __html: stat.discp }}
              />
              <button className="btn-service-visit">Visit More</button>
            </Link>
          ) : (
            <div key={index} className={`stat-card-noida ${stat.className}`}>
              <div className="stat-icon">
                <img src={stat.icon} alt="icon" />
              </div>
              <div className="service-title">
                <span>{stat.title}</span>
              </div>
              <p
                className="ptag-service"
                dangerouslySetInnerHTML={{ __html: stat.discp }}
              />
              <button className="btn-service-visit" disabled>
                Coming Soon
              </button>
            </div>
          )
        )}
      </section>

      <section className="service-sec2">
        <h4>Specializing in E-Commerce Website Development</h4>
        <p>
          Ecommerce isn’t just trending in Chennai; it’s thriving in this
          diverse and digitally forward city. Whether starting out as small-time
          fashion brands or large-scale B2B distributors,{" "}
          <strong>ecommerce development company in Chennai</strong> are finding
          their way to the internet to find more people and are looking to
          streamline their efforts. An effective ecommerce site today does more
          than generate sales—it serves as your brand’s always-on digital
          storefront.
        </p>
        <p>
          We believe in strategy, design, and technology to build
          high-converting ecommerce websites that are secure and scalable at
          Kushel Digi. Our websites are mobile-responsive, ultra-fast, and
          user-friendly, ensuring you reach customers locally and globally. We
          future-proof your store with SEO best practices and seamless backend
          integrations, so you can focus on scaling, not fixing.
        </p>
      </section>
    </section>
  );
}
