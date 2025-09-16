"use client";
import React from "react";
import "./londonsol.css";
import Link from "next/link";
const NoidaSolution = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className="primary-heading">
            E-Commerce Solutions Designed to Boost Sales and Scale Your Business
          </h2>
          <p>
            We at Kushel Digi Solutions create creative, conversion-focused
            ecommerce websites that will help you expand more quickly, draw in
            the correct kind of traffic, and convert one-time visitors into
            devoted clients.{" "}
          </p>
          <Link href="/contact-us">
            <button>Get a Free Consultation Today</button>{" "}
          </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3>Conversion-Optimized Design</h3>
            <p>
              We design aesthetically pleasing layouts with unambiguous calls to
              action, seamless navigation, and distraction-free checkout pages
              that seamlessly assist visitors in completing a transaction.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>A Smooth Shopping Journey</h3>
            <p>
              Every step, from the product search to the final checkout, is made
              to be simple, which improves consumer happiness and engagement.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Mobile & Speed Optimization</h3>
            <p>
              Your shop will load quickly and be completely responsive, which
              will guarantee a perfect experience across all devices and lower
              bounce rates.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Intelligent Product Search & Filtering</h3>
            <p>
              We employ sophisticated search tools and filters to help visitors
              discover what they're searching for quickly, which speeds up
              decision-making and increases sales.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Integrated Marketing & SEO Tools</h3>
            <p>
              With integrated retargeting, email marketing, and SEO solutions,
              we help you expand your audience and increase steady traffic to
              your business.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Scalable Architecture for Development</h3>
            <p>
              Our websites can easily accommodate additional items, orders, and
              customers without slowing down or requiring a complete redesign
              since they are designed to expand with your company.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default NoidaSolution;
