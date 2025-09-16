"use client";
import React from "react";
import "./finlandBanner3.css";
import Link from "next/link";
const FinlandBanner3 = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className="primary-heading">
            Looking for E-Commerce Solutions That Drive Conversions and Business
            Growth?
          </h2>
          <p>
            We don't just set up online stores; we also create whole ecommerce
            communities that not only bring in and turn customers, but also keep
            them engaged and coming back over time. Each answer is made to help
            you keep growing.{" "}
          </p>
          <Link href="/contact-us">
            <button>Get a Free Consultation Today</button>{" "}
          </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3>Custom Store Development</h3>
            <p>
              We convert casual website visitors to loyal paying customers
              through bespoke web design services for ecommerce brands, which
              ensure they resonate with the target audience.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Mobile-First and Ultra-Responsive</h3>
            <p>
              Your online store will be accessible on smartphones, tablets, and
              desktops, and will provide responsive shopping experiences,
              ultrafast to ensure speed and responsiveness.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Conversion-Focused Design</h3>
            <p>
              Increased sales are a common phenomenon when users are presented
              with easy navigation and strategically placed calls to action,
              which are part of the design strategies we apply to ecommerce
              websites.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Flexible Scalability</h3>
            <p>
              There is no need to start from scratch as our systems seamlessly
              incorporate additional products and market areas, and even new
              features while maintaining site speed, security and
              responsiveness.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Marketing and Search Optimization Ready</h3>
            <p>
              Each online store will be constructed in accordance with industry
              benchmarks on SEO and digital marketing, thus yielding a higher
              rank, more organic traffic, and easier marketing.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Post Launch Support</h3>
            <p>
              Following the launch, we provide ongoing custom maintenance,
              reviews, and updates so that the ecommerce store continues optimal
              functioning optimally.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinlandBanner3;
