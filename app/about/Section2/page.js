"use client"
import React from 'react'
import './Section2.css'
import { FaAddressBook, FaFileSignature, FaHospitalUser, FaSmile, FaUsers } from "react-icons/fa";
const Section2 = () => {
  return (
    <>
      <section className='sec2ndBoost'>
        <div className='boostSection'>
          <p className='boostSecPara'>The Right People. <br/>
           The Right Tech. <span>
              Real Results
            </span> </p>
          <div className='boostSecmaiDiv'>
            <p>Kushel Digi Solutions is your trusted growth engine in this ever-changing  eCommerce landscape. Our dedicated team of experts have been delivering robust, conversion-focused eCommerce development services that are helping thousands of  businesses to scale and succeed online.</p>
            <p className='boostSecUP'>With over 8 years of experience in the ecommerce world, our team leverages platforms like Shopify and BigCommerce to build high-performing stores that are mobile-ready, lightning-fast, and tailored for your target audience. Our mission is simple - to turn your eCommerce vision into a high-converting, scalable reality.</p>
          </div>
        </div>
        <div className='abouMainbox'>
          <div className='aboutCardActive'>
            <div className='aboutCardIcon'>
              <FaHospitalUser />
            </div>
            <div className='aboutCardExac'>
              <p className='aboutCardExacpa'>  8+</p>
              <p className='aboutCardExyear'>years of experience</p>
            </div>
          </div>
          <div className='aboutCardActive'>
            <div className='aboutCardIcon'>
              <FaFileSignature />
            </div>
            <div className='aboutCardExac'>
              <p className='aboutCardExacpa'>  95+</p>
              <p className='aboutCardExyear'>active clients</p>
            </div>
          </div>
          <div className='aboutCardActive'>
            <div className='aboutCardIcon'>
              <FaUsers />
            </div>
            <div className='aboutCardExac'>
              <p className='aboutCardExacpa'>  180+</p>
              <p className='aboutCardExyear'>projects delivered</p>
            </div>
          </div>
          <div className='aboutCardActive'>
            <div className='aboutCardIcon'>
              <FaSmile />
            </div>
            <div className='aboutCardExac'>
              <p className='aboutCardExacpa'>  80+</p>
              <p className='aboutCardExyear'>dedicated employees</p>
            </div>
          </div>
          <div className='aboutCardActive'>
            <div className='aboutCardIcon'>
              <FaAddressBook />
            </div>
            <div className='aboutCardExac'>
              <p className='aboutCardExacpa'>  95%</p>
              <p className='aboutCardExyear'>customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2