"use client";
import React from "react";
import "./irelandBanner3.css";
import Link from "next/link";
const IrelandBanner3 = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className="primary-heading">
            Ready to Maximize Conversions with Smart E-Commerce Solutions?
          </h2>
          <p>
            We don't just build online businesses; we also build whole ecommerce
            communities that not only draw in and convert consumers, but also
            keep them interested and coming back over time. Every response is
            meant to help you develop.{" "}
          </p>
          <Link href="/contact-us">
            <button>Get a Free Consultation Today</button>{" "}
          </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3> Building a Custom Store</h3>
            <p>
              We turn casual visitors to websites into devoted paying customers
              by offering custom web design services for ecommerce firms that
              make sure they appeal to the right people.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Mobile-First and Responsive</h3>
            <p>
              Your online store will work on smartphones, tablets, and PCs, and
              it will be responsive and super quick to make sure it is always
              available.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Design for Conversion</h3>
            <p>
              When customers can easily find their way around and see calls to
              action in the right places, sales go up. This is one of the design
              ideas we utilize for ecommerce websites.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Flexible Scalability</h3>
            <p>
              You don't have to start over since our systems can easily add new
              items, market areas, and even features without slowing down the
              site, making it less secure, or making it less responsive.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Ready for Marketing</h3>
            <p>
              Each online business will be built using best practices in SEO and
              digital marketing, which will help it rank better, get more
              organic traffic, and make marketing simpler.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Support After Launch </h3>
            <p>
              After the launch, we provide continuous bespoke maintenance,
              reviews, and upgrades to make sure the ecommerce shop is working
              at its best.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IrelandBanner3;
