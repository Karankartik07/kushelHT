"use client"
import React from "react";
import "./menu.css";
import Link from "next/link";
import { FaArrowRightLong } from 'react-icons/fa6';

// import { FaGlobe, FaPen, FaTachometerAlt, FaLayerGroup, FaCogs, FaSync } from "react-icons/fa"; 

const HeadlessCommerce = () => {

  const scrollToForm = () => {
    const formSection = document.getElementById('contacthtmlForm');
    if (formSection) {
      const yOffset = -250; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <section className="tripole1">
      <div className="tripole2">
        <div className="tripole3">
          <div className="victus">
          <p>Expert eCommerce Agency</p>
          </div>
         
          <h1 className="tripole4">Custom Headless Commerce Solutions Built for Performance, Speed & Growth
          </h1>
          <p className="tripole5">
          Kushel Digi Solutions offers advanced Headless Commerce Solutions by delivering fast & fully customizable shopping experiences across any device or channel.


          </p>
          <div className="tripole6">
            <button onClick={scrollToForm} className="tripole7">Move Headless</button>
            
           <Link  href="/contact-us">
           <button className="tripole8">Book a Call  <FaArrowRightLong/></button> 
           </Link> 
          </div>
        </div>


        <div className="victum">
  <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744969140/Group_21_ccac2p.png" alt="Your image" className="your-image-class" />
</div>


        {/* <div className="tripole9">
          <div className="tripole10">
            <FaGlobe className="tripole11" />
            <p className="tripole12">Global Expansion</p>
          </div>
          <div className="tripole10">
            <FaPen className="tripole11" />
            <p className="tripole12">Content Authority</p>
          </div>
          <div className="tripole10">
            <FaTachometerAlt className="tripole11" />
            <p className="tripole12">Improved Performance</p>
          </div>
          <div className="tripole10">
            <FaLayerGroup className="tripole11" />
            <p className="tripole12">Multi-Channel Flexibility</p>
          </div>
          <div className="tripole10">
            <FaSync className="tripole11" />
            <p className="tripole12">Scalability at its Best</p>
          </div>
          <div className="tripole10">
            <FaCogs className="tripole11" />
            <p className="tripole12">Easy Integration</p>
          </div>

        </div> */}
      </div>
    </section>
  );
};

export default HeadlessCommerce;
