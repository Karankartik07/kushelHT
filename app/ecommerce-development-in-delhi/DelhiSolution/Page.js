"use client";
import React from "react";
import "./delhisol.css";
import Link from "next/link";
const DelhiSolution = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className="primary-heading">
            E-Commerce Solutions that Help You Get More Sales and Grow
          </h2>
          <p>
            For a decade, Kushel Digi Solutions has served custom ecommerce
            development services across the globe. 1000s of businesses find
            their dream website through us while being on a budget.
          </p>
          <Link href="/contact-us">
            <button>Get a Free Consultation Today</button>{" "}
          </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3>Design for Conversion</h3>
            <p>
              We make clean, easy-to-use ecommerce websites that help visitors
              make rapid judgments and increase the number of people who buy
              things.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Improved Checkout Experience</h3>
            <p>
              Our ecommerce development professionals can help you make your
              checkout experience faster, safer, and easier, which will help you
              reduce cart abandonment.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Smart Filters and Navigation</h3>
            <p>
              We add smart filters, category filters and navigation bars, so
              that customer can find their product easily.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Mobile-First Development</h3>
            <p>
              We design mobile-responsive ecommerce websites to ensure no
              customer loss. Our ecommerce store runs smoothly on all devices.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Scalable Architecture</h3>
            <p>
              As a leading ecommerce development company in Delhi, we create
              scalable websites that grow along with the brand.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Ongoing Support and Optimization</h3>
            <p>
              Our work doesn't stop after launch. We provide ongoing support and
              maintenance. We fix bugs, update plugins add new features,
              ensuring smooth and fast running of your ecommerce store.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DelhiSolution;
