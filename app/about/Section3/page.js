"use client"
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import './Section3.css'
import Link from 'next/link'
const Section3 = () => {
  return (
    <>
      <section className='prMainficardsec'>
        <div className='prMainficardsec2'>
          <div className='proficardsec'>
            <p>Our job is to turn your online store into your most powerful sales channel as my team is committed to design eCommerce experiences that speak directly to your customers. </p>
          </div>
          <div className='profileLinksec'>
            <div className='profileCiclr'>
              <div className='fileCicgol'>
                <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744607332/shubham-sir-_lovely_-images1_romkzp.png" alt="Profile" />
              </div>
              <div>
                <p className='profileCicline'>Shubham Gupta CEO</p>
                <p className='profileCicline2'> Kushel Digi Solutions</p>
              </div>
            </div>
            <div className='linkdinBcard'>

              <Link href="https://www.linkedin.com/in/shubham-gupta-digital" target='blank'>
                <p>  <FaLinkedin className='falinkIcon' />   Linkedin</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section3