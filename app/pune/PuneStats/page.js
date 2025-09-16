"use client";
import React from "react";
import "./dubaistats.css";
import Link from "next/link";

export default function PuneStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
      // sub: "eCommerce",
      title: "E-Commerce Website Development in pune",
      discp:
        "We develop ecommerce stores that resonate with the shopping behaviours of modern consumers based in Pune. Our Ecommerce Website Development in Pune converts your business idea into a thriving online shop with the capability to grow through concept to launch and beyond.",
      className: "card-blue",
      route: "/pune/ecommerce-website-development-in-pune",
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
    //   icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
    //   // sub: "Shopify",
    //   title: "Web Development Company in Pune",
    //   discp:
    //     "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
    //   className: "card-green center-item-noida ",
    //   route: "/pune/web-development-company-in-pune",
    // },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-pune">
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
          <h4>How We Specialize in Ecommerce Website Development </h4>
          <p>
            The ecommerce in Pune, a city of young professionals, tech-savvy
            startups, and a rapidly developing retail market, is thriving with a
            wide scope of business opportunities. Whether it is a small shop or
            a large-scale business, the business within Pune is adopting
            ecommerce in order to provide reach to customers and to serve them
            24/7. A good ecommerce site today is not just a platform to conduct
            business; it is the digital face of your brand and a 24/7 store
            window.
          </p>
          <p>
            We collaborate on strategy, design, and technology to produce
            Ecommerce Website Development in Pune that are fast, secure, and
            prepared to convert. Our websites are mobile-friendly and designed
            in such a way that they are not complicated, therefore easy to
            navigate and connect with customers geographically. SEO-optimized
            and backend-integrated, you can spend your time expanding your
            business, knowing that your online store is built and developed,
            ready to grow.
          </p>
        </section>
      </section>
    </>
  );
}
