"use client"
import React from 'react'
import './action2.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Flex = () => {
  return (
    <>

<section className="hheadless-ssec--2">
  <div className="hheadless-coon--2">
    <div className="hheadless-ccon--2-div">
      <div>
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png" alt="" className="audit-img" />
      </div>
      <div className="hheadless-con--2-div-contentt">

        <h3>Businesses using headless commerce see measurable growth across all key metrics.
        </h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="hheadless-btn-auditCom">
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

export default Flex