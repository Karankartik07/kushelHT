"use client"
import React from 'react'
import './Banner4.css'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
const Banner4 = () => {
  return (
    <>
<section className="sec--2">
  <div className="con--2">
    <div className="con--2-div">
      <div>
        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742922711/audit-graphic-2_l7tlcv.png" alt="" className="audit-img" />
      </div>
      <div className="con--2-div-content">
        <h3 className=''>Your Ecommerce Growth Starts Here!</h3>
        <p>
        We believe that your Ecommerce business deserves the best! Whether you're starting fresh or upgrading your store, our experts are just one step away to build solutions that drive growth and maximize sales.
        </p>
      </div>
      <div>
          <Link href="/contact-us">
        <button className="btn-audit">
        Talk to Our Experts Now! <FaArrowRight/> 
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Banner4