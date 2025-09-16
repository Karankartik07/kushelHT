"use client"
import React from 'react'
import './call.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const call = () => {
  return (
    <>

<section className="spot-ssec--2">
  <div className="spot-coon--2">
    <div className="spot-headless-ccon--2-div">
      <div class>
        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744609043/images_21_e6hnmi.png" alt="" className="spot-audit-img" id='border-radius-img' />
      </div>
      <div className="spot-con--2-div-contentt">

        <h3>Our Headless Shopify Experts are Ready to Launch your Dream Store today!</h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="spot-btn-auditCom">
         Let’s Discuss <FaArrowRight/>
         </button>
         </Link>
      </div>
      </div>
     </div>
</section>

    </>
  )
}

export default call