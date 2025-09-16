"use client";
import React from "react";
import "./DenmarkBanner3.css";
import Link from "next/link";
const DenmarkBanner3 = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className="primary-heading">
            E-Commerce Solutions to Maximise Revenue and Foster Growth
          </h2>
          <p>
            Since 2017, Kushel Digi has been delivering Custom Ecommerce
            Solutions for more than 1000+ clients across globe. We are committed
            to help your business grow faster.
          </p>
          <Link href="/contact-us">
            <button>Get a Free Consultation Today</button>{" "}
          </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3>Tailored Online Shops</h3>
            <p>
              We design ecommerce platforms that work in harmony with your
              business, products, and goals, making it simple for customers to
              peruse, purchase, and come back for more.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Mobile-Friendly Design </h3>
            <p>
              Your business will seem great and work well on all devices,
              especially mobile ones, so customers can shop whenever and
              wherever they choose.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Easy Checkout Process</h3>
            <p>
              Reducing cart abandonment is our primary goal in streamlining the
              checkout process. With fewer clicks, clear instructions, and
              secure payment options, your store will see an increase in
              completed purchases.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Fast-Loading Websites</h3>
            <p>
              You must act promptly! In order to improve user experience, search
              engine results, and visitor retention, we guarantee that your
              website runs quickly.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Search Engine Optimised Framework</h3>
            <p>
              If you want your online shop to rank higher in Google and get more
              organic traffic, you need one of our websites built with an
              SEO-friendly layout and clean code.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Ongoing Support and Improvement</h3>
            <p>
              Managing updates, fixing issues, and helping you grow with
              data-driven improvements and new services are all things we'll be
              there for you after launch.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DenmarkBanner3;
