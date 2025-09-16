"use client"
import React from 'react'
import './homeBan.css'
// import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
function Card() {
  const router = useRouter();
  return (
    <section className="platforms">
      <h3 className="plt-head primary-heading">Delivering Success with the Best Ecommerce Platforms

      </h3>
      <p className="plt-para secondary-heading">
        Our expert team has specialised experience in  top-tier ecommerce technologies to provide seamless migration, custom development, and optimized solutions according to your business needs. Don't settle for less, we will let your brand get the best.
      </p>
      <div className="plt-cards">

        <div className="plt-card">
          <div className="plt-logo">
            <Image width="219" height="50" loading='lazy'
              // src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/bigcommerce-3_xfn6e6.png'       
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835775/bigcommerce-logo_quhwmf.webp"
              alt="BigCommerce development services official logo" />
          </div>
          <h3>
            Certified  BigCommerce Partner Agency
          </h3>
          <ul className="plt-ul">
            <li className="plt-li"> BigCommerce Replatforming & Migration Services</li>
            <li className="plt-li"> BigCommerce Custom  App Development</li>
            <li className="plt-li"> BigCommerce Store Setup & Implementation</li>
            <li className="plt-li"> BigCommerce API Integration Services</li>
            <li className="plt-li"> BigCommerce B2B Solutions</li>
            <li className="plt-li">BigCommerce D2C solutions</li>
            <li className="plt-li">BigCommerce for Regulated Industries</li>
            <li className="plt-li"> BigCommerce Headless Commerce Development  </li>
            <li className="plt-li">BigCommerce Website Development </li>
            <li className="plt-li">Big Commerce Website development for Healthcare</li>
          </ul>
          {/* <Link href="/bigcommerce-development" className="plt-btn">
          Learn More
        </Link> */}
          <span onClick={() => router.push("/bigcommerce-development")} className="plt-btn">Learn More </span>
        </div>
        <div className="plt-card">
          <div className="plt-logo">
            <Image width="156" height="46" loading='lazy'

              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/shopify-logo_bcrvfv.webp"
              alt="Shopify development services official logo " />
          </div>
          <h3>
            Certified  Shopify Plus Agency
          </h3>
          <ul className="plt-ul">
            <li className="plt-li">Shopify Replatforming & Store Migration </li>
            <li className="plt-li">Shopify App Development Custom</li>
            <li className="plt-li">Shopify Conversion Rate Optimization (CRO) </li>
            <li className="plt-li">UI/UX Design for Shopify Stores </li>
            <li className="plt-li">Performance Optimization for Shopify Sites</li>
            <li className="plt-li">Shopify B2B Solutions</li>
            <li className="plt-li">Shopify D2C Solutions</li>
            <li className="plt-li">Shopify API Integration</li>
            <li className="plt-li">Shopify Website Development </li>
            <li className="plt-li">Shopify Headless Storefront Development </li>
          </ul>
          {/* <Link href="/shopify-development" className="plt-btn">
          Learn More
        </Link> */}
          <span onClick={() => router.push("/shopify-development")} className="plt-btn">Learn More </span>
        </div>
        <div className="plt-card">
          <div className="plt-logo">
            <Image width="156" height="46" loading='lazy'
              // src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/magento-4_c38yp2.png'
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/manish_sir_logo_e3ckbh.png"
              alt="Magento development services official logo" />
          </div>
          <h3>
            Expert  Magento Agency
          </h3>
          <ul className="plt-ul">
            <li className="plt-li">Magento Replatforming & Migration </li>
            <li className="plt-li"> Custom Magento Theme Design & Development </li>
            <li className="plt-li"> Magento Extension Development</li>
            <li className="plt-li"> Magento B2B Store Development</li>
            <li className="plt-li">Magento Integrations with Third-Party Systems</li>
            <li className="plt-li">Magento Website Development</li>
            <li className="plt-li"> Magento Headless Commerce Solutions</li>
            <li className="plt-li">Magento D2C Store Development</li>
          </ul>
          {/* <Link href="/magento-development" className="plt-btn">
          Learn More
        </Link> */}
          <span onClick={() => router.push("/magento-development")} className="plt-btn">Learn More </span>
        </div>
      </div>
    </section>

  )
}

export default Card