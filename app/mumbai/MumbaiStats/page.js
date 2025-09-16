"use client";
import React from "react";
import "./dubaistats.css";
import Link from "next/link";

export default function MumbaiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      title: "E-Commerce Development Company in Mumbai",
      route: "/mumbai/ecommerce-website-development-company-in-mumbai",
      discp:
        "We make custom e-commerce sites that are easy for people to use and help your business grow by getting more customers and more online sales.",
      className: "card-blue",
    },
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1755856055/coding_2_lmrkvr.png",
      title: "Website Design Company in Mumbai",
      discp:
        "We design custom websites that are easy for people to use and help your business grow by getting more customers and more online sales.",
      className: "card-green ",
      route: "/mumbai/website-design-company-in-mumbai",
    },
  ];

  return (
    <section className="main-stats-sec">
      <h3 className="service-heading">Our Services</h3>
      <section className="stats-section-noida">
        {stats.map((stat, index) => {
          const CardContent = (
            <>
              <div className="stat-icon">
                <img src={stat.icon} alt="icon" />
              </div>
              <div className="service-title">
                <span>{stat.title}</span>
              </div>
              <p className="ptag-service">{stat.discp}</p>

              {stat.route ? (
                <Link href={stat.route}>
                  <button className="btn-service-visit">Visit More</button>
                </Link>
              ) : (
                <button className="btn-service-visit disabled">
                  Coming Soon
                </button>
              )}
            </>
          );

          return stat.route ? (
            <Link
              href={stat.route}
              key={index}
              className={`stat-card-noida ${stat.className}`}
            >
              {CardContent}
            </Link>
          ) : (
            <div
              key={index}
              className={`stat-card-noida ${stat.className}`}
            >
              {CardContent}
            </div>
          );
        })}
      </section>

      <section className="service-sec2">
        <h4>How Do We Specialize In Website Design Services?</h4>
        <p>
          In today’s digital world, a great website is no longer a luxury;
          it’s a need. A website may help you get more consumers and expand
          quickly, whether you’re a small company or a well-known brand.
          That’s when Kushel Digi Solutions came in. We don’t simply make
          websites; we help your business develop online. We can create unique
          web storefronts for your company using platforms like Shopify,
          WooCommerce, and BigCommerce. We want your website to be easy to
          use, load quickly, have a safe checkout, and make buying easy.
          Kushel Digi gives you more than just a website; it gives you a
          robust solution that can help your company grow.
        </p>
      </section>
    </section>
  );
}
