"use client"
import React from 'react'
import './BigBanner4.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Flex = ({page,img}) => {
  return (
    <>

<section className="ssec--2">
  <div className="coon--2">
    <div className="ccon--2-div">
      <div>
        <img loading="lazy" src={img} alt="" className="audit-img" />
      </div>
      <div className="con--2-div-contentt">

        <h3>{page}</h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="btn-auditCom">
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