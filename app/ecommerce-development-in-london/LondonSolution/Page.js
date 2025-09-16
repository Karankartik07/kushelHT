"use client"
import React from 'react'
import './londonsol.css'
import Link from 'next/link'
const LondonSolution = () => {
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
            <h3>Custom E-Commerce Solutions</h3>
            <p>
            Off-the-shelf templates rarely meet real-world needs, so we write each feature for your growth plan, buyer habits, and catalog layout, giving shoppers a smooth, branded path from interest to checkout.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Advanced Tech Integration</h3>
            <p>
            Whether it's AI recommendations, headless setups, or intelligent search, our engineers reach for proven tools that keep your store fast, flexible, and ready for tomorrow's trends.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Ongoing Support</h3>
            <p>
            Go-live is just the start; we monitor speed, apply updates, fix issues, and watch the market with you, so your shop keeps shining while competitors flicker out.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Mobile-First Design</h3>
            <p>
            With phones driving sales, we sketch every page on a small screen first scale up, giving every visitor, thumb or mouse, the same quick, friendly experience.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>SEO & Speed Optimized</h3>
            <p>
            Clean code, smart schema, crisp images, and tiny load times are baked into every build, letting search engines notice you sooner and shoppers leave on the first page.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Secure Payment Systems</h3>
            <p>
            We connect Stripe, PayPal, Razorpay, and other secure gateways, turning nervous buyers into loyal fans with fast, safe checkouts that guard their data and your reputation.
            </p>
          </div>
        </section>
      </div>

    </>
  )
}

export default LondonSolution;