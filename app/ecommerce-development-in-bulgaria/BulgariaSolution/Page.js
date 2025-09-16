"use client";
import React from "react";
import "./londonsol.css";
import Link from "next/link";
const BulgariaSolution = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className="primary-heading">
            E-commerce Solutions That Drive Conversions & Business Growth
          </h2>
          <p>
            Kushel Digi Solutions has been developing quick, safe, and strong
            bespoke ecommerce websites for more than 1,000 customers across the
            globe for decades. We are here to assist companies in reaching their
            goals in a way that works for them.
          </p>
          <Link href="/contact-us">
            <button>Get a Free Consultation Today</button>{" "}
          </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3>Custom Store Development</h3>
            <p>
              We develop custom online shops that meet your brand and company
              objectives to help you stand out, get more customers, and convert
              them into passionate fans.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Conversion-focused Designs</h3>
            <p>
              Results are important, but so are looks. Every layout we make has
              clear menus, clever call-to-action buttons, and easy
              step-to-payment routines. All of these things are meant to get
              visitors to click on the purchase button.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Safe and Fast Performance</h3>
            <p>
              A sluggish or dangerous site is the worst thing for a sale. We
              keep consumers satisfied and wanting to remain by giving them
              quick load speeds and powerful security protections.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3> Scalable and Flexible</h3>
            <p>
              Your store should be able to expand with you, and ours does so
              effortlessly. You don't have to completely rebuild your site to
              add new features, extend your catalogs, or use new tools. It
              merely takes a few clicks.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Ready for SEO and Marketing</h3>
            <p>
              As soon as we click publish, your site will have built-in
              marketing tiles and an SEO-first structure. This will help search
              engines and advertisements bring in visitors faster.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Ongoing Help and Improvement</h3>
            <p>
              We don't just leave after the launch. Our crew stays on to provide
              maintenance, upgrades, and performance checks to make sure your
              business continues changing as your objectives do.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BulgariaSolution;
