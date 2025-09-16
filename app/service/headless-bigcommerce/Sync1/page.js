"use client"
import React from 'react'
import Link from "next/link";
import './sync.css'

function Sync1() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contacthtmlForm');
    if (formSection) {
      const yOffset = -210; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <div>
      <section className="floor" >
        <div className="floor-overlay">
          <div className="floor-container">
            <div className="floor-left">
              <h1>BigCommerce Headless Commerce Solutions</h1>
              <p>
                Take your ecommerce experience to the next level with our BigCommerce Headless Commerce Solutions. By isolating your front-end presentation layer from the BigCommerce back-end, we provide ultra-fast, scalable, and personalized shopping experiences.
              </p>
              <ul className="checklist">
                <li>8+ Years of Experience in eCommerce Industry</li>
                <li>Certified BigCommerce Partner</li>
                <li>Custom front-end development using React.Js</li>
                <li>Fast, responsive, and SEO-optimized ecommerce sites</li>
              </ul>

              <div className="floorr-buttons">
                <button onClick={scrollToForm} className="btnnn white-btn">Talk to a Consultant</button>
                
                <Link href="/contact-us"> 
                <button className="btnnn blue-btn">
                  BOOK A CALL <span className="arrow">→</span>
                </button>
                </Link>
              </div>
            </div>

            <div className="floor-right">
              <div className="image-box">
                <img
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1745609721/BigCommerce-Headless-1_1_i3thzh.png"
                  alt="BigCommerce Headless"
                  className="floor-image"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Sync1
