"use client"
import React from 'react'
import './actionnn.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Flex = () => {
  return (
    <>

<section className="bighheadless-ssec--2">
  <div className="bighheadless-coon--2">
    <div className="bighheadless-ccon--2-div">
      <div>
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png" alt="" className="audit-img" />
      </div>
      <div className="bighheadless-con--2-div-contentt">

        <h3>Kushel Digi can Power up your eCommerce with BigCommerce Headless.

        </h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="bighheadless-btn-auditCom">
         Talk to Our Experts Now
 <FaArrowRight/>
         </button>
         </Link>
      </div>
      </div>
     </div>
</section>

    </>
  )
}

export default Flex