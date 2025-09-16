"use client"
import React from 'react'
import './action.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Flex = () => {
  return (
    <>

<section className="headless-ssec--2">
  <div className="headless-coon--2">
    <div className="headless-ccon--2-div">
      <div>
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png" alt="" className="audit-img" />
      </div>
      <div className="headless-con--2-div-contentt">

        <h3>Our Headless Commerce Experts are ready to launch your dream store today
        !</h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="headless-btn-auditCom">
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