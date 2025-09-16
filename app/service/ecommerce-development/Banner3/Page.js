"use client"
import React from 'react'
import './Banner3.css'
import Link from 'next/link'
const Banner3 = () => {
  return (
    <>
    <div className="containerEcom">
  <section className="left-sectionEcom">
    <h6>Ecommerce Development Agency</h6>
    <h2 className='primary-heading'>
   Ecommerce Solutions for Higher Conversions and Growth 
    </h2>
    <p>
    Since 2017, Kushel Digi has been delivering Custom Ecommerce Solutions for more than 1000+ clients across globe. We are committed to help your business grow faster. 
    </p>
     <Link href="/contact-us"><button>
      Get a Free Consultation Today</button> </Link>
  </section>
  <section className="right-sectionEcom">
    <div className="content-blockEcom">
      <h3>Custom Solutions</h3>
      <p>
      It doesn’t matter whether you're a startup or an established brand, we tailor our eCommerce solutions to fit your unique needs. Our customized approach helps maximize conversions and to enhance user experience.
      </p>
    </div>
    <div className="content-blockEcom">
      <h3>Advanced Technologies</h3>
      <p>
      Our experts at Kushel Digi has been leveraging the best ecommerce technologies like Shopify, BigCommerce and Magento to build fast, secure, and feature-rich eCommerce websites and ensure long-term scalability and efficiency.
      </p>
    </div>
    <div className="content-blockEcom">
      <h3>Ongoing Support</h3>
      <p>
      The biggest advantage of availing our commitment doesn’t end with development, we provide ongoing support and maintenance to keep your eCommerce store running smoothly and efficiently.
      </p>
    </div>
    <div className="content-blockEcom">
      <h3>Mobile-First Approach</h3>
      <p>
      With mobile shopping on the rise, we design responsive and mobile-optimized eCommerce stores. This ensures a seamless experience across all devices for better engagement and conversions.
      </p>
    </div> 
     <div className="content-blockEcom">
      <h3>SEO & Performance Optimization</h3>
      <p>
      We build eCommerce stores with SEO-friendly structures and fast-loading pages to improve visibility and user experience. Our optimization techniques help drive more organic traffic and boost rankings.
      </p>
    </div> 
    <div className="content-blockEcom">
      <h3>Secure & Reliable Payment Processing</h3>
      <p>
      We implement secure payment gateways with multiple options, ensuring a seamless and trustworthy checkout experience. From PayPal to Stripe, we integrate the best payment solutions for hassle-free transactions.
      </p>
    </div>
  </section>
</div>

    </>
  )
}

export default Banner3