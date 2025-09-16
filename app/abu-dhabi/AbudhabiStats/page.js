"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function AbuDhabiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1755856055/coding_1_ssl8nd.png",
      // sub: "eCommerce",
      title: "Web Development Company in Abu Dhabi",
      discp:
        "Check out personalized ecommerce solutions that fit your business needs.  It's easy to build your business online, make more sales, and keep your customers happy.",
      className: "card-blue",
      route: "/abu-dhabi/web-development-company-in-abu-dhabi",
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
          <h4>Smart E-Commerce Development for Businesses in Abu Dhabi</h4>
          <p>
            Our team of talented developers focus on building ecommerce
            websites. If you're just starting out or already have a brand, we’re
            here to help you set up an online store that looks great, runs well,
            and boosts your sales. Our ecommerce sites are fast, secure,
            user-friendly, flexible, and awesome for SEO, so your business can
            totally grow without any limits. We create tailored ecommerce sites
            that fit your goals and provide you with the tools you need to
            thrive online. No hype, no fuss—just genuine results and growth for
            your site. Let's make your online store amazing!
          </p>
        </section>
      </section>
    </>
  );
}
