"use client";
import React from "react";
import "./finlandcardsec.css";
// import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/navigation";
function FinlandCardSection() {
  const router = useRouter();
  return (
    <section className="platforms">
      <h3 className="plt-head primary-heading">
        Leveraging the Best E-Commerce Platforms to Drive Your Growth
      </h3>
      <p className="plt-para secondary-heading">
        Using well-known systems like Shopify, WooCommerce, and Magento, we
        create scalable, customized, safe, and quick online shops that expand
        with your company. We can help you create a new website or migrate your
        existing one. Our knowledgeable staff handles every stage.
      </p>
      <div className="plt-cards">
        <div className="plt-card">
          <div className="plt-logo">
            <Image
              width="219"
              height="50"
              loading="lazy"
              // src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/bigcommerce-3_xfn6e6.png'
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835775/bigcommerce-logo_quhwmf.webp"
              alt="BigCommerce development services official logo"
            />
          </div>
          <h3>Your Expert BigCommerce Partner</h3>
          <ul className="plt-ul">
            <li className="plt-li">
              {" "}
              BigCommerce Store Migration & Replatforming
            </li>
            <li className="plt-li"> Custom BigCommerce App Development</li>
            <li className="plt-li"> BigCommerce Store Setup & Launch</li>
            <li className="plt-li"> BigCommerce API Integrations</li>
            <li className="plt-li">
              {" "}
              B2B eCommerce Solutions with BigCommerce
            </li>
            <li className="plt-li">
              {" "}
              D2C eCommerce Solutions with BigCommerce
            </li>
            <li className="plt-li">
              {" "}
              BigCommerce for Regulated & Niche Industries
            </li>
            <li className="plt-li">
              {" "}
              BigCommerce Headless Commerce Development
            </li>
            <li className="plt-li">
              {" "}
              Full-Service BigCommerce Website Development
            </li>
            <li className="plt-li">
              {" "}
              BigCommerce Development for Healthcare Brands
            </li>
          </ul>
          {/* <Link href="/bigcommerce-development" className="plt-btn">
          Learn More
        </Link> */}
          <span
            onClick={() => router.push("/bigcommerce-development")}
            className="plt-btn"
          >
            Learn More{" "}
          </span>
        </div>
        <div className="plt-card">
          <div className="plt-logo">
            <Image
              width="156"
              height="46"
              loading="lazy"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/shopify-logo_bcrvfv.webp"
              alt="Shopify development services official logo "
            />
          </div>
          <h3>Official Shopify Partner Agency</h3>
          <ul className="plt-ul">
            <li className="plt-li">
              Shopify Replatforming & Migration Services
            </li>
            <li className="plt-li">Custom Shopify App Development</li>
            <li className="plt-li">
              Shopify Conversion Rate Optimization (CRO)
            </li>
            <li className="plt-li">UI/UX Design for Shopify Stores </li>
            <li className="plt-li">
              Performance Optimization for Shopify Websites
            </li>
            <li className="plt-li">B2B eCommerce Solutions on Shopify</li>
            <li className="plt-li">D2C Shopify Solutions for Growing Brands</li>
            <li className="plt-li">Seamless Shopify API Integrations</li>
            <li className="plt-li">Full-Service Shopify Website Development</li>
            <li className="plt-li">
              Headless Commerce Development with Shopify
            </li>
          </ul>
          {/* <Link href="/shopify-development" className="plt-btn">
          Learn More
        </Link> */}
          <span
            onClick={() => router.push("/shopify-development")}
            className="plt-btn"
          >
            Learn More{" "}
          </span>
        </div>
        <div className="plt-card">
          <div className="plt-logo">
            <Image
              width="156"
              height="46"
              loading="lazy"
              // src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/magento-4_c38yp2.png'
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/manish_sir_logo_e3ckbh.png"
              alt="Magento development services official logo"
            />
          </div>
          <h3>Trusted Magento Development Agency</h3>
          <ul className="plt-ul">
            <li className="plt-li">Magento Store Replatforming & Migration</li>
            <li className="plt-li">Custom Magento Theme Design & Build</li>
            <li className="plt-li">Magento Extension Development Services</li>
            <li className="plt-li">B2B eCommerce Development on Magento</li>
            <li className="plt-li">
              Magento Integration with Third-Party Tools
            </li>
            <li className="plt-li">End-to-End Magento Website Development</li>
            <li className="plt-li">Headless Commerce Solutions for Magento</li>
            <li className="plt-li">Magento D2C Store Setup & Optimization</li>
          </ul>
          {/* <Link href="/magento-development" className="plt-btn">
          Learn More
        </Link> */}
          <span
            onClick={() => router.push("/magento-development")}
            className="plt-btn"
          >
            Learn More{" "}
          </span>
        </div>
      </div>
    </section>
  );
}

export default FinlandCardSection;
