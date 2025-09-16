"use client";
import React from "react";
import "./gurgaonstats.css";
import Link from "next/link";

export default function GurgaonStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      title: "E-Commerce Development Company in Gurgaon",
      route: "/gurgaon/ecommerce-development-company-in-gurgaon",
      discp:
        "Our ecommerce sites are customized to help Gurgaon grow its emerging retail and technology landscape with high conversion potential. Power up your business idea into a robust online store.",
      className: "card-blue",
    
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
      title: "BigCommerce Development Company in Gurgaon",
      discp:
        "Customized solutions help achieve growth through the power of BigCommerce. We do it all, from sleek design to profound integration, to get your online shop optimized in the Gurgaon market.",
      className: "card-yellow",
      route: "/gurgaon/bigcommerce-development-company-in-gurgaon",
    },
  ];

  return (
    <section className="main-stats-sec">
      <h3 className="service-heading">Our Services</h3>
      <section className="stats-section-noida">
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
              <p className="ptag-service">{stat.discp}</p>
              <button className="btn-service-visit">Visit More</button>
            </Link>
          ) : (
            <div
              key={index}
              className={`stat-card-noida ${stat.className}`}
            >
              <div className="stat-icon">
                <img src={stat.icon} alt="icon" />
              </div>
              <div className="service-title">
                <span>{stat.title}</span>
              </div>
              <p className="ptag-service">{stat.discp}</p>
              {/* No button / or a disabled button */}
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
          Businesses no longer have a choice when it comes to e-commerce, particularly in the city of Gurgaon, where the transformation in most sectors was digital. We focus on powerful ecommerce design and strategy that works wonders in building brand experiences, whether you are starting a new business or it is an existing business that you want to grow. Whether it was headless commerce or extending omnichannel connections, we have assisted the brands of Gurgaon in tapping their online potential.
          With platforms supported by Shopify, WooCommerce, BigCommerce, and custom stacks, we provide secure, mobile-first, and SEO-optimized storefronts that meet your objectives. Your store isn’t just a website; it’s your most valuable sales channel. Let’s treat it that way.
        </p>
      </section>
    </section>
  );
}
