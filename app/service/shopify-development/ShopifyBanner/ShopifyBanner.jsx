'use client'

import React, { useEffect } from 'react';
import "./ShopifyBanner.css";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import TalkToConsult from '@/app/components/TalkToConsult';

const ShopifyBanner = () => {

  const scrollToFormShopify = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      const yOffset = -120; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className='shopify-new-banner-outer-container'>
        <div className="shopify-new-banner-container">
                <div className="shopify-new-banner-left">
                    <p className='shopify-new-sm-location'>Custom Shopify Solutions</p>
                    <h1 className='shopify-new-banner-heading'>Expert Shopify Development Solutions for eCommerce Growth</h1>
                    <h3 className='shopify-new-banner-sm-heading '>Kushel Digi Solutions has a successful proven track record in offering modern Shopify solutions by building high performance shopify store to grow your business.Our experts are always committed to make sure that your online store is not  just functional but optimized for success.
                    </h3>
                    <div className='flex-bigcommerce-banner-btns'>
                      <TalkToConsult btn='bigcommerce-banner-btn'/>
                        {/* <button onClick={scrollToFormShopify} className='bigcommerce-banner-btn' >Talk to a Consultant</button> */}
                        <Link href="/contact-us"> <button className='bigcommerce-banner-btn big-transparent-btn' >  Book a Call  <FaArrowRightLong /></button></Link>
                    </div>
                    {/* <img className='new-shopify-review-img' loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744009168/reviews-google_bq5kbl.png" alt="reviews" /> */}
                </div>
                <div className="shopify-new-banner-right">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744637848/Shopify_Banner_Design_c0viof.png" loading='lazy' alt="shopify-banner" />
                </div>
        </div>
    </div>
  )
}

export default ShopifyBanner